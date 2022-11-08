import React from 'react';
import { useNavigate } from 'react-router-dom';
// import css
import withParams from '../helper/withRouteParams';
import styles from '../style/CardProduct.module.css';
// import image_product from "../assets/image/product/img_drums_food.png";

function CardProduct(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/add-product/${props.id}`);
      }}
      className={`col-md-2 p-4 position-relative text-wrap ${styles['content-product']}`}
    >
      <img className={styles['list-product-image']} src={`${props.image_product}`} alt="image_product" />
      <p className={styles.title}>{props.product_name}</p>
      <p className={styles.size}>{props.size}</p>
      <p className={styles.price}>{props.price}</p>
    </div>
  );
}
export default withParams(CardProduct);
