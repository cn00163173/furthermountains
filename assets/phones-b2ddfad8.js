import{_ as y,r as m,o as a,c as l,a as e,b as o,f as x,u as g,t as n,j as s,w as p,m as _,F as h,l as k,q as r}from"./index-2e2b34e7.js";const C=[{id:"1",phone:"13900001001",time:"2023-09-10",creator:"小李"},{id:"2",phone:"13900001002",time:"2023-09-10",creator:"小李"},{id:"3",phone:"13900001003",time:"2023-09-10",creator:"小李"},{id:"4",phone:"13900001004",time:"2023-09-10",creator:"小李"},{id:"5",phone:"13900001005",time:"2023-09-10",creator:"小李"},{id:"6",phone:"13900001006",time:"2023-09-10",creator:"小李"}],$={},q={class:"grid-instruction"},w={class:"grid-instruction-icon"},B=e("div",{class:"grid-instruction-content"},[e("p",null,"合作伙伴将待确认转化的客户号码导入系统中，供外呼人员进行咨询访谈等。")],-1),N={class:"grid-instruction-expand"};function V(f,t){const i=m("va-icon");return a(),l("div",q,[e("div",w,[o(i,{name:"info"})]),B,e("div",N,[o(i,{name:"expand_more"})])])}const D=y($,[["render",V]]),F={class:"scene"},j={class:"scene-query"},E={class:"scene-query-field"},I=e("input",null,null,-1),L={class:"scene-query-field"},Q=e("input",null,null,-1),S={class:"scene-operation"},T={class:"va-table va-table--hoverable w-full"},U=["onClick"],H=x({__name:"phones",setup(f){const{t}=g();function i(){r.push("phones")}function v(){r.push("phones")}function b(d){console.log(d),r.push("phones")}return(d,z)=>{const u=m("va-button");return a(),l(h,null,[o(D),e("div",F,[e("div",j,[e("div",E,[e("span",null,n(s(t)("phones.phone")),1),I]),e("div",L,[e("span",null,n(s(t)("phones.time")),1),Q])]),e("div",S,[o(u,{preset:"primary",class:"mr-6 mb-2",onClick:i},{default:p(()=>[_(n(s(t)("phones.query")),1)]),_:1}),o(u,{preset:"primary",class:"mr-6 mb-2",onClick:v},{default:p(()=>[_(n(s(t)("phones.upload")),1)]),_:1})]),e("table",T,[e("thead",null,[e("tr",null,[e("th",null,n(s(t)("phones.phone")),1),e("th",null,n(s(t)("phones.time")),1),e("th",null,n(s(t)("phones.operation")),1)])]),e("tbody",null,[(a(!0),l(h,null,k(s(C),c=>(a(),l("tr",{key:c.id},[e("td",null,n(c.phone),1),e("td",null,n(c.time),1),e("td",null,[e("a",{class:"operation-button",onClick:A=>b(c.id)},n(s(t)("phones.delete")),9,U)])]))),128))])])])],64)}}});export{H as default};
