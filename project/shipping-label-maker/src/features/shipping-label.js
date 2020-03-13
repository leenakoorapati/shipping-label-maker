import React, {Component} from 'react';

class ShippingLabel extends Component {

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
  
              </form>
            </div>
          );
        }
}

export default ShippingLabel;
