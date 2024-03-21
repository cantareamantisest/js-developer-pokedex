const modalElement = document.getElementById("pokemonModal");
const infoElement = document.getElementById("pokemonInfo");
const statElement = document.getElementById("pokemonStat");
const footerElement = document.getElementById("pokemonFooter");

function handleModal(action, id) {
  infoElement.innerHTML = "";
  statElement.innerHTML = "";
  if (id) {
    loadPokemonDetail(action, id);
  } else {
    modalElement.style.display = action ? "block" : "none";
  }
}

function loadPokemonDetail(action, id) {
  pokeApi.getPokemonById(id).then((pokemon) => {
    convertPokemonDetailToLi(pokemon);
    modalElement.style.display = action ? "block" : "none";
  });
}

function convertPokemonDetailToLi(pokemon) {
  infoElement.innerHTML = `
  <div class="pokemon ${pokemon.type}">
    <div class="name">
      <span>${pokemon.name}</span>
    </div>
    <div class="pokemon-image">
      <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
  </div>  
  `;

  statElement.innerHTML = `
  <ul>
    <div>
      <li>
        Hp: ${pokemon.stats[0]} 
        <progress max="100" value="${pokemon.stats[0]}"></progress>
      </li>
    </div>
    <div>
      <li>
        Attack: ${pokemon.stats[1]} 
        <progress max="100" value="${pokemon.stats[1]}"></progress>
      </li>
    </div>
    <div>
      <li>
        Defense: ${pokemon.stats[2]} 
        <progress max="100" value="${pokemon.stats[2]}"></progress>
      </li>
    </div>
    <div>
      <li>
        Sp Atk: ${pokemon.stats[3]} 
        <progress max="100" value="${pokemon.stats[3]}"></progress>
      </li>
    </div>
    <div>
      <li>
        Sp Def: ${pokemon.stats[4]} 
        <progress max="100" value="${pokemon.stats[4]}"></progress>
      </li>
    </div>
    <div>
      <li>
        Speed: ${pokemon.stats[5]} 
        <progress max="100" value="${pokemon.stats[5]}"></progress>
      </li>
    </div>
  </ul>
`;

  footerElement.innerHTML = `<button class="btn-close ${pokemon.type}" onclick="handleModal(0)">Fechar</button>`;
}
