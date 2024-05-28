import { FC } from 'react'
import Parallelepiped from '../Parallelepiped'

const Cooperations: FC = () => (
	<div>
		<Parallelepiped
			size={8}
			timeout={100}
			placement="toBottom"
			position={[10, 0]}
			link="https://www.sabinestock.com/"
			image="logos/transparent/sabine-stock.png"
		/>
		<Parallelepiped
			link="http://www.methodenberatung-jahn.de/"
			placement="toBottom"
			size={8}
			image="/logos/transparent/judith-jahn.png"
			timeout={200}
			position={[5, 10]}
		/>
		<Parallelepiped
			link="https://www.symbolon.com/"
			placement="toBottom"
			size={10}
			image="/logos/transparent/symbolon.png"
			timeout={300}
		/>
		<Parallelepiped
			placement="toTop"
			image="/images/artworks/transparent/TheRehearsalOfTheBalletOnstage.png"
			size={15}
			timeout={300}
			color="blue"
		/>
		<Parallelepiped placement="toBottom" size={1} timeout={500} color="blue" position={[22, 8]} />
		<Parallelepiped
			placement="toBottom"
			size={2}
			timeout={400}
			color="purple"
			position={[13, 10]}
		/>
		<Parallelepiped
			placement="toBottom"
			size={6}
			timeout={300}
			color="blue"
			position={[14, 8]}
			link="https://www.linkedin.com/in/harald-stock-39910241/"
			image="/logos/transparent/harald-stock.png"
		/>
		<Parallelepiped
			placement="toTop"
			size={6}
			timeout={300}
			color="purple"
			position={[15, 0]}
			link="https://change-collective.de/"
			image="/logos/transparent/change-collective.png"
		/>
		<Parallelepiped placement="toTop" size={2} timeout={200} color="blue" position={[7.5, -15]} />
		<Parallelepiped placement="toTop" size={3} timeout={400} color="purple" position={[9.5, -15]} />
		<Parallelepiped placement="toTop" size={1} timeout={500} color="orange" position={[14, -18]} />
	</div>
)

export default Cooperations
