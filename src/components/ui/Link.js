import React from 'react';
import PropTypes from 'prop-types';

import { Link as LinkRouter } from 'react-router-dom';


const Link = React.memo(({
	color, icon, text, to, type,
}) => {
    console.warn('what eve');
	if (type === 'default') {
		return (
			<LinkRouter to={to}>{text}</LinkRouter>
		);
	}
	return (
		<a href={to}>{text}</a>
	);
})

Link.propTypes = {
	color: PropTypes.string, // 'default', 'light', 'dark'
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired, // 'default', 'external'
};

Link.defaultProps = {
	icon: '',
	color: 'default',
};

export default Link