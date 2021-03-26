import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'

const IconsWrapper = styled.div`
	margin-bottom: 10px;
`

const IconLink = styled.a`
	display: inline-block;
`

const Icon = styled.span`
	width: 24px;
	height: 24px;
	margin-right: 16px;
	display: inline-block;
	cursor: pointer;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transform: scale(0.8) rotate(0);
	transition: transform 100ms ease-out;

	&:hover {
		transform: scale(1) rotate(-2deg);
	}
`

const SocialIconList = ({ startTimeout }) => (
	<IconsWrapper>
		<IconLink
			href="https://www.facebook.com/michaela.jaritz.77"
			target="_blank"
			rel="noopener noreferrer"
			title="Facebook Seite von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout}>
				<span>
					<Icon style={{ backgroundImage: 'url("/facebook.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		<IconLink
			href="https://www.xing.com/profile/Michaela_Jaritz/"
			target="_blank"
			rel="noopener noreferrer"
			title="Xing Profil von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout + 200}>
				<span>
					<Icon style={{ backgroundImage: 'url("/xing.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		<IconLink
			href="https://twitter.com/MichaelaJaritz"
			target="_blank"
			rel="noopener noreferrer"
			title="Twitter Account von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout + 300}>
				<span>
					<Icon style={{ backgroundImage: 'url("/twitter.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
		<IconLink
			href="https://www.linkedin.com/in/michaela-jaritz-797b77145/"
			target="_blank"
			rel="noopener noreferrer"
			title="LinkedIn Profil von Michaela Jaritz"
		>
			<AnimatedInText timeout={startTimeout + 400}>
				<span>
					<Icon style={{ backgroundImage: 'url("/linkedin.svg")' }} />
				</span>
			</AnimatedInText>
		</IconLink>
	</IconsWrapper>
)

SocialIconList.defaultProps = {
	startTimeout: 10,
}

SocialIconList.propTypes = {
	startTimeout: PropTypes.number,
}

export default SocialIconList
