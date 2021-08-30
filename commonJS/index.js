/**
 * 注意module.exports 和 exports的区别
 */
const Porker = require("./porker.js");
const sortRandom = require("./sortRandom")
const porkerArray = [];
for(let i = 1; i <= 4; i ++){
    for(let j = 1; j <= 13; j ++){
        porkerArray.push(new Porker(i, j))
    }
}
porkerArray.push(new Porker(null, 14), new Porker(null, 15));//大小王需要单独加
sortRandom.sortRandom(porkerArray);
const player1 = porkerArray.slice(0, 17),
player2 = porkerArray.slice(17, 34),
player3 = porkerArray.slice(34, 51),
task = porkerArray.slice(51);
print(player1);
print(player2);
print(player3);
print(task);
function print(array){
    let str = "";
    array.forEach(ele=>{
        str += ele.toString() + "  ";
    })
    console.log(str);
}