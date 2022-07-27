import { useState, useEffect } from 'react';
import './Card.css'

function Card() {
  const [shoesList, setShoesList] = useState([]);

  const baseURL = "http://localhost:3001/shoes";

  async function findAllShoes() {
    const response = await fetch(baseURL);
    const shoes = await response.json();
    setShoesList([shoes]);
  }
  console.log(shoesList)

  useEffect(() => {
    findAllShoes();
  }, []);


  return (
    <div className='container_Card'>
        <div className='card_Shoes'>
            <p>Here come the shoes</p>
        </div>
    </div>
  )
}

export default Card