import React, { useState } from 'react'

function DuckForm({ duckFormOpen, addDuck }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  
    function handleNameChange(event) {
      setName(event.target.value)
    }
  
    function handleImageChange(event) {
      setImage(event.target.value)
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      addDuck({name: name, img_url: image, likes: 0})

    }

    // with one object
    // function DuckForm({ duckFormOpen, addDuck }) {
    //   const [duckData, setDuckData] = useState({
    //     name: '',
    //     image: ''
    //   });
    
    //   function handleChange(event) {
    //     const { name, value } = event.target;
    //     setDuckData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   }
    
    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     addDuck({ name: duckData.name, img_url: duckData.image, likes: 0 });
    //   }
    


  return (  
    <div>
      {duckFormOpen ? (
        <form  onSubmit={handleSubmit} id="new-duck-form">
          <label htmlFor="duck-name-input">New Duck Name:</label>
          <input onChange={handleNameChange} type="text" name="duck-name-input" />

          <label htmlFor="duck-image-input">New Duck Image URL:</label>
          <input onChange={handleImageChange}type="text" name="duck-image-input" />

          <input type="submit" value="Create Duck" />
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DuckForm;

