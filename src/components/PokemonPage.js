import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(pokemonData => setPokemonList(pokemonData))
  }, [])

  function handleSearch(search) {
    setSearchInput(search)
  }

  function handleAddPokemon(newPokemonData) {
    setPokemonList([...pokemonList, newPokemonData])
  }
  
  const filteredList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemonList={filteredList}/>
    </Container>
  );
}

export default PokemonPage;
