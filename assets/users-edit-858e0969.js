import{_ as V,r as _,o as c,z as x,w,b as u,f as y,u as U,C,c as m,a as s,t as l,k as e,j as a,B as r,l as B,F as f,m as g,s as b}from"./index-be623cb5.js";import{u as D,t as F}from"./users-type-052d7254.js";const M={};function N(v,i){const d=_("va-breadcrumbs-item"),t=_("va-breadcrumbs");return c(),x(t,{separator:">",class:"breadcrumbs"},{default:w(()=>[u(d,{label:"组织架构"}),u(d,{label:"员工管理"}),u(d,{label:"编辑员工"})]),_:1})}const S=V(M,[["render",N]]),$={class:"inspector"},j={class:"inspector-field"},q={class:"inspector-field-label"},z={class:"inspector-field"},E={class:"inspector-field-label"},I={class:"inspector-field"},L={class:"inspector-field-label"},R={class:"inspector-field"},T={class:"inspector-field-label"},A={class:"inspector-field"},G={class:"inspector-field-label"},H={class:"inspector-field"},J={class:"inspector-field-label"},K=["value"],O={class:"inspector-field"},P={class:"inspector-field-label"},Q={class:"inspector-operation"},Y=y({__name:"users-edit",setup(v){const{t:i}=U(),d=C();let t;for(let p of D)p.id==`${d.query.id}`&&(t=p);function h(){b.push("users")}function k(){b.push("users")}return(p,n)=>(c(),m(f,null,[u(S),s("div",$,[s("form",null,[s("div",j,[s("div",q,l(e(i)("users.name")),1),a(s("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>e(t).name=o),class:"inspector-field-input"},null,512),[[r,e(t).name]])]),s("div",z,[s("div",E,l(e(i)("users.username")),1),a(s("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>e(t).username=o),class:"inspector-field-input"},null,512),[[r,e(t).username]])]),s("div",I,[s("div",L,l(e(i)("users.password")),1),a(s("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>e(t).password=o),class:"inspector-field-input"},null,512),[[r,e(t).password]])]),s("div",R,[s("div",T,l(e(i)("users.phone")),1),a(s("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>e(t).phone=o),class:"inspector-field-input"},null,512),[[r,e(t).phone]])]),s("div",A,[s("div",G,l(e(i)("users.email")),1),a(s("input",{"onUpdate:modelValue":n[4]||(n[4]=o=>e(t).email=o),class:"inspector-field-input"},null,512),[[r,e(t).email]])]),s("div",H,[s("div",J,l(e(i)("users.type")),1),a(s("select",{"onUpdate:modelValue":n[5]||(n[5]=o=>e(t).type=o),class:"inspector-field-select"},[(c(!0),m(f,null,g(e(F),o=>(c(),m("option",{key:o.value,value:o.value},l(o.text),9,K))),128))],512),[[B,e(t).type]])]),s("div",O,[s("div",P,l(e(i)("users.description")),1),a(s("textarea",{"onUpdate:modelValue":n[6]||(n[6]=o=>e(t).description=o),class:"inspector-field-input",rows:"4"},null,512),[[r,e(t).description]])]),s("div",Q,[s("a",{class:"btn btn-primary",onClick:h},l(e(i)("common.submit")),1),s("a",{class:"btn btn-secondary",onClick:k},l(e(i)("common.back")),1)])])])],64))}});export{Y as default};
