import FormCreate from "../FormCreate/FormCreate";
import { ShoesService } from "../service/ShoesService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";

function CreateShoes() {
  async function findAllShoes() {
    const shoes = await ShoesService.getList();}

  const [newShoes, setNewShoes] = useState({
    description: "",
    image: "",
    price: "",
    name: "",
  });

  const navigate = useNavigate();

  async function create(shoes) {
    const newShoes = await ShoesService.create(shoes);
    console.log(newShoes);
  }

  const handleChangeCreate = (e) => {
    setNewShoes({ ...newShoes, [e.target.name]: e.target.value });
    console.log(newShoes);
  };

  const handleCreateShoes = () => {
    const shoes_create = { ...newShoes };
    create(shoes_create);
    navigate("/shoes_commerce");
    findAllShoes()
  };

  const handleBackHome = () => {
    navigate("/shoes_commerce");
  };

  return (
    <div>
      <div className="arrowBack">
        <ImArrowLeft onClick={handleBackHome} />
      </div>
      <FormCreate
        onChange={handleChangeCreate}
        name_value={newShoes.name}
        description_value={newShoes.description}
        image_value={newShoes.image}
        price_value={newShoes.price}
        onClick={handleCreateShoes}
        label="Create"
        className="btnCreate"
      />
    </div>
  );
}

export default CreateShoes;
