var itens = ['Arroz', 'Feijão', 'Farinha', 'Carne','Macarrão', 'Ovos','Frango'];

//basicamente capturou o elemento pelo id -> inseriu algo -> peodu o array e aplicou o função map(que executa algo em cada item do array) -> passou o item como parametro e usou mesmo para aplicar dentro da ul já cm as tag <li>(usou template string) e com o função join transformou em string separando por vazio;
document.getElementById('lista').innerHTML= itens.map(item=>`<li>${item}</li>`).join('');


//consumindo uma API

/**Original
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => console.log(json))
 */


fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json =>
     {document.getElementById('listaAPI').innerHTML=json.map(post=>`<li> ${post.title} </li>`).join('');
    })


    // fonte https://www.youtube.com/watch?v=T5Y7tHZ6ffE
