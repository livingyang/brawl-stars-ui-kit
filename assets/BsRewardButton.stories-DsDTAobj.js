import{i as e}from"./preload-helper-CeV3c4x5.js";import{E as t,S as n,T as r,_ as i,f as a,h as o,p as s,u as c,w as l,y as u}from"./iframe-De8NUuj5.js";import{a as d,c as f,i as p,n as m,o as h,r as g,s as _,t as v}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var y,b,x,S,C=e((()=>{c(),f(),y=[`disabled`],b={class:`reward-icon`},x={class:`label`},S=i({__name:`BsRewardButton`,props:{label:{},locked:{type:Boolean,default:!1},glow:{type:Boolean,default:!1}},setup(e){let i=e,c=n(!1),f=n(!1),m=a(()=>{let e={"--bs-green":d.green,"--bs-yellow":d.yellow,"--bs-yellow-light":d.yellowLight,"--bs-black":d.black,"--bs-white":d.white,"--bs-border-width":p.width,"--bs-border-radius":p.radius.md,"--bs-font-size":h.sizes.lg,"--bs-font-weight":String(h.weights.bold),"--bs-animation-fast":g.fast,"--bs-transform-hover":_.hover,"--bs-transform-active":_.active};return i.locked?e.cursor=`not-allowed`:e.cursor=`pointer`,e}),v=()=>{i.locked||(c.value=!0)},S=()=>{c.value=!1,f.value=!1},C=()=>{i.locked||(f.value=!0)},w=()=>{f.value=!1};return(n,i)=>(u(),o(`button`,{class:l([`bs-reward-button`,{locked:e.locked,glow:e.glow}]),style:r(m.value),disabled:e.locked,onMouseenter:v,onMouseleave:S,onMousedown:C,onMouseup:w},[s(`span`,b,t(e.locked?`🔒`:`⭐`),1),s(`span`,x,t(e.label),1)],46,y))}})})),w=e((()=>{})),T,E=e((()=>{C(),C(),w(),m(),T=v(S,[[`__scopeId`,`data-v-8ecdd338`]]),S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`BsRewardButton`,description:``,tags:{},props:[{name:`label`,required:!0,type:{name:`string`}},{name:`locked`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`glow`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsRewardButton.vue`]})})),D,O,k,A,j,M;e((()=>{E(),D={title:`Atoms/BsRewardButton`,component:T,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},locked:{control:`boolean`,description:`Locked state`},glow:{control:`boolean`,description:`Glow animation effect`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},O={args:{label:`CLAIM`,locked:!1,glow:!1}},k={args:{label:`UNLOCK`,locked:!0,glow:!1}},A={args:{label:`CLAIM`,locked:!1,glow:!0}},j={render:()=>({components:{BsRewardButton:T},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsRewardButton label="CLAIM" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsRewardButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">With Glow Animation</h3>
          <BsRewardButton label="CLAIM" :glow="true" />
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CLAIM',
    locked: false,
    glow: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UNLOCK',
    locked: true,
    glow: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CLAIM',
    locked: false,
    glow: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsRewardButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsRewardButton label="CLAIM" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsRewardButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">With Glow Animation</h3>
          <BsRewardButton label="CLAIM" :glow="true" />
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Locked`,`GlowEffect`,`AllStates`]}))();export{j as AllStates,O as Default,A as GlowEffect,k as Locked,M as __namedExportsOrder,D as default};