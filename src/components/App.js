import React, { useState , useEffect } from "react";

function App(){
  const[image, setImage] = useState(null)
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => 
        setImage(data.message)
        )
    },[]
  )
  if(image === null){
    return <p>Loading...</p>
  }
return(
  <img src={image} alt="A Random Dog" />
)
}

export default App