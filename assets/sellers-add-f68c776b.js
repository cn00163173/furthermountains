import{_ as p,r as u,o as r,l as y,w as g,b as n,f as h,u as k,g as x,c,a as e,t as l,k as o,q as _,v as C,s as B,F as m,x as V,y as b}from"./index-62a008d4.js";import{s as w,i as D,t as F}from"./sellers-type-7f03ca3e.js";const M={};function N(f,t){const s=u("va-breadcrumbs-item"),i=u("va-breadcrumbs");return r(),y(i,{separator:">",class:"mb-2"},{default:g(()=>[n(s,{label:"经销商管理"}),n(s,{label:"添加经销商"})]),_:1})}const S=p(M,[["render",N]]),U={class:"grid-head"},q={class:"grid-body"},E={class:"grid-body-field"},I={class:"grid-body-field-label"},L={class:"grid-body-field"},T={class:"grid-body-field-label"},$=["value"],j={class:"grid-body-field"},H=h({__name:"sellers-add",setup(f){const{t}=k(),s=x(w[0]);function i(){b.push("sellers")}function v(){b.push("sellers")}return(z,d)=>(r(),c(m,null,[e("div",U,[n(S),n(D)]),e("div",q,[e("form",null,[e("div",E,[e("div",I,l(o(t)("sellers.name")),1),_(e("input",{"onUpdate:modelValue":d[0]||(d[0]=a=>s.value.name=a),class:"grid-body-field-input"},null,512),[[C,s.value.name]])]),e("div",L,[e("div",T,l(o(t)("sellers.type")),1),_(e("select",{"onUpdate:modelValue":d[1]||(d[1]=a=>s.value.type=a),class:"grid-body-field-select"},[(r(!0),c(m,null,V(o(F),a=>(r(),c("option",{key:a.value,value:a.value},l(a.text),9,$))),128))],512),[[B,s.value.type]])]),e("div",j,[e("a",{class:"grid-body-field-submit",onClick:i},l(o(t)("common.submit")),1),e("a",{class:"grid-body-field-back",onClick:v},l(o(t)("common.back")),1)])])])],64))}});export{H as default};
