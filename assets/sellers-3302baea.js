import{f as g,u as w,g as m,o as a,c as o,b as B,a as e,t,k as l,j as f,l as D,F as u,m as y,n as c,q as N,s as r}from"./index-de409076.js";import{t as k,s as b,i as S}from"./sellers-type-7fb85ea7.js";function T(d){for(const s of k)if(s.value==d)return s.text;return""}const E={class:"scene"},F={class:"scene-query"},M={class:"scene-query-field"},U=e("input",null,null,-1),j={class:"scene-query-field"},A=["value"],I={class:"scene-operation"},L=e("i",{class:"material-icons"},"search",-1),$=e("i",{class:"material-icons"},"add",-1),z=e("i",{class:"material-icons"},"delete",-1),G={class:"va-table va-table--hoverable w-full"},H=e("th",{width:"5%"},null,-1),J=["value"],K=["onClick"],Q=g({__name:"sellers",setup(d){const{t:s}=w(),p=m(b[0]),_=m([]);function x(){r.push("sellers")}function C(){r.push("sellers-add")}function q(h){r.push({name:"sellers-edit",query:{id:h}})}function V(){r.push("sellers")}return(h,i)=>(a(),o(u,null,[B(S),e("div",E,[e("div",F,[e("div",M,[e("span",null,t(l(s)("sellers.name")),1),U]),e("div",j,[e("span",null,t(l(s)("sellers.type")),1),f(e("select",{"onUpdate:modelValue":i[0]||(i[0]=n=>p.value.type=n)},[(a(!0),o(u,null,y(l(k),n=>(a(),o("option",{key:n.value,value:n.value},t(n.text),9,A))),128))],512),[[D,p.value.type]])])]),e("div",I,[e("button",{class:"btn-primary",onClick:x},[L,c(" "+t(l(s)("sellers.search")),1)]),e("button",{class:"btn-primary",onClick:C},[$,c(" "+t(l(s)("sellers.add")),1)]),e("button",{class:"btn-primary",onClick:V},[z,c(" "+t(l(s)("sellers.delete")),1)])]),e("table",G,[e("thead",null,[e("tr",null,[H,e("th",null,t(l(s)("sellers.name")),1),e("th",null,t(l(s)("sellers.type")),1),e("th",null,t(l(s)("visits.operation")),1)])]),e("tbody",null,[(a(!0),o(u,null,y(l(b),n=>(a(),o("tr",{key:n.id},[e("td",null,[f(e("input",{"onUpdate:modelValue":i[1]||(i[1]=v=>_.value=v),type:"checkbox",value:n.id},null,8,J),[[N,_.value]])]),e("td",null,t(n.name),1),e("td",null,t(l(T)(n.type)),1),e("td",null,[e("a",{class:"operation-button",onClick:v=>q(n.id)},t(l(s)("sellers.edit")),9,K)])]))),128))])])])],64))}});export{Q as default};
