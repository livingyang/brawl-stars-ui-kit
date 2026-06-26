import{i as e}from"./preload-helper-CT_b8DTk.js";import{O as t,S as n,b as r,f as i,g as a,k as o,p as s,u as c}from"./iframe-CJm2Q8zN.js";import{a as l,c as u,i as d,n as f,t as p}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var m,h,g=e((()=>{c(),u(),m={class:`icon`},h=r({__name:`BsCurrencyIcon`,props:{currencyType:{},size:{default:`medium`}},setup(e){let r=e,c={small:{container:32,icon:18},medium:{container:40,icon:24},large:{container:56,icon:32}},u={coins:{icon:`🪙`,bg:`#FFD700`,border:`#DAA520`},gems:{icon:`💎`,bg:`#B9F2FF`,border:`#7FDBFF`},powerpoints:{icon:`⚡`,bg:`#9C27B0`,border:`#7B1FA2`},trophies:{icon:`🏆`,bg:`#FFE0B2`,border:`#FFB74D`},starrrops:{icon:`🌟`,bg:`#FF6B6B`,border:`#F44336`}},f=i(()=>{let e=c[r.size],t=u[r.currencyType];return{"--bs-size":`${e.container}px`,"--bs-icon-size":`${e.icon}px`,"--bs-bg":t.bg,"--bs-border-color":t.border,"--bs-black":l.black,"--bs-border-width":d.width}});return(r,i)=>(n(),a(`div`,{class:`bs-currency-icon`,style:t(f.value)},[s(`span`,m,o(u[e.currencyType].icon),1)],4))}})})),_=e((()=>{})),v,y=e((()=>{g(),g(),_(),f(),v=p(h,[[`__scopeId`,`data-v-4b6abc68`]]),h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`BsCurrencyIcon`,description:``,tags:{},props:[{name:`currencyType`,required:!0,type:{name:`CurrencyType`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"small"`},{name:`"medium"`},{name:`"large"`}]},defaultValue:{func:!1,value:`'medium'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsCurrencyIcon.vue`]})})),b,x,S,C,w,T,E,D,O;e((()=>{y(),b={title:`Atoms/BsCurrencyIcon`,component:v,tags:[`autodocs`],argTypes:{currencyType:{control:`select`,options:[`coins`,`gems`,`powerpoints`,`trophies`,`starrrops`],description:`Currency type`},size:{control:`select`,options:[`small`,`medium`,`large`],description:`Icon size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},x={args:{currencyType:`coins`,size:`medium`}},S={args:{currencyType:`gems`,size:`medium`}},C={args:{currencyType:`powerpoints`,size:`medium`}},w={args:{currencyType:`trophies`,size:`medium`}},T={args:{currencyType:`starrrops`,size:`medium`}},E={render:()=>({components:{BsCurrencyIcon:v},template:`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E; align-items: flex-end;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="coins" size="small" />
          <span style="color: white; font-size: 12px;">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="gems" size="medium" />
          <span style="color: white; font-size: 12px;">Medium</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="trophies" size="large" />
          <span style="color: white; font-size: 12px;">Large</span>
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},D={render:()=>({components:{BsCurrencyIcon:v},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsCurrencyIcon currencyType="coins" />
        <BsCurrencyIcon currencyType="gems" />
        <BsCurrencyIcon currencyType="powerpoints" />
        <BsCurrencyIcon currencyType="trophies" />
        <BsCurrencyIcon currencyType="starrrops" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'coins',
    size: 'medium'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'gems',
    size: 'medium'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'powerpoints',
    size: 'medium'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'trophies',
    size: 'medium'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'starrrops',
    size: 'medium'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsCurrencyIcon
    },
    template: \`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E; align-items: flex-end;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="coins" size="small" />
          <span style="color: white; font-size: 12px;">Small</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="gems" size="medium" />
          <span style="color: white; font-size: 12px;">Medium</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <BsCurrencyIcon currencyType="trophies" size="large" />
          <span style="color: white; font-size: 12px;">Large</span>
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsCurrencyIcon
    },
    template: \`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsCurrencyIcon currencyType="coins" />
        <BsCurrencyIcon currencyType="gems" />
        <BsCurrencyIcon currencyType="powerpoints" />
        <BsCurrencyIcon currencyType="trophies" />
        <BsCurrencyIcon currencyType="starrrops" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Coins`,`Gems`,`PowerPoints`,`Trophies`,`Starrrops`,`AllSizes`,`AllTypes`]}))();export{E as AllSizes,D as AllTypes,x as Coins,S as Gems,C as PowerPoints,T as Starrrops,w as Trophies,O as __namedExportsOrder,b as default};