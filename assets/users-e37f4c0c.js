import{_ as k,o,c as i,a as y,f as x,u as C,d as u,b as s,t as e,i as t,F as c,j as d,k as _,l as r}from"./index-a16e4b2d.js";import{b as $}from"./badge-ceffc316.js";import{u as g}from"./users-1e55c980.js";import{r as q}from"./roles-012a2e71.js";const N={},V={class:"instruction"},B=y('<div class="instruction-icon"><i class="material-icons">info</i></div><div class="instruction-content"><span>通过员工管理您可以对公司内部的所有员工进行统一的管理，主要包含以下功能：</span><ul><li>新增员工</li><li>修改员工信息，包括基本信息、职位、部门等</li><li>停用/启用员工账号</li></ul></div><div class="instruction-expand"><i class="material-icons">expand_more</i></div>',3),S=[B];function D(p,n){return o(),i("div",V,S)}const E=k(N,[["render",D]]),F={class:"inspector"},j={class:"inspector-query"},A={class:"inspector-query-field"},I=["placeholder"],L={class:"inspector-query-field"},T=["value"],w={class:"inspector-operation"},z=s("i",{class:"material-icons"},"search",-1),G=s("i",{class:"material-icons"},"add",-1),H={class:"btn-operate"},J=["onClick"],K=["onClick"],U=x({__name:"users",setup(p){const{t:n}=C();function h(){r.push("users")}function m(){r.push("users-add")}function f(a){r.push({name:"users-edit",query:{id:a}})}function v(a){console.log(a),r.push("users")}return(a,M)=>(o(),i(c,null,[u(E),s("div",F,[s("div",j,[s("div",A,[s("span",null,e(t(n)("users.name")),1),s("input",{placeholder:t(n)("users.name")},null,8,I)]),s("div",L,[s("span",null,e(t(n)("users.role")),1),s("select",null,[(o(!0),i(c,null,d(t(q),l=>(o(),i("option",{key:l.id,value:l.name},e(l.name),9,T))),128))])])]),s("div",w,[s("button",{class:"btn btn-primary",onClick:h},[z,_(" "+e(t(n)("users.search")),1)]),s("button",{class:"btn btn-primary",onClick:m},[G,_(" "+e(t(n)("users.add")),1)])]),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,e(t(n)("users.username")),1),s("th",null,e(t(n)("users.name")),1),s("th",null,e(t(n)("users.phone")),1),s("th",null,e(t(n)("users.email")),1),s("th",null,e(t(n)("users.role")),1),s("th",null,e(t(n)("users.operation")),1)])]),s("tbody",null,[(o(!0),i(c,null,d(t(g),l=>(o(),i("tr",{key:l.id},[s("td",null,[s("a",H,e(l.username),1)]),s("td",null,e(l.name),1),s("td",null,e(l.phone),1),s("td",null,e(l.email),1),s("td",null,[u($,{text:l.role},null,8,["text"])]),s("td",null,[s("a",{class:"btn-operate",onClick:b=>f(l.id)},e(t(n)("users.edit")),9,J),s("a",{class:"btn-operate",onClick:b=>v(l.id)},e(t(n)("users.delete")),9,K)])]))),128))])])])],64))}});export{U as default};
