import{f as S,u as U,g as k,r as F,o,c as a,b as u,a as e,t as l,k as n,j as _,l as w,F as c,m,w as f,n as h,q as M,s as p}from"./index-c8117043.js";import{b as C}from"./badge-d40dce2d.js";import{d as j}from"./download-db29f8a0.js";import{s as g,t as V,l as q,i as A}from"./leads-type-6f557549.js";function I(i){for(const t of g)if(t.value==i)return t.text;return""}function L(i){for(const t of V)if(t.value==i)return t.text;return""}const Q={class:"scene"},R={class:"scene-query"},$={class:"scene-query-field"},z=e("input",null,null,-1),G={class:"scene-query-field"},H=["value"],J={class:"scene-query-field"},K=["value"],O={class:"scene-query-field"},P=e("input",null,null,-1),W={class:"scene-operation"},X={class:"va-table va-table--hoverable w-full"},Y=e("th",{width:"5%"},null,-1),Z={width:"18%"},ee={width:"32%"},te=["value"],se=["onClick"],ue=S({__name:"leads",setup(i){const{t}=U(),r=k(q[0]),y=k([]);function E(){p.push("leads")}function T(){p.push("leads-add")}function B(x){p.push({name:"leads-edit",query:{id:x}})}function D(){p.push("leads")}function N(){console.log("leadsExport")}return(x,d)=>{const v=F("va-button");return o(),a(c,null,[u(A),e("div",Q,[e("div",R,[e("div",$,[e("span",null,l(n(t)("leads.name")),1),z]),e("div",G,[e("span",null,l(n(t)("leads.type")),1),_(e("select",{"onUpdate:modelValue":d[0]||(d[0]=s=>r.value.type=s)},[(o(!0),a(c,null,m(n(V),s=>(o(),a("option",{key:s.value,value:s.value},l(s.text),9,H))),128))],512),[[w,r.value.type]])]),e("div",J,[e("span",null,l(n(t)("leads.status")),1),_(e("select",{"onUpdate:modelValue":d[1]||(d[1]=s=>r.value.status=s)},[(o(!0),a(c,null,m(n(g),s=>(o(),a("option",{key:s.value,value:s.value},l(s.text),9,K))),128))],512),[[w,r.value.status]])]),e("div",O,[e("span",null,l(n(t)("leads.time")),1),P])]),e("div",W,[u(v,{preset:"primary",class:"mr-6",onClick:E},{default:f(()=>[h(l(n(t)("leads.query")),1)]),_:1}),u(v,{preset:"primary",class:"mr-6",onClick:T},{default:f(()=>[h(l(n(t)("leads.add")),1)]),_:1}),u(v,{preset:"primary",class:"mr-6",onClick:D},{default:f(()=>[h(l(n(t)("leads.delete")),1)]),_:1}),u(j,{text:n(t)("common.export"),onResolve:N},null,8,["text"])]),e("table",X,[e("thead",null,[e("tr",null,[Y,e("th",Z,l(n(t)("leads.name")),1),e("th",null,l(n(t)("leads.type")),1),e("th",null,l(n(t)("leads.status")),1),e("th",ee,l(n(t)("leads.reason")),1),e("th",null,l(n(t)("leads.follow")),1),e("th",null,l(n(t)("leads.time")),1),e("th",null,l(n(t)("leads.operation")),1)])]),e("tbody",null,[(o(!0),a(c,null,m(n(q),s=>(o(),a("tr",{key:s.id},[e("td",null,[_(e("input",{"onUpdate:modelValue":d[2]||(d[2]=b=>y.value=b),type:"checkbox",value:s.id},null,8,te),[[M,y.value]])]),e("td",null,l(s.name),1),e("td",null,[u(C,{text:n(L)(s.type)},null,8,["text"])]),e("td",null,[u(C,{text:n(I)(s.status)},null,8,["text"])]),e("td",null,l(s.reason),1),e("td",null,l(s.follow),1),e("td",null,l(s.time),1),e("td",null,[e("a",{class:"operation-button",onClick:b=>B(s.id)},l(n(t)("leads.edit")),9,se)])]))),128))])])])],64)}}});export{ue as default};
