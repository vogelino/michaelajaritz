import React from 'react'
import Parallelepiped from '../Parallelepiped'

const welcome = () => (
	<div>
		<Parallelepiped
			size={18}
			image="/images/portraits/transparent/michaela-portrait.png"
			timeout={100}
		/>
		<Parallelepiped
			size={8}
			placement="toBottom"
			image="/images/artworks/transparent/experienced.png"
			timeout={100}
		/>
		<Parallelepiped
			size={8}
			placement="toBottom"
			image="/images/artworks/transparent/bilingual.png"
			timeout={200}
			position={[8, 0]}
		/>
		<Parallelepiped
			size={10}
			placement="toBottom"
			image="/images/artworks/transparent/girl-pearl.png"
			timeout={300}
			position={[4, 8]}
		/>
		<Parallelepiped size={5} placement="toTop" timeout={400} color="blue" position={[9, -18]} />
		<Parallelepiped size={2} placement="toTop" timeout={500} color="orange" position={[14, -18]} />
		<Parallelepiped size={1} placement="toTop" timeout={500} color="purple" position={[17, -20]} />
		<Parallelepiped size={1} placement="toBottom" timeout={500} color="blue" position={[19, 18]} />
		<Parallelepiped size={2} placement="toBottom" timeout={300} color="purple" position={[14, 8]} />
		<Parallelepiped size={3} placement="toBottom" timeout={300} color="orange" position={[16, 0]} />
		<Parallelepiped size={2} placement="toTop" timeout={400} color="purple" position={[18, 0]} />
	</div>
)

export default welcome
