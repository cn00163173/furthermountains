import{_ as f,r as l,o as m,z as v,w as g,b as r,f as h,u as k,g as x,c as B,a as s,t as a,k as n,j as u,B as d,F as C,s as p}from"./index-be623cb5.js";import{g as w}from"./groups-581ef8ff.js";const V={};function y(_,o){const e=l("va-breadcrumbs-item"),c=l("va-breadcrumbs");return m(),v(c,{separator:">",class:"breadcrumbs"},{default:g(()=>[r(e,{label:"客户中心"}),r(e,{label:"部门管理"}),r(e,{label:"添加部门"})]),_:1})}const D=f(V,[["render",y]]),F={class:"inspector"},N={class:"inspector-field"},U={class:"inspector-field-label"},j={class:"inspector-field"},z={class:"inspector-field-label"},E={class:"inspector-operation"},T=h({__name:"groups-add",setup(_){const{t:o}=k(),e=x(w[0]);function c(){p.push("groups")}function b(){p.push("groups")}return(I,t)=>(m(),B(C,null,[r(D),s("div",F,[s("form",null,[s("div",N,[s("div",U,a(n(o)("groups.name")),1),u(s("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.value.name=i),class:"inspector-field-input"},null,512),[[d,e.value.name]])]),s("div",j,[s("div",z,a(n(o)("groups.description")),1),u(s("textarea",{"onUpdate:modelValue":t[1]||(t[1]=i=>e.value.description=i),class:"inspector-field-input",rows:"4"},null,512),[[d,e.value.description]])]),s("div",E,[s("a",{class:"btn btn-primary",onClick:c},a(n(o)("common.submit")),1),s("a",{class:"btn btn-secondary",onClick:b},a(n(o)("common.back")),1)])])])],64))}});export{T as default};
