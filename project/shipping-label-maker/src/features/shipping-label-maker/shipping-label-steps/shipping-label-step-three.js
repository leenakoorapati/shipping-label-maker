import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    TextField,
  } from "@material-ui/core";

// import '../../../shipping-label-maker/styles.scss';

class ShippingLabelMakerStepThree extends Component {

  static propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
          data: props.wizardContext.weight,
        }
    }

  handleStepContext = (e) => {
    const { value } = e.target;
    this.setState({ data: value })
}

    render() {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 20,
              padding: 20
            }}
          >
            <form style={{ width: "50%" }}>
              <h1>Enter the Weight</h1>
    
             <div className="name-container">
              <p>Weight: </p>
              <div>
              <TextField id="outlined-basic" value={this.state.data} label="weight" variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>

              <div className="buttons-container"> 
             {<div className="buttons-container-item">
            <div
            role="button"
            onClick={() => this.props.onAction(this.state.data, 'weight', 2)}

            >
              <Button variant="contained" color="primary" size="medium">
                Previous
              </Button>
            </div>
              </div> }
             { <div className="buttons-container-item">
             <div
             role="button"
              onClick={() => this.props.onAction(this.state.data, 'weight', 4)}
             >
              <Button variant="contained" color="primary" size="medium">
                Next
              </Button>
             </div>
              </div>}
              </div>
            </form>
          </div>
        );
      }
}

export default ShippingLabelMakerStepThree;
