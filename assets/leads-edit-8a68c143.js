import{_ as x,a as m,b as i,h as w,w as V,e as u,d as C,u as U,p as B,c as r,f as e,t,i as s,j as c,n as b,v as p,F as f,g as v,m as y}from"./index-71ce938d.js";import{l as D,i as F,t as M,s as N}from"./leads-type-0636373c.js";const S={};function $(g,a){const n=m("va-breadcrumbs-item"),l=m("va-breadcrumbs");return i(),w(l,{separator:">",class:"mb-2"},{default:V(()=>[u(n,{label:"商机管理"}),u(n,{label:"线索情报"}),u(n,{label:"编辑线索"})]),_:1})}const j=x(S,[["render",$]]),q={class:"grid-head"},E={class:"grid-body"},I={class:"grid-body-field"},L={class:"grid-body-field-label"},R={class:"grid-body-field"},T={class:"grid-body-field-label"},z={class:"grid-body-field"},A={class:"grid-body-field-label"},G=["value"],H={class:"grid-body-field"},J={class:"grid-body-field-label"},K=["value"],O={class:"grid-body-field"},P={class:"grid-body-field-label"},Q={class:"grid-body-field"},Y=C({__name:"leads-edit",setup(g){const{t:a}=U(),n=B();let l;for(let _ of D)_.id==`${n.query.id}`&&(l=_);function h(){y.push("leads")}function k(){y.push("leads")}return(_,o)=>(i(),r(f,null,[e("div",q,[u(j),u(F)]),e("div",E,[e("form",null,[e("div",I,[e("div",L,t(s(a)("leads.name")),1),c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>s(l).name=d),class:"grid-body-field-input"},null,512),[[b,s(l).name]])]),e("div",R,[e("div",T,t(s(a)("leads.reason")),1),c(e("textarea",{"onUpdate:modelValue":o[1]||(o[1]=d=>s(l).reason=d),class:"grid-body-field-input",rows:"4"},null,512),[[b,s(l).reason]])]),e("div",z,[e("div",A,t(s(a)("leads.type")),1),c(e("select",{"onUpdate:modelValue":o[2]||(o[2]=d=>s(l).type=d),class:"grid-body-field-select"},[(i(!0),r(f,null,v(s(M),d=>(i(),r("option",{key:d.value,value:d.value},t(d.text),9,G))),128))],512),[[p,s(l).type]])]),e("div",H,[e("div",J,t(s(a)("leads.status")),1),c(e("select",{"onUpdate:modelValue":o[3]||(o[3]=d=>s(l).status=d),class:"grid-body-field-select"},[(i(!0),r(f,null,v(s(N),d=>(i(),r("option",{key:d.value,value:d.value},t(d.text),9,K))),128))],512),[[p,s(l).status]])]),e("div",O,[e("div",P,t(s(a)("leads.follow")),1),c(e("input",{"onUpdate:modelValue":o[4]||(o[4]=d=>s(l).follow=d),class:"grid-body-field-input"},null,512),[[b,s(l).follow]])]),e("div",Q,[e("a",{class:"grid-body-field-submit",onClick:h},t(s(a)("common.submit")),1),e("a",{class:"grid-body-field-back",onClick:k},t(s(a)("common.back")),1)])])])],64))}});export{Y as default};
