import{d as U,z as S,x as z,b as $,c as M,f as d,G as x,B as b,i as e,_ as q,u as D,r as V,a as p,e as t,w as s,k as u,t as c}from"./index-1cf467bd.js";import{u as I}from"./useToast-28d879a9-2d7f7cbe.js";const L={class:"toast-position-picker mr-8"},A={class:"position-boxes-row flex"},E={class:"position-boxes-row flex"},G=U({__name:"ToastPositionPicker",props:{modelValue:{default:"bottom-center"}},emits:["update:modelValue"],setup(k,{emit:l}){const P=k,{colors:n}=S(),r=z(()=>({backgroundColor:n.primary}));function f(v){l("update:modelValue",v)}function m(v){return P.modelValue===v}return(v,i)=>($(),M("div",L,[d("div",A,[d("div",{class:x(["position-box",{selected:m("top-left")}]),style:b(e(r)),onClick:i[0]||(i[0]=o=>f("top-left"))},null,6),d("div",{class:x(["position-box",{selected:m("top-right")}]),style:b(e(r)),onClick:i[1]||(i[1]=o=>f("top-right"))},null,6)]),d("div",E,[d("div",{class:x(["position-box",{selected:m("bottom-left")}]),style:b(e(r)),onClick:i[2]||(i[2]=o=>f("bottom-left"))},null,6),d("div",{class:x(["position-box",{selected:m("bottom-right")}]),style:b(e(r)),onClick:i[3]||(i[3]=o=>f("bottom-right"))},null,6)])]))}});const j=q(G,[["__scopeId","data-v-f9c05342"]]),F={class:"notifications grid grid-cols-12 gap-6"},H={class:"py-3 col-span-12 md:col-span-6 flex flex-col gap-4"},J={class:"flex items-center col-span-12 md:col-span-6"},K={class:"flex col-span-12"},R=U({__name:"Notifications",setup(k){const{t:l}=D(),{init:P}=I(),n=V(!0),r=V("This toast is awesome!"),f=V(2500),m=V("bottom-right");function v(){P({message:r.value,position:m.value,duration:Number(f.value)})}return(i,o)=>{const y=p("va-card-title"),B=p("va-checkbox"),g=p("va-badge"),_=p("va-alert"),w=p("va-card-content"),C=p("va-card"),T=p("va-input"),N=p("va-button");return $(),M("div",F,[t(C,{class:"col-span-12"},{default:s(()=>[t(y,null,{default:s(()=>[u(c(e(l)("notificationsPage.notifications.title")),1)]),_:1}),t(w,{class:"flex flex-col gap-4"},{default:s(()=>[t(B,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),label:"Toggle visibility"},null,8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),class:"w-full",closeable:""},{icon:s(()=>[t(g,{text:e(l)("notificationsPage.notifications.success")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.successMessage")),1)]),_:1},8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value=a),class:"w-full",color:"info",closeable:""},{icon:s(()=>[t(g,{color:"info",text:e(l)("notificationsPage.notifications.info")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.infoMessage")),1)]),_:1},8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value=a),class:"w-full",color:"warning",closeable:""},{icon:s(()=>[t(g,{color:"warning",text:e(l)("notificationsPage.notifications.warning")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=a=>n.value=a),class:"w-full",color:"danger",closeable:""},{icon:s(()=>[t(g,{color:"danger",text:e(l)("notificationsPage.notifications.danger")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[5]||(o[5]=a=>n.value=a),class:"w-full",color:"gray",closeable:""},{icon:s(()=>[t(g,{color:"gray",text:e(l)("notificationsPage.notifications.gray")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"]),t(_,{modelValue:n.value,"onUpdate:modelValue":o[6]||(o[6]=a=>n.value=a),class:"w-full",color:"dark",closeable:""},{icon:s(()=>[t(g,{color:"dark",text:e(l)("notificationsPage.notifications.dark")},null,8,["text"])]),default:s(()=>[u(" "+c(e(l)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(C,{class:"col-span-12"},{default:s(()=>[t(y,null,{default:s(()=>[u(c(e(l)("notificationsPage.toasts.title")),1)]),_:1}),t(w,{class:"grid grid-cols-12 gap-6"},{default:s(()=>[d("div",H,[t(T,{modelValue:r.value,"onUpdate:modelValue":o[7]||(o[7]=a=>r.value=a),label:e(l)("notificationsPage.toasts.textLabel"),class:"control-input",required:""},null,8,["modelValue","label"]),t(T,{modelValue:f.value,"onUpdate:modelValue":o[8]||(o[8]=a=>f.value=a),type:"number",label:e(l)("notificationsPage.toasts.durationLabel"),class:"control-input",required:""},null,8,["modelValue","label"])]),d("div",J,[t(j,{modelValue:m.value,"onUpdate:modelValue":o[9]||(o[9]=a=>m.value=a)},null,8,["modelValue"])]),d("div",K,[t(N,{color:"primary",onClick:v},{default:s(()=>[u(c(e(l)("notificationsPage.toasts.launchToast")),1)]),_:1})])]),_:1})]),_:1})])}}});export{R as default};
