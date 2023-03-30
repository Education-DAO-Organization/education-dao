import React from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import metamask from '../../../assets/logos/metamask.svg'

const ButtonStyled = styled.button`
${({type}) => type === 'regular' && css`
	${({variant}) => variant === 'primary' && css`
		background-color: #A798EF;
		border: 2px solid #A798EF;
		p { color: #191919; }
		&:disabled {
			background-color: #222020;
			border-color: #7D7676;
			p { color: #7D7676; }
	`}
	${({variant}) => variant === 'secondary' && css`
		background-color: transparent;
		border: 2px solid #A798EF;
		p { color: #A798EF; }
		&:disabled {
			border-color: #7D7676;
			p { color: #7D7676; }
	`}
	${({variant}) => variant === 'tertiary' && css`
		border: none;
		background-color: transparent;
		p { color: #A798EF; }
		&:disabled {
			p { color: #7D7676; }
	`}
`}
${({type}) => type === 'destructive' && css`
	${({variant}) => variant === 'primary' && css`
		background-color: #E66E7C;
		border: 2px solid #E66E7C;
		p { color: #191919; }
		&:disabled {
			background-color: #222020;
			border-color: #7D7676;
			p { color: #7D7676; }
		}
	`}
	${({variant}) => variant === 'secondary' && css`
		background-color: transparent;
		border: 2px solid #E66E7C;
		p { color: #E66E7C; }
		&:disabled {
			border-color: #7D7676;
			p { color: #7D7676; }
		}
	`}
	${({variant}) => variant === 'tertiary' && css`
		background-color: transparent;
		border: none;
		p { color: #E66E7C; }
		&:disabled {
			p { color: #7D7676; }
		}
	`}
`}
`

const icons = {
	'metamask': {
		img: metamask,
		alt: 'MetaMask Logo'
	}
}

const Button = ({ icon, label, handleClick, variant, size, type, isDisabled }) => {
	return (
		<ButtonStyled
			disabled={isDisabled}
			variant={variant}
			onClick={handleClick}
			type={type}>
			{icon && <img src={icons[icon].img} alt={icons[icon].alt} />}
			<p>{label}</p>
		</ButtonStyled>
	)
}

export default Button

Button.propTypes = {
	label: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
	handleClick: PropTypes.func.isRequired,
	icon: PropTypes.oneOf(['metamask', null]),
	isDisabled: PropTypes.bool,
	type: PropTypes.oneOf(['regular', 'destructive']).isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired
}
