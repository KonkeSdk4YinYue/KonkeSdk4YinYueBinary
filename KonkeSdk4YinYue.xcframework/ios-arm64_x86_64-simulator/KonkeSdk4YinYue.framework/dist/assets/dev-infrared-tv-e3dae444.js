import{_ as c,c as a,b as r,a as s,o as v,p as m,f as h,e as u}from"./_plugin-vue_export-helper-4dcb9733.js";import{_ as g}from"./nav-bar-2d16eeee.js";import{g as p}from"./urlparse-f25d0f77.js";import{f as C,z as f}from"./api-a6d3b59a.js";import{_ as b,a as k,b as I,c as w,d as D,e as d,f as _,g as L,h as j,i as x}from"./ic_tv_back-276f1aa2.js";import{_ as R}from"./ic_tv_on-d8b22e33.js";import{a as S}from"./function-call-fc609343.js";import"./index-911a1983.js";import"./use-touch-3e361956.js";import"./index-bc3726e2.js";import"./index-16a23f12.js";const A={components:{},data(){return{devId:-1,userDevice:{}}},mounted(){this.getUrlParams()},methods:{getUrlParams(){let i=window.location.search;const t=p(i);console.log(t),t!=null&&"devId"in t&&(this.devId=t.devId,console.log(this.devId),this.devId!=null&&this.devId!=-1&&this.getDevInfo())},getDevInfo(){C({userDeviceId:this.devId}).then(i=>{console.log(i),this.userDevice=i.data.userDeviceList[0]}).catch(i=>S(i))},onClickLeft(){window.__jsb.pop()},sendCode(i){f(this.devId,this.userDevice.nodeId,i)},onClickRight(){window.__jsb.push({route:"dev-infrared-edit",params:{devId:this.devId}})}}},o=i=>(m("data-v-b2151f4a"),i=i(),h(),i),B={class:"home"},P={class:"content"},U=o(()=>s("img",{class:"img",src:b},null,-1)),y={class:"round"},N=o(()=>s("img",{src:k},null,-1)),V=[N],$={class:"rightandleft"},z=o(()=>s("img",{src:I},null,-1)),E=[z],T=o(()=>s("img",{src:w},null,-1)),q=[T],F=o(()=>s("img",{src:D},null,-1)),G=[F],H={class:"channel_sound"},J={class:"channel"},K=o(()=>s("img",{src:d},null,-1)),M=[K],O=o(()=>s("div",{class:"channel_hint"},"频道",-1)),Q=o(()=>s("img",{src:_},null,-1)),W=[Q],X={class:"sound"},Y=o(()=>s("img",{src:d},null,-1)),Z=[Y],ss=o(()=>s("div",{class:"channel_hint"},"音量",-1)),ts=o(()=>s("img",{src:_},null,-1)),os=[ts],es={class:"bottom"},is={class:"bottom_main"},ns=o(()=>s("img",{class:"bottom_img",src:R},null,-1)),ds=o(()=>s("div",{class:"bottom_tv"},"开关",-1)),_s=[ns,ds],ls=o(()=>s("img",{class:"bottom_img",src:L},null,-1)),cs=o(()=>s("div",{class:"bottom_tv"},"菜单",-1)),as=[ls,cs],rs=o(()=>s("img",{class:"bottom_img",src:j},null,-1)),vs=o(()=>s("div",{class:"bottom_tv"},"确定",-1)),ms=[rs,vs],hs=o(()=>s("img",{class:"bottom_img",src:x},null,-1)),us=o(()=>s("div",{class:"bottom_tv"},"返回",-1)),gs=[hs,us];function ps(i,t,fs,bs,ks,e){const l=g;return v(),a("div",B,[r(l,{class:"nav_bar",title:"选择红外类型","right-text":"编辑",onClickRight:e.onClickRight,onClickLeft:e.onClickLeft},null,8,["onClickRight","onClickLeft"]),s("div",P,[U,s("div",y,[s("div",{class:"icon1",onClick:t[0]||(t[0]=n=>e.sendCode(43))},V),s("div",$,[s("div",{class:"left_icon",onClick:t[1]||(t[1]=n=>e.sendCode(42))},E),s("div",{class:"right_icon",onClick:t[2]||(t[2]=n=>e.sendCode(44))},q)]),s("div",{class:"bottom_icon",onClick:t[3]||(t[3]=n=>e.sendCode(46))},G)]),s("div",H,[s("div",J,[s("div",{class:"channel_add",onClick:t[4]||(t[4]=n=>e.sendCode(3))},M),O,s("div",{class:"channel_sub",onClick:t[5]||(t[5]=n=>e.sendCode(2))},W)]),s("div",X,[s("div",{class:"channel_add",onClick:t[6]||(t[6]=n=>e.sendCode(5))},Z),ss,s("div",{class:"channel_sub",onClick:t[7]||(t[7]=n=>e.sendCode(4))},os)])])]),s("div",es,[s("div",is,[s("div",{class:"div_line_1",onClick:t[8]||(t[8]=n=>e.sendCode(1))},_s),s("div",{class:"div_line_2",onClick:t[9]||(t[9]=n=>e.sendCode(23))},as),s("div",{class:"div_line_3",onClick:t[10]||(t[10]=n=>e.sendCode(45))},ms),s("div",{class:"div_line_4",onClick:t[11]||(t[11]=n=>e.sendCode(55))},gs)])])])}const Cs=c(A,[["render",ps],["__scopeId","data-v-b2151f4a"]]);u(Cs).mount("#root");
