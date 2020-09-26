// We will add an event listener to a button that will
// fetch from https://lw-rio-quotes.herokuapp.com/api/v1/quotes/milene
// and update the DOM

// 1. Selecionar o elemento
// 2. Adicionar um event listener
// 3. Comportamento -> Fetch - Requisição HTTP a uma API
// 4. Lidar com a resposta - Atualizar o DOM

/////////////
// FUNÇÕES //
/////////////

const fetchAPI = (event) => {
  const url = "https://lw-rio-quotes.herokuapp.com/api/v1/quotes/milene";
  // 3. Comportamento -> Fetch - Requisição HTTP a uma API
  fetch(url)
    .then(response => response.json())
    .then(updateTheDOM);
}

const updateTheDOM = (data) => {
  console.log(data)
  // 4 Atualizar o DOM
  // 4.1 selecionar o elemento que vamos atualizar no DOM
  // const quotePlaceholder = document.querySelector('#quote-placeholder');
  const quotePlaceholder = document.getElementById('quote-placeholder');
  // 4.2 atualizar o conteúdo desse elemento
  // quotePlaceholder.innerText = data['content']
  quotePlaceholder.innerHTML = `
      <small>${data.person}</small>
      <br>
      ${data.content}  
  `
}

///////////////
// ELEMENTOS //
///////////////

// 1. Selecionar o elemento
const btn = document.querySelector('p > a.btn.btn-primary');

///////////////
// EVENTOS //
///////////////

// 2. Adicionar um event listener
btn.addEventListener('click', fetchAPI);

