<template>
  <div
    class="app"
    :class="{
      application_dark_mode_theme: watchTheme === 'dark',
      application_light_mode_theme: watchTheme === 'light',
      application_animation: watchTheme === 'light',
      application_animation: watchTheme === 'dark',
      rtl_design: $i18n.locale === 'fa',
    }"
  >
  <navigation/>
    <h1>{{ $t("message") }}</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
import navigation from '@/components/navigation'
import { applicationTheme } from "@/services/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>

</style>
