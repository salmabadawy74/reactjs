import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Products: [],
    detailsProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    this.setState(() => {
      return { Products: tempProduct };
    });
  };
  getItem = (id) => {
    const product = this.state.Products.find((item) => item.id === id);
    return product;
  };
  hundleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailsProduct: product };
    });
  };
  addtoCart = (id) => {
    let tempProduct = this.state.Products;
    const index = tempProduct.indexOf(this.getItem(id));
    let product = tempProduct[index];
    product.inCart = true;
    const price = product.price;
    product.count = 1;
    product.total = price;
    this.setState(
      () => {
        return { Products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.setProduct();
        this.addtotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempcart = [...this.state.cart];
    const selectedProduct = tempcart.find((item) => item.id === id);
    const index = tempcart.indexOf(selectedProduct);
    const product = tempcart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { cart: [...tempcart] };
      },
      () => {
        this.addtotals();
      }
    );
  };

  decrement = (id) => {
    let tempcart = [...this.state.cart];
    const selectedProduct = tempcart.find((item) => item.id === id);
    const index = tempcart.indexOf(selectedProduct);
    const product = tempcart[index];
    product.count = product.count - 1;
    product.total = product.count * product.price;
    if (product.count === 0) {
      this.remove(id);
    } else {
      this.setState(
        () => {
          return { cart: [...tempcart] };
        },
        () => {
          this.addtotals();
        }
      );
    }
  };
  remove = (id) => {
    console.log("HHHHHHHHHHH");
    let tempProduct = [...this.state.Products];
    let tempcart = [...this.state.cart];
    tempcart = tempcart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    const price = removedProduct.price;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempcart],
          Products: [...tempProduct],
        };
      },
      () => {
        this.addtotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProduct();
        this.addtotals();
      }
    );
  };
  addtotals = () => {
    let subtotal = 0;
    this.state.cart.map((item) => {
      subtotal += item.total;
    });
    const temptax = subtotal * 0.1;
    let tax = parseFloat(temptax.toFixed(2));
    let total = subtotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subtotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          hundleDetail: this.hundleDetail,
          addtoCart: this.addtoCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
