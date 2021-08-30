/**
 * 思路：整个游戏的显示全部有一个二维数组控制，不同的值显示不同的背景图
 */
/**
 * 0. 空白
 * 1. 玩家
 * 2. 墙
 * 3. 箱子
 */
const SPACE = 0,
PLAYER = 1,
WALL = 2,
BOX = 3;
export const content = [
    [SPACE, SPACE, WALL , WALL , WALL  , WALL , WALL , SPACE, SPACE],
    [SPACE, SPACE, WALL , SPACE, PLAYER, SPACE, WALL , SPACE, SPACE],
    [SPACE, SPACE, WALL , SPACE, BOX   , SPACE, WALL , SPACE, SPACE],
    [WALL , WALL , WALL , SPACE, SPACE , SPACE, WALL , WALL , WALL ],
    [WALL , SPACE, SPACE, SPACE, BOX   , SPACE, SPACE, SPACE, WALL ],
    [WALL , SPACE, BOX  , BOX  , BOX   , BOX  , BOX  , SPACE, WALL ],
    [WALL , SPACE, SPACE, SPACE, BOX   , SPACE, SPACE, SPACE, WALL ],
    [WALL , WALL , SPACE, BOX  , BOX   , BOX  , SPACE, WALL , WALL ],
    [SPACE, WALL , SPACE, SPACE, SPACE , SPACE, SPACE, WALL , SPACE],
    [SPACE, WALL , SPACE, SPACE, BOX   , SPACE, SPACE, WALL , SPACE],
    [SPACE, WALL , SPACE, SPACE, SPACE , SPACE, SPACE, WALL , SPACE],
    [SPACE, WALL , WALL , WALL , WALL  , WALL , WALL , WALL , SPACE]
];
const mapRow = content.length,
mapColumn = content[0].length,
boxHeight = 50,
boxWidth = 50;
export const correct = [
    { row: 3, col: 4 },
    { row: 4, col: 4 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
    { row: 5, col: 5 },
    { row: 5, col: 6 },
    { row: 6, col: 4 },
    { row: 7, col: 4 },
    { row: 8, col: 4 },
    { row: 9, col: 4 },
    { row: 10, col: 4 }
];
const player = {
    row: 1,
    col: 4
}
export function changePlayer(row, col){
    player.row = row;
    player.col = col;
}
export {SPACE, PLAYER, WALL, BOX, mapRow, mapColumn, boxHeight, boxWidth, player};

