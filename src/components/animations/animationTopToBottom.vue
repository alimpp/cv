<template>
  <div class="animationTopToBottom"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.animationTopToBottom {
  width: 100;
  height: 0px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  animation: 3s animationTopToBottom;
}
@keyframes animationTopToBottom {
    0%{height: 0;}
    50%{height: 100vh;}
    100%{height: 0px;}
}
</style>
