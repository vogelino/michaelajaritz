import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../../theme';
import Parallelepiped from '.';

test('should render without crashing', () => {
	const Comp = () => (
		<ThemeProvider>
			<Parallelepiped />
		</ThemeProvider>
	);
	mount(<Comp />);
});

