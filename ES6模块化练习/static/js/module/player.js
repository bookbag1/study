import * as map from "./map.js";
import * as ui from "./UI.js";
function moveOrNot(row, col, direction){
    let row1 = 0, col1 = 0;//记录执行了什么操作
    if(direction === "ArrowUp"){
        row -= 1;
        row1 = -1;
    }else if(direction === "ArrowDown"){
        row += 1;
        row1 = 1;
    }else if(direction === "ArrowLeft"){
        col -= 1;
        col1 = -1;
    }else if(direction === "ArrowRight"){
        col += 1;
        col1 = 1;
    }
    if(map.content[row][col] === map.WALL){
        return false;
    }else if(map.content[row][col] === map.BOX){
        if(map.content[row + row1][col + col1] === map.SPACE){
            map.content[row + row1][col + col1] = map.BOX;
        }else{
            return false;
        }
    }
    return {
        row,
        col
    };
}
function youAreGood(){
    const judge =  map.correct.every(ele=>{
       return map.content[ele.row][ele.col] === map.BOX;
    })
    if(judge){
        alert("恭喜你完成游戏！");
        window.location.reload();//刷新当前页面
    }
}
window.onkeydown = (e)=>{
    const {row, col} = map.player;
    const position = moveOrNot(row, col, e.key);
    if(position){
        map.content[row][col] = map.SPACE;
        map.content[position.row][position.col] = map.PLAYER;
        map.player.row = position.row;
        map.player.col = position.col;
        ui.draw();
        youAreGood();
    }
}