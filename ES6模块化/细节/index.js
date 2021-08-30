/**
 * 导出时尽量导出常量，不然容易导致混乱,导出时可以理解为导出的是变量所指向的地址
 * 所以当导入模块，修改导入模块中的值时，现模块的中的值也会被修改
 */
import { a, change } from "./module.js";
console.log(a);
change();
console.log(a);
change();
console.log(a);