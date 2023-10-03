import {mount, shallowMount} from '@vue/test-utils'
import {describe, expect, it} from "vitest";
import ButtonCheck from "@/components/ButtonCheck.vue";

describe('button test presence', () => {
    it('should be a button', () => {
        const wrapper = shallowMount(ButtonCheck, {
            global: ['router-link', 'router-view']
        });
        expect(wrapper.find("button").exists()).toBeTruthy();
        expect(wrapper.find("button").classes('btn')).toBeTruthy();
        expect(wrapper.find("button").classes('rounded')).toBeTruthy();
        expect(wrapper.find("button").classes('ms-2')).toBeTruthy();
        expect(wrapper.find("button").classes('me-2')).toBeTruthy();
    });
})

describe('icon presence', () => {
    it('should be an icon', () => {
        const wrapper = mount(ButtonCheck);
        expect(wrapper.find("i").exists()).toBeTruthy();
        expect(wrapper.find("i").classes('bi')).toBeTruthy();
        expect(wrapper.find("i").classes('bi-chat-quote')).toBeTruthy();
        expect(wrapper.find("i").classes('h4')).toBeTruthy();
        expect(wrapper.find("i").text()).toContain('VueApp')
    });
})
