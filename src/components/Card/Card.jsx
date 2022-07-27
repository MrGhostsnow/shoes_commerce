import { useState, useEffect } from 'react';
import './Card.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function Card() {
  const [shoesList, setShoesList] = useState([]);

  const baseURL = "http://localhost:3001/shoes";

  async function findAllShoes() {
    const response = await fetch(baseURL);
    const shoes = await response.json();
    setShoesList(shoes);
  }
  console.log(shoesList)

  useEffect(() => {
    findAllShoes();
  }, []);

  const [current, setCurrent] = useState(0);
  const length = shoesList.length

  const nexSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  console.log(current)

  if(!Array.isArray(shoesList) || length <=0){
    return null
  }

 


  return (
    <div className='container_Card'>
      <FaArrowAltCircleLeft className='left-Arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-Arrow' onClick={nexSlide}/>
            {shoesList.map((shoe, index) => {
              const {id, name, description, image, price} = shoe;
              return(
                <div className={index === current ? 'slide active' : 'slide'}>
                  { index === current && (
                  <div className='card_Shoes'>
                  <div className='item' key={id}>
                    <div className='image'>
                      <img src={image} alt={name}/>
                    </div>
                    <div className='info'>
                      <span className='name'>{name}</span>
                      <span className='description'>{description}</span>
                      <span className='price'>U$ {price}</span>
                    </div>
                  </div>
                  </div>
            )}
                </div>
              )
            })}
              
        
    </div>
  )
}

export default Card