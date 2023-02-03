<template>
  <div class="navigation-container">
    <div class="logo-container">
      <img class="application_animation" src="@/assets/images/logo.png" alt="Logo" />
    </div>
    <div class="items-container">
      <languageSwitcher class="mx-2" />
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import themeSwitcher from "@/components/themeSwitcher";
import languageSwitcher from "@/components/languageSwitcher";
</script>

<style lang="scss" scoped>
.navigation-container {
  width: 100%;
  height: 100px;
  display: flex;
  direction: ltr;
  .logo-container {
    width: 150px;
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
    width: 88%;
    height: 100px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}
</style>
