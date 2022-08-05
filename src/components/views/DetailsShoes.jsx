import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import BaseButton from "../BaseButton/BaseButton";
import FormCreate from "../FormCreate/FormCreate";
import { ShoesService } from "../service/ShoesService"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function DetailsShoes() {
    const [shoes, setShoes] = useState({})
    const closeModalEdit = () => {
        setShowEdit(false);
      };

    const params = useParams()
    const {id} = params

    // console.log("id",params)


    async function findById(id) {
        const shoe = await ShoesService.getById(id);
        setShoes({...shoe});
      }

      useEffect(()=>{
        findById(id)
    }, [])

    const navigate = useNavigate()

    const [showEdit, setShowEdit] = useState(false);

    const [updateShoes, setUpdateShoes] = useState({
        id: "",
        description: "",
        image: "",
        price: "",
        name: "",
      });

      const handleClickEdit = () => {
        setShowEdit(true);
        setUpdateShoes({ ...updateShoes });
        console.log(updateShoes)
        // findById(id);
      };

      const handleChangeEdit = (e) => {
        // console.log(updateShoes);
        setUpdateShoes({ ...updateShoes, [e.target.name]: e.target.value });
      };

      async function editShoes(id, edited_shoes) {
        const shoes_edited = await ShoesService.updateById(id, edited_shoes);
      }
      

      const handleEditShoes = () => {
        const shoes_edited = { ...updateShoes };
        const id = shoes_edited.id;
        delete shoes_edited.id;
        setShowEdit(false);
        editShoes(shoes.id, shoes_edited);
        console.log(updateShoes);
        navigate('/')
      };

      async function deleteShoes(id) {
        const shoes_deleted = await ShoesService.deleteById(id);
        // setShoesList({ ...shoes_deleted });
      }

      const handleDeleteShoes = (id) => {
        // console.log(id);
        deleteShoes(id);
        navigate('/');
      };

      const handleBackHome = () => {
        navigate('/')
      }

  return (
    <div>
        
        <Modal closeModal={handleBackHome}>
                    <div className="containerBtn">
                      <BaseButton
                        value={id}
                        type="button"
                        className="btnOpenEdit"
                        label={<AiFillEdit />}
                        onClick={() => handleClickEdit(id)}
                      />
                      <BaseButton
                        value={id}
                        type="button"
                        className="btnDelete"
                        label={<AiFillDelete />}
                        onClick={() => handleDeleteShoes(id)}
                      />
                    </div>
                    <ModalContent
                      img={shoes.image}
                      name={shoes.name}
                      description={shoes.description}
                      price={shoes.price}
                    />
                  </Modal>
                  {showEdit ? (
        <Modal closeModal={closeModalEdit}>
          <FormCreate
            onChange={handleChangeEdit}
            name_value={updateShoes.name}
            description_value={updateShoes.description}
            image_value={updateShoes.image}
            price_value={updateShoes.price}
            onClick={handleEditShoes}
            label="Edit"
            className="btnEdit"
          />
        </Modal>
      ) : null}
    </div>

  )
}

export default DetailsShoes