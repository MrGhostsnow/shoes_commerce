import { useState, useEffect } from 'react';
import './Card.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ImArrowLeft } from 'react-icons/im'
import { GoPlus } from 'react-icons/go'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import Modal from '../Modal/Modal'
import ModalContent from '../ModalContent/ModalContent';
import FormCreate from '../FormCreate/FormCreate';
import FormSearch from '../FormSerch/FormSearch';
import BaseButton from '../BaseButton/BaseButton';




function Card() {
  const [shoesList, setShoesList] = useState([]);
  const [modalopen, setModalOpen] = useState(false)
  const [formCreate, setFormCreate] = useState(false)
  const [showEdit, setShowEdit] = useState(false);
  const [shoe, setShoe] = useState({
    shoe_id:''
  })
  const [backHome, setBackHome]= useState(false)
  const [ newShoes, setNewShoes ] = useState({
    description: "",
    image: "",
    price: "",
    name: ""
})
const [updateShoes, setUpdateShoes] = useState({
    id: "",
    description: "",
    image: "",
    price: "",
    name: ""
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
    console.log(shoe)
  }

  useEffect(() => {
    findAllShoes();
  }, [newShoes, updateShoes]);

  async function create(shoe) {
    const response = await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(shoe),
    });
    const newShoe = await response.json();
    setShoesList([newShoe]);
  }

  async function editShoes(id, edited_shoes) {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(edited_shoes),
    });
    const shoes_edited = await response.json();
    setShoesList({ ...shoes_edited });
  }
  async function deleteShoes(id) {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const shoes_deleted = await response.json();
    setShoesList({ ...shoes_deleted });
  }

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
  
  const openModalCreate = () => {
    setFormCreate(true)
  }


  const closeModalCreate = () => {
    setFormCreate(false)
  }

  const closeModalEdit = () => {
    setShowEdit(false)
    window.location.reload(true);
  }



  const handleBackHome = (e) => {
    findAllShoes()
    setBackHome(false)
  }
 

  const handleChange = (e) => {
    setShoe({ ...shoe, [e.target.name]: e.target.value });
    console.log(shoe)
  };

  const handleClick = (e) => {
    findById(shoe.shoe_id);
    setBackHome(true)
    // setShoe({
    //   shoe_id: "",
    // });
  };

  const handleChangeCreate = (e) => {
    setNewShoes({ ...newShoes, [e.target.name]: e.target.value });
    console.log(newShoes)
  };

  const handleCreateShoes = () => {
    const shoes_create = { ...newShoes }; 
    create(shoes_create); 
    setNewShoes({
      description: "",
      image: "",
      price: "",
      name: "",
    }); 
  };

  const handleClickEdit = (e) => {
    setShowEdit(true);
    setModalOpen(false)
    setUpdateShoes({ ...updateShoes, id: e.target.id });
    findById(e.target.id);
  };

  const handleChangeEdit = (e) => {
    console.log(updateShoes);
    setUpdateShoes({ ...updateShoes, [e.target.name]: e.target.value });
  };

  const handleEditShoes = () => {
    const shoes_edited = { ...updateShoes };
    const id = shoes_edited.id;

    delete shoes_edited.id;
    setShowEdit(false);
    editShoes(id, shoes_edited);
    window.location.reload(true);
  };

  const handleDeleteShoes = (e) => {
    console.log(e.target.id)
    deleteShoes(e.target.id);
    // window.location.reload(true);
  };




  return (
    <div className='container_Card'>
      {formCreate ? (
      <Modal closeModal={closeModalCreate}>
        <FormCreate
        onChange={handleChangeCreate}
        name_value={newShoes.name}
        description_value={newShoes.description}
        image_value={newShoes.image}
        price_value={newShoes.price}
        onClick={handleCreateShoes}
        label='Create'
        className='btnCreate'/>
      </Modal>
): null}
      {showEdit ? (
      <Modal closeModal={closeModalEdit}>
        <FormCreate
        onChange={handleChangeEdit}
        name_value={updateShoes.name}
        description_value={updateShoes.description}
        image_value={updateShoes.image}
        price_value={updateShoes.price}
        onClick={handleEditShoes}
        label='Edit'
        className='btnCreate'/>
      </Modal>
      ): null}
      <div className='btn_Modal_Create' onClick={openModalCreate}>
        <GoPlus />
        </div>
      <FormSearch
      onChange={handleChange}
      value={shoe.shoe_id}
      onClick={handleClick}/>

      {backHome ? (
        <div className='arrow_Back'>
          <ImArrowLeft
          onClick={handleBackHome}/>
          </div>
      ): null}
                
                
      <FaArrowAltCircleLeft className='left-Arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-Arrow' onClick={nexSlide}/>
            {shoesList.map((shoe, index) => {
              const {id, name, description, image, price} = shoe;
           
              return(
                <div className={index === current ? 'slide active' : 'slide'}>
                  { index === current && (
                  <div className='card_Shoes' onClick={openModal}>
                  <div className='item' key={id}>
                    <span>{shoe.id}</span>
                    <div className='image'>
                      <img src={image} alt={name}/>
                    </div>
                  </div>
                  {modalopen ? (
                  <Modal closeModal={closeModal}>
                    <div className='containerBtn'>
                        <BaseButton
                        id={shoe.id}
                        type='button'
                        className='btnEdit'
                        label={<AiFillEdit/>}
                        onClick={handleClickEdit}/>
                        <BaseButton
                        id={shoe.id}
                        type='button'
                        className='btnDelete'
                        label={<AiFillDelete/>}
                        onClick={handleDeleteShoes}/>
                    </div>
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