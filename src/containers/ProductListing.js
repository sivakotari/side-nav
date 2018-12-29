import React, { Component } from 'react';
import ProductPage from '../components/ProductPage';
import Constants from '../Constants';

class ProductListing extends Component {
	constructor(props){
	  super(props);
	  this.state = {
    }
	}

	buttonClick(){
		
	}

  render() {
    return (
      <div className="productListing">
      <h2>Products Listing Page</h2>
      {
      	Constants.ProductListing && Constants.ProductListing.map(product =>
      		<ProductPage productInfo={product} />
      	)
      }
      </div>
    );
  }
}

export default ProductListing;