import{q as B,P as Ze,E as $e,K as Ie,h as K,u as se,s as T,H as R,i as D,b as y,A as me,D as ke,J as Ve,g as Ke,v as Fe,m as Ue,I as je}from"./_plugin-vue_export-helper-4dcb9733.js";import{W as he,X as Re,Y as qe,x as Je,z as Be,c as F,n as H,a as _e,N,Z as Pe,_ as Ae,e as ze,q as Ge,D as be,$ as q,l as U,j as we,k as Oe,w as J,t as L,u as Ee,a0 as Qe,o as Me,a1 as j,C as pe,a2 as de,V as fe,f as ye,v as ge,K as et,M as tt,a3 as xe,a4 as nt,b as De,d as at,p as Te}from"./index-8125559d.js";import{u as Ne}from"./use-id-0ad1db31.js";import{a as it,u as G,c as lt}from"./use-touch-d5903fe7.js";import{a as ot,r as st}from"./use-route-83ee6a88.js";function rt(e,s,c){let i=0;const l=e.scrollLeft,t=c===0?1:Math.round(c*1e3/16);function d(){e.scrollLeft+=(s-l)/t,++i<t&&he(d)}d()}function ct(e,s,c,i){let l=Re(e);const t=l<s,d=c===0?1:Math.round(c*1e3/16),f=(s-l)/d;function m(){l+=f,(t&&l>s||!t&&l<s)&&(l=s),qe(e,l),t&&l<s||!t&&l>s?he(m):i&&he(i)}m()}function ut(){const e=B([]),s=[];return Ze(()=>{e.value=[]}),[e,i=>(s[i]||(s[i]=l=>{e.value[i]=l}),s[i])]}function He(e,s){if(!Je||!window.IntersectionObserver)return;const c=new IntersectionObserver(t=>{s(t[0].intersectionRatio>0)},{root:document.body}),i=()=>{e.value&&c.observe(e.value)},l=()=>{e.value&&c.unobserve(e.value)};$e(l),Ie(l),Be(i)}const[dt,ft]=F("sticky"),vt={zIndex:H,position:_e("top"),container:Object,offsetTop:N(0),offsetBottom:N(0)};var ht=K({name:dt,props:vt,emits:["scroll","change"],setup(e,{emit:s,slots:c}){const i=B(),l=Pe(i),t=se({fixed:!1,width:0,height:0,transform:0}),d=B(!1),f=T(()=>Ae(e.position==="top"?e.offsetTop:e.offsetBottom)),m=T(()=>{if(d.value)return;const{fixed:a,height:$,width:g}=t;if(a)return{width:`${g}px`,height:`${$}px`}}),b=T(()=>{if(!t.fixed||d.value)return;const a=ze(Ge(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${f.value}px`});return t.transform&&(a.transform=`translate3d(0, ${t.transform}px, 0)`),a}),v=a=>s("scroll",{scrollTop:a,isFixed:t.fixed}),w=()=>{if(!i.value||q(i))return;const{container:a,position:$}=e,g=U(i),O=Re(window);if(t.width=g.width,t.height=g.height,$==="top")if(a){const h=U(a),k=h.bottom-f.value-t.height;t.fixed=f.value>g.top&&h.bottom>0,t.transform=k<0?k:0}else t.fixed=f.value>g.top;else{const{clientHeight:h}=document.documentElement;if(a){const k=U(a),E=h-k.top-f.value-t.height;t.fixed=h-f.value<g.bottom&&h>k.top,t.transform=E<0?-E:0}else t.fixed=h-f.value<g.bottom}v(O)};return R(()=>t.fixed,a=>s("change",a)),be("scroll",w,{target:l,passive:!0}),He(i,w),R([we,Oe],()=>{!i.value||q(i)||!t.fixed||(d.value=!0,D(()=>{const a=U(i);t.width=a.width,t.height=a.height,d.value=!1}))}),()=>{var a;return y("div",{ref:i,style:m.value},[y("div",{class:ft({fixed:t.fixed&&!d.value}),style:b.value},[(a=c.default)==null?void 0:a.call(c)])])}}});const gt=J(ht),[Le,le]=F("swipe"),mt={loop:L,width:H,height:H,vertical:Boolean,autoplay:N(0),duration:N(500),touchable:L,lazyRender:Boolean,initialSwipe:N(0),indicatorColor:String,showIndicators:L,stopPropagation:L},We=Symbol(Le);var bt=K({name:Le,props:mt,emits:["change","dragStart","dragEnd"],setup(e,{emit:s,slots:c}){const i=B(),l=B(),t=se({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let d=!1;const f=it(),{children:m,linkChildren:b}=Ee(We),v=T(()=>m.length),w=T(()=>t[e.vertical?"height":"width"]),a=T(()=>e.vertical?f.deltaY.value:f.deltaX.value),$=T(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-w.value*v.value:0),g=T(()=>w.value?Math.ceil(Math.abs($.value)/w.value):v.value),O=T(()=>v.value*w.value),h=T(()=>(t.active+v.value)%v.value),k=T(()=>{const r=e.vertical?"vertical":"horizontal";return f.direction.value===r}),E=T(()=>{const r={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${t.offset}px)`};if(w.value){const x=e.vertical?"height":"width",n=e.vertical?"width":"height";r[x]=`${O.value}px`,r[n]=e[n]?`${e[n]}px`:""}return r}),W=r=>{const{active:x}=t;return r?e.loop?de(x+r,-1,v.value):de(x+r,0,g.value):x},Y=(r,x=0)=>{let n=r*w.value;e.loop||(n=Math.min(n,-$.value));let o=x-n;return e.loop||(o=de(o,$.value,0)),o},I=({pace:r=0,offset:x=0,emitChange:n})=>{if(v.value<=1)return;const{active:o}=t,u=W(r),S=Y(u,x);if(e.loop){if(m[0]&&S!==$.value){const C=S<$.value;m[0].setOffset(C?O.value:0)}if(m[v.value-1]&&S!==0){const C=S>0;m[v.value-1].setOffset(C?-O.value:0)}}t.active=u,t.offset=S,n&&u!==o&&s("change",h.value)},X=()=>{t.swiping=!0,t.active<=-1?I({pace:v.value}):t.active>=v.value&&I({pace:-v.value})},Z=()=>{X(),f.reset(),j(()=>{t.swiping=!1,I({pace:-1,emitChange:!0})})},_=()=>{X(),f.reset(),j(()=>{t.swiping=!1,I({pace:1,emitChange:!0})})};let Q;const A=()=>clearTimeout(Q),z=()=>{A(),+e.autoplay>0&&v.value>1&&(Q=setTimeout(()=>{_(),z()},+e.autoplay))},M=(r=+e.initialSwipe)=>{if(!i.value)return;const x=()=>{var n,o;if(!q(i)){const u={width:i.value.offsetWidth,height:i.value.offsetHeight};t.rect=u,t.width=+((n=e.width)!=null?n:u.width),t.height=+((o=e.height)!=null?o:u.height)}v.value&&(r=Math.min(v.value-1,r),r===-1&&(r=v.value-1)),t.active=r,t.swiping=!0,t.offset=Y(r),m.forEach(u=>{u.setOffset(0)}),z()};q(i)?D().then(x):x()},p=()=>M(t.active);let ee;const re=r=>{!e.touchable||r.touches.length>1||(f.start(r),d=!1,ee=Date.now(),A(),X())},ce=r=>{e.touchable&&t.swiping&&(f.move(r),k.value&&(!e.loop&&(t.active===0&&a.value>0||t.active===v.value-1&&a.value<0)||(pe(r,e.stopPropagation),I({offset:a.value}),d||(s("dragStart",{index:h.value}),d=!0))))},te=()=>{if(!e.touchable||!t.swiping)return;const r=Date.now()-ee,x=a.value/r;if((Math.abs(x)>.25||Math.abs(a.value)>w.value/2)&&k.value){const o=e.vertical?f.offsetY.value:f.offsetX.value;let u=0;e.loop?u=o>0?a.value>0?-1:1:0:u=-Math[a.value>0?"ceil":"floor"](a.value/w.value),I({pace:u,emitChange:!0})}else a.value&&I({pace:0});d=!1,t.swiping=!1,s("dragEnd",{index:h.value}),z()},ue=(r,x={})=>{X(),f.reset(),j(()=>{let n;e.loop&&r===v.value?n=t.active===0?0:r:n=r%v.value,x.immediate?j(()=>{t.swiping=!1}):t.swiping=!1,I({pace:n-t.active,emitChange:!0})})},ne=(r,x)=>{const n=x===h.value,o=n?{backgroundColor:e.indicatorColor}:void 0;return y("i",{style:o,class:le("indicator",{active:n})},null)},ae=()=>{if(c.indicator)return c.indicator({active:h.value,total:v.value});if(e.showIndicators&&v.value>1)return y("div",{class:le("indicators",{vertical:e.vertical})},[Array(v.value).fill("").map(ne)])};return G({prev:Z,next:_,state:t,resize:p,swipeTo:ue}),b({size:w,props:e,count:v,activeIndicator:h}),R(()=>e.initialSwipe,r=>M(+r)),R(v,()=>M(t.active)),R(()=>e.autoplay,z),R([we,Oe,()=>e.width,()=>e.height],p),R(Qe(),r=>{r==="visible"?z():A()}),me(M),ke(()=>M(t.active)),Me(()=>M(t.active)),$e(A),Ie(A),be("touchmove",ce,{target:l}),()=>{var r;return y("div",{ref:i,class:le()},[y("div",{ref:l,style:E.value,class:le("track",{vertical:e.vertical}),onTouchstartPassive:re,onTouchend:te,onTouchcancel:te},[(r=c.default)==null?void 0:r.call(c)]),ae()])}}});const wt=J(bt),[yt,Se]=F("tabs");var xt=K({name:yt,props:{count:fe(Number),inited:Boolean,animated:Boolean,duration:fe(H),swipeable:Boolean,lazyRender:Boolean,currentIndex:fe(Number)},emits:["change"],setup(e,{emit:s,slots:c}){const i=B(),l=f=>s("change",f),t=()=>{var f;const m=(f=c.default)==null?void 0:f.call(c);return e.animated||e.swipeable?y(wt,{ref:i,loop:!1,class:Se("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:l},{default:()=>[m]}):m},d=f=>{const m=i.value;m&&m.state.active!==f&&m.swipeTo(f,{immediate:!e.inited})};return R(()=>e.currentIndex,d),me(()=>{d(e.currentIndex)}),G({swipeRef:i}),()=>y("div",{class:Se("content",{animated:e.animated||e.swipeable})},[t()])}});const[Ye,oe]=F("tabs"),Tt={type:_e("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:N(0),duration:N(.3),animated:Boolean,ellipsis:L,swipeable:Boolean,scrollspy:Boolean,offsetTop:N(0),background:String,lazyRender:L,lineWidth:H,lineHeight:H,beforeChange:Function,swipeThreshold:N(5),titleActiveColor:String,titleInactiveColor:String},Xe=Symbol(Ye);var St=K({name:Ye,props:Tt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:s,slots:c}){let i,l,t;const d=B(),f=B(),m=B(),b=B(),v=Ne(),w=Pe(d),[a,$]=ut(),{children:g,linkChildren:O}=Ee(Xe),h=se({inited:!1,position:"",lineStyle:{},currentIndex:-1}),k=T(()=>g.length>+e.swipeThreshold||!e.ellipsis||e.shrink),E=T(()=>({borderColor:e.color,background:e.background})),W=(n,o)=>{var u;return(u=n.name)!=null?u:o},Y=T(()=>{const n=g[h.currentIndex];if(n)return W(n,h.currentIndex)}),I=T(()=>Ae(e.offsetTop)),X=T(()=>e.sticky?I.value+i:0),Z=n=>{const o=f.value,u=a.value;if(!k.value||!o||!u||!u[h.currentIndex])return;const S=u[h.currentIndex].$el,C=S.offsetLeft-(o.offsetWidth-S.offsetWidth)/2;rt(o,C,n?0:+e.duration)},_=()=>{const n=h.inited;D(()=>{const o=a.value;if(!o||!o[h.currentIndex]||e.type!=="line"||q(d.value))return;const u=o[h.currentIndex].$el,{lineWidth:S,lineHeight:C}=e,P=u.offsetLeft+u.offsetWidth/2,V={width:ye(S),backgroundColor:e.color,transform:`translateX(${P}px) translateX(-50%)`};if(n&&(V.transitionDuration=`${e.duration}s`),ge(C)){const ie=ye(C);V.height=ie,V.borderRadius=ie}h.lineStyle=V})},Q=n=>{const o=n<h.currentIndex?-1:1;for(;n>=0&&n<g.length;){if(!g[n].disabled)return n;n+=o}},A=(n,o)=>{const u=Q(n);if(!ge(u))return;const S=g[u],C=W(S,u),P=h.currentIndex!==null;h.currentIndex!==u&&(h.currentIndex=u,o||Z(),_()),C!==e.active&&(s("update:active",C),P&&s("change",C,S.title)),t&&!e.scrollspy&&tt(Math.ceil(xe(d.value)-I.value))},z=(n,o)=>{const u=g.find((C,P)=>W(C,P)===n),S=u?g.indexOf(u):0;A(S,o)},M=(n=!1)=>{if(e.scrollspy){const o=g[h.currentIndex].$el;if(o&&w.value){const u=xe(o,w.value)-X.value;l=!0,ct(w.value,u,n?0:+e.duration,()=>{l=!1})}}},p=(n,o,u)=>{const{title:S,disabled:C}=g[o],P=W(g[o],o);C||(lt(e.beforeChange,{args:[P],done:()=>{A(o),M()}}),ot(n)),s("clickTab",{name:P,title:S,event:u,disabled:C})},ee=n=>{t=n.isFixed,s("scroll",n)},re=n=>{D(()=>{z(n),M(!0)})},ce=()=>{for(let n=0;n<g.length;n++){const{top:o}=U(g[n].$el);if(o>X.value)return n===0?0:n-1}return g.length-1},te=()=>{if(e.scrollspy&&!l){const n=ce();A(n)}},ue=()=>{if(e.type==="line"&&g.length)return y("div",{class:oe("line"),style:h.lineStyle},null)},ne=()=>{var n,o,u;const{type:S,border:C,sticky:P}=e,V=[y("div",{ref:P?void 0:m,class:[oe("wrap"),{[et]:S==="line"&&C}]},[y("div",{ref:f,role:"tablist",class:oe("nav",[S,{shrink:e.shrink,complete:k.value}]),style:E.value,"aria-orientation":"horizontal"},[(n=c["nav-left"])==null?void 0:n.call(c),g.map(ie=>ie.renderTitle(p)),ue(),(o=c["nav-right"])==null?void 0:o.call(c)])]),(u=c["nav-bottom"])==null?void 0:u.call(c)];return P?y("div",{ref:m},[V]):V},ae=()=>{_(),D(()=>{var n,o;Z(!0),(o=(n=b.value)==null?void 0:n.swipeRef.value)==null||o.resize()})};R(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],_),R(we,ae),R(()=>e.active,n=>{n!==Y.value&&z(n)}),R(()=>g.length,()=>{h.inited&&(z(e.active),_(),D(()=>{Z(!0)}))});const r=()=>{z(e.active,!0),D(()=>{h.inited=!0,m.value&&(i=U(m.value).height),Z(!0)})},x=(n,o)=>s("rendered",n,o);return G({resize:ae,scrollTo:re}),ke(_),Me(_),Be(r),He(d,_),be("scroll",te,{target:w,passive:!0}),O({id:v,props:e,setLine:_,scrollable:k,onRendered:x,currentName:Y,setTitleRefs:$,scrollIntoView:Z}),()=>y("div",{ref:d,class:oe([e.type])},[e.sticky?y(gt,{container:d.value,offsetTop:I.value,onScroll:ee},{default:()=>[ne()]}):ne(),y(xt,{ref:b,count:g.length,inited:h.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:h.currentIndex,onChange:A},{default:()=>{var n;return[(n=c.default)==null?void 0:n.call(c)]}})])}});const Ct=Symbol(),[$t,Ce]=F("tab"),It=K({name:$t,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:H,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:L},setup(e,{slots:s}){const c=T(()=>{const l={},{type:t,color:d,disabled:f,isActive:m,activeColor:b,inactiveColor:v}=e;d&&t==="card"&&(l.borderColor=d,f||(m?l.backgroundColor=d:l.color=d));const a=m?b:v;return a&&(l.color=a),l}),i=()=>{const l=y("span",{class:Ce("text",{ellipsis:!e.scrollable})},[s.title?s.title():e.title]);return e.dot||ge(e.badge)&&e.badge!==""?y(nt,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[l]}):l};return()=>y("div",{id:e.id,role:"tab",class:[Ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:c.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[i()])}}),[kt,Rt]=F("swipe-item");var Bt=K({name:kt,setup(e,{slots:s}){let c;const i=se({offset:0,inited:!1,mounted:!1}),{parent:l,index:t}=De(We);if(!l)return;const d=T(()=>{const b={},{vertical:v}=l.props;return l.size.value&&(b[v?"height":"width"]=`${l.size.value}px`),i.offset&&(b.transform=`translate${v?"Y":"X"}(${i.offset}px)`),b}),f=T(()=>{const{loop:b,lazyRender:v}=l.props;if(!v||c)return!0;if(!i.mounted)return!1;const w=l.activeIndicator.value,a=l.count.value-1,$=w===0&&b?a:w-1,g=w===a&&b?0:w+1;return c=t.value===w||t.value===$||t.value===g,c}),m=b=>{i.offset=b};return me(()=>{D(()=>{i.mounted=!0})}),G({setOffset:m}),()=>{var b;return y("div",{class:Rt(),style:d.value},[f.value?(b=s.default)==null?void 0:b.call(s):null])}}});const _t=J(Bt),[Pt,ve]=F("tab"),At=ze({},st,{dot:Boolean,name:H,badge:H,title:String,disabled:Boolean,titleClass:at,titleStyle:[String,Object],showZeroBadge:L});var zt=K({name:Pt,props:At,setup(e,{slots:s}){const c=Ne(),i=B(!1),l=je(),{parent:t,index:d}=De(Xe);if(!t)return;const f=()=>{var a;return(a=e.name)!=null?a:d.value},m=()=>{i.value=!0,t.props.lazyRender&&D(()=>{t.onRendered(f(),e.title)})},b=T(()=>{const a=f()===t.currentName.value;return a&&!i.value&&m(),a}),v=a=>y(It,Ue({key:c,id:`${t.id}-${d.value}`,ref:t.setTitleRefs(d.value),style:e.titleStyle,class:e.titleClass,isActive:b.value,controls:c,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:$=>a(l.proxy,d.value,$)},Te(t.props,["type","color","shrink"]),Te(e,["dot","badge","title","disabled","showZeroBadge"])),{title:s.title}),w=B(!b.value);return R(b,a=>{a?w.value=!1:j(()=>{w.value=!0})}),R(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),Ve(Ct,b),G({id:c,renderTitle:v}),()=>{var a;const $=`${t.id}-${d.value}`,{animated:g,swipeable:O,scrollspy:h,lazyRender:k}=t.props;if(!s.default&&!g)return;const E=h||b.value;if(g||O)return y(_t,{id:c,role:"tabpanel",class:ve("panel-wrapper",{inactive:w.value}),tabindex:b.value?0:-1,"aria-hidden":!b.value,"aria-labelledby":$},{default:()=>{var I;return[y("div",{class:ve("panel")},[(I=s.default)==null?void 0:I.call(s)])]}});const Y=i.value||h||!k?(a=s.default)==null?void 0:a.call(s):null;return Ke(y("div",{id:c,role:"tabpanel",class:ve("panel"),tabindex:E?0:-1,"aria-labelledby":$},[Y]),[[Fe,E]])}}});const Ht=J(zt),Lt=J(St);export{Lt as T,Ht as a};
