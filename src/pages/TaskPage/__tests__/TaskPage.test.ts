import { mount } from '@vue/test-utils';
import { setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { router } from '../../../app/router/router';
import { pinia } from '../../../main';
import TaskList from '../../../widgets/TaskList/TaskList.vue';
import TaskSorting from '../../../widgets/TaskSorting/TaskSorting.vue';
import TaskPage from '../TaskPage.vue';
describe('Task Page', () => {
  beforeEach(() => {
    setActivePinia(pinia);
  });
  it('renders the title and TaskSorting component', () => {
    const wrapper = mount(TaskPage, {
      global: {
        plugins: [router],
      },
    });

    const title = wrapper.find('h2.subtitle');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Tasks');

    const taskSorting = wrapper.findComponent(TaskSorting);
    expect(taskSorting.exists()).toBe(true);
  });

  it('renders TaskList component', () => {
    const wrapper = mount(TaskPage, {
      global: {
        plugins: [router],
      },
    });

    const taskList = wrapper.findComponent(TaskList);
    expect(taskList.exists()).toBe(true);
  });
});
