import{_ as p,o as i,c,a as h,f as v,u as m,d as f,b as t,t as e,i as n,F as o,j as a,k as y,l as x}from"./index-a16e4b2d.js";import{r as k,t as b,g,a as T,c as $}from"./clients-cf16e44a.js";const q={},C={class:"instruction"},N=h('<div class="instruction-icon"><i class="material-icons">info</i></div><div class="instruction-content"><p>我的客户说明事项，待补充。</p></div><div class="instruction-expand"><i class="material-icons">expand_more</i></div>',3),V=[N];function B(u,l){return i(),c("div",C,V)}const S=p(q,[["render",B]]),F={class:"inspector"},I={class:"inspector-query"},j={class:"inspector-query-field"},D=["placeholder"],E={class:"inspector-query-field"},L=["value"],R={class:"inspector-query-field"},w=["value"],z={class:"inspector-operation"},A=t("i",{class:"material-icons"},"search",-1),G=["onClick"],O=v({__name:"clients",setup(u){const{t:l}=m();function d(){x.push("clients")}function _(r){console.log(r)}return(r,H)=>(i(),c(o,null,[f(S),t("div",F,[t("div",I,[t("div",j,[t("span",null,e(n(l)("clients.name")),1),t("input",{placeholder:n(l)("clients.name")},null,8,D)]),t("div",E,[t("span",null,e(n(l)("clients.real")),1),t("select",null,[(i(!0),c(o,null,a(n(k),s=>(i(),c("option",{key:s.value,value:s.value},e(s.text),9,L))),128))])]),t("div",R,[t("span",null,e(n(l)("clients.type")),1),t("select",null,[(i(!0),c(o,null,a(n(b),s=>(i(),c("option",{key:s.value,value:s.value},e(s.text),9,w))),128))])])]),t("div",z,[t("button",{class:"btn btn-primary",onClick:d},[A,y(" "+e(n(l)("clients.operation.search")),1)])]),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,e(n(l)("clients.id")),1),t("th",null,e(n(l)("clients.name")),1),t("th",null,e(n(l)("clients.account")),1),t("th",null,e(n(l)("clients.real")),1),t("th",null,e(n(l)("clients.type")),1),t("th",null,e(n(l)("clients.associationTime")),1)])]),t("tbody",null,[(i(!0),c(o,null,a(n($),s=>(i(),c("tr",{key:s.id},[t("td",null,[t("a",{class:"btn-operate",onClick:J=>_(s.id)},e(s.id),9,G)]),t("td",null,e(s.name),1),t("td",null,e(s.account),1),t("td",null,e(n(g)(s.real)),1),t("td",null,e(n(T)(s.type)),1),t("td",null,e(s.associationTime),1)]))),128))])])])],64))}});export{O as default};
