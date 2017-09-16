import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../src/theme';
import Parallelepiped from '../src/components/Parallelepiped';

const renderWithProps = (props = {}) => (
	<ThemeProvider>
		<Parallelepiped {...props} />
	</ThemeProvider>
);

storiesOf('Parallelepiped', module)
	.add('Default state', () => renderWithProps())
	.add('To bottom', () => renderWithProps({ placement: 'toBottom' }))
	.add('composition', () => (
		renderWithProps()
	));

