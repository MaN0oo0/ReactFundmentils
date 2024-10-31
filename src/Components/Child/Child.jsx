import React, { Component } from "react";
import ProductInfoCard from "../../HelperComponents/ProductInfoCard";

export default class Child extends Component {
  render() {
    let productsList = this.props.products;

    return (
      <>
        <div className="row col-md-9 m-auto">
          {productsList.map((item, index) => {
            return (
              <>
                <ProductInfoCard
                  key={index}
                  product={item}
                  DeleteProduct={this.props.DeleteProduct}
                  UpdateProduct={this.props.UpdateProduct}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}
