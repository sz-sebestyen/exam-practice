import "./Menu.scss";

function Menu() {
  return (
    <div
      className={`burger-menu cursor-pointer rounded-full
			w-12 lg:w-24 h-12 lg:h-24 px-3 py-4 lg:px-4 lg:py-6 absolute top-5 right-5 flex flex-col justify-between`}
    >
      <Line />
      <Line />
      <Line />
    </div>
  );
}

function Line() {
  return <div className="burger-menu-line h-0.5 lg:h-1"></div>;
}

export default Menu;
