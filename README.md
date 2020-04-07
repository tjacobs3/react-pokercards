# react-pokercards
React Component to display Poker Cards in your React Application

## Poker Canvas
I used the Poker Canvas Library from [Tairraos/Poker.JS](https://github.com/Tairraos/Poker.JS)

## Usage


```JavaScript
import PokerCard from 'react-pokercards';
````

Display the Ace of Spades
```JavaScript
<PokerCard short={'As'}/>
//or
<PokerCard point={'A'} suit={'s'}/>
````

Display the Ten of Diamonds
```JavaScript
<PokerCard short={'Td'}/>
//or
<PokerCard point={'T'} suit={'d'}/>
````

Display just the backside
```JavaScript
<PokerCard isBackwards={true} short={'2c'}/>
//or
<PokerCard isBackwards={true}/>
````

### defaultProps
```JavaScript
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
````

## License
MIT