function Button(props) {
  return (
    <button
      className="py-3 px-14 bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-full text-white focus:outline-none focus:ring focus:ring-black"
      type="button"
    >
      {props.children}
    </button>
  );
}

export default Button;
