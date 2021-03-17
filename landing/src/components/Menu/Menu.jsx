function Menu() {
  return (
    <div className="bg-black rounded-full w-12 h-12 px-3 py-4 absolute top-5 right-5 flex flex-col justify-between">
      <Line />
      <Line />
      <Line />
    </div>
  );
}

function Line() {
  return <div className="bg-white h-0.5"></div>;
}

export default Menu;
