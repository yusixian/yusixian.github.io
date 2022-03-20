let obj1 = {
    "name": "obj1",
    "age": 23,
    "sex":"女"
};
let obj2 = obj1;    //这是浅拷贝
obj2.age = 18;
obj2.name = "obj2";
console.log(obj1);
console.log(obj2);  //可以看到两个对象指向一个引用 输出的值都是修改过后的
function deepClone(obj) {
    if(typeof obj !== 'object' || obj === null) return obj;
    let result = (obj instanceof Array)?[]:{};  // 判断一下是数组还是对象
    let keys = Object.keys(obj); //过滤原型链
    keys.forEach(key => {
        result[key] = deepClone(obj[key]);
    });
    return result;
}
let obj3 = deepClone(obj2);
obj3.name = 'obj3';
obj3.age = 24;
obj3.sex = '男';
console.log(obj2);
console.log(obj3); 