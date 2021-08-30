class poker{
    //1~4表示四种花色▲ ▼ ● ◆， 1为A，2~10就为2~10， 11为J， 12位Q， 13位K，14小王， 15大王
    constructor(flower, number){//构建花色，大小
        let str = "";
        if(flower === 1){
            str += "▲";
        }else if(flower === 2){
            str += "▼";
        }else if(flower === 3){
            str += "●";
        }else if(flower === 4){
            str += "◆";
        }else{
            str += "";//大小王不需要花色
        }
        this.flower = str;
        str = "";
        if(number === 1){
            str += "A"
        }else if(number >= 2 && number <= 10){
            str += String(number);
        }else if(number === 11){
            str += "J";
        }else if(number === 12){
            str += "Q";
        }else if(number === 13){
            str += "K";
        }else if(number === 14){
            str += "smallBoss";
        }else if(number === 15){
            str += "bigBoss";
        }
        else{
            throw new Error("牌面不正确");
        }
        this.number = str;
    }
    toString(){
        return this.flower + " " + this.number;
    }
}
module.exports = poker;