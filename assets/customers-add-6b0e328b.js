import{_ as h,r as _,o as i,l as k,w as x,b as c,f as V,u as C,g as w,c as r,a as e,t as a,k as d,q as n,v as b,s as v,F as m,x as f,y as p}from"./index-62a008d4.js";import{i as B}from"./customers-instruction-529cf46e.js";import{c as U}from"./customers-ce469669.js";import{t as D,s as F}from"./customers-type-2dfa0339.js";const M={};function N(y,l){const o=_("va-breadcrumbs-item"),u=_("va-breadcrumbs");return i(),k(u,{separator:">",class:"mb-2"},{default:x(()=>[c(o,{label:"客户中心"}),c(o,{label:"客户管理"}),c(o,{label:"添加客户"})]),_:1})}const S=h(M,[["render",N]]),q={class:"grid-head"},E={class:"grid-body"},I={class:"grid-body-field"},L={class:"grid-body-field-label"},T={class:"grid-body-field"},$={class:"grid-body-field-label"},j=["value"],z={class:"grid-body-field"},A={class:"grid-body-field-label"},G=["value"],H={class:"grid-body-field"},J={class:"grid-body-field-label"},K={class:"grid-body-field"},X=V({__name:"customers-add",setup(y){const{t:l}=C(),o=w(U[0]);function u(){p.push("customers")}function g(){p.push("customers")}return(O,t)=>(i(),r(m,null,[e("div",q,[c(S),c(B)]),e("div",E,[e("form",null,[e("div",I,[e("div",L,a(d(l)("customers.name")),1),n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.name=s),class:"grid-body-field-input"},null,512),[[b,o.value.name]])]),e("div",T,[e("div",$,a(d(l)("customers.type")),1),n(e("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.type=s),class:"grid-body-field-select"},[(i(!0),r(m,null,f(d(D),s=>(i(),r("option",{key:s.value,value:s.value},a(s.text),9,j))),128))],512),[[v,o.value.type]])]),e("div",z,[e("div",A,a(d(l)("customers.source")),1),n(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.source=s),class:"grid-body-field-select"},[(i(!0),r(m,null,f(d(F),s=>(i(),r("option",{key:s.value,value:s.value},a(s.text),9,G))),128))],512),[[v,o.value.source]])]),e("div",H,[e("div",J,a(d(l)("customers.description")),1),n(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.description=s),class:"grid-body-field-input",rows:"4"},null,512),[[b,o.value.description]])]),e("div",K,[e("a",{class:"grid-body-field-submit",onClick:u},a(d(l)("common.submit")),1),e("a",{class:"grid-body-field-back",onClick:g},a(d(l)("common.back")),1)])])])],64))}});export{X as default};
