<template>
  <div class="home-page-container">
    <animationTopToBottom v-if="animation" />
    <div v-else>
      <navigation />
      <div class="container application_animation">
        <div class="text-conatiner">
          <span class="size_4xl primary_color">{{ $t("hello") }}</span>
          <p class="size_very_large">{{ $t("name") }}</p>
          <p class="size_very_large">{{ $t("position") }}</p>
          <p class="size_small">{{ $t("info") }}</p>
          <div class="d-flex">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-github px-2"></i>
            <i class="bi bi-instagram"></i>
          </div>
          <baseBtn
            @click="goToToolsPage"
            :name="$t('tools')"
            color="primary"
            icon="rightArrow"
            direction="ltr"
            class="mt-3"
          />
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
const router = useRouter();

onMounted(() => {
  animation.value = true;
  setTimeout(() => {
    animation.value = false;
  }, 2900);
});

const goToToolsPage = () => {
  router.push("/experince-tools");
};
</script>

<style lang="scss" scoped>
.home-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .text-conatiner {
    width: 40%;
    padding-top: 70px;
  }
  @media (max-width: 800px) {
    .text-conatiner {
      width: 100%;
      padding: 90px 15px;
    }
  }
}
</style>
