<script setup>
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const router = useRouter();

function reiniciarJogo() {
  appStore.resetarPontos();
  router.push('/padrao-app');
}

function voltarInicio() {
  router.push('/');
}
</script>

<template>
  <main>
    <div class="end-container">
      <h1>Tempo Esgotado!</h1>

      <div class="resultado">
  <div class="pontuacao-final">
    <h2>Sua Pontuação</h2>
    <div class="pontos">{{ appStore.pontos }}</div>
    <p>padrões completados</p>
  </div>

  <div class="estatisticas-finais">
    <div class="estatistica">
      <span class="valor">{{ appStore.totalRespondido }}</span>
      <span class="label">Total respondido</span>
    </div>
    <div class="estatistica">
      <span class="valor acertos">{{ appStore.pontos }}</span>
      <span class="label">Acertos</span>
    </div>
    <div class="estatistica">
      <span class="valor erros">{{ appStore.erros }}</span>
      <span class="label">Erros</span>
    </div>
    <div class="estatistica">
      <span class="valor desempenho">{{ appStore.calcularDesempenho() }}%</span>
      <span class="label">Desempenho</span>
    </div>
  </div>

  <div class="botoes">
    <button @click="reiniciarJogo" class="btn-reiniciar">Jogar Novamente</button>
    <button @click="voltarInicio" class="btn-inicio">Voltar ao Início</button>
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
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.end-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px 20px;
  margin: 20px;
  width: calc(100% - 40px);
  max-width: 400px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

h1 {
  font-size: 2rem;
  color: #3E423F;
  margin-bottom: 30px;
  font-weight: 700;
}

.pontuacao-final {
  margin: 30px 0;
}

.pontuacao-final h2 {
  font-size: 1.3rem;
  color: #5D5D5D;
  margin-bottom: 15px;
  font-weight: 500;
}

.pontos {
  font-size: 3.5rem;
  font-weight: 700;
  color: #53B175;
  margin: 15px 0;
}

.pontuacao-final p {
  font-size: 1.1rem;
  color: #7D7D7D;
}

.botoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
}

.btn-reiniciar, .btn-inicio {
  padding: 16px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.btn-reiniciar {
  background: #53B175;
  color: white;
}

.btn-reiniciar:hover {
  background: #429a63;
  transform: translateY(-2px);
}

.btn-inicio {
  background: #3E423F;
  color: white;
}

.btn-inicio:hover {
  background: #2d302e;
  transform: translateY(-2px);
}

.estatisticas-finais {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 25px 0;
}

.estatistica {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: rgba(83, 177, 117, 0.1);
  border-radius: 12px;
}

.estatistica .valor {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.estatistica .valor.acertos {
  color: #53B175;
}

.estatistica .valor.erros {
  color: #ff6b6b;
}

.estatistica .valor.desempenho {
  color: #667eea;
}

.estatistica .label {
  font-size: 0.9rem;
  color: #7D7D7D;
}

</style>
