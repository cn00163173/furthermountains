import{_ as h,a as _,b as i,h as k,w as x,e as n,d as V,u as C,r as w,c as r,f as e,t as a,i as d,j as c,n as b,v,F as m,g as f,l as p}from"./index-1cf467bd.js";import{c as B,i as U,t as D,s as F}from"./customers-source-65c0052f.js";const M={};function N(y,l){const t=_("va-breadcrumbs-item"),u=_("va-breadcrumbs");return i(),k(u,{separator:">",class:"mb-2"},{default:x(()=>[n(t,{label:"客户中心"}),n(t,{label:"客户管理"}),n(t,{label:"添加客户"})]),_:1})}const S=h(M,[["render",N]]),j={class:"grid-head"},E={class:"grid-body"},I={class:"grid-body-field"},L={class:"grid-body-field-label"},T={class:"grid-body-field"},$={class:"grid-body-field-label"},q=["value"],z={class:"grid-body-field"},A={class:"grid-body-field-label"},G=["value"],H={class:"grid-body-field"},J={class:"grid-body-field-label"},K={class:"grid-body-field"},R=V({__name:"customers-add",setup(y){const{t:l}=C(),t=w(B[0]);function u(){p.push("customers")}function g(){p.push("customers")}return(O,o)=>(i(),r(m,null,[e("div",j,[n(S),n(U)]),e("div",E,[e("form",null,[e("div",I,[e("div",L,a(d(l)("customers.name")),1),c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.name=s),class:"grid-body-field-input"},null,512),[[b,t.value.name]])]),e("div",T,[e("div",$,a(d(l)("customers.type")),1),c(e("select",{"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.type=s),class:"grid-body-field-select"},[(i(!0),r(m,null,f(d(D),s=>(i(),r("option",{key:s.value,value:s.value},a(s.text),9,q))),128))],512),[[v,t.value.type]])]),e("div",z,[e("div",A,a(d(l)("customers.source")),1),c(e("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.source=s),class:"grid-body-field-select"},[(i(!0),r(m,null,f(d(F),s=>(i(),r("option",{key:s.value,value:s.value},a(s.text),9,G))),128))],512),[[v,t.value.source]])]),e("div",H,[e("div",J,a(d(l)("customers.description")),1),c(e("textarea",{"onUpdate:modelValue":o[3]||(o[3]=s=>t.value.description=s),class:"grid-body-field-input",rows:"4"},null,512),[[b,t.value.description]])]),e("div",K,[e("a",{class:"grid-body-field-submit",onClick:u},a(d(l)("common.submit")),1),e("a",{class:"grid-body-field-back",onClick:g},a(d(l)("common.back")),1)])])])],64))}});export{R as default};
