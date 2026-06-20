const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className=" bg-gray-200 hover:bg-gray-300 px-3 py-px text-[12px]  mr-4 text-center  border border-gray-300 rounded-sm text-gray-800 font-semibold font-serif">
      {title}
    </button>
  );
};

export default Button;