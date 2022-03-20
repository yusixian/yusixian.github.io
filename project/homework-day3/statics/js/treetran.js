// 有一个目录树的数组；根据此数组，生成HTML字符

// 1、根据传进来的参数，返回html字符串
function tree2html(ftree) {
    if(!ftree) return null;
    let str = '';
    // console.log(ftree);
    for(let i = 0; i < ftree.length; ++i) {
        let element = ftree[i];
        if(i+1 < ftree.length && ftree[i+1] instanceof Array) { 
            let t = `<li>${element}<ul>${tree2html(ftree[i+1])}</ul></li>`;   // 模板字面量
            str += t;
            // console.log(t);
            ++i;
        } else {
            let t = `<li>${element}</li>`;   // 模板字面量
            str += t;
            // console.log(t);
        }
    }
    // console.log(str);
    return str;
}
// var dtree = [
//     'index.html',
//     'js',
//         ['index.js', 'test.js'],
//     'css',
//         ['index.css'],
//     'else',
//         ['test2.css', 
//             ['test3.css','test4.css']]
// ];
// console.log(fileTree);
// let t = tree2html(fileTree)
// var ans1 = `<ul>${t}</ul>`;
// console.log(ans1);
// document.write(ans1);

// 2、写一个函数，可以将任意层级的文件树数组转换为字符串
function tree2str(ftree, level) {
    if(!ftree) return null;
    let str = '';
    // console.log(ftree);
    for(let i = 0; i < ftree.length; ++i) {
        let element = ftree[i];
        let father = `${'&nbsp;'.repeat(6*level)}|---${element}<br/>`;
        str += father;
        while(i+1 < ftree.length && ftree[i+1] instanceof Array) {
            let son = `${tree2str(ftree[i+1], level+1)}`;   // 模板字面量
            str += son;
            // console.log(t);
            ++i;
        }
    }
    return str;
}
// var fileTree = [
//     'index.html',
//     'js',
//         ['index.js'], 
//         ['test2.js'],
//         ['test', 
//             ['test3.js']
//         ],
//     'css',
//         ['index.css']
// ];
// var ans2 = tree2str(fileTree, 0);
// console.log(ans2);