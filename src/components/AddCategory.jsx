import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] =useState('')
   
    //el event es el cambio cuando se presiona un boton
    
    const OnCambio= (event) => {
        setInputValue(event.target.value);
    }


    //Este es para cuando se da enter en el "Formulario"
    const onSubmit=(event)=> {
        event.preventDefault();
        //.trim sirve prara borrar los espacios
        if(inputValue.trim().length <=1) return;
        //setCategories(categories => [...categories, inputValue ])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (

       <form onSubmit={(event) => onSubmit(event)} >
            <input type="text"
             placeholder="Buscar gifs"
                value={inputValue}
                onChange={ OnCambio}/>
        </form>
    
  )


        

}
