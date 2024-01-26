import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Ternary.css";
function ExampleComponent() {
    const[data,setData]=useState(null);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => setData(result));
  return () => {
  };
}, []);
return(
    <div className='ternary'>
        {data ? (<p>Data:{JSON.stringify(data)}</p>):(<p>Loading...</p>)}
    </div>
);
}
export default ExampleComponent;

