import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';

import './styles.scss';
import Wizard from '../../core/components/wizard';
import ShippingLabel from '../shipping-label';

class ShippingLabelMaker extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          stepPosition: 1,
          shippingOption: {
            ground: 1,
            priority: 2,
          },
         wizardContext: {
            from: {
                name: '',
                street: '',
                city: '',
                state: '',
                zip: '',
            },
            to: {
                name: '',
                street: '',
                city: '',
                state: '',
                zip: '',
            },
            weight: '',
             ShippingOption: {
                ground: 1,
                priority: 2
                },
            },
            isComplete: false,
            selectedShippingOption: '',
        }
      }

    handleUpdateContext = (a, b, stepPosition) => {
        const { wizardContext } = this.state;
        wizardContext[b] = a;
        this.setState({wizardContext, stepPosition});
    }

    handleOnComplete = () => {

     this.setState({isComplete: true});
    }
      
    render() {
        const { stepPosition,wizardContext, isComplete } = this.state;

        return (
            <div>
             <AppBar color="primary" position="static">
              <h1>Shipping Label Maker</h1>
           </AppBar>

            {!isComplete ? <div className="progress-bar-main-container">
              <div className="progress-bar-item-container" style={{ width: `${stepPosition * 20}%` }}></div>
             </div> : null}
           {!isComplete ? <Wizard 
              header={{}}
              steps={stepPosition}
            // steps={steps}
              wizardContext={this.state.wizardContext}
              onComplete={() => this.handleOnComplete()}
              updateStepData={(a, b, c) => this.handleUpdateContext(a, b, c)}
              />
               : <ShippingLabel 
               wizardContext={wizardContext}
      />}
          </div>
        );
    }
}

export default ShippingLabelMaker;
