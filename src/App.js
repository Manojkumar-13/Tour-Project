import React,{useState,useEffect} from 'react';
// Components
import Loading from './components/Loading';
import Tours from './components/Tours';
// API
const url = 'https://course-api.com/react-tours-project/';


const App = () => {
  const [isLoading,setIsLoading] = useState(true);

  const [tours,setTours] = useState([]);

const fetchTours = async()=>{
  setIsLoading(false);
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
    
  }catch (error) {
    setIsLoading(true);
    console.log(error);
  }
};
useEffect(() =>{
  fetchTours();
},[]);


  if(isLoading){
    return (
      <main>
        <Loading />
      </main>
    );
  };
return(
  <main>
    <Tours tours ={tours} />
  </main>
    );
};



export default App