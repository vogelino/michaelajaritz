import React from 'react';
import Parallelepiped from '../Parallelepiped';

const Focus = () => (
	<div>
		<Parallelepiped
			size={14}
			image="/static/images/artworks/gallery.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={13}
			image="/static/images/artworks/monalisa.jpg"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={10}
			image="/static/images/artworks/rembrant.jpg"
			timeout={200}
			position={[6.5, 13]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={4}
			timeout={300}
			color="purple"
			position={[16.5, 13]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			timeout={400}
			color="blue"
			position={[18.5, 17]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			timeout={500}
			color="orange"
			position={[22.5, 17]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={3}
			timeout={200}
			color="orange"
			position={[13, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={2}
			timeout={300}
			color="blue"
			position={[14, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={400}
			color="purple"
			position={[17, -2]}
		/>
		<Parallelepiped
			placement="toTop"
			size={6}
			timeout={200}
			color="blue"
			position={[7, -14]}
		/>
		<Parallelepiped
			placement="toTop"
			size={4}
			timeout={300}
			color="purple"
			position={[10, -20]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={300}
			color="orange"
			position={[13, -14]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={500}
			color="blue"
			position={[17.5, -17]}
		/>
	</div>
);

Focus.defaultProps = {
};

Focus.propTypes = {
};

export default Focus;

