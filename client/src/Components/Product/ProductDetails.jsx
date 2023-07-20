import React, { useContext, useState, useEffect } from 'react';
import ProductDetailsCarousal from './ProductDetailsCarousal/ProductDetailsCarousal';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import { Context } from '../../Context/MyContext';
import { IoMdHeartEmpty } from "react-icons/io";
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {

  const { id } = useParams();
  const { fetchSingleProduct } = useContext(Context);
  const [singleProduct, setSingleProduct] = useState({});

  async function getData() {
    let data = await fetchSingleProduct(id);
    setSingleProduct(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='product'>
        <div className='product-details'>
          <div className='left'>
            <ProductDetailsCarousal product={singleProduct} />
          </div>

          <div className='right'>

            <div className='right-product-name'>
             {singleProduct.title}
            </div>
            <div className='right-product-subtitle'>
              {singleProduct.subtitle}
            </div>

            <div className='right-price-div'>
              <div className='right-product-price'>
                $ {singleProduct.price}
              </div>
              <div className='taxes'>
                includes of all taxes
              </div>
              <div className='duties'>
                {`(Also includes all applicable duties)`}
              </div>
            </div>

            <div className='product-size-container'>
              {/* HEADING START */}
              <div className="product-size-heading">
                <div className='select-size'>
                  Select Size
                </div>
                <div className='select-guide'>
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}


              <div className='product-sizes-list'>
                <div className='product-size'>
                  UK 6
                </div>
                <div className='product-size'>
                  UK 7
                </div>
                <div className='product-size'>
                  UK 8
                </div>
                <div className='product-size'>
                  UK 9
                </div>
                <div className='product-size'>
                  UK 5
                </div>
                <div className='product-size'>
                  UK 1
                </div>
                <div className='product-size'>
                  UK 2
                </div>
                <div className='product-size'>
                  UK 3
                </div>
                <div className='product-size'>
                  UK 4
                </div>
              </div>

            </div>

            <div className='buttons'>
              <button className='addtocart-button'>
                Add to Cart
              </button>
              <button className='addtowishlist-button'>
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
            </div>

            <div className='product-description'>
              <div className='product-description-heading'>
                Product Details
              </div>
              <br />
              <div className='product-description-paragraph'>
                 {singleProduct.description}
              </div>
            </div>

          </div>
        </div>
      </div>

      <RelatedProduct />
    </>
  );
}

export default ProductDetails;