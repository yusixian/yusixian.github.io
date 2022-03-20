// 使用localStorage结合JSON.stringify实现持久化，在浏览器被关闭后仍能恢复todolit 详见
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#%E4%BD%BF%E7%94%A8_json.stringify_%E7%BB%93%E5%90%88_localstorage_%E7%9A%84%E4%BE%8B%E5%AD%90
// alert('欢迎使用todolist');
var storage = null;
if(!window.localStorage){
    alert("浏览器不支持localstorage");
} else storage = window.localStorage;
// 持久化存储
function setObjToStorage(key, obj) {
    if(!storage) {
        alert("浏览器不支持localstorage");
        return;
    }
    let data = JSON.stringify(obj);
    storage.setItem(key, data);
    // console.log('setObjToStorage');
    // console.log(storage[key]);
}
// 取得持久化存储的值
function getObjFromStorage(key) {
    if(!storage) {
        alert("浏览器不支持localstorage");
        return null;
    }
    let json = storage.getItem(key);
    let jsonObj = JSON.parse(json);
    // console.log('getObjFromStorage');
    // console.log(jsonObj);
    return jsonObj;
}
function getAllTodo() {
    let todos = document.getElementById('todoTask').getElementsByTagName('label');
    if(!todos) return [];
    let len = todos.length;
    let objs = [];
    for(let i = 0; i < len; ++i) {
        objs.push(todos[i].innerText);
    }
    // console.log(objs);
    return objs;
}
function getAllFinshs() {
    let todos = document.getElementById('finishTask').getElementsByTagName('label');
    if(!todos) return [];
    let len = todos.length;
    let objs = [];
    for(let i = 0; i < len; ++i) {
        objs.push(todos[i].innerText);
    }
    // console.log(objs);
    return objs;
}
function parseID(str) {
    let reg = new RegExp("[0-9]+");
    let matches = reg.exec(str);
    let id = Number.parseInt(matches[0]);
    return id;
}
function deleteTodoNode(id) {
    // console.log(todos);
    let delNode = document.getElementById(`todo-${id}`).parentNode;
    let pardel = delNode.parentNode;
    pardel.removeChild(delNode);
    let todos = getAllTodo();   //remove完后在获取
    // console.log(todos);
    setObjToStorage('todolistdata', todos);
}
function deleteFinshNode(id) {
    // console.log(todos);
    let delNode = document.getElementById(`finsh-${id}`).parentNode;
    let pardel = delNode.parentNode;
    pardel.removeChild(delNode);
    let finshs = getAllFinshs();   //remove完后在获取
    // console.log(todos);
    setObjToStorage('finshdata', finshs);
}
function addFinshNode(todo, id) {
    // deleteTodoNode(id);
    // <div>
    //     <input type="checkbox" class="todo-checkbox" id="finsh-1" disabled="disabled" checked="checked">
    //     <label>我好啦</label>
    //     <button class="delete-btn" id = "finsh-delete-1">删除</button>
    // </div>
    // console.log(todo, id);
    let newNode = document.createElement('div');
    let checkNode = document.createElement('input');
    checkNode.setAttribute('type', 'checkbox');
    checkNode.setAttribute('class', 'todo-checkbox');
    checkNode.setAttribute('id', `finsh-${id}`);
    checkNode.setAttribute('disabled', 'disabled');
    checkNode.setAttribute('checked', 'checked');
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(todo));
    let btn = document.createElement('button');
    btn.setAttribute('class', 'delete-btn');
    btn.setAttribute('id', `finsh-delete-${id}`);
    btn.appendChild(document.createTextNode('删除'));
    btn.addEventListener("click", function() {
        // console.log('调用了delete');
        deleteFinshNode(parseID(this.id));
    }, false);
    newNode.appendChild(checkNode);
    newNode.appendChild(label);
    newNode.appendChild(btn);
    
    let dest = document.getElementById('finishTask');
    dest.appendChild(newNode);
    // console.log(todosDivs);
}
function addFinshStorage(todo) {
    let finshs = getObjFromStorage('finshdata');
    if(finshs === null) finshs = [todo];
    else finshs.push(todo);
    setObjToStorage('finshdata', finshs);
}
// 添加到todo列表结点 
function addTodoNode(dest, todo, id) {
    let newNode = document.createElement('div');
    let checkNode = document.createElement('input');
    checkNode.setAttribute('type', 'checkbox');
    checkNode.setAttribute('class', 'todo-checkbox');
    checkNode.setAttribute('id', `todo-${id}`);
    checkNode.addEventListener("change", function() {
        if(this.checked) {
            // console.log(this.id + 'checked!');
            let text = this.parentNode.getElementsByTagName('label')[0].innerHTML;
            let finshs = getObjFromStorage('finshdata');
            addFinshNode(text, (finshs == null?0:finshs.length)+1);
            addFinshStorage(text);
            deleteTodoNode(parseID(this.id));
        }
    });
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(todo));
    let btn = document.createElement('button');
    btn.setAttribute('class', 'delete-btn');
    btn.setAttribute('id', `todo-delete-${id}`);
    btn.appendChild(document.createTextNode('删除'));
    btn.addEventListener("click", function() {
        // console.log('调用了delete');
        deleteTodoNode(parseID(this.id));
    }, false);
    newNode.appendChild(checkNode);
    newNode.appendChild(label);
    newNode.appendChild(btn);
    dest.appendChild(newNode);
    // <input type="checkbox" class="todo-checkbox" id="todo-1">
    // <label>我是一个待办</label>
    // <button class="delete-btn" id = "todo-delete-1">删除</button>
    // console.log(newNode);
}
// 添加到storage中实现持久化
function addTodoStorage(todo) {
    let todos = getObjFromStorage('todolistdata');
    console.log(todos,todo);
    if(todos === null) todos = [todo];
    else todos.push(todo);
    setObjToStorage('todolistdata', todos);
}
function init() {
    let nowtodos = getObjFromStorage('todolistdata');
    if(nowtodos !== null) {
        let nowtodoslen = nowtodos.length;
        for(let i = 0; i < nowtodoslen; ++i) {
            if(nowtodos[i]) addTodoNode(task, nowtodos[i], i+1);
        }
    }
    let nowfinshs = getObjFromStorage('finshdata');
    if(nowfinshs !== null) {
        let len2 = nowfinshs.length;
        for(let i = 0; i < len2; ++i) {
            if(nowfinshs[i]) addFinshNode(nowfinshs[i], i+1);
        }
    }
   
}
if(!'todolistdata' in storage) setObjToStorage('todolistdata', []);
if(!'finishdata' in storage) setObjToStorage('finishdata', []);
console.log(getObjFromStorage('finshdata'));
var task = document.getElementById('todoTask');
init();
// let todos = getObjFromStorage('todolistdata');
// console.log(todos);
let addBtns = document.getElementById('add-btn');
let addBtn = addBtns;
addBtn.addEventListener("click", function() {
    // console.log('调用了add');
    let input = document.getElementById("addtodoText").value;
    // console.log(input);
    let todos = getObjFromStorage('todolistdata');
    // console.log(todos);
    addTodoNode(task, input, (todos == null?0:todos.length)+1);
    addTodoStorage(input);
}, false);