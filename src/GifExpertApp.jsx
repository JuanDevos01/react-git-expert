import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Tokyu Ghoul']);

const onAddCategory = (NewCategory) => {
    if(categories.includes(NewCategory)) return;
    setCategories([, NewCategory,...categories]);
}

return (
<>

    <h1>GifExpertApp</h1>

    {/* El argumento no importa como se llama en este caso se va llamar value//*/}
    <AddCategory
        onNewCategory={value => onAddCategory(value)}
        />




    {/* El .map ayuda a separar los arreglos uno por uno*/}
    {categories.map((category) => (
    <GifGrid 
    key ={category} 
    category={category}/>
        
        ))
    }

</>
)
}
