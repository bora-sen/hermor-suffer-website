import React from 'react'
import localstyle from './productlist.module.css'
import dataset from '../../dataset.json'

function ProductList() {
    console.log(dataset.products);
    const products = dataset.products;
  return (
    <section>
        <h2 className={localstyle.products_title}>New Products</h2>
        <div className={localstyle.products_container}>
            <div className={localstyle.products}>
                {products.map(product => {
                    return (
                        <div className={localstyle.prod_card}>
                            <a href={product.red_url}>
                                <div className={localstyle.info}>
                                    <h4 className={localstyle.prod_title}>{product.title}</h4>
                                    <h5 className={localstyle.prod_code}>{product.code}</h5>
                                </div>
                                <div className={localstyle.prod_card_img}>
                                    <img src={product.img_url} alt="Product" />
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProductList