var Person = {};
var Users = {name = 'thsus', int = 3}
Person["age"] = 20;
Person["name"] = '소녀시대';
Person.mobile = '010-1000-1000';
console.log('나이 : %d');
console.log('\nforFach 구문 사용하기');
Users.forEach(function(item,index)) {
    console.log('배열요소 #' + index + ' : %s', item.name);
}