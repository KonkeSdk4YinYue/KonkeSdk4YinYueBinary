import{_ as w,o as a,c as l,a as s,F as p,r as f,t as v,b as i,w as u,d as V,p as y,e as T,f as A,v as b,g as L,h as P}from"./_plugin-vue_export-helper-c6b04c4a.js";import"./index-31b7c571.js";/* empty css              */import{T as O,a as j}from"./index-8310b73f.js";import{_ as D}from"./nav-bar-721d5a93.js";import{C as M,a as E}from"./index-066b1e6c.js";import{C as R}from"./index-7882f3c6.js";import{C as U}from"./index-7bc1b107.js";import"./index-d2ea230b.js";/* empty css              */import{T as B}from"./index-860b8b59.js";import{s as F}from"./function-call-8de52e48.js";import{s as x}from"./api-0e409763.js";import{_ as N}from"./ic_scene1-0f866639.js";import{P as G}from"./index-03f6bb18.js";import"./use-id-23bdf568.js";import"./use-touch-c5100371.js";import"./use-route-3612c525.js";import"./index-22da9197.js";const Y={name:"SceneActionAutoScene",props:{scene:{}},data(){return{list:[{name:"打开",action:"TurnOnScene"},{name:"关闭",action:"TurnOffScene"}]}},mounted(){},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(e){console.log("checked",this.checked),this.$emit("onConfirm",this.scene,e)}}},K={class:"demo-component"},q={class:"btn_list"};function z(e,t,r,_,n,c){return a(),l("div",K,[s("div",q,[(a(!0),l(p,null,f(n.list,m=>(a(),l("div",{class:"btn_item",onClick:t[0]||(t[0]=(...d)=>c.onClickRight&&c.onClickRight(...d))},v(m.name),1))),256))]),s("div",{class:"btn_cancel",onClick:t[1]||(t[1]=(...m)=>c.onClickLeft&&c.onClickLeft(...m))}," 取消 ")])}const H=w(Y,[["render",z],["__scopeId","data-v-8a21e102"]]);const J={name:"SceneActionLight",props:{scene:{}},data(){return{columnsType:["minute","second"],currentTime:["00","00"],formatter:(_,n)=>(_==="hour"?n.text+="时":_==="minute"?n.text+="分":n.text+="秒",n),seldata:"00:00",checked:["ExecuteScene"],list:[{name:"打开",action:"ExecuteScene"}],deley:0}},mounted(){},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){if(console.log("checked",this.checked),this.checked.length==0){F("必须选择一个动作");return}this.$emit("onConfirm",this.scene,this.checked[0],this.deley)},toggle(e,t){this.checked.splice(0,this.checked.length),this.checked.push(t),console.log(this.checked)},onTimeChange(e){this.seldata=e.selectedValues[0]+":"+e.selectedValues[1],this.deley=e.selectedValues[0]*60+e.selectedValues[1]}}},Q=e=>(y("data-v-420efa06"),e=e(),T(),e),W={class:"demo-component"},X={class:"time_sel_bg"},Z={class:"time_show_line"},$=Q(()=>s("span",{class:"time_show_line_hint"}," 延迟时间 ",-1)),ee={class:"time_show_line_time"},ne={class:"time_sel"},te={class:"time_sel_child"},oe={class:"action_list"};function se(e,t,r,_,n,c){const m=D,d=B,C=M,k=U,h=R,g=E;return a(),l("div",W,[i(m,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:c.onClickRight,fixed:!1,onClickLeft:c.onClickLeft},null,8,["onClickRight","onClickLeft"]),s("div",X,[s("div",Z,[$,s("span",ee,v(n.seldata),1)]),s("div",ne,[s("div",te,[i(d,{"option-height":35,"visible-option-num":3,"show-toolbar":!1,modelValue:n.currentTime,"onUpdate:modelValue":t[0]||(t[0]=o=>n.currentTime=o),formatter:n.formatter,title:"选择时间","columns-type":n.columnsType,onChange:c.onTimeChange},null,8,["modelValue","formatter","columns-type","onChange"])])])]),s("div",oe,[i(g,{modelValue:n.checked,"onUpdate:modelValue":t[1]||(t[1]=o=>n.checked=o)},{default:u(()=>[i(h,{inset:""},{default:u(()=>[(a(!0),l(p,null,f(n.list,(o,S)=>(a(),V(k,{clickable:"",key:o,title:o.name,onClick:ke=>c.toggle(S,o.action)},{"right-icon":u(()=>[i(C,{name:o.action},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])}const ce=w(J,[["render",se],["__scopeId","data-v-420efa06"]]);const ie={name:"KonkeSdk4YinYueSrcApp",components:{SceneActionScene:ce,SceneActionAutoScene:H},data(){return{active:0,sceneManualList:[],sceneAutoList:[],scene_auto_show:!1,scene_show:!1,scene:{},auto_scene:{}}},mounted(){this.getManualList(),this.getAutoList()},methods:{onClickLeft(){window.__jsb.pop()},selManualScene(e){this.scene_show=!0,this.scene=e},selAutoScene(e){this.scene_auto_show=!0,this.auto_scene=e},getManualList(){x(!0).then(e=>{this.sceneManualList=e.data.sceneList}).catch(e=>console.log(e))},getAutoList(){x(!1).then(e=>{this.sceneManualList=e.data.sceneList}).catch(e=>console.log(e))},onAutoSceneSelConfirm(e,t){this.scene_auto_show=!1;let r={sceneId:e.sceneId+"",sceneName:e.sceneName};const _={actionType:"Scene",delayTime:0,inner:!1,userDeviceId:null,actionName:t,extension:r};window.__jsb.forwardEvent({eventName:"pop",eventData:"",fromPage:"scene-action-scene",toPage:"scene-action-type"}),window.__jsb.forwardEvent({eventName:"addDevAction",eventData:_,fromPage:"scene-action-scene",toPage:"scene-manual"}),window.__jsb.pop()},onAutoSceneSelCancel(){this.scene_auto_show=!1},onSceneSelConfirm(e,t,r){this.scene_auto_show=!1;let _={sceneId:e.sceneId+"",sceneName:e.sceneName};const n={actionType:"Scene",delayTime:r,inner:!1,userDeviceId:null,actionName:t,extension:_};window.__jsb.forwardEvent({eventName:"pop",eventData:"",fromPage:"scene-action-scene",toPage:"scene-action-type"}),window.__jsb.forwardEvent({eventName:"addDevAction",eventData:n,fromPage:"scene-action-scene",toPage:"scene-manual"}),window.__jsb.pop(),this.scene_show=!1},onSceneSelCancel(){this.scene_show=!1}}},I=e=>(y("data-v-ce400141"),e=e(),T(),e),ae={class:"home"},le={class:"tab_line"},_e={class:"scene_list"},re=["onClick"],me=I(()=>s("div",{class:"scene_img"},[s("img",{src:N})],-1)),de={class:"scene_name"},ue={class:"scene_list"},he=["onClick"],pe=I(()=>s("div",{class:"scene_img"},[s("img",{src:N})],-1)),fe={class:"scene_name"};function ve(e,t,r,_,n,c){const m=D,d=j,C=O,k=L("SceneActionScene"),h=G,g=L("SceneActionAutoScene");return a(),l("div",ae,[i(m,{class:"nav_bar",title:"选择场景",onClickLeft:c.onClickLeft},null,8,["onClickLeft"]),s("div",le,[i(C,{active:n.active,"onUpdate:active":t[0]||(t[0]=o=>n.active=o),color:"#FD7D28","title-active-color":"#FD7D28","title-inactive-color":"#666666",sticky:"",animated:"",shrink:""},{default:u(()=>[i(d,{title:"手动场景",name:"0"}),i(d,{title:"自动场景",name:"1"})]),_:1},8,["active"])]),(a(!0),l(p,null,f(n.sceneManualList,o=>A((a(),l("div",_e,[s("div",{class:"scene_item",onClick:S=>c.selManualScene(o)},[me,s("div",null,[s("span",de,v(o.sceneName),1)])],8,re)],512)),[[b,n.active==0]])),256)),(a(!0),l(p,null,f(n.sceneAutoList,o=>A((a(),l("div",ue,[s("div",{class:"scene_item",onClick:S=>c.selAutoScene(o)},[pe,s("div",null,[s("span",fe,v(o.sceneName),1)])],8,he)],512)),[[b,n.active==1]])),256)),i(h,{show:n.scene_show,"onUpdate:show":t[1]||(t[1]=o=>n.scene_show=o),position:"bottom"},{default:u(()=>[i(k,{scene:n.scene,onOnCancal:c.onSceneSelCancel,onOnConfirm:c.onSceneSelConfirm},null,8,["scene","onOnCancal","onOnConfirm"])]),_:1},8,["show"]),i(h,{show:n.scene_auto_show,"onUpdate:show":t[2]||(t[2]=o=>n.scene_auto_show=o),position:"bottom",round:"",overlay:""},{default:u(()=>[i(g,{scene:n.auto_scene,onOnCancal:c.onAutoSceneSelCancel,onOnConfirm:c.onAutoSceneSelConfirm},null,8,["scene","onOnCancal","onOnConfirm"])]),_:1},8,["show"])])}const Ce=w(ie,[["render",ve],["__scopeId","data-v-ce400141"]]);P(Ce).mount("#root");
