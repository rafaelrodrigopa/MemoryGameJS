const container = document.getElementById('container');


// var acertos = 0;
// var erros = 0;
// var pontuaçãoFinal = 0;

// var aproveitamento = 0;
// var Segundos = 0;


var openCart = 0;
var selectedCards = []; //Guarda a informação dos cartões que foram virados
var selectedCardsName = []; // Guarda o nome escrito em cada cartão
var qtdclick = 0; // Guarda a quantidade de cartões que foram virados por rodada/padrão 2

//Opções para cartas. Nesse caso tem-se 
const optionsCarts = [
    'javascript',
    'html',
    'css',
    'jquery',
    'materialize',
    'bootstrap',
    'react',
    'reactnative',
    'node',
    'deno',
    'spring',
    'sequelize',
    'mongoose',
    'typescript',
    'vue',
    'angular',
    'php',
    'ecmascript',

];

//Realiza o carregamento dos cartões do jogo
window.onload = function() {
        const selectionsCarts = this.distrib();

        for (var i = 0; i < 36; i++) {

            const carts = this.document.createElement('div');

            carts.className = 'cart' + i;
            carts.style.width = '100px';
            carts.style.height = '100px';
            carts.style.backgroundColor = 'gainsboro';
            carts.style.float = 'left';
            carts.style.margin = '2px';

            //Esconde o texto para o jogador não burlar
            carts.style.fontSize = 0;


            if (i < 18) {
                carts.innerText = selectionsCarts[i];
            } else {
                carts.innerText = selectionsCarts[i - 18];
            }

            carts.addEventListener('click', () => {

                //Verifica a quantidade cartas levantadas. Permitido no máximo duas viradas
                //após isso acontece o reset das cartas viradas.
                if (this.qtdclick == 2) {
                    this.qtdclick = 0;
                    this.qtdclick++;
                } else {
                    this.qtdclick++;
                }


                //Verifica se o mesmo cartão foi selecionado duas vezes seguidas
                if (this.selectedCards[this.selectedCards.length - 1] == carts.className) {
                    this.alert('clicou na mesma');
                } else {

                    //verifica se o jogador errou ou acertou a jogada
                    if (this.selectedCardsName.length == 1) {
                        if (this.selectedCardsName[0] == carts.innerText) {
                            this.console.log('agora sim')
                        } else {
                            this.console.log('ta errado')
                        }
                    } else {
                        if ((this.selectedCardsName.length + 1) % 2 == 0) {
                            if ((this.selectedCardsName[this.selectedCardsName.length - 1] == carts.innerText)) {
                                carts.style.backgroundColor = 'red';
                            } else {
                                this.console.log('ta errado')
                            }
                        }
                    }
                    this.selectedCardsName.push(carts.innerText);
                    //this.console.log(this.selectedCardsName)

                    this.selectedCards.push(carts.className);
                    //this.console.log(this.selectedCards)
                }
            });

            //Inclui
            container.appendChild(carts);
        }
    }
    /**
     * Realiza a distruição dos cartões de modo aleatório
     */
function distrib() {
    const newOptionsCarts = [];
    var sorted = [];
    var limited = optionsCarts.length;

    for (var i = 0; i < limited; i++) {
        const shuffle = Math.floor(Math.random() * (optionsCarts.length + 0) - 0);

        if (sorted.indexOf(shuffle) == -1) {
            newOptionsCarts.push(optionsCarts[shuffle])
            sorted.push(shuffle);
        } else {
            limited++;
        }
    }
    return newOptionsCarts;
}