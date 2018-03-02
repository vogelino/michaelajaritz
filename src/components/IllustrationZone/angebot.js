import React from 'react';
import Parallelepiped from '../Parallelepiped';

const Offer = () => (
	<div>
		<Parallelepiped
			size={14}
			image="/static/images/artworks/atelier.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={14}
			image="/static/images/artworks/renoir.jpg"
			timeout={100}
		/>
		<Parallelepiped
			size={6}
			position={[7, -14]}
			timeout={200}
		/>
		<Parallelepiped
			size={3}
			position={[13, -14]}
			color="orange"
			timeout={200}
		/>
		<Parallelepiped
			size={1}
			position={[17.5, -17]}
			color="blue"
			timeout={200}
		/>
		<Parallelepiped
			size={2}
			position={[14, 0]}
			color="purple"
			timeout={200}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			position={[14, 0]}
			color="blue"
			timeout={300}
		/>
		<Parallelepiped
			placement="toBottom"
			size={3}
			position={[7, 14]}
			color="orange"
			timeout={200}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1.5}
			position={[8.5, 17]}
			color="purple"
			timeout={300}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			position={[11.5, 17]}
			color="blue"
			timeout={300}
		/>
	</div>
);

export default Offer;

