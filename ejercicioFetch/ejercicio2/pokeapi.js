const pokemonList = document.querySelector('#pokeContenedor')

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(pokemon => {
      
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          
          const card = document.createElement('div');
          card.classList.add('card')
          card.classList.add('mb-3')
          card.style.maxWidth = "540px"

          const cardRow = document.createElement('div')
          cardRow.classList.add('row')
          cardRow.classList.add('g-0')

          const cardImg = document.createElement('div')
          cardImg.classList.add('col-md-4')

          const cardBody = document.createElement('div')
          cardBody.classList.add('col-md-8')

          const cardText = document.createElement('div')
          cardText.classList.add('card-body')
                    
          const image = document.createElement('img');
          image.classList.add('img-fluid')
          image.classList.add('rounded-start')
          image.src = pokemonData.sprites.front_default;
          
          
          const name = document.createElement('h5');
          name.classList.add('card-text')
          name.textContent = pokemon.name;
          
          
          
          cardText.appendChild(name)
          cardBody.appendChild(cardText)
          cardImg.appendChild(image)
          cardRow.appendChild(cardBody)
          cardRow.appendChild(cardImg)
          card.appendChild(cardRow)
          
          
          pokemonList.appendChild(card);
        });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
