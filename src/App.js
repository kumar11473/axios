import app from './App.css';

// import axios from "axios"; 
import axios from './axios'; 

import { useContext, useEffect,useState } from "react";

const API ='https://jsonplaceholder.typicode.com';
 

function App() {

  const [myData, setMyData] = useState([]);
  const [isError,setIsError] = useState("");


  // using promise (use of ' .then ' multiple times and ' .catch ')

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res)=>{
  //     setMyData(res.data);
  //     // console.log(res.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  //   .catch((error)=>{
  //      console.log(error);
  //     setIsError(error.message);
  //   })
  // },[]);


 /*
  // using async await
    const getApiData = async(url)=>{

      try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // create a seperte API variable and pass it as parameter 'url'
        const response = await axios.get(url);
        
        setMyData(response.data);
      // console.log(response);  
      } catch (error) {
        setIsError(error.message);
      }
      
    }
    useEffect(()=>{
      // getApiData();
      
      getApiData(`${API}/posts`);
      // no need to write complete url again and again if we use API variable and async/await method
      // getApiData(`${API}/users`);
      // getApiData(`${API}/comments`);

    },[]);

*/

    // using separate file for axios for creating baseURL
  const getApiData = async ()=>{

      try {
        const response = await axios.get('/posts');
        setMyData(response.data);
      } catch (error) {
        // console.log(error.message);
        setIsError(error.message);
      }
    
  }

    useEffect(()=>{
      getApiData();
    })

  return (
    <>
          <h1>Data fetch using Axios </h1>
          {isError !== "" && (<h2>{isError}</h2>)}

          <div className='grid'>
            {
              myData.slice(1,20).map((post)=>{
                const {body,id,title} = post; // destructuring 
                return <div className="card" key={id}>
                  <h1>{title.slice(0,15).toUpperCase()}</h1>
                  <p>{body}</p>
                </div>
              })
            }
        </div>
    </>
  );
}

export default App;
