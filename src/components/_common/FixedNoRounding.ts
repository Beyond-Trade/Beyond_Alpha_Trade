export const toFixedNoRounding = (num: any, n:any)=> {
    const reg = new RegExp("^-?\\d+(?:\\.\\d{0," + n + "})?", "g")
    const a = num.toString().match(reg)[0];
    const dot = a.indexOf(".");
    if (dot === -1) { // integer, insert decimal dot and pad up zeros
        return a + "." + "0".repeat(n);
    }
    const b = n - (a.length - dot) + 1;
    return b > 0 ? (a + "0".repeat(b)) : a;
 }
//  function calc(n) {
//     var num = n.original.value, rounded = n.rounded
//     var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
//     rounded.value = with2Decimals
// }