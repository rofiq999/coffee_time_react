import React from 'react';
import { useNavigate } from 'react-router-dom';
// import css
import icon_edit from '../assets/img/icon_editpencil.png';
import withParams from '../helper/withRouteParams';
import styles from '../style/CardproductAdmin.module.css';
// import image_product from "../assets/image/product/img_drums_food.png";

function CardProduct(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/editproduct/${props.id}`);
        // navigate(`/productdetailadmin/`);
      }}
      className={`col-md-2 p-4 position-relative text-wrap ${styles['content-product']}`}
    >
      <img className={styles['list-product-image']} src={`${props.image}`} alt="image_product" />
      <p className={styles.title}>{props.product_name}</p>
      <p className={styles.size}>{props.size}</p>
      <p className={styles.price}>{props.price}</p>
      <img className={styles['icon-edit']} src={icon_edit} alt="icon_edit" />
    </div>
  );
}
export default withParams(CardProduct);
