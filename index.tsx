import React, { useEffect, useState } from 'react';
import { PokerCanvas } from './lib/pokercanvas_lib';

type Props = {
  style?: React.CSSProperties,
  className?: string;
  alt: string;
  size: number;
  isBackwards: boolean;
  foregroundColor: string;
  backgroundColor: string;
  short?: string;
  suit?: string;
  point?: string | number;
}

const PokerCard = (props: Props) => {

  const [suit, setSuit] = useState(undefined);
  const [point, setPoint] = useState(undefined);
  const [isBackwards, setIsBackwards] = useState(!!props.isBackwards);

  const SUITS = ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs'];
  const POINTS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER'];

  useEffect(() => {
    setIsBackwards(!!props.isBackwards);
  }, [props.isBackwards]);

  useEffect(() => {
    if (SUITS.includes(props.suit)) {
      setSuit(props.suit);
    }
  }, [props.suit]);

  useEffect(() => {
    if (props.point === 'T') {
      setPoint(10);
    } else if (POINTS.includes(props.point)) {
      setPoint(props.point);
    }
  }, [props.point]);

  useEffect(() => {
    if (props.short && !props.suit && !props.point) {
      const parts = props.short.split('');
      if (parts[0] === 'T') {
        setPoint(10);
      } else if (POINTS.includes(parts[0])) {
        setPoint(parts[0]);
      } else {
        try {
          const num = parseInt(parts[0], 10);
          if (POINTS.includes(num)) {
            setPoint(num);
          }
        } catch (e) {
        }
      }
      if (SUITS.includes(parts[1])) {
        setSuit(parts[1]);
      }
    }
  }, [props.short]);

  const BackImage = () => {
    return <img src={PokerCanvas().getBackData(props.size, props.foregroundColor, props.backgroundColor)}
          className={props.className} alt={props.alt}
          style={props.style}/>;
  };

  const FaceImage = () => {
    return <img src={PokerCanvas().getCardData(props.size, suit, point)} className={props.className} alt={props.alt}
          style={props.style}/>;
  };

  return isBackwards ? <BackImage/> : suit && point ? <FaceImage/> : null;
};

PokerCard.defaultProps = {
  style: {},
  className: '',
  alt: '',
  size: 120,
  isBackwards: false,
  foregroundColor: '#BB5555',
  backgroundColor: '#AA2222',
  short: undefined,
  suit: undefined,
  point: undefined,
};

export default PokerCard;
