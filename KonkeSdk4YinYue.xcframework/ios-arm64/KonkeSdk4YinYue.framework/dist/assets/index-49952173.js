import{c as P,t as b,n as m,N as _,u as $,f,h as q,w as v,e as G,b as O,a9 as T,a4 as z,I as D}from"./index-8125559d.js";import{h as p,b as i,s as x,m as E}from"./_plugin-vue_export-helper-4dcb9733.js";import{r as V,u as w}from"./use-route-83ee6a88.js";const[h,j]=P("grid"),K={square:Boolean,center:b,border:b,gutter:m,reverse:Boolean,iconSize:m,direction:String,clickable:Boolean,columnNum:_(4)},S=Symbol(h);var L=p({name:h,props:K,setup(e,{slots:t}){const{linkChildren:o}=$(S);return o({props:e}),()=>{var c;return i("div",{style:{paddingLeft:f(e.gutter)},class:[j(),{[q]:e.border&&!e.gutter}]},[(c=t.default)==null?void 0:c.call(t)])}}});const M=v(L),[U,l]=P("grid-item"),Y=G({},V,{dot:Boolean,text:String,icon:String,badge:m,iconColor:String,iconPrefix:String,badgeProps:Object});var A=p({name:U,props:Y,setup(e,{slots:t}){const{parent:o,index:c}=O(S),B=w();if(!o)return;const y=x(()=>{const{square:s,gutter:n,columnNum:r}=o.props,d=`${100/+r}%`,a={flexBasis:d};if(s)a.paddingTop=d;else if(n){const u=f(n);a.paddingRight=u,c.value>=+r&&(a.marginTop=u)}return a}),C=x(()=>{const{square:s,gutter:n}=o.props;if(s&&n){const r=f(n);return{right:r,bottom:r,height:"auto"}}}),I=()=>{if(t.icon)return i(z,E({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return i(D,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},R=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},N=()=>t.default?t.default():[I(),R()];return()=>{const{center:s,border:n,square:r,gutter:d,reverse:a,direction:u,clickable:g}=o.props,k=[l("content",[u,{center:s,square:r,reverse:a,clickable:g,surround:n&&d}]),{[T]:n}];return i("div",{class:[l({square:r})],style:y.value},[i("div",{role:g?"button":void 0,class:k,style:C.value,tabindex:g?0:void 0,onClick:B},[N()])])}}});const Q=v(A);export{M as G,Q as a};
