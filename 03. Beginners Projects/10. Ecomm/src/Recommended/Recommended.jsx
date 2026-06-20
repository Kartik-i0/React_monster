import Button from "../components/Button";


const Recommended = ({ handleClick }) => {
  return (
    <>
      <div  className="ml-70" >
        <h2 className=" text-gray-800 font-semibold font-serif">Recommended</h2>
        <div className="recommended-flex">
          <Button  onClickHandler={handleClick} value="" title="All Products" />
          <Button  onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;