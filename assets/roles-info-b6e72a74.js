import{_ as p,r as _,o as c,n as m,w as h,b as a,f as b,u as v,s as x,c as d,a as s,t as e,i as t,F as f,k as y}from"./index-2d861370.js";import{b as g}from"./badge-12065543.js";import{r as k}from"./roles-012a2e71.js";import{p as w}from"./policies-6ab3ede1.js";import{g as B}from"./roles-a8c5a26c.js";const C={};function F(u,o){const n=_("va-breadcrumbs-item"),l=_("va-breadcrumbs");return c(),m(l,{separator:">",class:"breadcrumbs"},{default:h(()=>[a(n,{label:"组织架构"}),a(n,{label:"角色管理"}),a(n,{label:"角色详情"})]),_:1})}const N=p(C,[["render",F]]),T={class:"inspector"},V={class:"info-header"},$={class:"info-field"},q={class:"info-field-label"},z={class:"info-field-value"},D={class:"info-body"},E={class:"info-field",style:{width:"20%"}},I={class:"info-field-label"},L={class:"info-field-value"},R={class:"info-field",style:{width:"20%"}},S={class:"info-field-label"},j={class:"info-field-value"},A={class:"info-field",style:{width:"60%"}},G={class:"info-field-label"},H={class:"info-field-value"},J={class:"inspector"},K={class:"inspector-field"},M={style:{"font-size":"14px"}},O={class:"inspector-field"},P={class:"td-container"},ss=b({__name:"roles-info",setup(u){const{t:o}=v(),n=x();let l;for(let r of k)r.id==`${n.query.id}`&&(l=r);return(r,Q)=>(c(),d(f,null,[a(N),s("div",T,[s("div",V,[s("div",$,[s("span",q,e(t(l).name),1),s("span",z,[a(g,{text:t(B)(t(l).type)},null,8,["text"])])])]),s("div",D,[s("div",E,[s("span",I,e(t(o)("roles.name")),1),s("span",L,e(t(l).name),1)]),s("div",R,[s("span",S,e(t(o)("roles.member"))+":",1),s("span",j,e(t(l).member),1)]),s("div",A,[s("span",G,e(t(o)("roles.description"))+":",1),s("span",H,e(t(l).description),1)])])]),s("div",J,[s("div",K,[s("h1",M,e(t(o)("roles.title.policies")),1)]),s("div",O,[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,e(t(o)("roles.module")),1),s("th",null,e(t(o)("roles.page")),1),s("th",null,e(t(o)("roles.feature")),1)])]),s("tbody",null,[(c(!0),d(f,null,y(t(w),i=>(c(),d("tr",{key:i.id},[s("td",null,e(i.module),1),s("td",null,e(i.page),1),s("td",null,[s("div",P,[s("span",null,e(i.feature),1)])])]))),128))])])])])],64))}});export{ss as default};
