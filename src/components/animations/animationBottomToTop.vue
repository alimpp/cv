<template>
  <div
    class="animationTopToBottom light_background"
  >
    <img src="@/assets/images/logo.png" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.animationTopToBottom {
  width: 100;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1.5s animationTopToBottom;
  overflow: hidden;
  img {
    width: 300px;
    height: 300px;
  }
}
@keyframes animationTopToBottom {
  0% {
    height: 100vh;
  }
  100% {
    height: 0px;
  }
}
</style>
