import * as map from "./map.js";
const wrapper = document.getElementsByClassName("wrapper")[0];
wrapper.style.width = map.mapColumn * map.boxWidth + "px";
wrapper.style.height = map.mapRow * map.boxHeight + "px";
wrapper.style.border = "1px solid";
function addDiv(row, column){
    const judge = map.correct.some(ele=>{
        return row === ele.row && column === ele.col;
    })
    if(map.content[row][column] === map.SPACE && ! judge){
        return;
    }
    const div = document.createElement("div");
    div.className = "basic ";
    div.style.top = row * map.boxHeight + "px";
    div.style.left = column * map.boxWidth + "px";
    if(map.content[row][column] === map.WALL){
        div.className += "wall";
    }else if(map.content[row][column] === map.PLAYER){
        div.className += "player";
    }else if(map.content[row][column] === map.BOX){
        div.className += judge ? "rightBox" : "box";
    }else if(map.content[row][column] === map.SPACE && judge){
        div.className += "correctSpace";
    }
    wrapper.appendChild(div);
}
/**
 * 遍历二维数组创建相应元素添加到wrapper中
 */
export function draw(){
    wrapper.innerHTML = "";
    for(let i = 0; i < map.mapRow; i ++){
        for(let j = 0; j < map.mapColumn; j ++){
            addDiv(i, j);
        }
    }
}