import{B as D,C as te,s as O,q as E,u as R,A as ne,h as he,D as I,E as M,G as ve,H as S,I as oe,J as re,K as se,L as v,M as ye,g as L,b as y,N as be,m as we}from"./_plugin-vue_export-helper-b237bda9.js";const b=e=>e!=null,$=e=>typeof e=="function",V=e=>e!==null&&typeof e=="object",vt=e=>V(e)&&$(e.then)&&$(e.catch),ae=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Be=()=>z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function yt(){}const Oe=Object.assign,z=typeof window<"u";function H(e,t){const n=t.split(".");let o=e;return n.forEach(r=>{var s;o=V(o)&&(s=o[r])!=null?s:""}),o}function bt(e,t,n){return t.reduce((o,r)=>((!n||e[r]!==void 0)&&(o[r]=e[r]),o),{})}const wt=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Bt=e=>Array.isArray(e)?e:[e],Ot=null,w=[Number,String],Ce={type:Boolean,default:!0},Ct=e=>({type:e,required:!0}),Tt=()=>({type:Array,default:()=>[]}),xt=e=>({type:Number,default:e}),Dt=e=>({type:w,default:e}),B=e=>({type:String,default:e});var p=typeof window<"u";function x(e){return p?requestAnimationFrame(e):-1}function Te(e){p&&cancelAnimationFrame(e)}function St(e){x(()=>x(e))}var xe=e=>e===window,W=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),De=e=>{const t=v(e);if(xe(t)){const n=t.innerWidth,o=t.innerHeight;return W(n,o)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():W(0,0)};function At(e){const t=D(e,null);if(t){const n=oe(),{link:o,unlink:r,internalChildren:s}=t;o(n),te(()=>r(n));const c=O(()=>s.indexOf(n));return{parent:t,index:c}}return{parent:null,index:E(-1)}}function Se(e){const t=[],n=o=>{Array.isArray(o)&&o.forEach(r=>{var s;ye(r)&&(t.push(r),(s=r.component)!=null&&s.subTree&&(t.push(r.component.subTree),n(r.component.subTree.children)),r.children&&n(r.children))})};return n(e),t}var Z=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(o=>t.key!==void 0&&t.key!==null&&o.type===t.type&&o.key===t.key):n};function Ae(e,t,n){const o=Se(e.subTree.children);n.sort((s,c)=>Z(o,s.vnode)-Z(o,c.vnode));const r=n.map(s=>s.proxy);t.sort((s,c)=>{const a=r.indexOf(s),i=r.indexOf(c);return a-i})}function Pt(e){const t=R([]),n=R([]),o=oe();return{children:t,linkChildren:s=>{re(e,Object.assign({link:i=>{i.proxy&&(n.push(i),t.push(i.proxy),Ae(o,t,n))},unlink:i=>{const u=n.indexOf(i);t.splice(u,1),n.splice(u,1)},children:t,internalChildren:n},s))}}}var F=1e3,_=60*F,N=60*_,K=24*N;function Pe(e){const t=Math.floor(e/K),n=Math.floor(e%K/N),o=Math.floor(e%N/_),r=Math.floor(e%_/F),s=Math.floor(e%F);return{total:e,days:t,hours:n,minutes:o,seconds:r,milliseconds:s}}function Re(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}function Rt(e){let t,n,o,r;const s=E(e.time),c=O(()=>Pe(s.value)),a=()=>{o=!1,Te(t)},i=()=>Math.max(n-Date.now(),0),u=g=>{var Y,U;s.value=g,(Y=e.onChange)==null||Y.call(e,c.value),g===0&&(a(),(U=e.onFinish)==null||U.call(e))},d=()=>{t=x(()=>{o&&(u(i()),s.value>0&&d())})},l=()=>{t=x(()=>{if(o){const g=i();(!Re(g,s.value)||g===0)&&u(g),s.value>0&&l()}})},f=()=>{p&&(e.millisecond?d():l())},pe=()=>{o||(n=Date.now()+s.value,o=!0,f())},Ee=(g=e.time)=>{a(),s.value=g};return se(a),I(()=>{r&&(o=!0,r=!1,f())}),M(()=>{o&&(a(),r=!0)}),{start:pe,pause:a,reset:Ee,current:c}}function $e(e){let t;ne(()=>{e(),he(()=>{t=!0})}),I(()=>{t&&e()})}function Fe(e,t,n={}){if(!p)return;const{target:o=window,passive:r=!1,capture:s=!1}=n;let c=!1,a;const i=l=>{if(c)return;const f=v(l);f&&!a&&(f.addEventListener(e,t,{capture:s,passive:r}),a=!0)},u=l=>{if(c)return;const f=v(l);f&&a&&(f.removeEventListener(e,t,s),a=!1)};te(()=>u(o)),M(()=>u(o)),$e(()=>i(o));let d;return ve(o)&&(d=S(o,(l,f)=>{u(f),i(l)})),()=>{d==null||d(),u(o),c=!0}}function $t(e,t,n={}){if(!p)return;const{eventName:o="click"}=n;Fe(o,s=>{(Array.isArray(e)?e:[e]).every(i=>{const u=v(i);return u&&!u.contains(s.target)})&&t(s)},{target:document})}var C,A;function _e(){if(!C&&(C=E(0),A=E(0),p)){const e=()=>{C.value=window.innerWidth,A.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:C,height:A}}var Ne=/scroll|auto|overlay/i,ie=p?window:void 0;function ke(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Ie(e,t=ie){let n=e;for(;n&&n!==t&&ke(n);){const{overflowY:o}=window.getComputedStyle(n);if(Ne.test(o))return n;n=n.parentNode}return t}function Ft(e,t=ie){const n=E();return ne(()=>{e.value&&(n.value=Ie(e.value,t))}),n}var T;function _t(){if(!T&&(T=E("visible"),p)){const e=()=>{T.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return T}var Me=Symbol("van-field");function Nt(e){const t=D(Me,null);t&&!t.customValue.value&&(t.customValue.value=e,S(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}function Le(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function G(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function ue(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ve(e){G(window,e),G(document.body,e)}function kt(e,t){if(e===window)return 0;const n=t?Le(t):ue();return De(e).top+n}const ze=Be();function It(){ze&&Ve(ue())}const je=e=>e.stopPropagation();function Mt(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&je(e)}function Lt(e){const t=v(e);if(!t)return!1;const n=window.getComputedStyle(t),o=n.display==="none",r=t.offsetParent===null&&n.position!=="fixed";return o||r}const{width:Ye,height:Ue}=_e();function m(e){if(b(e))return ae(e)?`${e}px`:String(e)}function Vt(e){if(b(e)){if(Array.isArray(e))return{width:m(e[0]),height:m(e[1])};const t=m(e);return{width:t,height:t}}}function zt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let P;function He(){if(!P){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;P=parseFloat(t)}return P}function We(e){return e=e.replace(/rem/g,""),+e*He()}function Ze(e){return e=e.replace(/vw/g,""),+e*Ye.value/100}function Ke(e){return e=e.replace(/vh/g,""),+e*Ue.value/100}function jt(e){if(typeof e=="number")return e;if(z){if(e.includes("rem"))return We(e);if(e.includes("vw"))return Ze(e);if(e.includes("vh"))return Ke(e)}return parseFloat(e)}const Ge=/-(\w)/g,ce=e=>e.replace(Ge,(t,n)=>n.toUpperCase()),qe=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function Yt(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const Ut=(e,t,n)=>Math.min(Math.max(e,t),n);function q(e,t,n){const o=e.indexOf(t);return o===-1?e:t==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(n,"")}function Ht(e,t=!0,n=!0){t?e=q(e,".",/\./g):e=e.split(".")[0],n?e=q(e,"-",/-/g):e=e.replace(/-/,"");const o=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}const{hasOwnProperty:Je}=Object.prototype;function Xe(e,t,n){const o=t[n];b(o)&&(!Je.call(e,n)||!V(o)?e[n]=o:e[n]=le(Object(e[n]),o))}function le(e,t){return Object.keys(t).forEach(n=>{Xe(e,t,n)}),e}var Qe={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const J=E("zh-CN"),X=R({"zh-CN":Qe}),et={messages(){return X[J.value]},use(e,t){J.value=e,this.add({[e]:t})},add(e={}){le(X,e)}};var tt=et;function nt(e){const t=ce(e)+".";return(n,...o)=>{const r=tt.messages(),s=H(r,t+n)||H(r,n);return $(s)?s(...o):s}}function k(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+k(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?k(e,o):""),""):""}function ot(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${k(t,n)}`)}function j(e){const t=`van-${e}`;return[t,ot(t),nt(t)]}const h="van-hairline",Wt=`${h}--top`,Zt=`${h}--left`,Kt=`${h}--bottom`,Gt=`${h}--surround`,qt=`${h}--top-bottom`,Jt=`${h}-unset--top-bottom`,Xt="van-haptics-feedback",Qt=Symbol("van-form");function fe(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(ce(`-${n}`),e))},e}const rt=Symbol();function en(e){const t=D(rt,null);t&&S(t,n=>{n&&e()})}const[st,Q]=j("badge"),at={dot:Boolean,max:w,tag:B("div"),color:String,offset:Array,content:w,showZero:Ce,position:B("top-right")};var it=L({name:st,props:at,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:a,showZero:i}=e;return b(a)&&a!==""&&(i||a!==0&&a!=="0")},o=()=>{const{dot:a,max:i,content:u}=e;if(!a&&n())return t.content?t.content():b(i)&&ae(u)&&+u>+i?`${i}+`:u},r=a=>a.startsWith("-")?a.replace("-",""):`-${a}`,s=O(()=>{const a={background:e.color};if(e.offset){const[i,u]=e.offset,{position:d}=e,[l,f]=d.split("-");t.default?(typeof u=="number"?a[l]=m(l==="top"?u:-u):a[l]=l==="top"?m(u):r(u),typeof i=="number"?a[f]=m(f==="left"?i:-i):a[f]=f==="left"?m(i):r(i)):(a.marginTop=m(u),a.marginLeft=m(i))}return a}),c=()=>{if(n()||e.dot)return y("div",{class:Q([e.position,{dot:e.dot,fixed:!!t.default}]),style:s.value},[o()])};return()=>{if(t.default){const{tag:a}=e;return y(a,{class:Q("wrapper")},{default:()=>[t.default(),c()]})}return c()}}});const ut=fe(it);let de=2e3;const tn=()=>++de,ct=e=>{de=e},[me,lt]=j("config-provider"),ge=Symbol(me),ft={tag:B("div"),theme:B("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function dt(e){const t={};return Object.keys(e).forEach(n=>{t[`--van-${qe(n)}`]=e[n]}),t}L({name:me,props:ft,setup(e,{slots:t}){const n=O(()=>dt(Oe({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(z){const o=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},r=(s=e.theme)=>{document.documentElement.classList.remove(`van-theme-${s}`)};S(()=>e.theme,(s,c)=>{c&&r(c),o()},{immediate:!0}),I(o),M(r),se(r)}return re(ge,e),be(()=>{e.zIndex!==void 0&&ct(e.zIndex)}),()=>y(e.tag,{class:lt(),style:n.value},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[mt,ee]=j("icon"),gt=e=>e==null?void 0:e.includes("/"),pt={dot:Boolean,tag:B("i"),name:String,size:w,badge:w,color:String,badgeProps:Object,classPrefix:String};var Et=L({name:mt,props:pt,setup(e,{slots:t}){const n=D(ge,null),o=O(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||ee());return()=>{const{tag:r,dot:s,name:c,size:a,badge:i,color:u}=e,d=gt(c);return y(ut,we({dot:s,tag:r,class:[o.value,d?"":`${o.value}-${c}`],style:{color:u,fontSize:m(a)},content:i},e.badgeProps),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t),d&&y("img",{class:ee("image"),src:c},null)]}})}}});const nn=fe(Et);export{Ft as $,z as A,Zt as B,V as C,$e as D,Ie as E,Mt as F,Fe as G,Xt as H,nn as I,tn as J,Gt as K,vt as L,Vt as M,qt as N,ue as O,rt as P,Ve as Q,Qt as R,Ht as S,Me as T,Bt as U,It as V,Nt as W,Ct as X,x as Y,Le as Z,G as _,B as a,jt as a0,Lt as a1,_t as a2,St as a3,Ut as a4,kt as a5,wt as a6,Jt as a7,Yt as a8,Rt as a9,$t as aa,At as b,j as c,Ot as d,Oe as e,m as f,yt as g,Wt as h,$ as i,Dt as j,h as k,ut as l,Tt as m,w as n,en as o,bt as p,Ye as q,Ue as r,De as s,Ce as t,Pt as u,zt as v,fe as w,Kt as x,xt as y,b as z};
