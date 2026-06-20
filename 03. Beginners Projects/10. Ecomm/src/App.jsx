import { useEffect, useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./sidebar/Sidebar"

// Database
import products from './db/data'
import Category from "./sidebar/Category/Category"
import Card from "./components/Card"

const App = () => { 
  const [selectedCategory , setSelectedCategory] = useState(null);
  const [query ,setQuery] = useState("");

  //-------------Input filter-------------
  const handleInputChange = (e) =>{
    setQuery(e.target.value)
  }

  const filteredItems = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // ----------Radio-Filter-------------------
  const handleChange = (e) =>{
    setSelectedCategory(e.target.value)
  }

  //------Buttons Filter------------
  const handleClick = (e) =>{
    setSelectedCategory(e.target.value)
  }

  function filterData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(({ Category, color, company, newPrice, title }) =>
        Category === selected ||
        color === selected ||
        company === selected ||
        String(newPrice) === selected ||
        title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filterData(products ,selectedCategory ,query)

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation/>
      <Recommended/>
      <Products result={result}/>
    </>
  )
}

export default App
