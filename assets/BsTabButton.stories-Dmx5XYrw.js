import{i as e}from"./preload-helper-CT_b8DTk.js";import{D as t,O as n,S as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-CJm2Q8zN.js";import{a as u,c as d,i as f,n as p,o as m,r as h,t as g}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var _,v,y,b=e((()=>{l(),d(),_=[`disabled`,`aria-label`],v={class:`label`},y=i({__name:`BsTabButton`,props:{label:{},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ariaLabel:{}},setup(e){let i=e,l=a(()=>{let e={"--bs-yellow":u.yellow,"--bs-white":u.white,"--bs-black":u.black,"--bs-gray600":u.gray600,"--bs-border-width":f.width,"--bs-border-radius":f.radius.md,"--bs-font-size":m.sizes.md,"--bs-font-weight":String(m.weights.bold),"--bs-animation-fast":h.fast};return i.disabled?(e.opacity=`0.5`,e.cursor=`not-allowed`):e.cursor=`pointer`,e}),d=a(()=>i.ariaLabel||i.label);return(i,a)=>(r(),o(`button`,{class:t([`bs-tab-button`,{active:e.active}]),style:n(l.value),disabled:e.disabled,"aria-label":d.value},[c(`span`,v,s(e.label),1)],14,_))}})})),x=e((()=>{})),S,C=e((()=>{b(),b(),x(),p(),S=g(y,[[`__scopeId`,`data-v-97c8b393`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`BsTabButton`,description:``,tags:{},props:[{name:`label`,required:!0,type:{name:`string`}},{name:`active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`ariaLabel`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsTabButton.vue`]})})),w,T,E,D,O,k;e((()=>{C(),w={title:`Atoms/BsTabButton`,component:S,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Tab label text`},active:{control:`boolean`,description:`Active state`},disabled:{control:`boolean`,description:`Disabled state`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},T={args:{label:`BRAWLERS`,active:!1,disabled:!1}},E={args:{label:`BRAWLERS`,active:!0,disabled:!1}},D={args:{label:`BRAWLERS`,active:!1,disabled:!0}},O={render:()=>({components:{BsTabButton:S},template:`
      <div style="display: flex; gap: 12px; padding: 40px; background: #1A1A2E;">
        <BsTabButton label="BRAWLERS" :active="true" />
        <BsTabButton label="MODES" :active="false" />
        <BsTabButton label="EVENTS" :active="false" />
        <BsTabButton label="SETTINGS" :active="false" :disabled="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: true,
    disabled: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsTabButton
    },
    template: \`
      <div style="display: flex; gap: 12px; padding: 40px; background: #1A1A2E;">
        <BsTabButton label="BRAWLERS" :active="true" />
        <BsTabButton label="MODES" :active="false" />
        <BsTabButton label="EVENTS" :active="false" />
        <BsTabButton label="SETTINGS" :active="false" :disabled="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Active`,`Disabled`,`TabGroup`]}))();export{E as Active,T as Default,D as Disabled,O as TabGroup,k as __namedExportsOrder,w as default};