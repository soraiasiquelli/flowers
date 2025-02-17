/*const girassol = document.querySelector('.girassol')
const rect = girassol.getBoundingClientRect();

const posX = rect.left
const posY = rect.top

console.log(posX, posY)


document.addEventListener('mousemove', (e) => {

    //Definicao das variaveis
    const flor = document.querySelector('.girassol');
    const petalas = document.querySelectorAll('.petala');

    // Pega as coordenadas do mouse
    //O mouse X vai receber a posicao horizontal da onde esta o mouse
    const mouseX = e.clientX;
    //O mouse Y vai receber a posicao horizontal da onde esta o mouse
    const mouseY = e.clientY;

    // Move a flor de acordo com o mouse
    //Move a esqueda de acordo a posicao horizontal
    //flor.offsetWidth retorna o tamanho da flor

    flor_nova_posicao_X = `${mouseX - flor.offsetWidth/2}px`;


    flor.style.left = flor_nova_posicao_X
    flor.style.top = `${mouseY - flor.offsetHeight / 2}px`;

  
    chamarMensagem()


});

function chamarMensagem(){
    if(flor_nova_posicao_X == posX){
        alert("na mesma posicao")
       }
}

*/

alert("Oii! É algo simples mas é de coração")