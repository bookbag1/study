/**
 * 默认导出只有一个，所以可以不用命名
 * export default 值;
 * 导入默认值：
 * import 变量名 from "路径";
 * 同时导入默认导出和基本导出：
 * import 变量名，{变量名} from "路径";
 * import {变量名， default as 变量名}
 * 导出其他变量的导出：
 * export {变量名， default} from "路径";
 */
import data from "./moduleA.js";
console.log(data);