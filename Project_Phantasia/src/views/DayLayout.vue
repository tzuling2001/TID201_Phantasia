<!-- Layout.vue (共用佈局組件) -->
<template>
  <div class="dayLayout">
    <div class="bgd-wrapper"></div>
    <!-- 頁面共用部分 -->
    <header>
      <nav>
        <button @click="goToHome">Home</button>
        <button @click="goToAbout">About</button>
      </nav>
    </header>
    <!-- 子頁面顯示區域 -->
    <div class="wrapper">
      <main>
        <router-view></router-view>
      </main>
      <!-- 頁面共用尾部 -->
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToAbout() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>
