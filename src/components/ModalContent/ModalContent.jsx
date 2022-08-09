import "./ModalContent.css";

function ModalContent(props) {
  return (
    <div className="modalContent">
      <img src={props.img} alt={props.name} />
      <div className="textShoes">
        <span className="name">{props.name}</span>
        <span className="description">{props.description}</span>
        <div className="containerPrice">
          <span className="price">{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
