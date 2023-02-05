<template>
  <div class="tools-container">
    <animationBottomToTop v-if="animationBottom === true" />
    <animationTopToBottom v-if="animationTop === true" />
    <div
      class="application_animation"
      v-if="animationBottom === false || animationTop === false"
    >
      <navigation />
      <div class="container">
        <baseDivider class="mx-4" :text="$t('tools')" width="150px" />
        <div class="tools-items-container">
          <img src="@/assets/images/vuejs.png" />
          <img src="@/assets/images/ang.png" />
          <img src="@/assets/images/nuxt.png" />
          <img src="@/assets/images/js.png" />
          <img src="@/assets/images/ts.png" />
          <img src="@/assets/images/java.png" />
          <img src="@/assets/images/node.png" />
          <img src="@/assets/images/postgress.png" />
          <img src="@/assets/images/npm.png" />
          <img src="@/assets/images/rest.png" />
          <img src="@/assets/images/pinia.png" />
          <img src="@/assets/images/vuex.png" />
          <img src="@/assets/images/vuetify.png" />
          <img src="@/assets/images/bootstrap.png" />
          <img src="@/assets/images/pwa.png" />
          <img src="@/assets/images/git.png" />
          <img src="@/assets/images/github.png" />
          <img src="@/assets/images/gitlab.png" />
          <img src="@/assets/images/html.png" />
          <img src="@/assets/images/css.png" />
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-100 mt-5 mb-5"
          dir="ltr"
        >
          <baseBtn
            :name="$t('about')"
            color="primary"
            icon="leftArrow"
            direction="rtl"
            @click="backToHomePage"
          />
          <baseBtn class="mx-2" :name="$t('work')" color="primary" icon="rightArrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import animationBottomToTop from "@/components/animations/animationBottomToTop";
import animationTopToBottom from "@/components/animations/animationTopToBottom";
import navigation from "@/components/navigation";
import baseDivider from "@/components/base/baseDivider";
import baseBtn from "@/components/base/baseBtn";

const animationBottom = ref(false);
const animationTop = ref(false);
const router = useRouter();

const backToHomePage = () => {
    router.push('/')
};

onMounted(() => {
  animationBottom.value = true;
  setTimeout(() => {
    animationBottom.value = false;
  }, 1400);
});
</script>

<style lang="scss" scoped>
.tools-container {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  .tools-items-container {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin: 10px 30px;
    }
  }
}
</style>
