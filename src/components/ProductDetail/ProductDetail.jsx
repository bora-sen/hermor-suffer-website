import React from 'react';
import style from './product-detail.module.css';

function ProductDetail() {
  let database = require('../../dataset.json');
  let product = database.products[0];
  console.table(product);
  console.log(this.params);

  return (
    <section className={style.product_details}>
        <div className={style.image_div}>
            <img src={product.img_front_url} alt="Cats"/>
        </div>
        <div className={style.details}>
            <h2 className={style.title}>{product.title}</h2>
            <h5 className={style.type}>Sweatshirt</h5>
            <p className={style.description}>{product.description}</p>
            <div className={style.redir_div}>
            <a href={product.red_url} className={style.redirect_button}>Redirect To Page</a>
            </div>
        </div>

    </section>
  )
}

export default ProductDetail