// Fetching Data from 3rd party
const App = () => {
  const [data , setdata] = useState([]);
  
  useEffect(()=>{
     const getData = async() =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if(data && data.length) setdata(data);
    }

    getData();
    } , []);

  return (
    <div>
        <ul>
          {data.map((item)=>(
            <li key={Math.random()*100}>
              {item.title} 
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App