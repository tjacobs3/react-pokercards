"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var pokercanvas_lib_1 = require("./lib/pokercanvas_lib");
var PokerCard = function (props) {
    var _a = react_1.useState(undefined), suit = _a[0], setSuit = _a[1];
    var _b = react_1.useState(undefined), point = _b[0], setPoint = _b[1];
    var _c = react_1.useState(!!props.isBackwards), isBackwards = _c[0], setIsBackwards = _c[1];
    var SUITS = ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs'];
    var POINTS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER'];
    react_1.useEffect(function () {
        setIsBackwards(!!props.isBackwards);
    }, [props.isBackwards]);
    react_1.useEffect(function () {
        if (SUITS.includes(props.suit)) {
            setSuit(props.suit);
        }
    }, [props.suit]);
    react_1.useEffect(function () {
        if (props.point === 'T') {
            setPoint(10);
        }
        else if (POINTS.includes(props.point)) {
            setPoint(props.point);
        }
    }, [props.point]);
    react_1.useEffect(function () {
        if (props.short && !props.suit && !props.point) {
            var parts = props.short.split('');
            if (parts[0] === 'T') {
                setPoint(10);
            }
            else if (POINTS.includes(parts[0])) {
                setPoint(parts[0]);
            }
            else {
                try {
                    var num = parseInt(parts[0], 10);
                    if (POINTS.includes(num)) {
                        setPoint(num);
                    }
                }
                catch (e) {
                }
            }
            if (SUITS.includes(parts[1])) {
                setSuit(parts[1]);
            }
        }
    }, [props.short]);
    var BackImage = function () {
        return jsx_runtime_1.jsx("img", { src: pokercanvas_lib_1.PokerCanvas().getBackData(props.size, props.foregroundColor, props.backgroundColor), className: props.className, alt: props.alt, style: props.style }, void 0);
    };
    var FaceImage = function () {
        return jsx_runtime_1.jsx("img", { src: pokercanvas_lib_1.PokerCanvas().getCardData(props.size, suit, point), className: props.className, alt: props.alt, style: props.style }, void 0);
    };
    return isBackwards ? jsx_runtime_1.jsx(BackImage, {}, void 0) : suit && point ? jsx_runtime_1.jsx(FaceImage, {}, void 0) : null;
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
exports.default = PokerCard;
