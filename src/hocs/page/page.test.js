import React from 'react';
import { shallow } from 'enzyme';
import page from '.';

test('It should render without crashing', () => {
	const Component = () => <div>component</div>;
	const PagedComponent = page('component page')(Component);
	shallow(<PagedComponent />);
});
