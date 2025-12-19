<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div class="p-12">
    <h1 class="font-bold">
      {{ $t('current', { lang: locale }) }}
    </h1>
  </div>
</template>

<style scoped>

</style>
