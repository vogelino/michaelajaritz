import React from 'react';
import Parallelepiped from '../Parallelepiped';

const welcome = () => (
	<div>
		<Parallelepiped
			link="http://a-u-m.biz/"
			size={12}
			image="/static/logos/aundm.jpg"
			timeout={100}
		/>
		<Parallelepiped
			link="https://www.symbolon.com/"
			placement="toBottom"
			size={12}
			image="/static/logos/judith-jahn.jpg"
			timeout={200}
			position={[6, 12]}
		/>
		<Parallelepiped
			link="http://www.methodenberatung-jahn.de/"
			placement="toBottom"
			size={12}
			image="/static/logos/symbolon.jpg"
			timeout={300}
		/>
		<Parallelepiped
			placement="toTop"
			size={6}
			timeout={300}
			color="blue"
			position={[6, -12]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={1}
			timeout={500}
			color="blue"
			position={[17, 6]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={2}
			timeout={400}
			color="purple"
			position={[14, 4]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={4}
			timeout={300}
			color="orange"
			position={[12, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={300}
			color="purple"
			position={[16, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={2}
			timeout={200}
			color="blue"
			position={[12, 0]}
		/>
		<Parallelepiped
			placement="toTop"
			size={3}
			timeout={400}
			color="orange"
			position={[12, -12]}
		/>
		<Parallelepiped
			placement="toTop"
			size={1}
			timeout={500}
			color="purple"
			position={[16.5, -15]}
		/>
	</div>
);

welcome.defaultProps = {
};

welcome.propTypes = {
};

export default welcome;

