import React from 'react';
import style from './product-detail.module.css';

function ProductDetail() {
  return (
    <section className={style.product_details}>
        <div className={style.image_div}>
            <img src="https://loremflickr.com/1000/1000/cat" alt="Cats"/>
        </div>
        <div className={style.details}>
            <h2 className={style.title}>Test Title</h2>
            <h5 className={style.type}>Sweatshirt</h5>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam natus vel, reiciendis optio repellat consequuntur unde id aspernatur sequi in dicta corporis sit aut assumenda ullam mollitia!</p>
            <div className={style.redir_div}>
            <a href="/product" className={style.redirect_button}>Redirect To Page</a>
            </div>
        </div>

    </section>
  )
}

export default ProductDetail