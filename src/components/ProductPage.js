import React, { Component } from 'react';

class ProductPage extends Component {
	constructor(props){
	  super(props);
	  this.state = {
    }
	}

  render() {
    let {productInfo, buttonClick} = this.props;
    return (
      <div className="ProductPage">
        <img src="#" alt="image" />
        <div className="productDetails">
          <h3 className="productTitle">{productInfo.title}</h3>
          <div className="stock">
          {
            productInfo.stock ? <span className='inStock'>InStock</span> : <span className='outOfStock'>OutOfStock</span>
          }
          </div>
          <div className="productPrice">
            <span>{productInfo.currency} </span>
            {productInfo.price}
          </div>
          <button className="buyBox" disabled={!productInfo.stock} onClick={buttonClick}>Buy</button>
          <div className="productDesc">{productInfo.description}</div>
        </div>
      </div>
    );
  }
}

export default ProductPage;