import{_ as M,r as P,o as c,c as r,a as t,b as d,d as Q,f as S,u as U,i as B,j as h,v as W,t as n,g,k as s,l as k,F as _,m as y,n as q,q as j,s as $,x as z,y as A,z as X,A as Y}from"./index-be623cb5.js";import{b as x}from"./badge-85fea32c.js";import{d as L}from"./download-049e8f0b.js";import{t as D,s as N}from"./customers-source-243249eb.js";const Z={},tt={class:"instruction"},et=Q('<div class="instruction-icon"><i class="material-icons">info</i></div><div class="instruction-content"><p>经销商发展的客户资源都在此处进行管理，主要面向各个地市公司网格发展的中小型企业，客户类型分为：</p><ul><li><b>移动云客户</b> - 新发展的中小型企业客户，年费用在2万-30万之间；<b>自持客户</b> - 经销商自己带过来的客户，年费用在2万-30万之间</li></ul><p>客户来源主要包括两部分：</p><ul><li><b>自持客户</b> - 从其他云供应商迁移过来，业务重新部署；<b>线索</b> - 根据情报线索发展的中小型客户</li></ul></div>',2),st={class:"instruction-expand"};function nt(a,e){const i=P("va-icon");return c(),r("div",tt,[et,t("div",st,[d(i,{name:"expand_more"})])])}const ot=M(Z,[["render",nt]]),lt={visible:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""}},at=S({props:lt,emits:["confirm","cancel"],setup(a,e){const{t:i}=U(),u=B({visible:a.visible});return{t:i,confirm:()=>{e.emit("confirm")},cancel:()=>{u.visible=!1,e.emit("cancel")}}}});const ut={class:"modal-mask wrapper"},ct={class:"modal-wrapper wrapper"},rt={class:"modal-container"},it={class:"modal-header"},dt={class:"modal-content"},mt={class:"modal-footer"};function pt(a,e,i,u,m,f){return h((c(),r("div",ut,[t("div",ct,[t("div",rt,[t("div",it,n(a.title),1),t("div",dt,n(a.content),1),t("div",mt,[t("a",{class:"btn btn-secondary",onClick:e[0]||(e[0]=(...p)=>a.cancel&&a.cancel(...p))},n(a.t("common.cancel")),1),t("a",{class:"btn btn-primary",onClick:e[1]||(e[1]=(...p)=>a.confirm&&a.confirm(...p))},n(a.t("common.confirm")),1)])])])],512)),[[W,a.visible]])}const vt=M(at,[["render",pt],["__scopeId","data-v-d4842bbd"]]),F=[{id:"3",name:"农夫山泉股份有限公司",type:1,real:2,source:2,status:2,description:"--"},{id:"4",name:"康师傅控股有限公司",type:1,real:2,source:2,status:2,description:"--"},{id:"5",name:"三得利株式会社",type:1,real:2,source:2,status:2,description:"--"}],R=[{value:1,text:"个人"},{value:2,text:"企业"},{value:3,text:"未实名"}],_t=[{value:1,text:"已关联"},{value:2,text:"考察中"}];function G(a){for(const e of D)if(e.value==a)return e.text;return""}function H(a){for(const e of R)if(e.value==a)return e.text;return""}function J(a){for(const e of N)if(e.value==a)return e.text;return""}function K(a){for(const e of _t)if(e.value==a)return e.text;return""}const ft={class:"inspector"},ht={class:"inspector-query"},bt={class:"inspector-query-field"},yt=t("input",null,null,-1),xt={class:"inspector-query-field"},$t=["value"],kt={class:"inspector-query-field"},Ct=["value"],gt={class:"inspector-query-field"},qt=["value"],Vt={class:"inspector-operation"},wt=t("i",{class:"material-icons"},"search",-1),Tt=t("i",{class:"material-icons"},"add",-1),St=t("i",{class:"material-icons"},"delete",-1),Ut=t("th",{width:"5%"},null,-1),Et=["value"],Bt=["onClick"],Dt=["onClick"],Nt=S({__name:"customers-new",setup(a){const{t:e}=U(),i=g([]),u=g(F[0]),m=g(!1);function f(){$.push("customers")}function p(){$.push("customers-add")}function C(T){$.push({name:"customers-edit",query:{id:T}})}function V(){$.push("customers")}function v(T){m.value=!m.value,console.log(T)}function o(){m.value=!1}function w(){m.value=!1}function O(){console.log("customersExport")}return(T,b)=>(c(),r(_,null,[t("div",ft,[t("div",ht,[t("div",bt,[t("span",null,n(s(e)("customers.name")),1),yt]),t("div",xt,[t("span",null,n(s(e)("customers.type")),1),h(t("select",{"onUpdate:modelValue":b[0]||(b[0]=l=>u.value.type=l)},[(c(!0),r(_,null,y(s(D),l=>(c(),r("option",{key:l.value,value:l.value},n(l.text),9,$t))),128))],512),[[k,u.value.type]])]),t("div",kt,[t("span",null,n(s(e)("customers.real")),1),h(t("select",{"onUpdate:modelValue":b[1]||(b[1]=l=>u.value.real=l)},[(c(!0),r(_,null,y(s(R),l=>(c(),r("option",{key:l.value,value:l.value},n(l.text),9,Ct))),128))],512),[[k,u.value.real]])]),t("div",gt,[t("span",null,n(s(e)("customers.source")),1),h(t("select",{"onUpdate:modelValue":b[2]||(b[2]=l=>u.value.source=l)},[(c(!0),r(_,null,y(s(N),l=>(c(),r("option",{key:l.value,value:l.value},n(l.text),9,qt))),128))],512),[[k,u.value.source]])])]),t("div",Vt,[t("button",{class:"btn btn-primary",onClick:f},[wt,q(" "+n(s(e)("customers.search")),1)]),t("button",{class:"btn btn-primary",onClick:p},[Tt,q(" "+n(s(e)("customers.add")),1)]),t("button",{class:"btn btn-primary",onClick:V},[St,q(" "+n(s(e)("customers.delete")),1)]),d(L,{text:s(e)("common.export"),onResolve:O},null,8,["text"])]),t("table",null,[t("thead",null,[t("tr",null,[Ut,t("th",null,n(s(e)("customers.name")),1),t("th",null,n(s(e)("customers.type")),1),t("th",null,n(s(e)("customers.real")),1),t("th",null,n(s(e)("customers.source")),1),t("th",null,n(s(e)("customers.status")),1),t("th",null,n(s(e)("customers.description")),1),t("th",null,n(s(e)("customers.operation")),1)])]),t("tbody",null,[(c(!0),r(_,null,y(s(F),l=>(c(),r("tr",{key:l.id},[t("td",null,[h(t("input",{"onUpdate:modelValue":b[3]||(b[3]=E=>i.value=E),type:"checkbox",value:l.id},null,8,Et),[[j,i.value]])]),t("td",null,n(l.name),1),t("td",null,[d(x,{text:s(G)(l.type)},null,8,["text"])]),t("td",null,[d(x,{text:s(H)(l.real)},null,8,["text"])]),t("td",null,[d(x,{text:s(J)(l.source)},null,8,["text"])]),t("td",null,[d(x,{text:s(K)(l.status)},null,8,["text"])]),t("td",null,n(l.description),1),t("td",null,[t("a",{class:"btn-operate",onClick:E=>C(l.id)},n(s(e)("customers.edit")),9,Bt),t("a",{class:"btn-operate",onClick:E=>v(l.id)},n(s(e)("customers.trans")),9,Dt)])]))),128))])])]),d(vt,{visible:m.value,title:s(e)("customers.transform.title"),content:s(e)("customers.transform.message"),onConfirm:o,onCancel:w},null,8,["visible","title","content"])],64))}}),I=[{id:"1",name:"华润怡宝饮料（中国）有限公司",type:2,real:2,source:1,status:1,description:"--"},{id:"2",name:"可口可乐饮料（上海）有限公司",type:2,real:2,source:1,status:1,description:"--"}],Rt={class:"inspector"},zt={class:"inspector-query"},At={class:"inspector-query-field"},Ft=t("input",null,null,-1),It={class:"inspector-query-field"},Mt=["value"],jt={class:"inspector-query-field"},Lt=["value"],Gt={class:"inspector-query-field"},Ht=["value"],Jt={class:"inspector-operation"},Kt=t("i",{class:"material-icons"},"search",-1),Ot=t("i",{class:"material-icons"},"delete",-1),Pt=t("th",{width:"5%"},null,-1),Qt=["value"],Wt=["onClick"],Xt=S({__name:"customers-transform",setup(a){const{t:e}=U(),i=g([]),u=g(I[0]);function m(){$.push("customers")}function f(V){$.push({name:"customers-edit",query:{id:V}})}function p(){$.push("customers")}function C(){console.log("customersExport")}return(V,v)=>(c(),r("div",Rt,[t("div",zt,[t("div",At,[t("span",null,n(s(e)("customers.name")),1),Ft]),t("div",It,[t("span",null,n(s(e)("customers.type")),1),h(t("select",{"onUpdate:modelValue":v[0]||(v[0]=o=>u.value.type=o)},[(c(!0),r(_,null,y(s(D),o=>(c(),r("option",{key:o.value,value:o.value},n(o.text),9,Mt))),128))],512),[[k,u.value.type]])]),t("div",jt,[t("span",null,n(s(e)("customers.real")),1),h(t("select",{"onUpdate:modelValue":v[1]||(v[1]=o=>u.value.real=o)},[(c(!0),r(_,null,y(s(R),o=>(c(),r("option",{key:o.value,value:o.value},n(o.text),9,Lt))),128))],512),[[k,u.value.real]])]),t("div",Gt,[t("span",null,n(s(e)("customers.source")),1),h(t("select",{"onUpdate:modelValue":v[2]||(v[2]=o=>u.value.source=o)},[(c(!0),r(_,null,y(s(N),o=>(c(),r("option",{key:o.value,value:o.value},n(o.text),9,Ht))),128))],512),[[k,u.value.source]])])]),t("div",Jt,[t("button",{class:"btn btn-primary",onClick:m},[Kt,q(" "+n(s(e)("customers.search")),1)]),t("button",{class:"btn btn-primary",onClick:p},[Ot,q(" "+n(s(e)("customers.delete")),1)]),d(L,{text:s(e)("common.export"),onResolve:C},null,8,["text"])]),t("table",null,[t("thead",null,[t("tr",null,[Pt,t("th",null,n(s(e)("customers.name")),1),t("th",null,n(s(e)("customers.type")),1),t("th",null,n(s(e)("customers.real")),1),t("th",null,n(s(e)("customers.source")),1),t("th",null,n(s(e)("customers.status")),1),t("th",null,n(s(e)("customers.description")),1),t("th",null,n(s(e)("customers.operation")),1)])]),t("tbody",null,[(c(!0),r(_,null,y(s(I),o=>(c(),r("tr",{key:o.id},[t("td",null,[h(t("input",{"onUpdate:modelValue":v[3]||(v[3]=w=>i.value=w),type:"checkbox",value:o.id},null,8,Qt),[[j,i.value]])]),t("td",null,n(o.name),1),t("td",null,[d(x,{text:s(G)(o.type)},null,8,["text"])]),t("td",null,[d(x,{text:s(H)(o.real)},null,8,["text"])]),t("td",null,[d(x,{text:s(J)(o.source)},null,8,["text"])]),t("td",null,[d(x,{text:s(K)(o.status)},null,8,["text"])]),t("td",null,n(o.description),1),t("td",null,[t("a",{class:"btn-operate",onClick:w=>f(o.id)},n(s(e)("customers.edit")),9,Wt)])]))),128))])])]))}}),Yt={class:"tabs"},ne=S({__name:"customers",setup(a){const{t:e}=U(),i=B([{component:z(Nt),active:!0},{component:z(Xt),active:!1}]),u=B({component:i[0].component,active:i[0].active}),m=f=>{u.component=i[f].component,f==0?u.active=!0:u.active=!1};return(f,p)=>(c(),r(_,null,[d(ot),t("div",Yt,[t("a",{class:A(["tab",{active:u.active}]),onClick:p[0]||(p[0]=C=>m(0))},n(s(e)("customers.tabs.new")),3),t("a",{class:A(["tab",{active:!u.active}]),onClick:p[1]||(p[1]=C=>m(1))},n(s(e)("customers.tabs.transform")),3)]),(c(),X(Y(u.component)))],64))}});export{ne as default};
