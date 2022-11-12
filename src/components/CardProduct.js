import React from 'react';
import { useNavigate } from 'react-router-dom';
import withParams from '../helper/withRouteParams';
// import css
import styles from '../style/CardProduct.module.css';
// import image-product from '../assets/img/fried rice.png';

function CardProduct(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/productdetail/${props.id}`);
        }}
        class={`py-4 position-relative text-wrap ${styles['content-product']}`}
      >
        <div className={`${styles['card-product']}d-flex flex-column align-items-center justify-content-center`}>
          <img class={styles['list-product-image']} src={`${props.image}`} alt="image_product" />
          <div class={styles['label-promo']}></div>
          <p class={styles.title}>{props.product_name}</p>
          <p class={styles.size}>{props.size}</p>
          <p class={styles.price}>{props.price}</p>
        </div>
      </div>
    </>
  );
}
export default withParams(CardProduct);
