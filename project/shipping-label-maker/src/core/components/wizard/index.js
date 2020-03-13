import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../features/shipping-label-maker/styles.scss';
import ShippingLabelMakerStepOne from '../../../features/shipping-label-maker/shipping-label-steps/shipping-label-step-one.js';
import ShippingLabelMakerStepTwo from '../../../features/shipping-label-maker/shipping-label-steps/shipping-label-step-two';
import ShippingLabelMakerStepThree from '../../../features/shipping-label-maker/shipping-label-steps/shipping-label-step-three.js';
import ShippingLabelMakerStepFour from '../../../features/shipping-label-maker/shipping-label-steps/shipping-label-step-four';
import ShippingLabelMakerStepFive from '../../../features/shipping-label-maker/shipping-label-steps/shipping-label-step-five';

class Wizard extends Component {

  static propTypes = {
        header: PropTypes.func.isRequired,
        steps: PropTypes.array.isRequired,
        wizardContext: PropTypes.object.isRequired,
        onComplete: PropTypes.func.isRequired,
        updateStepData: PropTypes.func.isRequired,
        };
    
     handleStepData = (stepData, type, step) => {
      this.props.updateStepData(stepData, type, step);

      if(step === 5 && type === 'confirm') {
      this.props.onComplete();
    }
     }  
     
     generateStep = () => {
         const { wizardContext } = this.props;
        let stepComp = <></>
        // eslint-disable-next-line default-case
        switch(this.props.steps) {
            case 1:
                stepComp =  <ShippingLabelMakerStepOne onAction={(u, v, w) => this.handleStepData(u, v, w)} wizardContext={wizardContext} />
            break;
            case 2:
                stepComp =  <ShippingLabelMakerStepTwo onAction={(u, v, w) => this.handleStepData(u, v, w)} wizardContext={wizardContext} />
            break;
            case 3:
                stepComp =  <ShippingLabelMakerStepThree onAction={(u, v, w) => this.handleStepData(u, v, w)} wizardContext={wizardContext}/>
            break;
            case 4:
                stepComp =  <ShippingLabelMakerStepFour onAction={(u, v, w) => this.handleStepData(u, v, w)} wizardContext={wizardContext}/>
            break;
            case 5:
                stepComp =  <ShippingLabelMakerStepFive onAction={(u, v, w) => this.handleStepData(u, v, w)} wizardContext={wizardContext}/>
            break;
     }
     return stepComp;
    }

    render() {
        return (
            <div>
                {this.generateStep()}
            </div>
        );
    }
}

export default Wizard;
