import React from 'react';
import Parallelepiped from '../Parallelepiped';

const Cooperations = () => (
	<div>
		<Parallelepiped
			link="http://a-u-m.biz/"
			size={8}
			image="/static/logos/aundm.jpg"
			timeout={100}
			placement="toBottom"
			position={[10, 0]}
		/>
		<Parallelepiped
			link="http://www.methodenberatung-jahn.de/"
			placement="toBottom"
			size={8}
			image="/static/logos/judith-jahn.jpg"
			timeout={200}
			position={[5, 10]}
		/>
		<Parallelepiped
			link="https://www.symbolon.com/"
			placement="toBottom"
			size={10}
			image="/static/logos/symbolon.jpg"
			timeout={300}
		/>
		<Parallelepiped
			placement="toTop"
			image="/static/images/artworks/TheRehearsalOfTheBalletOnstage.jpg"
			size={15}
			timeout={300}
			color="blue"
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			timeout={500}
			color="blue"
			position={[22, 8]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			timeout={400}
			color="purple"
			position={[13, 10]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={3}
			timeout={300}
			color="orange"
			position={[14, 8]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={300}
			color="blue"
			position={[15, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={2}
			timeout={200}
			color="blue"
			position={[7.5, -15]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={400}
			color="purple"
			position={[9.5, -15]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={500}
			color="orange"
			position={[14, -18]}
		/>
	</div>
);

Cooperations.defaultProps = {
};

Cooperations.propTypes = {
};

export default Cooperations;

