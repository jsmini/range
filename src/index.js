export function range(from, to, step) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    letters = letters.toUpperCase() + letters + letters.toUpperCase();
    /**
     * res  返回的结果数组
     * isExclusive  不包含末尾字符
     * isNumberRange  是否是数字范围变化
     * index   索引
     * finalIndex  尾索引
     * 
     */
    let res, isExclusive, isNumberRange, index, finalIndex;
    res = [];
    // 传入的参数，转化成数组
    let args = Array.prototype.slice.call(arguments, 0);

    // ruby style range ? `range('a..z')` or `range('a..z', 2)`
    if (arguments.length === 1 || typeof from === 'string' && typeof to === 'number') { // ruby风格的范围变化
        if (Number(args[0]) || Number(args[0]) === 0) {
            from = 0;
            to = args[0];
            step = 1;
        } else if ((/^(-\d+|\d+|[a-z]+|[A-Z]+)\.{2,3}(-\d+|\d+|[a-z]+|[A-Z]+)$/).test(args[0])) { // ruby style
            isExclusive = from.indexOf('...') > -1;  // 是否包含末尾
            step = to; //  步进
            let parts = from.split(/\.{2,3}/); // 切割起始段和末尾段
            from = parts[0];  // 起始段
            to = parts[1];   // 末尾段
        } else if ((/^[a-zA-Z]$/g).test(args[0])) {
            from = args[0] === args[0].toUpperCase() ? 'A' : 'a';
            step = to;
            to = args[0];
        } else {
            throw new ReferenceError('rangejs only support range charter and number');
        }
    }

    isNumberRange = Number(from) === Number(from); // 是否是数字范围的变化
    if (isNumberRange) {  // 数字的变化范围
        finalIndex = Number(to);
        index = Number(from);
    } else { // 字母的变化范围
        index = letters.indexOf(from);
        let method = (from == from.toLowerCase() && to == to.toUpperCase()) ? 'lastIndexOf' : 'indexOf';
        finalIndex = letters[method](to);
    }

    step = step == undefined || step === 0 ? index < finalIndex ? 1 : -1 : (index < finalIndex && step < 0) || (index > finalIndex && step > 0) ? -step : step;
    if (step === Infinity || step === -Infinity) {
        step = step < 0 ? -1 * Number.MAX_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    }
    let length = Math.abs(Math.ceil((index - finalIndex) / step)) + 1;
    let fixNum = 0;
    // 步长是否是小数
    let decimal = (step + '').split('.')[1];
    if (decimal) {
        fixNum = decimal.length;
    }
    while (length--) {
        res.push(isNumberRange ? Number(index.toFixed(fixNum)) : letters.charAt(index));
        index += step;
    }
    if (isExclusive) res.pop(); // 不包含末尾元素，弹出最后一个
    return res;
    // range.equals = function (one, two) {
    //     return one.join() == two.join()
    // }
    // range.overlaps = function (one, two) {
    //     return one[0] <= two.slice(-1)[0] && two[0] <= one.slice(-1)[0]
    // }
}
