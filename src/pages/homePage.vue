<template>
  <div class="home-page-container">
    <animationTopToBottom v-if="animation" />
    <div v-else>
      <navigation />
      <div class="container application_animation">
        <div class="text-conatiner mt-5 pt-4">
          <span class="size_4xl primary_color">{{ $t("hello") }}</span>
          <p class="size_very_large">{{ $t("name") }}</p>
          <p class="size_very_large">{{ $t("position") }}</p>
          <p class="size_small">{{ $t("info") }}</p>
          <baseBtn @click="tools" :name="$t('tools')" color="primary" icon="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import baseBtn from "@/components/base/baseBtn";
import navigation from "@/components/navigation";
import animationTopToBottom from "@/components/animations/animationTopToBottom";

const animation = ref(false);
const router = useRouter()

onMounted(() => {
  animation.value = true;
  setTimeout(() => {
    animation.value = false;
  }, 2900);
});

const tools = () => {
    animation.value = true
    setTimeout(() => {
        animation.value = false
        router.push('/experince-tools')
    } , 1600)
}
</script>

<style lang="scss" scoped>
.home-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .text-conatiner {
    width: 40%;
  }
  @media (max-width: 800px) {
    .text-conatiner {
      width: 100%;
      padding: 0px 15px;
    }
  }
}
</style>
