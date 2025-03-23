
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category, Categories } from '../../../types/categories';


export default function MainContentHead({categories}: Categories) {
    return (<div className="main-head">
            <div className="categories">
                {categories.map((cat: Category)=> {
                    return <div className="category" key={cat.id}>
                    <img src={`/images/common/${cat.image}`} alt="" className="category-img" />
                    <p className="image-name">{cat.link!==undefined?<Link to={cat.link}>{cat.name}</Link>:cat.name}</p>
               </div>
                })}
            </div>
        </div>
    )
}