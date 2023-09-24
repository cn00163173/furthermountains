import{d as S,z as H,u as B,r as I,a as i,b as c,c as p,j as z,i as f,B as b,F as K,g as F,f as C,e as d,Q as L,w as g,k as M,t as x,G as O,_ as T,h as U}from"./index-1cf467bd.js";const Y={mounted:(e,n)=>{const l=n.value.duration||500,_=n.value.animate,u=a=>{const h=e.scrollTop,s=e.scrollHeight-h,y=20;function N(t,v,V,D){return t/=D/2,t<1?V/2*t*t+v:(t-=1,-V/2*(t*(t-2)-1)+v)}function k(t){t+=y;const v=N(t,h,s,a);e.scrollTop=v,t<a&&setTimeout(()=>{k(t)},y)}k(0)},o=()=>{_?u(l):e.scrollTop=e.scrollHeight},r=new MutationObserver(o),m={childList:!0};r.observe(e,m)}},$={class:"va-chat"},j={class:"va-chat__message-text"},A={class:"va-chat__controls"},E=S({__name:"Chat",props:{modelValue:{default:()=>[{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]},height:{default:"20rem"}},emits:["update:modelValue"],setup(e,{emit:n}){const l=e,{colors:_}=H(),{t:u}=B(),o=I("");function r(){o.value&&(n("update:modelValue",l.modelValue.concat({text:o.value,yours:!0})),o.value="")}return(m,a)=>{const h=i("va-input"),w=i("va-button");return c(),p("div",$,[z((c(),p("div",{class:"va-chat__body",style:b({height:e.height})},[(c(!0),p(K,null,F(e.modelValue,(s,y)=>(c(),p("div",{key:y,class:O(["va-chat__message",{"va-chat__message--yours":s.yours}]),style:b({backgroundColor:s.yours?f(_).primary:void 0})},[C("span",j,x(s.text),1)],6))),128))],4)),[[f(Y),{animate:!0,duration:500}]]),C("div",A,[d(h,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"Type your message...",class:"va-chat__input mr-2",onKeypress:L(r,["enter"])},null,8,["modelValue","onKeypress"]),d(w,{onClick:a[1]||(a[1]=s=>r())},{default:g(()=>[M(x(f(u)("chat.sendButton")),1)]),_:1})])])}}});const G=T(E,[["__scopeId","data-v-cf34f848"]]),Q=S({__name:"ChatPage",setup(e){const{t:n}=B(),l=I([{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]);return(_,u)=>{const o=i("va-card-title"),r=i("va-card-content"),m=i("va-card");return c(),U(m,{class:"chat w-full"},{default:g(()=>[d(o,null,{default:g(()=>[M(x(f(n)("chat.title")),1)]),_:1}),d(r,null,{default:g(()=>[d(G,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value=a)},null,8,["modelValue"])]),_:1})]),_:1})}}});export{Q as default};
