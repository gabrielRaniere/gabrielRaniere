const btnHeader = document.querySelector('.a-small-screen');
const LogContainer = document.querySelector('.clicked-btn');


btnHeader.addEventListener('click', (e)=> {
    LogContainer.classList.toggle('display-block');
});
//


const searchChanel = document.querySelector('.search-chanel');
const openChanelBtn = document.querySelector('.btn-open-search')
const exitBtn = document.querySelector('.exit-btn');

openChanelBtn.addEventListener('click', ()=>{
    searchChanel.classList.toggle('display-flex');
})

exitBtn.addEventListener('click', ()=> {
    searchChanel.classList.toggle('display-flex')
})

//

const lista = document.querySelector('.navegacion');
const lis = lista.querySelectorAll('li');

function geraFundo(indice) {
    const fundos = [
        'assets/imgs/imgaem-green.jpg',
        'assets/imgs/imagem-blue.jpg',
        'assets/imgs/imagem-pink.jpg'
    ]
    return fundos[indice];
};

function geraTitle(indice) {
    const titulos = [
        'Live Sports',
        'Breaking News',
        'Biggest events'
    ]
    return titulos[indice];
};

function geraTexto(indice) {
    const textos = [
        'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
        'Keep pace with whats going on locally and globally with trusted opinions from all the top news networks',
        'Spectacular, cant-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.'
    ]
    return textos[indice];
};

lis.forEach((valor, i) => {
    const pag3 = document.querySelector('.pag-3');
    const titulo = document.querySelector('.title-pag3');
    const text = document.querySelector('.texto-pg3');

    valor.addEventListener('click', (e)=> {

        pag3.style.backgroundImage = `url(${geraFundo(i)})`
        titulo.innerHTML = geraTitle(i);
        text.innerHTML = geraTexto(i);

    });
});

//

const plansBtn = document.querySelector('.btn-types');

const planosFree = document.querySelector('.container-planos-preco');
const planosVip = document.querySelector('.container-vip');

let validador = true;

plansBtn.addEventListener('click', function() {
    const copyFree = planosFree;
    const copyVip = planosVip;
    setTimeout(()=>{
        validador = !validador;
        plansBtn.classList.toggle('btn-types-clicked');
        if(validador) {
            planosVip.style.display = 'none';
            planosFree.style.display = 'flex';
        }else {
            planosFree.style.display = 'none';
            planosVip.style.display = 'grid';
        }
    }, 100)
})