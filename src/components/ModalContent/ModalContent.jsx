import "./ModalContent.css";

function ModalContent(props) {
  return (
    <div className="modal_Content">
      <img src={props.img} alt={props.name} />
      <div className="text_Shoes">
        <span className="name">{props.name}</span>
        <span className="description">{props.description}</span>
        <div className="container_Price">
          <span className="price">{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
