function BaseButton(props) {
  return (
    <button
      value={props.value}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default BaseButton;
