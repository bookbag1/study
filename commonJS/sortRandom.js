/**
 * 传入一个数组，打乱数组的顺序
 */
function sortRandom(arry){
    arry.sort((a, b)=>{
        return Math.random() - 0.5;//返回正数转换位置， 负数或者0不变位置
    })
}
module.exports = {
    sortRandom
}