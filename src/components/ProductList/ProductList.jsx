import React from 'react'
import localstyle from './productlist.module.css'
import dataset from '../../dataset.json'
import Reveal from 'react-reveal/Fade'

function ProductList() {
    const products = dataset.products;

  return (
    <section>
        <h2 className={localstyle.products_title}>New Products</h2>
        <div className={localstyle.products_container}>
            <div className={localstyle.products}>
                {products.map(product => {
                    return (
                        <Reveal bottom>
                        <div className={localstyle.prod_card} key={product.id}>
                            <a href={product.red_url}>
                                {/* 
                                <div className={localstyle.info}>
                                    <h4 className={localstyle.prod_title}>{product.title}</h4>
                                    <h5 className={localstyle.prod_code}>{product.code}</h5>
                                </div>
                                */}
                                <div className={localstyle.prod_card_img} >
                                    <img src={product.img_front_url} alt="Product Front" className={localstyle.front_img} />

                                </div>
                            </a>
                        </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProductList