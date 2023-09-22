import {mount} from "@vue/test-utils";
import App from '@/App.vue'
import {describe, expect, it} from "vitest";

describe('App.vue', () => {
    it('Renders text: Hello world', () => {
        const wrapper = mount(App);
        expect(wrapper.text()).toBe('Hello World');
    })
})