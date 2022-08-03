import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";
import smartphone from './smartphone.jpg'
import book from './book.jpg'
import speaker from './speaker.jpg'

const Products = ({products}) => {
  
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

// Getting products from the state

const mapStateToProps =(state)=>{
  return {
    products: state.products
}
}

// giving props to this components

export default connect(mapStateToProps)(Products)