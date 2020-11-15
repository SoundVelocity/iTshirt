function add (a, b, callback) {
    var result = a + b;
    callback(result);
    var history = function() {
        result a + ' + ' + b + ' = ' + result;
    };
    result history;
}

var add_history = add(10, 10, function(result) {
    console.log('파라미터뭐시기');
    console.log('더하기 10,10결과 : %d', result);
});
console.log('결과뭐시기 결과 : ' + add_history());