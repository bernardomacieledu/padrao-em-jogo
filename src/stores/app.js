import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const alternativasSorteadas = ref([])
  const padraoEscolhido = ref(null)
  const pontos = ref(0)
  const padroes = ref([
{
      id: 1,
      name: 'Sequência Aritmética',
      type: 'number',
      pattern: [2, 4, 6, 8],
      correct: 10,
      options: [9, 10, 11, 12],
      explanation: '+2 em cada passo'
    },
    {
      id: 2,
      name: 'Sequência de Quadrados',
      type: 'number',
      pattern: [1, 4, 9, 16],
      correct: 25,
      options: [20, 24, 25, 30],
      explanation: 'Números quadrados: 1², 2², 3², 4², 5²'
    },
    {
      id: 3,
      name: 'Progressão Geométrica',
      type: 'number',
      pattern: [2, 6, 18, 54],
      correct: 162,
      options: [108, 142, 162, 186],
      explanation: '×3 em cada passo'
    },
    {
      id: 4,
      name: 'Sequência de Fibonacci',
      type: 'number',
      pattern: [1, 1, 2, 3, 5],
      correct: 8,
      options: [7, 8, 9, 10],
      explanation: 'Soma dos dois anteriores'
    },
    {
      id: 5,
      name: 'Números Primos',
      type: 'number',
      pattern: [2, 3, 5, 7, 11],
      correct: 13,
      options: [12, 13, 14, 15],
      explanation: 'Sequência de números primos'
    },
    {
      id: 6,
      name: 'Cores do Arco-Íris',
      type: 'emoji',
      pattern: ['🔴', '🟠', '🟡', '🟢'],
      correct: '🔵',
      options: ['🟣', '🔵', '🟤', '⚪'],
      explanation: 'Cores do arco-íris: vermelho, laranja, amarelo, verde, azul'
    },
    {
      id: 7,
      name: 'Expressões Faciais',
      type: 'emoji',
      pattern: ['😊', '😂', '🥲', '😎'],
      correct: '🤩',
      options: ['😍', '🤩', '🥳', '😇'],
      explanation: 'Emojis felizes/positivos'
    },
    {
      id: 8,
      name: 'Animais em Sequência',
      type: 'emoji',
      pattern: ['🐶', '🐱', '🐭', '🐹'],
      correct: '🐰',
      options: ['🐻', '🐰', '🦊', '🐼'],
      explanation: 'Animais fofos em ordem'
    },
    {
      id: 9,
      name: 'Comidas Saudáveis',
      type: 'emoji',
      pattern: ['🍎', '🥕', '🥦', '🍓'],
      correct: '🥬',
      options: ['🍇', '🥬', '🍌', '🌽'],
      explanation: 'Frutas e vegetais'
    },
    {
      id: 10,
      name: 'Esportes com Bola',
      type: 'emoji',
      pattern: ['⚽', '🏀', '🏈', '⚾'],
      correct: '🎾',
      options: ['🏐', '🎾', '🏉', '🏓'],
      explanation: 'Esportes que usam bola'
    },
    {
      id: 11,
      name: 'Transportes Terrestres',
      type: 'emoji',
      pattern: ['🚗', '🚌', '🚲', '🚂'],
      correct: '🛵',
      options: ['🚁', '🛵', '🚒', '🚛'],
      explanation: 'Meios de transporte terrestre'
    },
    {
      id: 12,
      name: 'Mãos com Dedos',
      type: 'emoji',
      pattern: ['✋', '✌️', '🤟', '🖖'],
      correct: '🤘',
      options: ['👌', '🤘', '🤙', '👈'],
      explanation: 'Saudações com mãos'
    },
    {
      id: 13,
      name: 'Fases da Lua',
      type: 'emoji',
      pattern: ['🌑', '🌒', '🌓', '🌔'],
      correct: '🌕',
      options: ['🌕', '🌖', '🌗', '🌘'],
      explanation: 'Ciclo lunar crescente'
    },
    {
      id: 14,
      name: 'Instrumentos Musicais',
      type: 'emoji',
      pattern: ['🎸', '🎹', '🥁', '🎺'],
      correct: '🎻',
      options: ['🎷', '🎻', '🪕', '🎼'],
      explanation: 'Instrumentos musicais'
    },
    {
      id: 15,
      name: 'Formas Geométricas',
      type: 'shape',
      pattern: ['▲', '■', '●', '◆'],
      correct: '⭐',
      options: ['★', '⭐', '♥', '♦'],
      explanation: 'Formas geométricas básicas'
    },
    {
      id: 16,
      name: 'Setas Direcionais',
      type: 'arrow',
      pattern: ['⬆️', '➡️', '⬇️', '⬅️'],
      correct: '↗️',
      options: ['↖️', '↗️', '↘️', '↙️'],
      explanation: 'Setas em movimento circular'
    },
    {
      id: 17,
      name: 'Símbolos de Marca',
      type: 'symbol',
      pattern: ['✅', '⭐', '❤️', '🔥'],
      correct: '🎯',
      options: ['💯', '🎯', '✨', '💎'],
      explanation: 'Símbolos populares/positivos'
    },
    {
      id: 18,
      name: 'Alfabeto Pares',
      type: 'letter',
      pattern: ['A', 'C', 'E', 'G'],
      correct: 'I',
      options: ['H', 'I', 'J', 'K'],
      explanation: 'Letras em posições ímpares'
    },
    {
      id: 19,
      name: 'Vogais em Ordem',
      type: 'letter',
      pattern: ['A', 'E', 'I', 'O'],
      correct: 'U',
      options: ['Y', 'U', 'W', 'X'],
      explanation: 'Vogais em ordem alfabética'
    },
    {
      id: 20,
      name: 'Consoantes Sequenciais',
      type: 'letter',
      pattern: ['B', 'C', 'D', 'F'],
      correct: 'G',
      options: ['H', 'G', 'J', 'K'],
      explanation: 'Consoantes em ordem'
    },
    {
      id: 21,
      name: 'Padrão Misto',
      type: 'mixed',
      pattern: ['1️⃣', '2️⃣', '3️⃣', '4️⃣'],
      correct: '5️⃣',
      options: ['5️⃣', '6️⃣', '7️⃣', '8️⃣'],
      explanation: 'Números em emoji'
    },
    {
      id: 22,
      name: 'Estações do Ano',
      type: 'emoji',
      pattern: ['🌱', '☀️', '🍂', '❄️'],
      correct: '🌱',
      options: ['🌸', '🌱', '🌞', '🍁'],
      explanation: 'Ciclo das estações: primavera, verão, outono, inverno'
    },
    {
      id: 23,
      name: 'Horas do Dia',
      type: 'emoji',
      pattern: ['🌅', '☀️', '🌇', '🌙'],
      correct: '🌅',
      options: ['⭐', '🌅', '🌞', '🌆'],
      explanation: 'Manhã, meio-dia, tarde, noite'
    },
    {
      id: 24,
      name: 'Elementos da Natureza',
      type: 'emoji',
      pattern: ['🔥', '💧', '🌪️', '🌍'],
      correct: '⚡',
      options: ['❄️', '⚡', '🌊', '💨'],
      explanation: 'Elementos naturais'
    },
    {
      id: 25,
      name: 'Profissões',
      type: 'emoji',
      pattern: ['👨‍⚕️', '👨‍🏫', '👨‍🔬', '👨‍💼'],
      correct: '👨‍🚀',
      options: ['👨‍🍳', '👨‍🚀', '👨‍✈️', '👨‍🔧'],
      explanation: 'Diferentes profissões'
    }
  ])

  const erros = ref(0)
