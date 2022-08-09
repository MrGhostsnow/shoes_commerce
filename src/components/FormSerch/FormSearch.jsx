import BaseForm from "../BaseForm/BaseForm";
import "./FormSearch.css";
import { BsSearch } from "react-icons/bs";

function FormSearch(props) {
  return (
    <div className="containerFormSearch">
      <BaseForm
        id="findById"
        type="text"
        className="formControl"
        onChange={props.onChange}
        name="shoe_id"
        value={props.task_value}
      />
      <button type="button" className="btnSearch" onClick={props.onClick}>
        <BsSearch />
      </button>
    </div>
  );
}

export default FormSearch;
