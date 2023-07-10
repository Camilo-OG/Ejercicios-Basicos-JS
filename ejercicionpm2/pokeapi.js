/* const axios = require('axios'); */

const pokemon = async () => {
  try {
    const pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon')
    
    const pokeLista = pokeApi.data.results;
    const lista = document.querySelector('#lista');

    pokeLista.forEach(pokeName => {

      const card = document.createElement('div')
      card.classList.add('card', 'col-md-3', 'col-lg-3', 'mx-3', 'mt-3');

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')

      const nombre = document.createElement('h5')
      nombre.classList.add('card-title')
      nombre.textContent = pokeName.name

      cardBody.appendChild(nombre)         

      const getImage = async () => {
        const pokeImage = await axios.get(pokeName.url)
        /* console.log(pokeImage.data.sprites.front_default) */

        const img = document.createElement('img');
        img.classList.add('card-img-top');

        img.src = pokeImage.data.sprites.front_default;

        card.appendChild(img)
        
        

        pokeImage.data.types.forEach(tipo => {
          // console.log(tipo.type.name)
          // agregar a un array y agregar un p por cada tipo
          
          const texto = document.createElement('p')
          texto.textContent = 'Tipo : ';
          texto.textContent += tipo.type.name
          texto.classList.add('card-text')

          cardBody.appendChild(texto)
          card.appendChild(cardBody)
          lista.appendChild(card)
          lista.appendChild(document.createElement('br'))
          
        }) 

      }
      getImage()

    });
  } catch (error) {
    console.log(error)
  }
}

pokemon();