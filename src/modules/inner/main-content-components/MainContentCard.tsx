
import { useState } from 'react';
import { HeartFill, StarFill } from 'react-bootstrap-icons';
import { Category } from '../../../types/categories';

export default function MainContentCard({data}: any) {
    return (<div className="main-card">
            <div className="product-image">
                <img src="/images/products/d1.webp" alt="" className="prod" />
                <div className="featured">Featured Product</div>
                <div className="like"><HeartFill /></div>
            </div>
            <div className="card-content">
                <div className="left-part">
                    <h2 className="title">Nandi Hills, India</h2>
                    <p className="description">Mountain and Lake view</p>
                    <p className="arrival">Get it by March, 26th</p>
                    <p className="price">Rs. 2345</p>
                </div>
                <div className="right-part">
                    <div className="star"><StarFill /></div>
                    <div className="rating">4.54</div>
                </div>
            </div>
        </div>
    )
}