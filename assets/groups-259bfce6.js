import{f as y,u as x,g as w,r as q,o as u,c as i,b as c,a as e,w as m,m as h,t as s,j as t,F as g,l as V,i as B,n as D,q as l}from"./index-3f2f9238.js";import{i as N}from"./groups-instruction-ddf2485d.js";import{g as $}from"./groups-581ef8ff.js";const E={class:"scene"},F={class:"scene-operation"},U={class:"va-table va-table--hoverable w-full"},j=e("th",{width:"5%"},null,-1),A=["value"],I=["onClick"],L=["onClick"],M=["onClick"],G=y({__name:"groups",setup(P){const{t:o}=x(),p=w([]);function f(){l.push("groups-add")}function v(a){l.push({name:"groups-edit",query:{id:a}})}function b(){l.push("groups")}function k(a){l.push({name:"groups-users",query:{id:a}})}function C(a){l.push({name:"groups-policies",query:{id:a}})}return(a,d)=>{const _=q("va-button");return u(),i(g,null,[c(N),e("div",E,[e("div",F,[c(_,{preset:"primary",class:"mr-6",onClick:f},{default:m(()=>[h(s(t(o)("groups.add")),1)]),_:1}),c(_,{preset:"primary",class:"mr-6",onClick:b},{default:m(()=>[h(s(t(o)("groups.delete")),1)]),_:1})]),e("table",U,[e("thead",null,[e("tr",null,[j,e("th",null,s(t(o)("groups.name")),1),e("th",null,s(t(o)("groups.description")),1),e("th",null,s(t(o)("groups.operation")),1)])]),e("tbody",null,[(u(!0),i(g,null,V(t($),n=>(u(),i("tr",{key:n.id},[e("td",null,[B(e("input",{"onUpdate:modelValue":d[0]||(d[0]=r=>p.value=r),type:"checkbox",value:n.id},null,8,A),[[D,p.value]])]),e("td",null,s(n.name),1),e("td",null,s(n.description),1),e("td",null,[e("a",{class:"operation-button",onClick:r=>v(n.id)},s(t(o)("groups.edit")),9,I),e("a",{class:"operation-button",onClick:r=>k(n.id)},s(t(o)("groups.users")),9,L),e("a",{class:"operation-button",onClick:r=>C(n.id)},s(t(o)("groups.policies")),9,M)])]))),128))])])])],64)}}});export{G as default};
