<script setup>
import { useAppStore } from '@/stores/app';
import router from '@/router';

const appStore = useAppStore();

let segundos = 0;
appStore.sortearPadroes();
appStore.resetarPontos();

function segundo() {
  segundos++;
  if (segundos == 60) { // Voltei para 60 segundos
    clearInterval(intervalo)
    router.push('/end')
  }
  document.getElementById('segundo').innerHTML = segundos.toString().padStart(2, '0')
}

function verificarAcerto(resposta) {
  if (appStore.verificarAcerto(resposta)) {
    appStore.adicionarPonto(); // Agora chama adicionarAcerto
  } else {
    appStore.adicionarErro();
  }
  appStore.sortearPadroes();
}
function sair() {
  clearInterval(intervalo);
  router.push('/')
}

var intervalo = setInterval(function () { segundo() }, 1000)
</script>

<template>
  <main>
    <div class="cron">
      <div>Cronômetro</div>
      <div class="tempo">
        <span id="minuto">00</span><span>:</span><span id="segundo">00</span>
      </div>
    </div>

    <div class="game-container">
      <h2>Complete o Padrão:</h2>

      <div class="padrao-container">
        <div class="sequencia">
          <div v-for="(item, index) in appStore.padraoEscolhido.pattern"
               :key="index"
               class="item-padrao"
               :class="appStore.padraoEscolhido.type">
            {{ item }}
          </div>
          <div class="item-padrao vazio">?</div>
        </div>

        <p class="descricao">{{ appStore.padraoEscolhido.name }}</p>
      </div>

      <div class="alternativas">
        <div v-for="(alternativa, index) in appStore.alternativasSorteadas"
             :key="index"
             class="alternativa"
             @click="verificarAcerto(alternativa)"
             :class="appStore.padraoEscolhido.type">
          {{ alternativa }}
        </div>
      </div>

      <div class="info-container">
  <div class="estatisticas">
    <div class="pontuacao">
      <p class="ponto">Pontuação: {{ appStore.pontos }}</p>
    </div>
    <div class="erros">
      <p class="erro">Erros: {{ appStore.erros }}</p>
    </div>
    <div class="desempenho">
      <p class="percentual">Acertos: {{ appStore.calcularDesempenho() }}%</p>
    </div>
  </div>

  <div class="sair-container">
    <p @click="sair" class="router-link">Sair</p>
  </div>
</div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
}

.cron {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.95);
  margin-bottom: 0;
  font-weight: bold;
  color: #3E423F;
  flex-shrink: 0;
}

.tempo {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
}

.game-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px 20px 0 0;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #3E423F;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

.padrao-container {
  margin-bottom: 20px;
  flex-shrink: 0;
}

.sequencia {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.item-padrao {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.item-padrao.vazio {
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  color: #6c757d;
}

.item-padrao:not(.vazio) {
  background: #53B175;
  color: white;
  border: 2px solid #429a63;
}

.item-padrao.emoji, .alternativa.emoji {
  font-size: 1.5rem;
  background: #ff6b6b;
  border-color: #ff5252;
}

.item-padrao.color, .alternativa.color {
  font-size: 1.5rem;
  background: #4ecdc4;
  border-color: #45b7af;
}

.item-padrao.arrow, .alternativa.arrow {
  font-size: 1.5rem;
  background: #ffe66d;
  border-color: #ffdd47;
  color: #333;
}

.item-padrao.number, .alternativa.number {
  background: #53B175;
  border-color: #429a63;
  color: white;
}

.item-padrao.shape, .alternativa.shape {
  background: #a78bfa;
  border-color: #8b5cf6;
  color: white;
}

.item-padrao.letter, .alternativa.letter {
  background: #f97316;
  border-color: #ea580c;
  color: white;
}

.item-padrao.symbol, .alternativa.symbol {
  background: #ec4899;
  border-color: #db2777;
  color: white;
}

.descricao {
  font-size: 1rem;
  color: #5D5D5D;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

.alternativas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 20px 0;
  flex: 1;
}

.alternativa {
  padding: 15px;
  background: #F2F3F2;
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
}

.alternativa:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  filter: brightness(1.1);
}

.alternativa:active {
  transform: translateY(0);
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  flex-shrink: 0;
}

.pontuacao {
  margin: 0;
}

.ponto {
  font-size: 1.3rem;
  font-weight: bold;
  color: #3E423F;
  margin: 0;
  padding: 10px 15px;
  background: rgba(83, 177, 117, 0.2);
  border-radius: 10px;
}

.sair-container {
  margin: 0;
}

.router-link {
  font-size: 1.1rem;
  padding: 10px 20px;
  background: #3E423F;
  color: #fff9ff;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease;
}

.router-link:hover {
  background: #2d302e;
  transform: translateY(-1px);
}

.estatisticas {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.erros, .desempenho {
  margin: 0;
}

.erro {
  font-size: 1rem;
  font-weight: bold;
  color: #ff6b6b;
  margin: 0;
  padding: 8px 12px;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
}

.percentual {
  font-size: 1rem;
  font-weight: bold;
  color: #667eea;
  margin: 0;
  padding: 8px 12px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  flex-shrink: 0;
  gap: 15px;
}

</style>
