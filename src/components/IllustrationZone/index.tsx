import { FC } from 'react'
import styled from 'styled-components'
import willkommen from './willkommen'
import ueberMich from './ueber-mich'
import kooperationen from './kooperationen'
import fokus from './fokus'
import idee from './idee'
import angebot from './angebot'
import kontakt from './kontakt'
import impressum from './impressum'
import { useResponsiveState } from '../../utils/hooks/useResponsiveState'
import { PageNameType } from 'src/constants/pages'

const components = {
	'ueber-mich': ueberMich,
	willkommen,
	kooperationen,
	fokus,
	idee,
	angebot,
	kontakt,
	impressum,
}

const IllustrationZoneWrapper = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding-left: 240px;
	overflow: hidden;

	@media screen and (max-width: 960px) {
		display: none;
	}
`

const IllustrationZoneContent = styled.div<{ scale: number }>`
	position: relative;
	width: 100%;
	height: 200%;
	overflow: hidden;
	transform-origin: 0 50%;
	transform: translateY(-25%) scale(${({ scale }) => scale || 1});
`

const IllustrationZone: FC<{ pageName: PageNameType }> = ({ pageName }) => {
	const { illustrationSclale } = useResponsiveState()
	const Component = components[pageName] || (() => null)
	return (
		<IllustrationZoneWrapper>
			<IllustrationZoneContent scale={illustrationSclale}>
				<Component />
			</IllustrationZoneContent>
		</IllustrationZoneWrapper>
	)
}

export default IllustrationZone
