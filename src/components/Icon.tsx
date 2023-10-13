import React from 'react';
import icons from '../assets/icons/icons.svg';

type IconPropsType  = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "88"}
             height={props.height || "88"}
             viewBox={props.viewBox || "0 0 125 125"}
             fill={props.fill || "none"}
             xmlns="http://www.w3.org/2000/svg">

            <use xlinkHref={`${icons}#${props.iconId}`}/>
        </svg>
    );
};
