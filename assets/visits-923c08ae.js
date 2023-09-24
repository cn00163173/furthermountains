import{d as D,u as N,r as b,a as S,b as i,c as o,e as a,f as t,t as s,i as l,j as k,v as E,F as c,g as x,w as v,k as p,l as r,m as F}from"./index-1cf467bd.js";import{s as q,i as M,v as C}from"./visits-status-1ea2bcff.js";function T(_){for(const e of q)if(e.value===_)return e.text;return""}const U={class:"scene"},j={class:"scene-query"},A={class:"scene-query-field"},I=t("input",null,null,-1),L={class:"scene-query-field"},Q=["value"],$={class:"scene-query-field"},z=t("input",null,null,-1),G={class:"scene-query-field"},H=t("input",null,null,-1),J={class:"scene-operation"},K={class:"va-table va-table--hoverable w-full"},O=t("th",{width:"5%"},null,-1),P=["value"],R=["onClick"],Y=D({__name:"visits",setup(_){const{t:e}=N(),h=b(C[0]),m=b([]);function w(){r.push("visits")}function V(){r.push("visits-add")}function g(f){r.push({name:"visits-edit",query:{id:f}})}function B(){r.push("visits")}return(f,u)=>{const d=S("va-button");return i(),o(c,null,[a(M),t("div",U,[t("div",j,[t("div",A,[t("span",null,s(l(e)("visits.customer")),1),I]),t("div",L,[t("span",null,s(l(e)("visits.status")),1),k(t("select",{"onUpdate:modelValue":u[0]||(u[0]=n=>h.value.status=n)},[(i(!0),o(c,null,x(l(q),n=>(i(),o("option",{key:n.value,value:n.value},s(n.text),9,Q))),128))],512),[[E,h.value.status]])]),t("div",$,[t("span",null,s(l(e)("visits.visitor")),1),z]),t("div",G,[t("span",null,s(l(e)("visits.time")),1),H])]),t("div",J,[a(d,{preset:"primary",class:"mr-6 mb-2",onClick:w},{default:v(()=>[p(s(l(e)("visits.query")),1)]),_:1}),a(d,{preset:"primary",class:"mr-6 mb-2",onClick:V},{default:v(()=>[p(s(l(e)("visits.add")),1)]),_:1}),a(d,{preset:"primary",class:"mr-6 mb-2",onClick:B},{default:v(()=>[p(s(l(e)("visits.delete")),1)]),_:1})]),t("table",K,[t("thead",null,[t("tr",null,[O,t("th",null,s(l(e)("visits.customer")),1),t("th",null,s(l(e)("visits.theme")),1),t("th",null,s(l(e)("visits.status")),1),t("th",null,s(l(e)("visits.visitor")),1),t("th",null,s(l(e)("visits.time")),1),t("th",null,s(l(e)("visits.operation")),1)])]),t("tbody",null,[(i(!0),o(c,null,x(l(C),n=>(i(),o("tr",{key:n.id},[t("td",null,[k(t("input",{"onUpdate:modelValue":u[1]||(u[1]=y=>m.value=y),type:"checkbox",value:n.id},null,8,P),[[F,m.value]])]),t("td",null,s(n.customer),1),t("td",null,s(n.theme),1),t("td",null,s(l(T)(n.status)),1),t("td",null,s(n.visitor),1),t("td",null,s(n.time),1),t("td",null,[t("a",{class:"operation-button",onClick:y=>g(n.id)},s(l(e)("visits.edit")),9,R)])]))),128))])])])],64)}}});export{Y as default};
