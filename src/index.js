module.exports = function getZerosCount(number, base) {

    var arr = [], w = 0;

    for(var i = 2; i <= base; i++){
        w = 0;
            while(base % i == 0 && base > 1){
                arr.push(i);
                w++;
                base = base / i;
            }
            if(base <= 1){
                break;
            }
    }

    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) max = arr[i];
    }

    var n = 0;

    while (number > 1) {
        number = Math.floor(number / max);
        n += number;
    }

    if(w > 0){
        n = parseInt(n / w);
    }

    return n;
}