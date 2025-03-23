
import { useState } from 'react';
import { Globe } from 'react-bootstrap-icons';
import MainContentHead from './main-content-components/MainContentHead';
import MainContentCard from './main-content-components/MainContentCard';
import { Category, Categories } from '../../types/categories';

export default function MainContent() {
    const categories: Array<Category> = [
        {id:1, image:'i1.jpeg', name:'All products', link:'/products/all'},
        {id:2, image:'i2.jpeg', name:'Country side'},
        {id:3, image:'i3.jpeg', name:'Country side'},
        {id:4, image:'i4.jpeg', name:'Country side'},
        {id:5, image:'i5.jpeg', name:'Country side'},
        {id:6, image:'i6.jpeg', name:'Country side'},
        {id:7, image:'i7.jpeg', name:'Country side'},
        {id:8, image:'i8.jpeg', name:'Country side'},
        {id:9, image:'i9.jpeg', name:'Country side'},
        {id:10, image:'i10.jpeg', name:'Country side'},
        {id:11, image:'i11.jpeg', name:'Country side'}];

    return (<div className="main-content">
        <MainContentHead categories={categories} />
        <div className="cards-section">
            {categories.map((prod:any) => {
                return <MainContentCard data={prod} />
            })}
        </div>
    </div>
    )
}