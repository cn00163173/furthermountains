import{_ as C,r as h,o as r,c as d,a as t,b as l,f as g,u as x,t as n,j as s,w as _,m as p,F as m,l as $,q as i}from"./index-5ab7f8e1.js";const q=[{id:"1",document:"云存储售卖技巧.pdf",time:"2023-09-10",creator:"小张"},{id:"2",document:"中小企业客户沟通技巧.pdf",time:"2023-09-10",creator:"小张"},{id:"3",document:"移动云合作伙伴生态认证流程.pdf",time:"2023-09-12",creator:"小李"},{id:"3",document:"江苏移动合作伙伴大会材料.pdf",time:"2023-09-12",creator:"小李"}],w={},B={class:"grid-instruction"},D={class:"grid-instruction-icon"},N=t("div",{class:"grid-instruction-content"},[t("p",null,"销售经理将平时与客户沟通交流的心得经验总结，并形成规范文档，供外呼人员学习参考。")],-1),V={class:"grid-instruction-expand"};function F(f,e){const a=h("va-icon");return r(),d("div",B,[t("div",D,[l(a,{name:"info"})]),N,t("div",V,[l(a,{name:"expand_more"})])])}const j=C(w,[["render",F]]),E={class:"scene"},I={class:"scene-query"},L={class:"scene-query-field"},Q=t("input",null,null,-1),S={class:"scene-query-field"},T=t("input",null,null,-1),U={class:"scene-query-field"},z=t("input",null,null,-1),A={class:"scene-operation"},G={class:"va-table va-table--hoverable w-full"},H=["onClick"],J=["onClick"],O=g({__name:"talks",setup(f){const{t:e}=x();function a(){i.push("talks")}function k(){i.push("talks")}function v(c){console.log(c),i.push("talks")}function b(c){console.log(c),i.push("talks")}return(c,K)=>{const u=h("va-button");return r(),d(m,null,[l(j),t("div",E,[t("div",I,[t("div",L,[t("span",null,n(s(e)("talks.document")),1),Q]),t("div",S,[t("span",null,n(s(e)("talks.time")),1),T]),t("div",U,[t("span",null,n(s(e)("talks.creator")),1),z])]),t("div",A,[l(u,{preset:"primary",class:"mr-6 mb-2",onClick:a},{default:_(()=>[p(n(s(e)("talks.query")),1)]),_:1}),l(u,{preset:"primary",class:"mr-6 mb-2",onClick:k},{default:_(()=>[p(n(s(e)("talks.upload")),1)]),_:1})]),t("table",G,[t("thead",null,[t("tr",null,[t("th",null,n(s(e)("talks.document")),1),t("th",null,n(s(e)("talks.time")),1),t("th",null,n(s(e)("talks.creator")),1),t("th",null,n(s(e)("talks.operation")),1)])]),t("tbody",null,[(r(!0),d(m,null,$(s(q),o=>(r(),d("tr",{key:o.id},[t("td",null,n(o.document),1),t("td",null,n(o.time),1),t("td",null,n(o.creator),1),t("td",null,[t("a",{class:"operation-button",onClick:y=>v(o.id)},n(s(e)("talks.download")),9,H),t("a",{class:"operation-button",onClick:y=>b(o.id)},n(s(e)("talks.delete")),9,J)])]))),128))])])])],64)}}});export{O as default};
