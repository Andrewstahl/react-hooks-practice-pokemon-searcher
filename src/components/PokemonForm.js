import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [newPokemonForm, setNewPokemonForm] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name.includes("Url")) {
      const newName = name.replace("Url", "")
      setNewPokemonForm({
        ...newPokemonForm,
        "sprites" : {
          [newName]: value
        }
      })
      
    } else {
      setNewPokemonForm({
        ...newPokemonForm,
        [name]: value
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPokemonData = newPokemonForm;

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonData)
    })
    
    setNewPokemonForm({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    })

    onAddPokemon(newPokemonData)
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={(e) => handleChange(e)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={(e) => handleChange(e)} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => handleChange(e)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
