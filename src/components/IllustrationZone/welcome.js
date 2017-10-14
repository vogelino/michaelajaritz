import React from 'react';
import Parallelepiped from '../Parallelepiped';

const welcome = () => (
	<div>
		<Parallelepiped
			size={20}
			image="/static/images/welcomeMain.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={10}
			image="/static/images/welcomeSecondary.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={4}
			position={[10, 0]}
			timeout={200}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			position={[14, 0]}
			color="orange"
			timeout={300}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			position={[16, 4]}
			color="blue"
			timeout={400}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			position={[2, 8]}
			color="purple"
			timeout={200}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			position={[5, 10]}
			color="blue"
			timeout={200}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			position={[8, 12]}
			color="orange"
			timeout={300}
		/>
	</div>
);

welcome.defaultProps = {
};

welcome.propTypes = {
};

export default welcome;

