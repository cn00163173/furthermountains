import{_ as C,r as x,o as r,c as u,a as s,b as h,f as y,u as $,g as q,n as p,t as n,k as e,F as _,m as V,j as B,q as D,s as l}from"./index-be623cb5.js";import{g as N}from"./groups-581ef8ff.js";const w={},E={class:"instruction"},F=s("div",{class:"instruction-icon"},[s("i",{class:"material-icons"},"info")],-1),U=s("div",{class:"instruction-content"},[s("span",null,"客户可以根据部门设置对应的部门权限，并且在员工管理中将员工分配到对应部门中进行统一的管理，进行部门管理你需要完成以下几步："),s("ul",null,[s("li",null,"第一步：创建一个新的部门"),s("li",null,"第二步：为创建好的部门设置权限"),s("li",null,"第三步：在员工管理中将员工分配到对应部门")]),s("br"),s("b",null,"* 系统会默认创建一个管理部门，请勿删除。")],-1),j={class:"instruction-expand"};function A(m,t){const c=x("va-icon");return r(),u("div",E,[F,U,s("div",j,[h(c,{name:"expand_more"})])])}const I=C(w,[["render",A]]),L={class:"inspector"},M={class:"inspector-operation"},P=s("i",{class:"material-icons"},"add",-1),S=s("i",{class:"material-icons"},"delete",-1),T=s("th",{width:"5%"},null,-1),z=["value"],G=["onClick"],H=["onClick"],J=["onClick"],Q=y({__name:"groups",setup(m){const{t}=$(),c=q([]);function f(){l.push("groups-add")}function g(i){l.push({name:"groups-edit",query:{id:i}})}function v(){l.push("groups")}function b(i){l.push({name:"groups-users",query:{id:i}})}function k(i){l.push({name:"groups-policies",query:{id:i}})}return(i,d)=>(r(),u(_,null,[h(I),s("div",L,[s("div",M,[s("button",{class:"btn btn-primary",onClick:f},[P,p(" "+n(e(t)("groups.add")),1)]),s("button",{class:"btn btn-primary",onClick:v},[S,p(" "+n(e(t)("groups.delete")),1)])]),s("table",null,[s("thead",null,[s("tr",null,[T,s("th",null,n(e(t)("groups.name")),1),s("th",null,n(e(t)("groups.description")),1),s("th",null,n(e(t)("groups.operation")),1)])]),s("tbody",null,[(r(!0),u(_,null,V(e(N),o=>(r(),u("tr",{key:o.id},[s("td",null,[B(s("input",{"onUpdate:modelValue":d[0]||(d[0]=a=>c.value=a),type:"checkbox",value:o.id},null,8,z),[[D,c.value]])]),s("td",null,n(o.name),1),s("td",null,n(o.description),1),s("td",null,[s("a",{class:"btn-operate",onClick:a=>g(o.id)},n(e(t)("groups.edit")),9,G),s("a",{class:"btn-operate",onClick:a=>b(o.id)},n(e(t)("groups.users")),9,H),s("a",{class:"btn-operate",onClick:a=>k(o.id)},n(e(t)("groups.policies")),9,J)])]))),128))])])])],64))}});export{Q as default};
