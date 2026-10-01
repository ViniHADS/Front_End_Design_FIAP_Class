const listaDeFrutas = ['Banana','Limão','Kiwi','Morango','Uva'];
console.log(listaDeFrutas[2]);
listaDeFrutas.push('Melão');
listaDeFrutas[0] = 'bergamota';
 
 
document.getElementById('titulo').innerHTML = listaDeFrutas[1];
 
for (let i = 0 ; i < listaDeFrutas.length; i++){
    if(listaDeFrutas[i].length > 0){
        console.log(listaDeFrutas[i]);
    }
}
 
const listaCarros = ['S10','Hilux','Porshe','Puro Sangue', 'Chevette','Jetta'];
listaCarros.sort();
listaCarros.reverse();
 
lista = document.getElementById('mercado');

 for (let i = 0; i < listaDeFrutas.length; i++){

    document.getElementById('mercado').innerHTML += `<li>${listaDeFrutas[i]}</li>`
 }

 