import { FC } from 'react'
import Parallelepiped from '../Parallelepiped'

const welcome: FC = () => (
	<div>
		<Parallelepiped
			size={17}
			image="/images/artworks/transparent/girlundertree.png"
			timeout={100}
		/>
		<Parallelepiped
			placement="toBottom"
			size={10}
			timeout={100}
			image="/images/artworks/transparent/wandererseafog.png"
		/>
		<Parallelepiped placement="toBottom" size={6} position={[10, 0]} timeout={200} color="purple" />
		<Parallelepiped
			placement="toBottom"
			size={1}
			position={[15, 10]}
			timeout={400}
			color="purple"
		/>
		<Parallelepiped placement="toTop" size={1} position={[13, -20]} timeout={400} color="blue" />
		<Parallelepiped placement="toTop" size={3} position={[8.5, -17]} timeout={300} color="purple" />
		<Parallelepiped placement="toTop" size={2} position={[17, 0]} timeout={200} color="blue" />
		<Parallelepiped placement="toBottom" size={2} position={[13, 6]} timeout={300} color="orange" />
		<Parallelepiped placement="toBottom" size={3} position={[5, 10]} timeout={300} color="orange" />
		<Parallelepiped placement="toBottom" size={1} position={[9.5, 13]} timeout={400} color="blue" />
	</div>
)

export default welcome
