<template>
  <div class="task-checkbox" @click="toggleCheck">
    <img
      v-if="isChecked"
      src="/assets/icons/check.svg"
      alt="Checked"
      class="checkbox-icon"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  checked?: boolean;
  clickFunction?: () => void;
}

const props = defineProps<Props>();
const emit = defineEmits(['checked']);

const isChecked = computed({
  get: () => props.checked,
  set: (value) => emit('checked', value),
});

const toggleCheck = () => {
  isChecked.value = !isChecked.value;
  if (props.clickFunction) {
    props.clickFunction();
  }
};
</script>

<style scoped lang="scss">
.task-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 2px solid aliceblue;

  .checkbox-icon {
    width: 22px;
    height: 22px;
  }
}
</style>
