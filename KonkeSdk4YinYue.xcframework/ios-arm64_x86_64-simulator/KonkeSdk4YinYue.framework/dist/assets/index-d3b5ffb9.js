import{r as z,u as I}from"./use-route-3612c525.js";import{c as R,e as p,x as l,n as C,a6 as w,I as D,p as L,w as N}from"./index-31b7c571.js";import{L as q}from"./index-22da9197.js";import{j as O,b as o}from"./_plugin-vue_export-helper-c6b04c4a.js";const[U,a]=R("button"),_=p({},z,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var j=O({name:U,props:_,emits:["click"],setup(e,{emit:g,slots:t}){const f=I(),m=()=>t.loading?t.loading():o(q,{size:e.loadingSize,type:e.loadingType,class:a("loading")},null),c=()=>{if(e.loading)return m();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(e.icon)return o(D,{name:e.icon,class:a("icon"),classPrefix:e.iconPrefix},null)},b=()=>{let n;if(e.loading?n=e.loadingText:n=t.default?t.default():e.text,n)return o("span",{class:a("text")},[n])},x=()=>{const{color:n,plain:r}=e;if(n){const i={color:r?n:"white"};return r||(i.background=n),n.includes("gradient")?i.border=0:i.borderColor=n,i}},y=n=>{e.loading?L(n):e.disabled||(g("click",n),f())};return()=>{const{tag:n,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=e,v=[a([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[w]:d}];return o(n,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const G=N(j);export{G as B};
