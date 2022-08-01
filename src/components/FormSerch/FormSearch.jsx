import BaseForm from "../BaseForm/BaseForm";
import "./FormSearch.css";
import { BsSearch } from "react-icons/bs";

function FormSearch(props) {
  return (
    <div className="container_FormSearch">
      <BaseForm
        id="findById"
        type="text"
        className="form-control"
        onChange={props.onChange}
        name="shoe_id"
        value={props.task_value}
      />
      <button type="button" className="btn_search" onClick={props.onClick}>
        <BsSearch />
      </button>
    </div>
  );
}

export default FormSearch;
