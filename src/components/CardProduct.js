// import css
import styles from '../style/CardProduct.module.css';
// import image-product from '../assets/img/fried rice.png';

function CardProduct(props) {
  return (
    <>
      <div class={`py-4 position-relative text-wrap ${styles['content-product']}`}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img class={styles['list-product-image']} src={`http://localhost:7070/${props.image}`} alt="image_product" />
          <div class={styles['label-promo']}></div>
          <p class={styles.title}>{props.product_name}</p>
          <p class={styles.price}>
            <span>IDR</span> {props.price}
          </p>
        </div>
      </div>
    </>
  );
}
export default CardProduct;
