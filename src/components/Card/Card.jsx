import { useState, useEffect } from "react";
import "./Card.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ImArrowLeft } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import FormSearch from "../FormSerch/FormSearch";
import { ShoesService } from "../service/ShoesService";
import { Link } from "react-router-dom";

function Card() {
  const [shoesList, setShoesList] = useState([]);
  const [shoe, setShoe] = useState({
    shoe_id: "",
  });
  const [backHome, setBackHome] = useState(false);

  async function findAllShoes() {
    const shoes = await ShoesService.getList();
    setShoesList([...shoes]);
  }

  async function findById(id) {
    const shoe = await ShoesService.getById(id);
    setShoesList([shoe]);
    console.log(shoe);
  }

  useEffect(() => {
    findAllShoes();
  }, []);

  const [current, setCurrent] = useState(0);
  const length = shoesList.length;

  const nexSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(shoesList) || length <= 0) {
    return null;
  }

  const handleBackHome = (e) => {
    findAllShoes();
    setBackHome(false);
  };

  const handleChange = (e) => {
    setShoe({ ...shoe, [e.target.name]: e.target.value });
    console.log(shoe);
  };

  const handleClick = (e) => {
    console.log(shoe.shoe_id);
    findById(shoe.shoe_id);
    setBackHome(true);
    // setShoe({
    //   shoe_id: "",
    // });
  };

  return (
    <div className="containerCard">
      <Link className="btnModalCreate" to={"/create"}>
        <GoPlus />
      </Link>
      <FormSearch
        onChange={handleChange}
        value={shoe.shoe_id}
        onClick={handleClick}
      />

      {backHome ? (
        <div className="arrowBack">
          <ImArrowLeft onClick={handleBackHome} />
        </div>
      ) : null}

      <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />

      {shoesList.map((shoe, index) => {
        const { id, name, image } = shoe;

        return (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <Link to={`/details/${id}`}>
                <div className="cardShoes">
                  <div className="item" key={id}>
                    <span>{id}</span>
                    <div className="image">
                      <img src={image} alt={name} />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="rightArrow" onClick={nexSlide} />
    </div>
  );
}

export default Card;
