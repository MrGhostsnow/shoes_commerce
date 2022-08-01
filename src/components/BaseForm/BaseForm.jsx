import "./BaseForm.css";

function BaseForm(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className={"formControl"}
        id={props.id}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        required
      />
    </div>
  );
}
export default BaseForm;