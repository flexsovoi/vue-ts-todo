import { mount } from '@vue/test-utils';
import { setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useTaskStore } from '../../../entities/task/store/TaskStore';
import { SORTING_TYPES } from '../../../entities/task/types';
import { pinia } from '../../../main';
import TaskSorting from '../TaskSorting.vue';

describe('Task Sorting', () => {
  beforeEach(() => {
    setActivePinia(pinia);
  });
  it('renders sorting options correctly', () => {
    const wrapper = mount(TaskSorting);
    const options = wrapper.findAll('option');
    expect(options.length).toBe(Object.values(SORTING_TYPES).length);
    Object.values(SORTING_TYPES).forEach((type, index) => {
      expect(options[index].text()).toBe(type);
    });
  });
  it('updates selectedSort when option is selected', async () => {
    const taskStore = useTaskStore();
    const wrapper = mount(TaskSorting);

    const select = wrapper.find('select');
    await select.setValue(Object.values(SORTING_TYPES)[1]);

    expect(taskStore.selectedSort).toBe(Object.values(SORTING_TYPES)[1]);
  });
});
