import React, {Component} from 'react';
import './app.css';
import ShippingLabelMaker from './features/shipping-label-maker/index';

class App extends Component {


  render() {

    return (
      <div>
       
       <ShippingLabelMaker 
       />
        
      </div>
    );
  }
}

export default App;
