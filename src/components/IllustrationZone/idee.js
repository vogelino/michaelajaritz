import React from 'react';
import Parallelepiped from '../Parallelepiped';

const Idea = () => (
	<div>
		<Parallelepiped
			size={17}
			image="/static/images/portraits/welcomeMain.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={10}
			image="/static/images/artworks/makespace.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={13}
			image="/static/images/artworks/possible.jpg"
			timeout={200}
			position={[5, 10]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={3}
			timeout={300}
			color="purple"
			position={[13.5, 7]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			timeout={400}
			color="orange"
			position={[18, 10]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			timeout={500}
			color="orange"
			position={[20.5, 7]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={7}
			timeout={200}
			color="blue"
			position={[10, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={2}
			timeout={300}
			color="orange"
			position={[17, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={400}
			color="purple"
			position={[20, -2]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={200}
			color="orange"
			position={[8.5, -17]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={300}
			color="purple"
			position={[10, -20]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={300}
			color="blue"
			position={[11.5, -17]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={500}
			color="orange"
			position={[13, -20]}
		/>
	</div>
);

export default Idea;

