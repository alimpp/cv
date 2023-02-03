<template>
  <div class="tools-container">
    <animationBottomToTop v-if="animation" />
    <div v-else>
      <navigation />
      <h1>Hello world...!</h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import animationBottomToTop from "@/components/animations/animationBottomToTop";
import navigation from "@/components/navigation";

const animation = ref(false);

onMounted(() => {
  animation.value = true;
  setTimeout(() => {
    animation.value = false;
  }, 1400);
});
</script>

<style lang="scss" scoped>
.tools-container{
    width: 100%;
    height: 100vh;
}
</style>
