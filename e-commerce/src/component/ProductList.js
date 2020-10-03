import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title name="our" title="products" />
            </div>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.Products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
