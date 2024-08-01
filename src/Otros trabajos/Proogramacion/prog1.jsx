import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App(){
  const [products, setProducts] = useState([]);
  const [text, setText] = useState('');

  const search = (event) => {
    setText(event.target.value);
    setProducts(products.filter((product) => product.title.startsWith(text)));
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => {setProducts(json);
    });
  }, []);

  return (
    <>
      <h1>Comenzando React</h1>
      <input onChange={search}></input>
      <ul>
        {products.map((product) => (<li key={product.id} >{product.title}</li>))}
      </ul>
    </>
  );
}

export default App;
