export function PokerCanvas(): {
    /**
     * Draw card number side as a image
     * @summary Poker.getCardImage  (size, suit, point)
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [suit='h'] - Poker suit. The value is case insensitive and it should be one of these value in []:
     *     ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
     *     'h', 'd', 's', 'c' are abbreviation
     *     When card point is 'O', 'h' or 'd' means big joker, 's' or 'c' means little joker.
     * @param {string} [point='O'] - Card point. The value is case insensitive and it should be one of these value in []:
     *     ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
     *     'O'(letter O) is abbreviation of 'JOKER'
     * @return {HTMLElement} image
     * @example
     *     document.body.appendChild(Poker.getCardImage(100, 'h', 'Q'));
     */
    getCardImage: (size?: number, suit?: string, point?: string) => HTMLElement;
    /**
     * Draw card number side in a canvas
     * @summary Poker.getCardCanvas (size, suit, point)
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [suit='h'] - Poker suit. The value is case insensitive and it should be one of these value in []:
     *     ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
     *     'h', 'd', 's', 'c' are abbreviation
     *     When card point is 'O', 'h' or 'd' means big joker, 's' or 'c' means little joker.
     * @param {string} [point='O'] - Card point. The value is case insensitive and it should be one of these value in []:
     *     ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
     *     'O'(letter O) is abbreviation of 'JOKER'
     * @return {HTMLElement} canvas
     * @example
     *     document.body.appendChild(Poker.getCardCanvas(100, 'h', 'Q'));
     */
    getCardCanvas: (size?: number, suit?: string, point?: string) => HTMLElement;
    /**
     * Get card number side image data
     * @summary Poker.getCardData   (size, suit, point)
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [suit='h'] - Poker suit. The value is case insensitive and it should be one of these value in []:
     *     ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
     *     'h', 'd', 's', 'c' are abbreviation
     *     When card point is 'O', 'h' or 'd' means big joker, 's' or 'c' means little joker.
     * @param {string} [point='O'] - Card point. The value is case insensitive and it should be one of these value in []:
     *     ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
     *     'O'(letter O) is abbreviation of 'JOKER'
     * @return {string} imageData
     * @example
     *     var imgData = Poker.getCardData(100, 'h', 'Q');
     */
    getCardData: (size?: number, suit?: string, point?: string) => string;
    /**
     * Draw card back side as a image
     * @summary Poker.getBackImage  (size[, foregroundColor, backgroundColor])
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [foregroundColor='#BB5555'] - Foreground color.
     * @param {string} [backgroundColor='#AA2222'] - Background color.
     * @return {HTMLElement} image
     * @example
     *   document.body.appendChild(Poker.getBackImage(300, '#2E319C', '#7A7BB8'));
     */
    getBackImage: (size?: number, foregroundColor?: string, backgroundColor?: string) => HTMLElement;
    /**
     * Draw card back side in a canvas
     * @summary Poker.getBackCanvas (size[, foregroundColor, backgroundColor])
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [foregroundColor='#BB5555'] - Foreground color.
     * @param {string} [backgroundColor='#AA2222'] - Background color.
     * @return {HTMLElement} canvas
     * @example
     *   document.body.appendChild(Poker.getBackCanvas(300, '#2E319C', '#7A7BB8'));
     */
    getBackCanvas: (size?: number, foregroundColor?: string, backgroundColor?: string) => HTMLElement;
    /**
     * Get card back side image data
     * @summary Poker.getBackData   (size[, foregroundColor, backgroundColor])
     * @param {number} [size=200] - Height pixel of card. The ratio of card width and height is fixed to 3:4.
     * @param {string} [foregroundColor='#BB5555'] - Foreground color.
     * @param {string} [backgroundColor='#AA2222'] - Background color.
     * @return {string} imageData
     * @example
     *   var imageData = Poker.getBackCanvas(300, '#2E319C', '#7A7BB8');
     */
    getBackData: (size?: number, foregroundColor?: string, backgroundColor?: string) => string;
};
