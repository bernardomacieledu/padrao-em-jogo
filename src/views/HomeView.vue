<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="content">
      <h1>Padrão em Jogo</h1>
      <p>Complete os padrões antes que o tempo acabe!</p>

      <RouterLink class="router-link" to="/padrao-app">Iniciar Jogo</RouterLink>
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
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  padding: 20px;
  width: 100%;
  max-width: 400px;
}

h1 {
  font-family: 'Arial', sans-serif;
  color: white;
  font-size: 2.5rem;
  padding-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
}

p {
  margin: 0 auto 30px;
  padding-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.5;
}

.router-link {
  font-size: 1.3rem;
  padding: 16px 30px;
  display: inline-block;
  background: #53B175;
  color: #fff9ff;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 200px;
}

.router-link:hover {
  background: #429a63;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

</style>