const totalRespondido = ref(0)

function adicionarErro() {
  erros.value++
  totalRespondido.value++
}

function adicionarAcerto() {
  pontos.value++
  totalRespondido.value++
}

function calcularDesempenho() {
  if (totalRespondido.value === 0) return 0
  return Math.round((pontos.value / totalRespondido.value) * 100)
}

function resetarJogo() {
  pontos.value = 0
  erros.value = 0
  totalRespondido.value = 0
}


  function sortearPadroes() {
    const padroesEmbaralhados = [...padroes.value].sort(() => Math.random() - 0.5)

    const padraoIndex = Math.floor(Math.random() * padroesEmbaralhados.length)
    padraoEscolhido.value = { ...padroesEmbaralhados[padraoIndex] }

    alternativasSorteadas.value = [...padraoEscolhido.value.options].sort(() => Math.random() - 0.5)
  }

  function verificarAcerto(resposta) {
    return resposta === padraoEscolhido.value.correct
  }

  return {
  alternativasSorteadas,
  sortearPadroes,
  padraoEscolhido,
  pontos,
  erros,
  totalRespondido,
  verificarAcerto,
  adicionarPonto: adicionarAcerto,
  adicionarErro,
  calcularDesempenho,
  resetarPontos: resetarJogo
}
})
