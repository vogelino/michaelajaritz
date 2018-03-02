import React from 'react';
import { shallow, mount } from 'enzyme';
import withResize, { getCoreLayout } from '.';

test('It should return a function', () => {
	const ComponentWithResize = withResize(() => <div />);
	expect(typeof ComponentWithResize).toBe('function');
});

test('It should return a function', () => {
	const ComponentWithResize = getCoreLayout(() => <div />);
	const wrapper = shallow(<ComponentWithResize />);
	const inst = wrapper.instance();
	inst.componentDidMount();
	expect(inst.optimizedResize.getCallbacks().length).toBe(1);
});

test('It should return a default setWindowSize function', () => {
	const ComponentWithResize = getCoreLayout(() => <div />);
	const wrapper = shallow(<ComponentWithResize />);
	const { windowWidth, windowHeight } = wrapper.prop('setWindowSize')();
	expect(windowHeight).toBe(0);
	expect(windowWidth).toBe(0);
});

test('It should call setWindow size on window resize', () => {
	const ComponentWithResize = getCoreLayout(() => <div />);
	const setWindowSize = jest.fn();
	const wrapper = mount(<ComponentWithResize setWindowSize={setWindowSize} />);
	const inst = wrapper.instance();
	inst.optimizedResize.add = jest.fn();
	inst.componentDidMount();
	expect(setWindowSize).toHaveBeenCalledTimes(2);
	expect(inst.optimizedResize.add).toHaveBeenCalledTimes(1);
});

