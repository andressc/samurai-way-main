import React from 'react';
import icons from '../assets/icons/icons.svg';

type IconPropsType  = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon: React.FC<IconPropsType> = ({iconId, width, height, viewBox, fill}) => {
    return (
        <svg width={width || "88"}
             height={height || "88"}
             viewBox={viewBox || "0 0 125 125"}
             fill={fill || "none"}
             xmlns="http://www.w3.org/2000/svg">

            <use xlinkHref={`${icons}#${iconId}`}/>
        </svg>
    );
};
