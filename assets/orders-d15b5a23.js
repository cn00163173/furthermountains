import{_ as V,a as g,b as l,c as u,f as t,e as c,d as $,u as w,r as T,t as e,i as o,j as p,v as f,F as d,g as _,w as h,k as m,l as x}from"./index-1cf467bd.js";const y=[{id:"order-34f86t5d",account:"ecloud-18896723876",type:1,status:1,origin:"200",cost:"60",time:"2023-09-10"},{id:"order-47p8gh89",account:"ecloud-18896723876",type:1,status:1,origin:"120",cost:"40",time:"2023-09-10"}],B={},N={class:"grid-instruction"},S={class:"grid-instruction-icon"},D=t("div",{class:"grid-instruction-content"},[t("p",null,"订单。")],-1),E={class:"grid-instruction-expand"};function F(a,s){const r=g("va-icon");return l(),u("div",N,[t("div",S,[c(r,{name:"info"})]),D,t("div",E,[c(r,{name:"expand_more"})])])}const U=V(B,[["render",F]]),b=[{value:1,text:"未支付"},{value:2,text:"已支付"},{value:3,text:"作废"}],k=[{value:1,text:"新购"},{value:2,text:"续费"},{value:3,text:"升级"},{value:4,text:"降级"},{value:5,text:"退款"},{value:6,text:"其他"}];function j(a){for(const s of b)if(s.value==a)return s.text;return""}function I(a){for(const s of k)if(s.value==a)return s.text;return""}const L={class:"scene"},M={class:"scene-query"},Q={class:"scene-query-field"},z=t("input",null,null,-1),A={class:"scene-query-field"},G=t("input",null,null,-1),H={class:"scene-query-field"},J=["value"],K={class:"scene-query-field"},O=["value"],P={class:"scene-operation"},R={class:"va-table va-table--hoverable w-full"},Y=$({__name:"orders",setup(a){const{t:s}=w(),r=T(y[0]);function q(){x.push("orders")}function C(){x.push("orders")}return(W,i)=>{const v=g("va-button");return l(),u(d,null,[c(U),t("div",L,[t("div",M,[t("div",Q,[t("span",null,e(o(s)("orders.id")),1),z]),t("div",A,[t("span",null,e(o(s)("orders.account")),1),G]),t("div",H,[t("span",null,e(o(s)("orders.type")),1),p(t("select",{"onUpdate:modelValue":i[0]||(i[0]=n=>r.value.type=n)},[(l(!0),u(d,null,_(o(k),n=>(l(),u("option",{key:n.value,value:n.value},e(n.text),9,J))),128))],512),[[f,r.value.type]])]),t("div",K,[t("span",null,e(o(s)("orders.status")),1),p(t("select",{"onUpdate:modelValue":i[1]||(i[1]=n=>r.value.status=n)},[(l(!0),u(d,null,_(o(b),n=>(l(),u("option",{key:n.value,value:n.value},e(n.text),9,O))),128))],512),[[f,r.value.status]])])]),t("div",P,[c(v,{preset:"primary",class:"mr-6 mb-2",onClick:q},{default:h(()=>[m(e(o(s)("orders.query")),1)]),_:1}),c(v,{preset:"primary",class:"mr-6 mb-2",onClick:C},{default:h(()=>[m(e(o(s)("orders.export")),1)]),_:1})]),t("table",R,[t("thead",null,[t("tr",null,[t("th",null,e(o(s)("orders.id")),1),t("th",null,e(o(s)("orders.account")),1),t("th",null,e(o(s)("orders.type")),1),t("th",null,e(o(s)("orders.status")),1),t("th",null,e(o(s)("orders.origin")),1),t("th",null,e(o(s)("orders.cost")),1),t("th",null,e(o(s)("orders.time")),1)])]),t("tbody",null,[(l(!0),u(d,null,_(o(y),n=>(l(),u("tr",{key:n.id},[t("td",null,e(n.id),1),t("td",null,e(n.account),1),t("td",null,e(o(I)(n.type)),1),t("td",null,e(o(j)(n.status)),1),t("td",null,e(n.origin),1),t("td",null,e(n.cost),1),t("td",null,e(n.time),1)]))),128))])])])],64)}}});export{Y as default};
