import React from 'react';
import SVG from '../../resources/img/sprite.svg';

const Icon = (props) => {
    return (

        <svg className={`${props.name}`} style={{fill:`${props.fill}`}} id={`${props.id}`}>
		   <use xlinkHref={`${SVG}#${props.name}`} />
	    </svg>
    );
};

export default Icon;