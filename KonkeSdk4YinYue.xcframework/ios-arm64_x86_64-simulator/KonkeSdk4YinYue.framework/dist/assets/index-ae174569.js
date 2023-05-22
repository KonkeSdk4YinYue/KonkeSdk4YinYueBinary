import{g as S,q as p,b as n,s as _,u as H,m as z,x as L}from"./_plugin-vue_export-helper-b237bda9.js";import{p as M,a as U,P as q}from"./index-c7c816a4.js";import{B as x}from"./index-551494da.js";import{c as k,u as V,t as P,w as T,e as O,b as Y,n as j,d as G,a as J,p as Q,f as W,g as A,i as X,B as Z,h as ee}from"./index-48d5ec75.js";import{u as te}from"./nav-bar-25466e0a.js";import{u as ne,c as oe}from"./use-touch-5cae3072.js";import{r as ae,u as le}from"./use-route-f0a1f66c.js";const[R,D]=k("action-bar"),$=Symbol(R),se={placeholder:Boolean,safeAreaInsetBottom:P};var ce=S({name:R,props:se,setup(e,{slots:r}){const o=p(),i=te(o,D),{linkChildren:l}=V($);l();const f=()=>{var m;return n("div",{ref:o,class:[D(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=r.default)==null?void 0:m.call(r)])};return()=>e.placeholder?i(f):f()}});const re=T(ce),[ie,ue]=k("action-bar-button"),de=O({},ae,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var fe=S({name:ie,props:de,setup(e,{slots:r}){const o=le(),{parent:i,index:l}=Y($),f=_(()=>{if(i){const s=i.children[l.value-1];return!(s&&"isButton"in s)}}),m=_(()=>{if(i){const s=i.children[l.value+1];return!(s&&"isButton"in s)}});return ne({isButton:!0}),()=>{const{type:s,icon:B,text:g,color:C,loading:w,disabled:v}=e;return n(x,{class:ue([s,{last:m.value,first:f.value}]),size:"large",type:s,icon:B,color:C,loading:w,disabled:v,onClick:o},{default:()=>[r.default?r.default():g]})}}});const E=T(fe),[me,c,b]=k("dialog"),Be=O({},M,{title:String,theme:String,width:j,message:[String,Function],callback:Function,allowHtml:Boolean,className:G,transition:J("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ge=[...U,"transition","closeOnPopstate"];var he=S({name:me,props:Be,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const i=p(),l=H({confirm:!1,cancel:!1}),f=t=>r("update:show",t),m=t=>{var a;f(!1),(a=e.callback)==null||a.call(e,t)},s=t=>()=>{e.show&&(r(t),e.beforeClose?(l[t]=!0,oe(e.beforeClose,{args:[t],done(){m(t),l[t]=!1},canceled(){l[t]=!1}})):m(t))},B=s("cancel"),g=s("confirm"),C=L(t=>{var a,u;if(t.target!==((u=(a=i.value)==null?void 0:a.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:A,Escape:e.showCancelButton?B:A})[t.key](),r("keydown",t)},["enter","esc"]),w=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:c("header",{isolated:!e.message&&!o.default})},[t])},v=t=>{const{message:a,allowHtml:u,messageAlign:d}=e,h=c("message",{"has-title":t,[d]:d}),y=X(a)?a():a;return u&&typeof y=="string"?n("div",{class:h,innerHTML:y},null):n("div",{class:h},[y])},F=()=>{if(o.default)return n("div",{class:c("content")},[o.default()]);const{title:t,message:a,allowHtml:u}=e;if(a){const d=!!(t||o.title);return n("div",{key:u?1:0,class:c("content",{isolated:!d})},[v(d)])}},I=()=>n("div",{class:[ee,c("footer")]},[e.showCancelButton&&n(x,{size:"large",text:e.cancelButtonText||b("cancel"),class:c("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(x,{size:"large",text:e.confirmButtonText||b("confirm"),class:[c("confirm"),{[Z]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),K=()=>n(re,{class:c("footer")},{default:()=>[e.showCancelButton&&n(E,{type:"warning",text:e.cancelButtonText||b("cancel"),class:c("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(E,{type:"danger",text:e.confirmButtonText||b("confirm"),class:c("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),N=()=>o.footer?o.footer():e.theme==="round-button"?K():I();return()=>{const{width:t,title:a,theme:u,message:d,className:h}=e;return n(q,z({ref:i,role:"dialog",class:[c([u]),h],style:{width:W(t)},tabindex:0,"aria-labelledby":a||d,onKeydown:C,"onUpdate:show":f},Q(e,ge)),{default:()=>[w(),F(),N()]})}}});const Se=T(he);export{Se as D};
