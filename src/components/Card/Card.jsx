import { useState, useEffect } from 'react';
import './Card.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Modal from '../Modal/Modal'
import ModalContent from '../ModalContent/ModalContent';
import FormCreate from '../FormCreate/FormCreate';
import FormSearch from '../FormSerch/FormSearch';




function Card() {
  const [shoesList, setShoesList] = useState([]);
  const [modalopen, setModalOpen] = useState(false)
  const [formCreate, setFormCreate] = useState(false)
  const [shoe, setShoe] = useState({
    shoe_id:''
  })

  const baseURL = "http://localhost:3001/shoes";

  async function findAllShoes() {
    const response = await fetch(baseURL);
    const shoes = await response.json();
    setShoesList(shoes);
  }
  
  async function findById(id) {
    const response = await fetch(`${baseURL}/${id}`);
    const shoe = await response.json();
    setShoesList([shoe]);
  }

  useEffect(() => {
    findAllShoes();
  }, []);

  const [current, setCurrent] = useState(0);
  const length = shoesList.length

  const nexSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setModalOpen(false)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setModalOpen(false)
  }


  if(!Array.isArray(shoesList) || length <=0){
    return null
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
 

  const handleChange = (e) => {
    console.log(shoe)
    setShoe({ ...shoe, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    console.log(shoe.shoe_id)
    findById(shoe.shoe_id);
    setShoe({
      shoe_id: "",
    });
  };


  return (
    <div className='container_Card'>
      {formCreate ? (
      <Modal>
        <FormCreate/>
      </Modal>
): null}
      <FormSearch
      onChange={handleChange}
      value={shoe.shoe_id}
      onClick={handleClick}/>
                
                
      <FaArrowAltCircleLeft className='left-Arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-Arrow' onClick={nexSlide}/>
            {shoesList.map((shoe, index) => {
              const {id, name, description, image, price} = shoe;
           
              return(
                <div className={index === current ? 'slide active' : 'slide'}>
                  { index === current && (
                  <div className='card_Shoes' onClick={openModal}>
                  <div className='item' key={id}>
                    <div className='image'>
                      <img src={image} alt={name}/>
                    </div>
                  </div>
                  {modalopen ? (
                  <Modal closeModal={closeModal}>
                    <ModalContent
                    img={image}
                    name={name}
                    description={description}
                    price={price}/>
                  </Modal>
                  ): null }
                  </div>
                  
            )}
                </div>
              )
            })}
              
        
    </div>
  )
}

export default Card