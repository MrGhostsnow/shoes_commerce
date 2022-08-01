function BaseButton(props) {
  return (
    <button
      id={props.id}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default BaseButton;
