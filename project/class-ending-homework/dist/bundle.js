(()=>{"use strict";const e="__indexData";window.localStorage||alert("浏览器不支持localstorage");const t={getStorage:()=>JSON.parse(localStorage.getItem(e)||"{}"),setItem(t,s,l){if(l){let e=this.getItem(l);e[t]=s,this.setItem(l,e)}else{let l=this.getStorage();l[t]=s,localStorage.setItem(e,JSON.stringify(l))}},getItem(e,t){if(t){let s=this.getItem(t);if(s)return s[e]}return this.getStorage()[e]},clear(t,s){let l=this.getStorage();s?delete l[s][t]:delete l[t],localStorage.setItem(e,JSON.stringify(l))}};!function(e){let t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="./src/component/Picker/Picker.css",document.getElementsByTagName("head")[0].appendChild(t)}();class s{id;placeHolder=null;root=null;type="normal";fatherItems=null;items=null;data=[];nowpicker=null;name=null;storeKey="info";constructor(e,t,s,l,r){this.id=e,this.data=t,t&&t[0]instanceof Object?(this.type="second-level",t.length):this.data=t,this.root=document.getElementById(e),s&&(this.placeHolder=document.createTextNode(s),this.root.appendChild(this.placeHolder)),this.name=l,r&&(this.storeKey=r),this.init(this.root,this.type)}init(e,s){if(!e)return;this.nowpicker=document.createElement("div"),this.nowpicker.className="picker";let l=document.createElement("div");if(l.className="wrap","second-level"===s){this.fatherItems=document.createElement("div"),this.fatherItems.className="areas";const e=t.getItem("areaList");let s=this.fatherItems;for(let t=0;t<=12;++t)this.appendItem(e[t].area,!0);l.appendChild(s),this.nowpicker.appendChild(l)}this.items=document.createElement("div"),this.items.className="items","second-level"===s?l.appendChild(this.items):this.nowpicker.appendChild(this.items),this.root.appendChild(this.nowpicker);let r=[];if("second-level"===s){let e=this.data[0].schools,t=e.length;for(let s=0;s<t;++s){let t=e[s];r.push(t)}}else r=this.data;let i=r.length;for(let e=0;e<i;++e)this.appendItem(`${r[e]}`);let o=this.getValFromStorage("area");o&&"second-level"===s?this.selectItem(this.getItemByText(o,!0),!0):"second-level"===s&&this.selectItem(this.getItemByText(this.data[0].area,!0),!0),o=this.getValFromStorage(),o&&this.selectItem(this.getItemByText(o))}appendItem(e,t){let s=this,l=document.createElement("div");l.innerHTML=e,l.addEventListener("click",(function(){s.selectItem(this,t)})),t?this.fatherItems.appendChild(l):this.items.appendChild(l)}setValToStorage(e,s){let l=this.name;e&&(l=e);let r=t.getItem(this.storeKey);r||(r=new Object),r[l]=s,t.setItem(this.storeKey,r)}getValFromStorage(e){let s=this.name;e&&(s=e);const l=t.getItem(this.storeKey);return l?l[s]:null}getItemByText(e,t){let s=this.items.getElementsByTagName("div");t&&(s=this.fatherItems.getElementsByTagName("div"));let l=s.length;for(let t=0;t<l;++t)if(s[t].innerHTML==e)return s[t];return null}getSelectedItem(e){return e?this.fatherItems.querySelector(".item-selected"):this.items.querySelector(".item-selected")}refreshItems(e){this.items.textContent="";let s=t.getItem("areaList"),l=s.length,r=0;for(let t=0;t<l;++t)if(s[t].area==e){r=t;break}let i=Object.keys(s[r])[1],o=s[r][i],a=o.length;for(let e=0;e<a;++e)this.appendItem(o[e])}selectItem(e,t){let s=e.innerHTML,l=this.getSelectedItem(t);return l&&(l.className=""),e.className="item-selected",t?(this.scrollToSelected(),this.refreshItems(s)):(this.root.className="selected",this.placeHolder.textContent=s,this.setValToStorage(this.name,s),"second-level"===this.type&&this.setValToStorage("area",this.getSelectedItem(!0).innerHTML)),s}scrollToSelected(){let e=this.fatherItems,t=e.getElementsByTagName("div");e.scrollTop=0;let s=t.length;for(let l=0;l<s&&"item-selected"!=t[l].className;++l)e.scrollTop+=40}}!function(e){let t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="./src/component/Prompt/Prompt.css",document.getElementsByTagName("head")[0].appendChild(t)}();class l{name;root=null;successMsg="这是成功的提示";errorMsg="这是失败的提示";constructor(e,t,s){this.name=e,t&&(this.successMsg=t),s&&(this.errorMsg=s),this.root=document.querySelector(e)}promptSuccess(e,t,s){this.root&&(this.successMsg=`恭喜您，来自 ${e} ${t}级(${s})同学，您的报名信息已记录，请关注您的邮件`,this.root.className="prompt",this.root.style="display: flex;",this.root.innerHTML=this.successMsg)}promptError(e){this.root&&(this.errorMsg=e,this.root.className="prompt error",this.root.style="display: flex;",this.root.innerHTML=this.errorMsg)}}const r={isEmailValid:e=>(console.log(e),/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)),isNameValid(e){let t=new RegExp("^[一-龥a-zA-Z0-9_-]{1,20}$");return e?e&&e.length>0&&!!t.test(e)||(alert("姓名输入不合法"),!1):(alert("姓名为空"),!1)},isAgeValid(e){let t=new RegExp("^(?:[1-9][0-9]?|1[01][0-9]|120)$");return e?e&&e.length>0?!!t.test(e)||(alert("年龄输入不合法"),!1):0==e.length?(alert("年龄为空"),!1):(alert("年龄输入不合法"),!1):(alert("年龄为空"),!1)}},i={displayCourseListAll(e){let t=document.getElementById("course-list").getElementsByClassName("course"),s=t.length,l=e?"none":"";for(let e=0;e<s;++e)t[e].style.display=l},refreshCourseList(e){let t=document.getElementById("course-list");if(0===e)this.displayCourseListAll(!1);else{this.displayCourseListAll(!0);let s=t.getElementsByClassName(`tag t${e}`),l=s.length;for(let e=0;e<l;++e)s[e].parentNode.parentNode.parentNode.style.display=""}},fliter(e,t){t.className||(t.parentNode.getElementsByClassName("active")[0].className="",t.className="active",this.refreshCourseList(e))},refreshRegisterArea(){let e=document.querySelector(".regist-area");e.style="display:none;";let t=document.querySelector(".registed");t.style="display:flex",document.getElementById("re-regist-btn").addEventListener("click",(function(){t.style="display:none;",e.style="display:flex;"}))},submitInfo(e){let s=document.getElementById("email-picker"),l=null;if(!r.isEmailValid(s.value))return l="邮箱地址不符合要求(yourname@host.com) ，请重新输入",e.promptError(l),!1;let i=t.getItem("info");const o=i?i.year:null,a=i?i.school:null;return i&&o&&a?(i.email=s.value,t.setItem("info",i),e.promptSuccess(a,o,s.value),this.refreshRegisterArea(),!0):(l="未选择学校或入学年份！",e.promptError(l),!1)}};window.onload=function(){for(let e=0;e<4;++e)document.getElementById(`fliter-${e}`).addEventListener("click",(function(){i.fliter(e,this)}));let e=new s("date-picker",Array.from(new Array(12),((e,t)=>2010+t)),"请选择入学年份","year"),r=Array.from(new Array(25),((e,t)=>`示例省市大学${t}`));r[2]="选中大学示例",r[3]="不一样大学";let o=[{area:"广东省深圳市",schools:r}];for(let e=1;e<=12;++e){const t={area:`省市${e}`,schools:Array.from(new Array(e),((t,s)=>`省市${e}示例大学${s}`))};o.push(t)}t.setItem("areaList",o);let a=new s("school-picker",o,"请选择学校","school"),n=document.getElementById("submit-btn"),c=new l(".prompt");n.addEventListener("click",(function(){i.submitInfo(c)}));let m=t.getItem("info"),h=a.getValFromStorage(),d=e.getValFromStorage(),g=m?m.email:null;m&&d&&h&&g&&(c.promptSuccess(h,d,g),i.refreshRegisterArea())}})();