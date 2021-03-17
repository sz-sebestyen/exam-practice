function Button(props) {
  return (
    <button className="py-3 px-14 bg-black rounded-full text-white">
      {props.children}
    </button>
  );
}

export default Button;
