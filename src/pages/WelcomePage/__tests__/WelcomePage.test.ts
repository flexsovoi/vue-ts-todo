import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import WelcomePage from '../WelcomePage.vue';
describe('Welcome Page', () => {
  it('Display tasks button', () => {
    const wrapper = mount(WelcomePage);
    expect(wrapper.text()).toContain('Go to Task');
  });
});
