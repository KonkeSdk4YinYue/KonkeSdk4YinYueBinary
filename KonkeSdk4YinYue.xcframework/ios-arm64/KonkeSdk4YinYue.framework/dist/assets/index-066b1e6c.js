import{c as f,d as P,u as p,n as h,q as G,e as _,t as O,h as S,v as $,w as b}from"./index-31b7c571.js";import{a as k}from"./use-touch-c5100371.js";import{c as y,s as E}from"./index-d2ea230b.js";import{j as V,m as x,b as g,l as q,q as w}from"./_plugin-vue_export-helper-c6b04c4a.js";const[v,A]=f("checkbox-group"),B={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:G(),checkedColor:String},C=Symbol(v);var K=V({name:v,props:B,emits:["change","update:modelValue"],setup(a,{emit:d,slots:s}){const{children:o,linkChildren:i}=P(C),l=e=>d("update:modelValue",e),u=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:r}=e,c=o.filter(n=>n.props.bindGroup?n.props.disabled&&r?n.checked.value:t??!n.checked.value:!1).map(n=>n.name);l(c)};return x(()=>a.modelValue,e=>d("change",e)),k({toggleAll:u}),p(()=>a.modelValue),i({props:a,updateValue:l}),()=>{var e;return g("div",{class:A([a.direction])},[(e=s.default)==null?void 0:e.call(s)])}}});const[N,j]=f("checkbox"),z=_({},y,{bindGroup:O});var D=V({name:N,props:z,emits:["change","update:modelValue"],setup(a,{emit:d,slots:s}){const{parent:o}=S(C),i=e=>{const{name:t}=a,{max:r,modelValue:m}=o.props,c=m.slice();if(e)!(r&&c.length>=+r)&&!c.includes(t)&&(c.push(t),a.bindGroup&&o.updateValue(c));else{const n=c.indexOf(t);n!==-1&&(c.splice(n,1),a.bindGroup&&o.updateValue(c))}},l=q(()=>o&&a.bindGroup?o.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),u=(e=!l.value)=>{o&&a.bindGroup?i(e):d("update:modelValue",e)};return x(()=>a.modelValue,e=>d("change",e)),k({toggle:u,props:a,checked:l}),p(()=>a.modelValue),()=>g(E,w({bem:j,role:"checkbox",parent:o,checked:l.value,onToggle:u},a),$(s,["default","icon"]))}});const T=b(D),U=b(K);export{T as C,U as a};
