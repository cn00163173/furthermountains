import{_ as h,r as v,o as r,m as k,w as x,d,f as V,u as U,g as C,c as p,b as s,t as l,i as n,n as a,v as c,q as w,F as m,j as y,l as _}from"./index-a16e4b2d.js";import{v as B,s as g}from"./visits-status-205e2c4d.js";const D={};function F(f,o){const e=v("va-breadcrumbs-item"),u=v("va-breadcrumbs");return r(),k(u,{separator:">",class:"breadcrumbs"},{default:x(()=>[d(e,{label:"客户中心"}),d(e,{label:"拜访管理"}),d(e,{label:"添加拜访记录"})]),_:1})}const M=h(D,[["render",F]]),N={class:"inspector"},S={class:"inspector-field"},j={class:"inspector-field-label"},q={class:"inspector-field"},E={class:"inspector-field-label"},I={class:"inspector-field"},L={class:"inspector-field-label"},T={class:"inspector-field"},$={class:"inspector-field-label"},z={class:"inspector-field"},A={class:"inspector-field-label"},G={class:"inspector-field"},H={class:"inspector-field-label"},J=["value"],K={class:"inspector-operation"},R=V({__name:"visits-add",setup(f){const{t:o}=U(),e=C(B[0]);function u(){_.push("visits")}function b(){_.push("visits")}return(O,i)=>(r(),p(m,null,[d(M),s("div",N,[s("form",null,[s("div",S,[s("div",j,l(n(o)("visits.customer")),1),a(s("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>e.value.customer=t),class:"inspector-field-input"},null,512),[[c,e.value.customer]])]),s("div",q,[s("div",E,l(n(o)("visits.theme")),1),a(s("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>e.value.theme=t),class:"inspector-field-input"},null,512),[[c,e.value.theme]])]),s("div",I,[s("div",L,l(n(o)("visits.description")),1),a(s("textarea",{"onUpdate:modelValue":i[2]||(i[2]=t=>e.value.description=t),class:"inspector-field-input",rows:"4"},null,512),[[c,e.value.description]])]),s("div",T,[s("div",$,l(n(o)("visits.visitor")),1),a(s("input",{"onUpdate:modelValue":i[3]||(i[3]=t=>e.value.visitor=t),class:"inspector-field-input"},null,512),[[c,e.value.visitor]])]),s("div",z,[s("div",A,l(n(o)("visits.time")),1),a(s("input",{"onUpdate:modelValue":i[4]||(i[4]=t=>e.value.time=t),class:"inspector-field-input"},null,512),[[c,e.value.time]])]),s("div",G,[s("div",H,l(n(o)("visits.status")),1),a(s("select",{"onUpdate:modelValue":i[5]||(i[5]=t=>e.value.status=t),class:"inspector-field-select"},[(r(!0),p(m,null,y(n(g),t=>(r(),p("option",{key:t.value,value:t.value},l(t.text),9,J))),128))],512),[[w,e.value.status]])]),s("div",K,[s("a",{class:"btn btn-primary",onClick:u},l(n(o)("common.submit")),1),s("a",{class:"btn btn-secondary",onClick:b},l(n(o)("common.back")),1)])])])],64))}});export{R as default};
