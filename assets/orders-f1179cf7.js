import{_ as k,r as m,o as l,c as u,a as t,b as c,f as q,u as w,g as V,t as e,j as o,i as v,k as p,F as d,l as _,w as $,m as C,q as T}from"./index-3f2f9238.js";import{d as B}from"./download-f25157bd.js";const f=[{id:"order-34f86t5d",account:"ecloud-18896723876",type:1,status:1,origin:"200",cost:"60",time:"2023-09-10"},{id:"order-47p8gh89",account:"ecloud-18896723876",type:1,status:1,origin:"120",cost:"40",time:"2023-09-10"},{id:"order-7u54su78",account:"ecloud-18896723876",type:2,status:1,origin:"200",cost:"60",time:"2023-09-12"},{id:"order-y35fgh46",account:"ecloud-18896723876",type:2,status:1,origin:"120",cost:"40",time:"2023-09-12"}],E={},N={class:"grid-instruction"},S={class:"grid-instruction-icon"},D=t("div",{class:"grid-instruction-content"},[t("p",null,"订单查询为实时数据查询，对账数据（包括预付费、后付费）下载请到账单查询进行导出操作。")],-1),F={class:"grid-instruction-expand"};function U(a,s){const r=m("va-icon");return l(),u("div",N,[t("div",S,[c(r,{name:"info"})]),D,t("div",F,[c(r,{name:"expand_more"})])])}const j=k(E,[["render",U]]),h=[{value:1,text:"未支付"},{value:2,text:"已支付"},{value:3,text:"作废"}],x=[{value:1,text:"新购"},{value:2,text:"续费"},{value:3,text:"升级"},{value:4,text:"降级"},{value:5,text:"退款"},{value:6,text:"其他"}];function I(a){for(const s of h)if(s.value==a)return s.text;return""}function L(a){for(const s of x)if(s.value==a)return s.text;return""}const M={class:"scene"},Q={class:"scene-query"},R={class:"scene-query-field"},z=t("input",null,null,-1),A={class:"scene-query-field"},G=t("input",null,null,-1),H={class:"scene-query-field"},J=["value"],K={class:"scene-query-field"},O=["value"],P={class:"scene-operation"},W={class:"va-table va-table--hoverable w-full"},tt=q({__name:"orders",setup(a){const{t:s}=w(),r=V(f[0]);function y(){T.push("orders")}function g(){console.log("ordersExport")}return(X,i)=>{const b=m("va-button");return l(),u(d,null,[c(j),t("div",M,[t("div",Q,[t("div",R,[t("span",null,e(o(s)("orders.id")),1),z]),t("div",A,[t("span",null,e(o(s)("orders.account")),1),G]),t("div",H,[t("span",null,e(o(s)("orders.type")),1),v(t("select",{"onUpdate:modelValue":i[0]||(i[0]=n=>r.value.type=n)},[(l(!0),u(d,null,_(o(x),n=>(l(),u("option",{key:n.value,value:n.value},e(n.text),9,J))),128))],512),[[p,r.value.type]])]),t("div",K,[t("span",null,e(o(s)("orders.status")),1),v(t("select",{"onUpdate:modelValue":i[1]||(i[1]=n=>r.value.status=n)},[(l(!0),u(d,null,_(o(h),n=>(l(),u("option",{key:n.value,value:n.value},e(n.text),9,O))),128))],512),[[p,r.value.status]])])]),t("div",P,[c(b,{preset:"primary",class:"mr-6",onClick:y},{default:$(()=>[C(e(o(s)("orders.query")),1)]),_:1}),c(B,{content:o(s)("common.export"),onResolve:g},null,8,["content"])]),t("table",W,[t("thead",null,[t("tr",null,[t("th",null,e(o(s)("orders.id")),1),t("th",null,e(o(s)("orders.account")),1),t("th",null,e(o(s)("orders.type")),1),t("th",null,e(o(s)("orders.status")),1),t("th",null,e(o(s)("orders.origin")),1),t("th",null,e(o(s)("orders.cost")),1),t("th",null,e(o(s)("orders.time")),1)])]),t("tbody",null,[(l(!0),u(d,null,_(o(f),n=>(l(),u("tr",{key:n.id},[t("td",null,e(n.id),1),t("td",null,e(n.account),1),t("td",null,e(o(L)(n.type)),1),t("td",null,e(o(I)(n.status)),1),t("td",null,e(n.origin),1),t("td",null,e(n.cost),1),t("td",null,e(n.time),1)]))),128))])])])],64)}}});export{tt as default};
