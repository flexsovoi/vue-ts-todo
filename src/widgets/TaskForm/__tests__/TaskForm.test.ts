import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useTaskStore } from '../../../entities/task/store/TaskStore';
import TaskForm from '../TaskForm.vue';

describe('Task Form', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('task form work correctly', async () => {
    const store = useTaskStore();
    store.setCreateMode(true);
    const wrapper = mount(TaskForm);
    const taskForm = wrapper.findComponent(TaskForm);
    expect(taskForm.exists()).toBe(true);

    await wrapper.find('input[name="taskName"]').setValue('Test Task');
    await wrapper.find('select[name="taskLevel"]').setValue('HIGH');

    await wrapper.find('form').trigger('submit.prevent');
    expect(store.isCreateMode).toEqual(false);
    expect(!!store.tasks.find((task) => task.title === 'Test Task')).toEqual(
      true,
    );
  });
});
