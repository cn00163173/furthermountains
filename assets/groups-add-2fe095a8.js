import{_ as f,r as l,o as _,l as g,w as v,b as a,f as y,u as h,g as k,c as x,a as s,t as r,k as i,q as c,v as u,F as C,y as m}from"./index-62a008d4.js";import{i as w}from"./groups-instruction-5cb81b3f.js";import{g as B}from"./groups-581ef8ff.js";const V={};function D(b,o){const e=l("va-breadcrumbs-item"),d=l("va-breadcrumbs");return _(),g(d,{separator:">",class:"mb-2"},{default:v(()=>[a(e,{label:"客户中心"}),a(e,{label:"部门管理"}),a(e,{label:"添加部门"})]),_:1})}const F=f(V,[["render",D]]),N={class:"grid-head"},U={class:"grid-body"},q={class:"grid-body-field"},E={class:"grid-body-field-label"},I={class:"grid-body-field"},M={class:"grid-body-field-label"},S={class:"grid-body-field"},A=y({__name:"groups-add",setup(b){const{t:o}=h(),e=k(B[0]);function d(){m.push("groups")}function p(){m.push("groups")}return(T,t)=>(_(),x(C,null,[s("div",N,[a(F),a(w)]),s("div",U,[s("form",null,[s("div",q,[s("div",E,r(i(o)("groups.name")),1),c(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>e.value.name=n),class:"grid-body-field-input"},null,512),[[u,e.value.name]])]),s("div",I,[s("div",M,r(i(o)("groups.description")),1),c(s("textarea",{"onUpdate:modelValue":t[1]||(t[1]=n=>e.value.description=n),class:"grid-body-field-input",rows:"4"},null,512),[[u,e.value.description]])]),s("div",S,[s("a",{class:"grid-body-field-submit",onClick:d},r(i(o)("common.submit")),1),s("a",{class:"grid-body-field-back",onClick:p},r(i(o)("common.back")),1)])])])],64))}});export{A as default};
