import{_ as x,r as f,o as r,z as V,w as y,b as p,f as U,u as B,g as C,c,a as e,t as l,k as i,j as a,B as u,l as _,F as d,m,s as b}from"./index-be623cb5.js";import{o as N,t as w,s as T,p as g}from"./opportunities-type-c43d0d74.js";const D={};function F(h,n){const t=f("va-breadcrumbs-item"),v=f("va-breadcrumbs");return r(),V(v,{separator:">",class:"breadcrumbs"},{default:y(()=>[p(t,{label:"商机管理"}),p(t,{label:"商机管理"}),p(t,{label:"创建商机"})]),_:1})}const M=x(D,[["render",F]]),S={class:"inspector"},j={class:"inspector-field"},z={class:"inspector-field-label"},E={class:"inspector-field"},I={class:"inspector-field-label"},L={class:"inspector-field"},$={class:"inspector-field-label"},q=["value"],A={class:"inspector-field"},G={class:"inspector-field-label"},H=["value"],J={class:"inspector-field"},K={class:"inspector-field-label"},O=["value"],P={class:"inspector-field"},Q={class:"inspector-field-label"},R={class:"inspector-field"},W={class:"inspector-field-label"},X={class:"inspector-field"},Y={class:"inspector-field-label"},Z={class:"inspector-operation"},oe=U({__name:"opportunities-add",setup(h){const{t:n}=B(),t=C(N[0]);function v(){b.push("opportunities")}function k(){b.push("opportunities")}return(ee,o)=>(r(),c(d,null,[p(M),e("div",S,[e("form",null,[e("div",j,[e("div",z,l(i(n)("opportunities.name")),1),a(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.name=s),class:"inspector-field-input"},null,512),[[u,t.value.name]])]),e("div",E,[e("div",I,l(i(n)("opportunities.customerName")),1),a(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.customerName=s),class:"inspector-field-input"},null,512),[[u,t.value.customerName]])]),e("div",L,[e("div",$,l(i(n)("opportunities.customerType")),1),a(e("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.customerType=s),class:"inspector-field-select"},[(r(!0),c(d,null,m(i(w),s=>(r(),c("option",{key:s.value,value:s.value},l(s.text),9,q))),128))],512),[[_,t.value.customerType]])]),e("div",A,[e("div",G,l(i(n)("opportunities.status")),1),a(e("select",{"onUpdate:modelValue":o[3]||(o[3]=s=>t.value.status=s),class:"inspector-field-select"},[(r(!0),c(d,null,m(i(T),s=>(r(),c("option",{key:s.value,value:s.value},l(s.text),9,H))),128))],512),[[_,t.value.status]])]),e("div",J,[e("div",K,l(i(n)("opportunities.phase")),1),a(e("select",{"onUpdate:modelValue":o[4]||(o[4]=s=>t.value.phase=s),class:"inspector-field-select"},[(r(!0),c(d,null,m(i(g),s=>(r(),c("option",{key:s.value,value:s.value},l(s.text),9,O))),128))],512),[[_,t.value.phase]])]),e("div",P,[e("div",Q,l(i(n)("opportunities.rate")),1),a(e("input",{"onUpdate:modelValue":o[5]||(o[5]=s=>t.value.rate=s),class:"inspector-field-input"},null,512),[[u,t.value.rate]])]),e("div",R,[e("div",W,l(i(n)("opportunities.creator")),1),a(e("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>t.value.creator=s),class:"inspector-field-input"},null,512),[[u,t.value.creator]])]),e("div",X,[e("div",Y,l(i(n)("opportunities.description")),1),a(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=s=>t.value.description=s),class:"inspector-field-input",rows:"4"},null,512),[[u,t.value.description]])]),e("div",Z,[e("a",{class:"btn btn-primary",onClick:v},l(i(n)("common.submit")),1),e("a",{class:"btn btn-secondary",onClick:k},l(i(n)("common.back")),1)])])])],64))}});export{oe as default};
