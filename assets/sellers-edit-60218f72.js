import{_ as g,r as _,o as i,l as h,w as k,b as n,f as x,u as C,z as B,c as u,a as e,t as a,k as s,q as m,v as V,s as w,F as b,x as q,y as f}from"./index-62a008d4.js";import{s as D,i as F,t as M}from"./sellers-type-7f03ca3e.js";const N={};function S(p,l){const r=_("va-breadcrumbs-item"),t=_("va-breadcrumbs");return i(),h(t,{separator:">",class:"mb-2"},{default:k(()=>[n(r,{label:"经销商管理"}),n(r,{label:"编辑经销商"})]),_:1})}const U=g(N,[["render",S]]),$={class:"grid-head"},z={class:"grid-body"},E={class:"grid-body-field"},I={class:"grid-body-field-label"},L={class:"grid-body-field"},R={class:"grid-body-field-label"},T=["value"],j={class:"grid-body-field"},H=x({__name:"sellers-edit",setup(p){const{t:l}=C(),r=B();let t;for(let c of D)c.id==`${r.query.id}`&&(t=c);function v(){f.push("sellers")}function y(){f.push("sellers")}return(c,d)=>(i(),u(b,null,[e("div",$,[n(U),n(F)]),e("div",z,[e("form",null,[e("div",E,[e("div",I,a(s(l)("sellers.name")),1),m(e("input",{"onUpdate:modelValue":d[0]||(d[0]=o=>s(t).name=o),class:"grid-body-field-input"},null,512),[[V,s(t).name]])]),e("div",L,[e("div",R,a(s(l)("sellers.type")),1),m(e("select",{"onUpdate:modelValue":d[1]||(d[1]=o=>s(t).type=o),class:"grid-body-field-select"},[(i(!0),u(b,null,q(s(M),o=>(i(),u("option",{key:o.value,value:o.value},a(o.text),9,T))),128))],512),[[w,s(t).type]])]),e("div",j,[e("a",{class:"grid-body-field-submit",onClick:v},a(s(l)("common.submit")),1),e("a",{class:"grid-body-field-back",onClick:y},a(s(l)("common.back")),1)])])])],64))}});export{H as default};
