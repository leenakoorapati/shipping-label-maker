import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    TextField,
  } from "@material-ui/core";

// import '../../../shipping-label-maker/styles.scss';

class ShippingLabelMakerStepTwo extends Component {

   static propTypes = {
        wizardContext: PropTypes.object.isRequired,
        onAction: PropTypes.func.isRequired,
        };

        constructor(props) {
            super(props);
            this.state = {
              data: props.wizardContext.to,
            }
        }

    handleStepContext = (e) => {
        const { name, value } = e.target;
        const { data } = this.state;
        data[name] = value;
        this.setState({ data })
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
              <h1>Enter the receiver's address</h1>
    
             <div className="name-container">
              <p>Name: </p>
              <div>
              <TextField id="outlined-basic" value={this.state.data.name} name="name" label="name" variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>

              <div className="name-container">
              <p>Street: </p>
              <div>
              <TextField id="outlined-basic" value={this.state.data.street} name="street" label="street"  variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>

             <div className="details-container">
              <div className="name-container">
              <p>City: </p>
              <div>
              <TextField id="outlined-basic" value={this.state.data.city} name="city" label="city"  variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>

              <div className="name-container">
              <p>State: </p>
              <div>
              <TextField id="outlined-basic" value={this.state.data.state} name ="state" label="state"  variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>

              <div className="name-container">
              <p>Zip: </p>
              <div>
              <TextField id="outlined-basic"  value={this.state.data.zip} name="zip" label="zipcode"  variant="outlined" onChange={(e) => this.handleStepContext(e)} />
              </div>
              </div>
             </div>

             <div className="buttons-container"> 
             {<div className="buttons-container-item">
            <div
            role="button"
            onClick={() => this.props.onAction(this.state.data, 'to', 1)}

            >
              <Button variant="contained" color="primary" size="medium">
                Previous
              </Button>
            </div>
              </div> }
             { <div className="buttons-container-item">
             <div
             role="button"
              onClick={() => this.props.onAction(this.state.data, 'to', 3)}
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

export default ShippingLabelMakerStepTwo;
