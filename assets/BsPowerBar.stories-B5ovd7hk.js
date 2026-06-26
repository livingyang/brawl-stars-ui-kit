import{i as e}from"./preload-helper-CT_b8DTk.js";import{C as t,D as n,O as r,S as i,b as a,d as o,f as s,g as c,h as l,k as u,p as d,u as f}from"./iframe-CJm2Q8zN.js";import{a as p,c as m,i as h,n as g,o as _,t as v}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var y,b,x,S,C,w=e((()=>{f(),m(),y={class:`segments`},b={class:`segment-icon`},x={key:0,class:`star-display`},S={key:1,class:`max-badge`},C=a({__name:`BsPowerBar`,props:{segments:{},isMax:{type:Boolean,default:!1},starLevel:{default:0}},setup(e){let a=s(()=>({"--bs-yellow":p.yellow,"--bs-yellow-dark":p.yellowDark,"--bs-gray400":p.gray400,"--bs-black":p.black,"--bs-border-width":h.width,"--bs-border-radius":h.radius.sm,"--bs-font-size":_.sizes.lg,"--bs-font-weight":String(_.weights.bold)}));return(s,f)=>(i(),c(`div`,{class:n([`bs-power-bar`,{max:e.isMax}]),style:r(a.value)},[d(`div`,y,[(i(!0),c(o,null,t(e.segments,(e,t)=>(i(),c(`div`,{key:t,class:n([`segment`,{filled:e}])},[d(`span`,b,u(e?`⚡`:`○`),1)],2))),128))]),e.starLevel>0?(i(),c(`span`,x,u(`⭐`.repeat(e.starLevel)),1)):l(``,!0),e.isMax?(i(),c(`span`,S,`MAX`)):l(``,!0)],6))}})})),T=e((()=>{})),E,D=e((()=>{w(),w(),T(),g(),E=v(C,[[`__scopeId`,`data-v-66fb7025`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`BsPowerBar`,description:``,tags:{},props:[{name:`segments`,required:!0,type:{name:`Array`,elements:[{name:`boolean`}]}},{name:`isMax`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`starLevel`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsPowerBar.vue`]})})),O,k,A,j,M,N,P,F;e((()=>{D(),O={title:`Atoms/BsPowerBar`,component:E,tags:[`autodocs`],argTypes:{segments:{control:`object`,description:`Array of boolean for each segment`},isMax:{control:`boolean`,description:`Max power state`},starLevel:{control:`number`,description:`Star level (0-3)`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},k={args:{segments:[!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],isMax:!1,starLevel:0}},A={args:{segments:[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1],isMax:!1,starLevel:0}},j={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1],isMax:!1,starLevel:0}},M={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],isMax:!0,starLevel:1}},N={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],isMax:!0,starLevel:3}},P={render:()=>({components:{BsPowerBar:E},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 40px; background: #1A1A2E;">
        <BsPowerBar :segments="[true, false, false, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="1" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="3" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, false, false, false, false, false, false, false, false],
    isMax: false,
    starLevel: 0
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, false, false, false, false, false],
    isMax: false,
    starLevel: 0
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, false],
    isMax: false,
    starLevel: 0
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 1
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 3
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsPowerBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 40px; background: #1A1A2E;">
        <BsPowerBar :segments="[true, false, false, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="1" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="3" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...P.parameters?.docs?.source}}},F=[`PartialPower`,`MidPower`,`AlmostMax`,`MaxPower`,`MaxWithStars`,`PowerLevels`]}))();export{j as AlmostMax,M as MaxPower,N as MaxWithStars,A as MidPower,k as PartialPower,P as PowerLevels,F as __namedExportsOrder,O as default};