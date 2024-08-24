<template>
  <div class="hello">
    <h1 class="text-red">{{ msg }}</h1>
  </div>
</template>

<script setup>
  const props = defineProps({
    msg: String
  });
</script> 

<style scoped lang="scss">

</style>