import{_ as x,r as f,o as i,z as w,w as V,b as u,f as C,u as B,C as U,c as r,a as e,t as d,k as s,j as c,B as b,l as p,F as m,m as v,s as y}from"./index-96cdcfb7.js";import{l as D,i as F,t as M,s as N}from"./leads-type-98f98cbd.js";const S={};function $(g,a){const n=f("va-breadcrumbs-item"),t=f("va-breadcrumbs");return i(),w(t,{separator:">",class:"mb-2"},{default:V(()=>[u(n,{label:"商机管理"}),u(n,{label:"线索情报"}),u(n,{label:"编辑线索"})]),_:1})}const j=x(S,[["render",$]]),q={class:"grid-head"},z={class:"grid-body scene"},E={class:"grid-body-field"},I={class:"grid-body-field-label"},L={class:"grid-body-field"},R={class:"grid-body-field-label"},T={class:"grid-body-field"},A={class:"grid-body-field-label"},G=["value"],H={class:"grid-body-field"},J={class:"grid-body-field-label"},K=["value"],O={class:"grid-body-field"},P={class:"grid-body-field-label"},Q={class:"grid-body-operation"},Y=C({__name:"leads-edit",setup(g){const{t:a}=B(),n=U();let t;for(let _ of D)_.id==`${n.query.id}`&&(t=_);function h(){y.push("leads")}function k(){y.push("leads")}return(_,l)=>(i(),r(m,null,[e("div",q,[u(j),u(F)]),e("div",z,[e("form",null,[e("div",E,[e("div",I,d(s(a)("leads.name")),1),c(e("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>s(t).name=o),class:"grid-body-field-input"},null,512),[[b,s(t).name]])]),e("div",L,[e("div",R,d(s(a)("leads.reason")),1),c(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=o=>s(t).reason=o),class:"grid-body-field-input",rows:"4"},null,512),[[b,s(t).reason]])]),e("div",T,[e("div",A,d(s(a)("leads.type")),1),c(e("select",{"onUpdate:modelValue":l[2]||(l[2]=o=>s(t).type=o),class:"grid-body-field-select"},[(i(!0),r(m,null,v(s(M),o=>(i(),r("option",{key:o.value,value:o.value},d(o.text),9,G))),128))],512),[[p,s(t).type]])]),e("div",H,[e("div",J,d(s(a)("leads.status")),1),c(e("select",{"onUpdate:modelValue":l[3]||(l[3]=o=>s(t).status=o),class:"grid-body-field-select"},[(i(!0),r(m,null,v(s(N),o=>(i(),r("option",{key:o.value,value:o.value},d(o.text),9,K))),128))],512),[[p,s(t).status]])]),e("div",O,[e("div",P,d(s(a)("leads.follow")),1),c(e("input",{"onUpdate:modelValue":l[4]||(l[4]=o=>s(t).follow=o),class:"grid-body-field-input"},null,512),[[b,s(t).follow]])]),e("div",Q,[e("a",{class:"btn btn-primary",onClick:h},d(s(a)("common.submit")),1),e("a",{class:"btn btn-secondary",onClick:k},d(s(a)("common.back")),1)])])])],64))}});export{Y as default};
