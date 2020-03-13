import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
  } from "@material-ui/core";

class ShippingLabelMakerStepFive extends Component {


  static propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
          // data: props.wizardContext.weight,
        }
    }

  handleStepContext = (e) => {
    const { value } = e.target;
    this.setState({ data: value })
}

    render() {
      const { wizardContext } = this.props;
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
              <h1 style={{display: 'flex', justifyContent: 'center'}}>Confirm the details:</h1>
    
             <div className="confirm-container">
              <p>From: </p>
              <div className="confirm-container-item">
              <div>{wizardContext.from.name}</div>
              <div>{wizardContext.from.street}</div>
               <div>{wizardContext.from.city}</div>
               <div>{wizardContext.from.state}</div>
               <div>{wizardContext.from.zip}</div>
              </div>
              </div>

              <div className="confirm-container">
              <p>To: </p>
              <div className="confirm-container-item">
               <div> {wizardContext.to.name} </div>
               <div> {wizardContext.to.street} </div>
               <div>{wizardContext.to.city}</div>
               <div>{wizardContext.to.state}</div>
               <div>{wizardContext.to.zip}</div>
              </div>
              </div>

              <div className="confirm-container">
              <p>Weight: </p>
              <div>
               {wizardContext.weight}
              </div>
              </div>

              <div className="confirm-container">
              <p>Shipping Option: </p>
              <div>
               {wizardContext.selectedShippingOption === 2 ? 'priority' : 'ground'}
              </div>
              </div>

              <div className="buttons-container"> 
             {<div className="buttons-container-item">
            <div
            role="button"
            onClick={() => this.props.onAction('', 'confirm', 4)}
            >
              <Button variant="contained" color="primary" size="medium">
                Previous
              </Button>
            </div>
              </div> }

              {<div className="buttons-container-item">
            <div
            role="button"
            onClick={() => this.props.onAction('', 'confirm', 5)}
            >
              <Button variant="contained" color="primary" size="medium">
                Confirm
              </Button>
            </div>
              </div> }
            
              </div>
            </form>
          </div>
        );
      }
}

export default ShippingLabelMakerStepFive;
