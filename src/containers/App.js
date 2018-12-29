import React, { Component } from 'react';
import '../css/App.css';
import SideNav from '../components/SideNav';
import PayPal from './PayPal';
import ProductListing from './ProductListing';

class App extends Component {
	constructor(props){
	  super(props);
	  this.state = {
	  	sideNavOpen: true
    }
	}

	toggleSideNav(){
    let {sideNavOpen} = this.state;
    this.setState({
      sideNavOpen: !sideNavOpen
    });
	}

  render() {
    let {sideNavOpen} = this.state;
    let sideNavClass = sideNavOpen ? "active" : "inActive";
    return (
      <div className="App">
      	<div className="sideNav">
      		{/*<span className="hamBurger" onClick={this.toggleSideNav.bind(this)}>&#9776;</span>*/}
      		{/*<PayPal />*/}
      		{/*<SideNav sideNavClass={sideNavClass} />*/}
          <ProductListing />
      	</div>
      </div>
    );
  }
}

export default App;
