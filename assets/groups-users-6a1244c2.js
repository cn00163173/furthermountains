import{_ as v,r,o as c,z as g,w as m,b as n,f as x,u as y,C as k,c as d,a as t,t as e,k as a,F as i,m as C}from"./index-16add67a.js";import{g as w}from"./groups-581ef8ff.js";import{u as B}from"./users-type-052d7254.js";import{g as S,a as T,b as F}from"./users-ee726d0c.js";const N={};function V(p,o){const l=r("va-breadcrumbs-item"),u=r("va-breadcrumbs");return c(),g(u,{separator:">",class:"mb-2"},{default:m(()=>[n(l,{label:"客户中心"}),n(l,{label:"部门管理"}),n(l,{label:"员工列表"})]),_:1})}const $=v(N,[["render",V]]),q={class:"grid-head"},z={class:"grid-body"},D={class:"grid-body-info"},E={class:"va-table va-table--hoverable w-full"},G=x({__name:"groups-users",setup(p){const{t:o}=y(),l=k();let u;for(let _ of w)_.id==`${l.query.id}`&&(u=_);return(_,I)=>{const b=r("va-badge"),f=r("va-card-content"),h=r("va-card");return c(),d(i,null,[t("div",q,[n($)]),t("div",z,[t("div",D,[t("h1",null,e(a(u).name)+" - 员工列表",1)]),n(h,null,{default:m(()=>[n(f,{class:"overflow-auto"},{default:m(()=>[t("table",E,[t("thead",null,[t("tr",null,[t("th",null,e(a(o)("users.username")),1),t("th",null,e(a(o)("users.name")),1),t("th",null,e(a(o)("users.email")),1),t("th",null,e(a(o)("users.phone")),1),t("th",null,e(a(o)("users.type")),1),t("th",null,e(a(o)("users.status")),1)])]),t("tbody",null,[(c(!0),d(i,null,C(a(B),s=>(c(),d("tr",{key:s.id},[t("td",null,e(s.username),1),t("td",null,e(s.name),1),t("td",null,e(s.email),1),t("td",null,e(s.phone),1),t("td",null,e(a(S)(s.type)),1),t("td",null,[n(b,{text:a(T)(s.status),color:a(F)(s.status)},null,8,["text","color"])])]))),128))])])]),_:1})]),_:1})])],64)}}});export{G as default};
