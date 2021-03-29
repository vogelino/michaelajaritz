import { FC } from 'react'
import Parallelepiped from '../Parallelepiped'

const Impressum: FC = () => (
	<div>
		<Parallelepiped size={18} image="/images/artworks/transparent/paulklee.png" timeout={100} />
		<Parallelepiped
			placement="toBottom"
			size={10}
			image="/images/artworks/transparent/paulklee2.png"
			timeout={100}
		/>
		<Parallelepiped placement="toBottom" size={4} position={[10, 0]} timeout={200} />
		<Parallelepiped placement="toBottom" size={2} position={[14, 0]} color="orange" timeout={300} />
		<Parallelepiped placement="toBottom" size={1} position={[16, 4]} color="blue" timeout={400} />
		<Parallelepiped placement="toBottom" size={2} position={[2, 8]} color="purple" timeout={200} />
		<Parallelepiped placement="toBottom" size={2} position={[5, 10]} color="blue" timeout={200} />
		<Parallelepiped placement="toBottom" size={1} position={[8, 12]} color="orange" timeout={300} />
	</div>
)

export default Impressum
