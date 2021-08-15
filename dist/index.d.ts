import React from 'react';
declare type Props = {
    style?: React.CSSProperties;
    className?: string;
    alt: string;
    size: number;
    isBackwards: boolean;
    foregroundColor: string;
    backgroundColor: string;
    short?: string;
    suit?: string;
    point?: string | number;
};
declare const PokerCard: {
    (props: Props): JSX.Element;
    defaultProps: {
        style: {};
        className: string;
        alt: string;
        size: number;
        isBackwards: boolean;
        foregroundColor: string;
        backgroundColor: string;
        short: any;
        suit: any;
        point: any;
    };
};
export default PokerCard;
