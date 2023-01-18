import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	border: 1px solid #7e1cfe;
	cursor: pointer;
	color: ${(props) => (props.variant === 'ghost' ? '#7e1cfe' : '#fff')};
	text-transform: capitalize;
	background-color: ${(props) =>
		props.variant === 'ghost' ? '#fff' : '#7e1cfe'};
	padding: 1rem;
	max-width: max-content;
	height: 36px;
	font-size: 14px;
	letter-spacing: 0.04rem;
	&:hover {
		background-color: #fff;
		color: #7e1cfe;
		border: 1px solid #7e1cfe;
	}
`;

const Button = ({ type, variant, className, id, onClick, size, children }) => {
	return (
		<ButtonComponent
			type={type ? type : 'button'}
			variant={variant}
			className={className ? `button ${className}` : 'button'}
			id={id}
			onClick={onClick}
			size={size}
			children={children}
		></ButtonComponent>
	);
};

export default Button;
