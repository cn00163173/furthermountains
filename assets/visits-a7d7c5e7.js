import{f as D,u as N,g as y,r as S,o,c as u,b as i,a as t,t as s,k as l,j as b,l as F,F as c,m as k,w as v,n as p,q as M,s as r}from"./index-c8117043.js";import{b as T}from"./badge-d40dce2d.js";import{d as U}from"./download-db29f8a0.js";import{s as q,v as C,i as j}from"./visits-status-263582be.js";function A(m){for(const e of q)if(e.value===m)return e.text;return""}const I={class:"scene"},L={class:"scene-query"},Q={class:"scene-query-field"},R=t("input",null,null,-1),$={class:"scene-query-field"},z=["value"],G={class:"scene-query-field"},H=t("input",null,null,-1),J={class:"scene-query-field"},K=t("input",null,null,-1),O={class:"scene-operation"},P={class:"va-table va-table--hoverable w-full"},W=t("th",{width:"5%"},null,-1),X=["value"],Y=["onClick"],lt=D({__name:"visits",setup(m){const{t:e}=N(),_=y(C[0]),h=y([]);function g(){r.push("visits")}function w(){r.push("visits-add")}function V(f){r.push({name:"visits-edit",query:{id:f}})}function E(){r.push("visits")}function B(){console.log("visitsExport")}return(f,a)=>{const d=S("va-button");return o(),u(c,null,[i(j),t("div",I,[t("div",L,[t("div",Q,[t("span",null,s(l(e)("visits.customer")),1),R]),t("div",$,[t("span",null,s(l(e)("visits.status")),1),b(t("select",{"onUpdate:modelValue":a[0]||(a[0]=n=>_.value.status=n)},[(o(!0),u(c,null,k(l(q),n=>(o(),u("option",{key:n.value,value:n.value},s(n.text),9,z))),128))],512),[[F,_.value.status]])]),t("div",G,[t("span",null,s(l(e)("visits.visitor")),1),H]),t("div",J,[t("span",null,s(l(e)("visits.time")),1),K])]),t("div",O,[i(d,{preset:"primary",class:"mr-6",onClick:g},{default:v(()=>[p(s(l(e)("visits.query")),1)]),_:1}),i(d,{preset:"primary",class:"mr-6",onClick:w},{default:v(()=>[p(s(l(e)("visits.add")),1)]),_:1}),i(d,{preset:"primary",class:"mr-6",onClick:E},{default:v(()=>[p(s(l(e)("visits.delete")),1)]),_:1}),i(U,{text:l(e)("common.export"),onResolve:B},null,8,["text"])]),t("table",P,[t("thead",null,[t("tr",null,[W,t("th",null,s(l(e)("visits.customer")),1),t("th",null,s(l(e)("visits.theme")),1),t("th",null,s(l(e)("visits.status")),1),t("th",null,s(l(e)("visits.visitor")),1),t("th",null,s(l(e)("visits.time")),1),t("th",null,s(l(e)("visits.operation")),1)])]),t("tbody",null,[(o(!0),u(c,null,k(l(C),n=>(o(),u("tr",{key:n.id},[t("td",null,[b(t("input",{"onUpdate:modelValue":a[1]||(a[1]=x=>h.value=x),type:"checkbox",value:n.id},null,8,X),[[M,h.value]])]),t("td",null,s(n.customer),1),t("td",null,s(n.theme),1),t("td",null,[i(T,{text:l(A)(n.status)},null,8,["text"])]),t("td",null,s(n.visitor),1),t("td",null,s(n.time),1),t("td",null,[t("a",{class:"operation-button",onClick:x=>V(n.id)},s(l(e)("visits.edit")),9,Y)])]))),128))])])])],64)}}});export{lt as default};
