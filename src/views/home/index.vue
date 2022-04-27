<script setup>
  import AsideMenu from './components/asideMemu.vue';
  
</script>

<template>
  <div class="layout">
    <aside-menu />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scope>
  .layout {
    height: 100%;
    display: flex;
    box-sizing: border-box;
    .main {
      flex: 1;
      overflow: hidden;
    }
  }

</style>