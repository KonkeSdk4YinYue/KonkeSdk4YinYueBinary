import{L as S,J as te,l as O,k as E,D as R,z as ne,E as M,C as I,y as oe,s as he,M as ve,m as D,H as re,G as se,N as h,O as ye,j as L,b as v,x as be,q as we}from"./_plugin-vue_export-helper-c6b04c4a.js";const y=e=>e!=null,$=e=>typeof e=="function",V=e=>e!==null&&typeof e=="object",vt=e=>V(e)&&$(e.then)&&$(e.catch),ae=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Oe=()=>z?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function yt(){}const Ce=Object.assign,z=typeof window<"u";function H(e,t){const n=t.split(".");let o=e;return n.forEach(r=>{var s;o=V(o)&&(s=o[r])!=null?s:""}),o}function bt(e,t,n){return t.reduce((o,r)=>((!n||e[r]!==void 0)&&(o[r]=e[r]),o),{})}const wt=(e,t)=>JSON.stringify(e)===JSON.stringify(t),Ot=e=>Array.isArray(e)?e:[e],Ct=null,b=[Number,String],Te={type:Boolean,default:!0},Tt=e=>({type:e,required:!0}),Bt=()=>({type:Array,default:()=>[]}),xt=e=>({type:Number,default:e}),St=e=>({type:b,default:e}),w=e=>({type:String,default:e});var p=typeof window<"u";function x(e){return p?requestAnimationFrame(e):-1}function Be(e){p&&cancelAnimationFrame(e)}function Dt(e){x(()=>x(e))}var xe=e=>e===window,W=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),Se=e=>{const t=h(e);if(xe(t)){const n=t.innerWidth,o=t.innerHeight;return W(n,o)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():W(0,0)};function Pt(e){const t=S(e,null);if(t){const n=re(),{link:o,unlink:r,internalChildren:s}=t;o(n),te(()=>r(n));const c=O(()=>s.indexOf(n));return{parent:t,index:c}}return{parent:null,index:E(-1)}}function De(e){const t=[],n=o=>{Array.isArray(o)&&o.forEach(r=>{var s;ye(r)&&(t.push(r),(s=r.component)!=null&&s.subTree&&(t.push(r.component.subTree),n(r.component.subTree.children)),r.children&&n(r.children))})};return n(e),t}var Z=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(o=>t.key!==void 0&&t.key!==null&&o.type===t.type&&o.key===t.key):n};function Pe(e,t,n){const o=De(e.subTree.children);n.sort((s,c)=>Z(o,s.vnode)-Z(o,c.vnode));const r=n.map(s=>s.proxy);t.sort((s,c)=>{const a=r.indexOf(s),i=r.indexOf(c);return a-i})}function At(e){const t=R([]),n=R([]),o=re();return{children:t,linkChildren:s=>{se(e,Object.assign({link:i=>{i.proxy&&(n.push(i),t.push(i.proxy),Pe(o,t,n))},unlink:i=>{const u=n.indexOf(i);t.splice(u,1),n.splice(u,1)},children:t,internalChildren:n},s))}}}var F=1e3,_=60*F,N=60*_,G=24*N;function Ae(e){const t=Math.floor(e/G),n=Math.floor(e%G/N),o=Math.floor(e%N/_),r=Math.floor(e%_/F),s=Math.floor(e%F);return{total:e,days:t,hours:n,minutes:o,seconds:r,milliseconds:s}}function Re(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}function Rt(e){let t,n,o,r;const s=E(e.time),c=O(()=>Ae(s.value)),a=()=>{o=!1,Be(t)},i=()=>Math.max(n-Date.now(),0),u=g=>{var Y,U;s.value=g,(Y=e.onChange)==null||Y.call(e,c.value),g===0&&(a(),(U=e.onFinish)==null||U.call(e))},f=()=>{t=x(()=>{o&&(u(i()),s.value>0&&f())})},l=()=>{t=x(()=>{if(o){const g=i();(!Re(g,s.value)||g===0)&&u(g),s.value>0&&l()}})},d=()=>{p&&(e.millisecond?f():l())},pe=()=>{o||(n=Date.now()+s.value,o=!0,d())},Ee=(g=e.time)=>{a(),s.value=g};return ne(a),M(()=>{r&&(o=!0,r=!1,d())}),I(()=>{o&&(a(),r=!0)}),{start:pe,pause:a,reset:Ee,current:c}}function $e(e){let t;oe(()=>{e(),he(()=>{t=!0})}),M(()=>{t&&e()})}function Fe(e,t,n={}){if(!p)return;const{target:o=window,passive:r=!1,capture:s=!1}=n;let c=!1,a;const i=l=>{if(c)return;const d=h(l);d&&!a&&(d.addEventListener(e,t,{capture:s,passive:r}),a=!0)},u=l=>{if(c)return;const d=h(l);d&&a&&(d.removeEventListener(e,t,s),a=!1)};te(()=>u(o)),I(()=>u(o)),$e(()=>i(o));let f;return ve(o)&&(f=D(o,(l,d)=>{u(d),i(l)})),()=>{f==null||f(),u(o),c=!0}}function $t(e,t,n={}){if(!p)return;const{eventName:o="click"}=n;Fe(o,s=>{(Array.isArray(e)?e:[e]).every(i=>{const u=h(i);return u&&!u.contains(s.target)})&&t(s)},{target:document})}var T,P;function _e(){if(!T&&(T=E(0),P=E(0),p)){const e=()=>{T.value=window.innerWidth,P.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:T,height:P}}var Ne=/scroll|auto|overlay/i,ie=p?window:void 0;function ke(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Me(e,t=ie){let n=e;for(;n&&n!==t&&ke(n);){const{overflowY:o}=window.getComputedStyle(n);if(Ne.test(o))return n;n=n.parentNode}return t}function Ft(e,t=ie){const n=E();return oe(()=>{e.value&&(n.value=Me(e.value,t))}),n}var B;function _t(){if(!B&&(B=E("visible"),p)){const e=()=>{B.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return B}var Ie=Symbol("van-field");function Nt(e){const t=S(Ie,null);t&&!t.customValue.value&&(t.customValue.value=e,D(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}function Le(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function K(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function ue(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ve(e){K(window,e),K(document.body,e)}function kt(e,t){if(e===window)return 0;const n=t?Le(t):ue();return Se(e).top+n}const ze=Oe();function Mt(){ze&&Ve(ue())}const je=e=>e.stopPropagation();function It(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&je(e)}function Lt(e){const t=h(e);if(!t)return!1;const n=window.getComputedStyle(t),o=n.display==="none",r=t.offsetParent===null&&n.position!=="fixed";return o||r}const{width:Ye,height:Ue}=_e();function m(e){if(y(e))return ae(e)?`${e}px`:String(e)}function Vt(e){if(y(e)){if(Array.isArray(e))return{width:m(e[0]),height:m(e[1])};const t=m(e);return{width:t,height:t}}}function zt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let A;function He(){if(!A){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;A=parseFloat(t)}return A}function We(e){return e=e.replace(/rem/g,""),+e*He()}function Ze(e){return e=e.replace(/vw/g,""),+e*Ye.value/100}function Ge(e){return e=e.replace(/vh/g,""),+e*Ue.value/100}function jt(e){if(typeof e=="number")return e;if(z){if(e.includes("rem"))return We(e);if(e.includes("vw"))return Ze(e);if(e.includes("vh"))return Ge(e)}return parseFloat(e)}const Ke=/-(\w)/g,ce=e=>e.replace(Ke,(t,n)=>n.toUpperCase()),qe=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function Yt(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const Ut=(e,t,n)=>Math.min(Math.max(e,t),n);function q(e,t,n){const o=e.indexOf(t);return o===-1?e:t==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(n,"")}function Ht(e,t=!0,n=!0){t?e=q(e,".",/\./g):e=e.split(".")[0],n?e=q(e,"-",/-/g):e=e.replace(/-/,"");const o=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}function Wt(e,t){return Math.round((e+t)*1e10)/1e10}const{hasOwnProperty:Je}=Object.prototype;function Xe(e,t,n){const o=t[n];y(o)&&(!Je.call(e,n)||!V(o)?e[n]=o:e[n]=le(Object(e[n]),o))}function le(e,t){return Object.keys(t).forEach(n=>{Xe(e,t,n)}),e}var Qe={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const J=E("zh-CN"),X=R({"zh-CN":Qe}),et={messages(){return X[J.value]},use(e,t){J.value=e,this.add({[e]:t})},add(e={}){le(X,e)}};var tt=et;function nt(e){const t=ce(e)+".";return(n,...o)=>{const r=tt.messages(),s=H(r,t+n)||H(r,n);return $(s)?s(...o):s}}function k(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,o)=>n+k(e,o),""):Object.keys(t).reduce((n,o)=>n+(t[o]?k(e,o):""),""):""}function ot(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${k(t,n)}`)}function j(e){const t=`van-${e}`;return[t,ot(t),nt(t)]}const C="van-hairline",Zt=`${C}--top`,Gt=`${C}--bottom`,Kt=`${C}--surround`,qt=`${C}--top-bottom`,Jt=`${C}-unset--top-bottom`,Xt="van-haptics-feedback",Qt=Symbol("van-form"),en=500;function de(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(ce(`-${n}`),e))},e}const rt=Symbol();function tn(e){const t=S(rt,null);t&&D(t,n=>{n&&e()})}const[st,Q]=j("badge"),at={dot:Boolean,max:b,tag:w("div"),color:String,offset:Array,content:b,showZero:Te,position:w("top-right")};var it=L({name:st,props:at,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:a,showZero:i}=e;return y(a)&&a!==""&&(i||a!==0&&a!=="0")},o=()=>{const{dot:a,max:i,content:u}=e;if(!a&&n())return t.content?t.content():y(i)&&ae(u)&&+u>+i?`${i}+`:u},r=a=>a.startsWith("-")?a.replace("-",""):`-${a}`,s=O(()=>{const a={background:e.color};if(e.offset){const[i,u]=e.offset,{position:f}=e,[l,d]=f.split("-");t.default?(typeof u=="number"?a[l]=m(l==="top"?u:-u):a[l]=l==="top"?m(u):r(u),typeof i=="number"?a[d]=m(d==="left"?i:-i):a[d]=d==="left"?m(i):r(i)):(a.marginTop=m(u),a.marginLeft=m(i))}return a}),c=()=>{if(n()||e.dot)return v("div",{class:Q([e.position,{dot:e.dot,fixed:!!t.default}]),style:s.value},[o()])};return()=>{if(t.default){const{tag:a}=e;return v(a,{class:Q("wrapper")},{default:()=>[t.default(),c()]})}return c()}}});const ut=de(it);let fe=2e3;const nn=()=>++fe,ct=e=>{fe=e},[me,lt]=j("config-provider"),ge=Symbol(me),dt={tag:w("div"),theme:w("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function ft(e){const t={};return Object.keys(e).forEach(n=>{t[`--van-${qe(n)}`]=e[n]}),t}L({name:me,props:dt,setup(e,{slots:t}){const n=O(()=>ft(Ce({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(z){const o=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},r=(s=e.theme)=>{document.documentElement.classList.remove(`van-theme-${s}`)};D(()=>e.theme,(s,c)=>{c&&r(c),o()},{immediate:!0}),M(o),I(r),ne(r)}return se(ge,e),be(()=>{e.zIndex!==void 0&&ct(e.zIndex)}),()=>v(e.tag,{class:lt(),style:n.value},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[mt,ee]=j("icon"),gt=e=>e==null?void 0:e.includes("/"),pt={dot:Boolean,tag:w("i"),name:String,size:b,badge:b,color:String,badgeProps:Object,classPrefix:String};var Et=L({name:mt,props:pt,setup(e,{slots:t}){const n=S(ge,null),o=O(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||ee());return()=>{const{tag:r,dot:s,name:c,size:a,badge:i,color:u}=e,f=gt(c);return v(ut,we({dot:s,tag:r,class:[o.value,f?"":`${o.value}-${c}`],style:{color:u,fontSize:m(a)},content:i},e.badgeProps),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t),f&&v("img",{class:ee("image"),src:c},null)]}})}}});const on=de(Et);export{ue as $,Jt as A,Zt as B,Yt as C,qt as D,$t as E,Ct as F,z as G,Xt as H,on as I,Gt as J,x as K,en as L,Le as M,K as N,$e as O,Ft as P,zt as Q,Lt as R,Se as S,Ye as T,Ue as U,_t as V,tn as W,Dt as X,Ve as Y,kt as Z,Rt as _,m as a,V as a0,vt as a1,$ as a2,Ie as a3,Qt as a4,Ot as a5,Kt as a6,xt as a7,Me as a8,rt as a9,nn as aa,yt as ab,Wt as b,j as c,At as d,Ce as e,Ht as f,Vt as g,Pt as h,y as i,C as j,ut as k,Ut as l,St as m,b as n,Tt as o,It as p,Bt as q,Mt as r,Fe as s,Te as t,Nt as u,bt as v,de as w,w as x,jt as y,wt as z};
