import React from 'react'
import localstyle from './productlist.module.css'

function ProductList() {
    const products = [
        {
            id:0,
            title:"Test Title",
            code:"25254",
            img_url:"https://loremflickr.com/1000/1000/5",
            red_url:"https://instagram.com/senkisibora"
        },
        {
            id:0,
            title:"Test Title",
            code:"25254",
            img_url:"https://loremflickr.com/1000/1000/5",
            red_url:"https://instagram.com/senkisibora"
        },
        {
            id:0,
            title:"Test Title",
            code:"25254",
            img_url:"https://loremflickr.com/1000/1000/5",
            red_url:"https://instagram.com/senkisibora"
        },
        {
            id:0,
            title:"Test Title 2",
            code:"313131",
            img_url:"https://loremflickr.com/1000/1000/6",
            red_url:"https://instagram.com/photobybora"
        }
    ];
  return (
    <section>
        <h2 className={localstyle.products_title}>New Products</h2>
        <div className={localstyle.products_container}>
            <div className={localstyle.products}>
                {products.map(product => {
                    return (
                        <div className={localstyle.prod_card}>
                            <div className={localstyle.info}>
                                <h4 className={localstyle.prod_title}>{product.title}</h4>
                                <h5 className={localstyle.prod_code}>{product.code}</h5>
                            </div>
                            <div className={localstyle.prod_card_img}>
                                <img src={product.img_url} alt="Image" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProductList