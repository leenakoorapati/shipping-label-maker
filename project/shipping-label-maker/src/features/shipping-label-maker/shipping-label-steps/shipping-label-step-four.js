import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from "@material-ui/core";

class ShippingLabelMakerStepFour extends Component {

  static propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
          data: props.wizardContext.ShippingOption,
          shippingOption: 1,
        }
    }

  handleStepContext = (e) => {
    const { value } = e.target;
    this.setState({ shippingOption: value === 'priority' ? 2 : 1 });
}

    render() {
      const { weight } = this.props.wizardContext;
      const { shippingOption } = this.state;
      let shippingCost = '';
      const shippingRate = 0.40;

      shippingCost = (parseInt(weight) || 0) * shippingRate * (shippingOption === this.state.data.ground ? 1 : 1.5);

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
              <h1>Select the shipping option</h1>
    
             <div className="name-container">
              <p>Shipping Option: </p>

            <select id="shipping" value={shippingOption === 2 ? 'priority' : 'ground'} onChange={(e) => this.handleStepContext(e)}>
            <option value="ground">Ground</option>
            <option value="priority">Priority</option>
            </select>
              </div>

              <div className="name-container">
              <p>Shipping Cost: </p>
             <div>{(shippingCost).toFixed(2)}</div>
              </div>

              <div className="buttons-container"> 
             {<div className="buttons-container-item">
            <div
            role="button"
            onClick={() => this.props.onAction(this.state.shippingOption, 'selectedShippingOption', 3)}

            >
              <Button variant="contained" color="primary" size="medium">
                Previous
              </Button>
            </div>
              </div> }
             { <div className="buttons-container-item">
             <div
             role="button"
              onClick={() => this.props.onAction(this.state.shippingOption, 'selectedShippingOption', 5)}
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

export default ShippingLabelMakerStepFour;
