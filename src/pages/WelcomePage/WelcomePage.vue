<template>
  <div class="welcome-page">
    <h2>Welcome to my pet project!</h2>
    <p class="description">
      In this project, I have implemented several features, including:
    </p>
    <ul class="feature-list">
      <li class="feature-item">Sorting: Organize tasks by priority.</li>
      <li class="feature-item">
        Routing: Navigate between different sections.
      </li>
      <li class="feature-item">
        Animations: Add visual interest and engagement.
      </li>
      <li class="feature-item">Store: Save your progress and other data.</li>
    </ul>
    <RouterLink class="navigate-button" to="/tasks">Go to Tasks</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.welcome-page {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 40px;
  text-align: center;

  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
  }

  .description {
    font-size: 1.2em;
    margin-bottom: 20px;
    animation: slideIn 1s ease-in-out;
  }

  .feature-list {
    list-style-type: none;
    padding: 0;

    .feature-item {
      font-size: 1.1em;
      margin: 10px 0;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      transition:
        transform 0.3s,
        background 0.3s;

      &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .navigate-button {
    display: flex;
    width: 150px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 1.2em;
    color: #fff;
    background-color: #ff7f50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff4500;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
