import{_ as v,c as _,b as r,w as u,k as f,v as w,a as l,o as I,p as y,f as C,l as N,e as g}from"./_plugin-vue_export-helper-b237bda9.js";import"./index-48d5ec75.js";/* empty css              *//* empty css              */import"./index-2718965a.js";import{F as b}from"./index-0e89bf2d.js";import{_ as T}from"./nav-bar-25466e0a.js";import{R as D}from"./room-component-da37607d.js";import{S as L}from"./scene-action-light-component-712d1e3d.js";import{b as k,p as R,q as S,t as P,u as V,r as x}from"./api-2425ebd0.js";import{g as j}from"./urlparse-f25d0f77.js";import{a as d}from"./function-call-870d27f5.js";import{P as U}from"./index-c7c816a4.js";import"./use-route-f0a1f66c.js";import"./use-id-06d20740.js";import"./use-touch-5cae3072.js";import"./index-1df323c1.js";import"./index-2521a990.js";import"./index-996b5610.js";/* empty css              */import"./index-e42d5b3f.js";import"./index-23e1586e.js";import"./index-85a17d82.js";const A={components:{SceneActionLight:L,RoomListPop:D},data(){return{devName:"",room_sel_show:!1,roomList:[],roomName:"",roomId:-1,devId:-1,typeName:"电视",userDevice:{},rcType:"",codeId:-1,keyList:[],codeType:"",isNewCode:!1}},mounted(){this.getUrlParams(),window.__eventBus.on("infraredLibCode",e=>{this.rcType=e.rcType,this.typeName=this.rcType=="AC"?"空调":this.rcType=="TV"?"电视":"风扇",this.codeId=e.codeId,this.codeType=e.codeType,this.isNewCode=!0})},methods:{getUrlParams(){let e=window.location.search;const o=j(e);console.log(o),o!=null&&"devId"in o&&(this.devId=o.devId,console.log(this.devId),this.devId!=null&&this.devId!=-1&&this.getDevInfo())},getDevInfo(){k({userDeviceId:this.devId}).then(e=>{var n;if(console.log(e),this.userDevice=e.data.userDeviceList[0],this.roomName=(n=e.data.userDeviceList[0])==null?void 0:n.roomName,this.roomId=e.data.userDeviceList[0].roomId,this.devName=e.data.userDeviceList[0].deviceName,this.userDevice.userExtension!=""){var o=JSON.parse(this.userDevice.userExtension);this.rcType=o.rcType,this.typeName=this.rcType=="AC"?"空调":this.rcType=="TV"?"电视":"风扇"}}).catch(e=>d(e))},onClickLeft(){window.__jsb.pop()},onClickRight(){if(this.devName==""){d("请输入设备名称");return}if(this.roomId==-1){d("请选择房间");return}try{this.isNewCode?this.codeType=="cloud"&&R(this.devId,this.codeId,this.userDevice.nodeId).then(e=>{const o={};o.codeType=this.codeType,o.codeLibId=this.codeId,o.rcType=this.rcType,S(this.devId,this.devName,this.roomId,JSON.stringify(o)).then(n=>{window.__jsb.forwardEvent({eventName:"reload",fromPage:"devedit",toPage:""})})}).catch(e=>{d(e)}):P(this.devId,this.devName,this.roomId).then(e=>{window.__jsb.forwardEvent({eventName:"reload",fromPage:"devedit",toPage:""}),window.__jsb.pop()})}catch(e){d(e)}},toSelType(){window.__jsb.push({route:"dev-infrared-type",params:{devId:this.devId,nodeId:this.userDevice.nodeId}})},delDev(){V(this.devId).then(e=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"devedit",toPage:""}),window.__jsb.pop()}).catch(e=>{d(e)})},selRoom(){this.room_sel_show=!0,x().then(e=>{e.code==200?this.roomList=e.data.roomList:d(e.info)})},onRoomSelCancel(){this.room_sel_show=!1},onRoomSelConfirm(e){console.log("onRoomSelConfirm",e),this.roomName=e.roomName,this.roomId=e.roomId,this.room_sel_show=!1}}},m=e=>(y("data-v-b939f1b9"),e=e(),C(),e),E={class:"home"},O=m(()=>l("div",{class:"name_hint"}," 设备名称 ",-1)),B=m(()=>l("div",{class:"name_hint"}," 房间 ",-1)),F=m(()=>l("div",{class:"name_hint"}," 红外配置 ",-1));function J(e,o,n,z,t,i){const c=T,a=b,p=N("RoomListPop"),h=U;return I(),_("div",E,[r(c,{class:"nav_bar",title:"编辑设备","right-text":"保存",onClickRight:i.onClickRight,onClickLeft:i.onClickLeft},null,8,["onClickRight","onClickLeft"]),O,r(a,{class:"input",modelValue:t.devName,"onUpdate:modelValue":o[0]||(o[0]=s=>t.devName=s),clearable:"",placeholder:"请输入设备名称"},null,8,["modelValue"]),B,r(a,{class:"input",modelValue:t.roomName,"onUpdate:modelValue":o[1]||(o[1]=s=>t.roomName=s),onClick:i.selRoom,"right-icon":"arrow ",readonly:"",placeholder:"请选择房间"},null,8,["modelValue","onClick"]),F,r(a,{class:"input",modelValue:t.typeName,"onUpdate:modelValue":o[2]||(o[2]=s=>t.typeName=s),onClick:i.toSelType,"right-icon":"arrow ",readonly:"",placeholder:"请选择红外类型"},null,8,["modelValue","onClick"]),r(h,{show:t.room_sel_show,"onUpdate:show":o[3]||(o[3]=s=>t.room_sel_show=s),position:"bottom"},{default:u(()=>[r(p,{list:t.roomList,onOnCancal:i.onRoomSelCancel,onOnConfirm:i.onRoomSelConfirm},null,8,["list","onOnCancal","onOnConfirm"])]),_:1},8,["show"]),f(l("div",{class:"del_text",onClick:o[4]||(o[4]=(...s)=>i.delDev&&i.delDev(...s))},"删除设备",512),[[w,t.devId!=null&&t.devId!=-1]])])}const q=v(A,[["render",J],["__scopeId","data-v-b939f1b9"]]);g(q).mount("#root");
