import BaseForm from "../BaseForm/BaseForm";
import "./FormCreate.css";

function FormCreate(props) {
  return (
    <div className="containerFormCreate">
      <BaseForm
        className="formCreate"
        id="create_name"
        label="Name:"
        type="text"
        onChange={props.onChange}
        name="name"
        value={props.name_value}
        required
      />
      <BaseForm
        className="formCreate"
        id="create_image"
        label="Image:"
        type="text"
        onChange={props.onChange}
        name="image"
        value={props.image_value}
        required
      />
      <BaseForm
        className="formCreate"
        id="create_description"
        label="Description:"
        type="text"
        onChange={props.onChange}
        name="description"
        value={props.description_value}
        required
      />
      <BaseForm
        className="formCreate"
        id="create_price"
        label="Price:"
        type="text"
        onChange={props.onChange}
        name="price"
        value={props.price_value}
        required
      />
      <button type="button" className={props.className} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default FormCreate;
