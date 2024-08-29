const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAternativas = document.querySelector('.caixaAlternativas')
const caixaResultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas = [
    {
        enunciado: " 1) Em sua opinião, em que a tecnologia pode ajudar para minimizar os impactos ambientais? ",
        alternativas: [
            {
            texto: "A) Aumentando a produção de dispositivos eletrônicos descartáveis para estimular a economia e gerar empregos.",
            afirmacao: "1) Incorreto, A alternativa (A) está incorreta, pois a produção de dispositivos eletrônicos descartáveis aumenta o consumo de recursos naturais, a geração de lixo eletrônico e a poluição."
            },
            {
            texto:"B) Incentivando o uso de combustíveis fósseis para impulsionar o desenvolvimento industrial e o crescimento econômico.",
            afirmacao: "1) Incorreto, A alternativa (B) também está incorreta, pois os combustíveis fósseis são os principais responsáveis pelas emissões de gases de efeito estufa, que causam o aquecimento global e outros problemas ambientais." 
            },
            {
            texto:"C) Desenvolvendo fontes de energia renováveis, como solar e eólica, e promovendo a eficiência energética em diversos setores.",
            afirmacao: "1) Correto, A alternativa (C) é a correta, pois as energias renováveis são fontes limpas e inesgotáveis de energia, e a eficiência energética reduz o consumo de energia e, consequentemente, as emissões de gases poluentes." 
        }
    ]
    },

    {
        enunciado: "2) Porque devemos preservar o meio ambiente? ",
        alternativas: [
            {
            texto:"A) Para garantir que as futuras gerações tenham acesso ilimitado a recursos naturais, permitindo o consumo desenfreado sem consequências.",
            afirmacao: "2) Incorreto, A alternativa (A) está incorreta, pois os recursos naturais são finitos e o consumo desenfreado leva à sua escassez e à degradação ambiental, comprometendo a vida no planeta."
            },
            {
            texto: "B) Para manter o equilíbrio ecológico e a biodiversidade, garantindo a sobrevivência de todas as espécies, incluindo a nossa.",
            afirmacao: "2) Correto, A alternativa (B) é a correta, pois a preservação do meio ambiente é essencial para manter o equilíbrio dos ecossistemas, garantindo a sobrevivência de todas as espécies, incluindo a humana, que depende dos recursos naturais para sua existência."
            },
            { texto:"C) Para evitar o desenvolvimento de novas tecnologias e fontes de energia limpa, que podem prejudicar a economia baseada em combustíveis fósseis.",
                afirmacao: "2) Incorreto, A alternativa (C) está incorreta, pois o desenvolvimento de tecnologias e fontes de energia limpa é fundamental para reduzir a dependência de combustíveis fósseis e mitigar os impactos ambientais, contribuindo para um futuro sustentável."
            }
        ]
           
    },
    {
        enunciado: "3) Qual a importância de uma educação ambiental?",
        alternativas: [
            {
            texto:"A) Promover o consumo desenfreado de recursos naturais, incentivando o descarte inadequado de lixo e o uso excessivo de energia.",
            afirmacao: "3) Incorreto, A alternativa (A) está incorreta, pois a educação ambiental busca justamente o oposto, promovendo a consciência sobre o consumo responsável, a redução do desperdício e a gestão adequada dos resíduos."
        },
         {   
            texto: "B) Conscientizar e capacitar as pessoas para agirem de forma responsável em relação ao meio ambiente, promovendo a sustentabilidade.",
            afirmacao: "3) Correto, A alternativa (B) é a correta, pois a educação ambiental tem como objetivo principal conscientizar as pessoas sobre os problemas ambientais e fornecer ferramentas para que elas possam agir de forma sustentável, preservando o meio ambiente para as futuras gerações."
         },
         {
          texto: "C) Desencorajar o desenvolvimento de tecnologias limpas e renováveis, priorizando o uso de combustíveis fósseis e outras fontes poluentes.",
          afirmacao: "3) Incorreto, A alternativa (C) também está incorreta, pois a educação ambiental incentiva a busca por soluções inovadoras e sustentáveis, incluindo o desenvolvimento de tecnologias limpas e renováveis, que contribuem para a redução dos impactos ambientais."
         }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual= perguntas[atual];
    caixaPerguntas.textContent= perguntaAtual.enunciado;
    caixaAternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas=document.createElement("button");
            botaoAlternativas.textContent=alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
           caixaAternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " " ;
            atual++;
            mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Seu Resultado!!";
        textoResultado.textContent = historiaFinal;
        caixaAternativas.textContent = "";
    }

    
    mostraPergunta();

    