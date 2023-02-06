<template>
  <div class="works-container">
    <animationTopToBottom v-if="animationTop === true" />
    <div class="application_animation" v-if="animationTop === false">
      <navigation />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import animationTopToBottom from "@/components/animations/animationTopToBottom";
import navigation from "@/components/navigation";
import baseDivider from "@/components/base/baseDivider";
import baseBtn from "@/components/base/baseBtn";

const animationTop = ref(false);
const router = useRouter();

const backToHomePage = () => {
  router.push("/");
};

onMounted(() => {
  animationTop.value = true;
  setTimeout(() => {
    animationTop.value = false;
  }, 3000);
});
</script>

<style lang="scss" scoped>
.works-container {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
>
