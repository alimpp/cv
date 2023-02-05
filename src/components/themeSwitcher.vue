<template>
  <div class="theme-switcher">
    <img
      @click="changeTheme"
      src="@/assets/images/moon.png"
      v-if="watchTheme === 'light'"
      alt="moon"
      class="application_pointer application_animation"
    />
    <img
      @click="changeTheme"
      src="@/assets/images/sunn.png"
      v-if="watchTheme === 'dark'"
      alt="sun"
      class="application_pointer application_animation"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
const changeTheme = () => {
  theme.changeThemeStatus();
};
</script>

<style lang="scss" scoped>
.theme-switcher{
    img{
        width: 80px;
        height: 80px;
    }
}
</style>
