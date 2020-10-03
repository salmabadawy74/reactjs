import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Navbar";
import { ProductConsumer } from "../Context";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            company,
            inCart,
            info,
          } = value.detailsProduct;
          return (
            <div className="container p-4">
              {/**title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/**end title */}

              <div className="row">
                <div className="col-10 mx-auto my-3 col-md-6 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto my-3 col-md-6 text-capitalize">
                  <h2> modal : {title}</h2>
                  <h4 className="text-title text-uppercase mt-3 mb-2 text-muted ">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    {" "}
                    <strong>Price :</strong>
                    <span>$</span>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="lead text-muted mb-3">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addtoCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
