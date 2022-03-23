function Foo() {
    getName = function() {
        console.log('1');
    }
    return this;
}
Foo.getName = function() { console.log('2'); }
Foo.prototype.getName = function() { console.log('3'); }
var getName = function() {
    console.log('4');
}
// 判断以下输出
Foo.getName();          // 1
getName();              // 4
new Foo().getName();    // 3
getName();              // 2