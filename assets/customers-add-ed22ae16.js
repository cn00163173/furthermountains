import{_ as x,r as p,o as c,z as y,w as V,b as u,f as B,u as C,g as w,c as r,a as e,t as a,k as l,j as i,B as _,l as v,F as m,m as f,s as b}from"./index-be623cb5.js";import{c as U}from"./customers-0b3cd489.js";import{t as g,s as D}from"./customers-source-243249eb.js";const F={};function M(h,n){const t=p("va-breadcrumbs-item"),d=p("va-breadcrumbs");return c(),y(d,{separator:">",class:"breadcrumbs"},{default:V(()=>[u(t,{label:"客户中心"}),u(t,{label:"客户管理"}),u(t,{label:"添加客户"})]),_:1})}const N=x(F,[["render",M]]),S={class:"inspector"},j={class:"inspector-field"},z={class:"inspector-field-label"},E={class:"inspector-field"},I={class:"inspector-field-label"},L=["value"],T={class:"inspector-field"},$={class:"inspector-field-label"},q=["value"],A={class:"inspector-field"},G={class:"inspector-field-label"},H={class:"inspector-operation"},Q=B({__name:"customers-add",setup(h){const{t:n}=C(),t=w(U[0]);function d(){b.push("customers")}function k(){b.push("customers")}return(J,o)=>(c(),r(m,null,[u(N),e("div",S,[e("form",null,[e("div",j,[e("div",z,a(l(n)("customers.name")),1),i(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.value.name=s),class:"inspector-field-input"},null,512),[[_,t.value.name]])]),e("div",E,[e("div",I,a(l(n)("customers.type")),1),i(e("select",{"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.type=s),class:"inspector-field-select"},[(c(!0),r(m,null,f(l(g),s=>(c(),r("option",{key:s.value,value:s.value},a(s.text),9,L))),128))],512),[[v,t.value.type]])]),e("div",T,[e("div",$,a(l(n)("customers.source")),1),i(e("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.value.source=s),class:"inspector-field-select"},[(c(!0),r(m,null,f(l(D),s=>(c(),r("option",{key:s.value,value:s.value},a(s.text),9,q))),128))],512),[[v,t.value.source]])]),e("div",A,[e("div",G,a(l(n)("customers.description")),1),i(e("textarea",{"onUpdate:modelValue":o[3]||(o[3]=s=>t.value.description=s),class:"inspector-field-input",rows:"4"},null,512),[[_,t.value.description]])]),e("div",H,[e("a",{class:"btn btn-primary",onClick:d},a(l(n)("common.submit")),1),e("a",{class:"btn btn-secondary",onClick:k},a(l(n)("common.back")),1)])])])],64))}});export{Q as default};
