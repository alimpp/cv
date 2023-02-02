<template>
  <div class="navigation-container">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <div class="items-container">
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import themeSwitcher from "@/components/themeSwitcher";
</script>

<style lang="scss" scoped>
.navigation-container {
  width: 100%;
  height: 100px;
  display: flex;
  direction: ltr;
  .logo-container {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      width: 140px;
      height: 90px;
    }
  }
  .items-container {
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
