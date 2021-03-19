import "./Button.scss";

function Button(props) {
  return (
    <button className="my-6 text-xl font-bold" type="button">
      {props.children}
    </button>
  );
}

export default Button;
