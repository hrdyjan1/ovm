import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
	block, clickHandler, colorVariant, disabled, icon, iconPosition, label, labelVisibility, type, variant,
}) {    
	if (type === 'submit') {
		return (
			<button
				onClick={clickHandler}
				disabled={disabled}
				type="submit"
				block={block}
				// colorVariant={colorVariant}
				icon={icon}
				// iconPosition={iconPosition}
				// labelVisibility={labelVisibility}
				variant={variant}
			>
				{label}
			</button>
		);
	}
	return (
		<button
			onClick={clickHandler}
			disabled={disabled}
			type="button"
			block={block}
			// colorVariant={colorVariant}
			icon={icon}
			// iconPosition={iconPosition}
			// labelVisibility={labelVisibility}
			variant={variant}
		>
			{label}
		</button>
	);
}

Button.propTypes = {
	block: PropTypes.string, // 'true', 'false'
	clickHandler: PropTypes.func.isRequired,
	colorVariant: PropTypes.string, // 'blue', 'yellow', 'green'
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	iconPosition: PropTypes.string, // 'before', 'after'
	label: PropTypes.string.isRequired,
	labelVisibility: PropTypes.string, // 'all', 'none', 'desktop'
	type: PropTypes.string, // 'submit', 'button'
	variant: PropTypes.string, // 'default', 'outline', 'curved'
};

Button.defaultProps = {
	block: 'false',
	colorVariant: 'blue',
	disabled: false,
	icon: '',
	iconPosition: 'before',
	labelVisibility: 'none',
	type: 'button',
	variant: 'default',
};
