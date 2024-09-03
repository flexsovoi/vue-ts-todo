<template>
  <input class="my-input" :value="modelValue" @input="updateInput" />
</template>

<script setup lang="ts">
defineProps();
defineModel();
const emit = defineEmits();
function updateInput(event: any) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped lang="scss">
.my-input {
  border: 1px solid aliceblue;
  border-radius: 5px;
}
</style>
