import{i as e}from"./preload-helper-CT_b8DTk.js";import{O as t,S as n,b as r,f as i,g as a,h as o,k as s,p as c,u as l,v as u}from"./iframe-KS8jrKc_.js";import{a as d,c as f,i as p,n as m,o as h,t as g}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var _,v,y,b,x=e((()=>{l(),f(),_={class:`icon`},v={class:`value`},y={key:0,class:`max`},b=r({__name:`BsResourceChip`,props:{icon:{},value:{},maxValue:{default:null},variant:{default:`coins`}},setup(e){let r=e,l=i(()=>{let e={coins:{bg:`#FFD700`,text:`#000`},gems:{bg:`#B9F2FF`,text:`#000`},powerpoints:{bg:`#9C27B0`,text:`#FFF`},starrrops:{bg:`#FF6B6B`,text:`#FFF`}}[r.variant];return{"--bs-chip-bg":e.bg,"--bs-chip-text":e.text,"--bs-black":d.black,"--bs-border-width":p.width,"--bs-border-radius":p.radius.md,"--bs-font-size":h.sizes.lg,"--bs-font-weight":String(h.weights.bold)}});return(r,i)=>(n(),a(`div`,{class:`bs-resource-chip`,style:t(l.value)},[c(`span`,_,s(e.icon),1),c(`span`,v,[u(s(e.value)+` `,1),e.maxValue===null?o(``,!0):(n(),a(`span`,y,`/`+s(e.maxValue),1))])],4))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),m(),C=g(b,[[`__scopeId`,`data-v-7b782e3a`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:`default`,displayName:`BsResourceChip`,description:``,tags:{},props:[{name:`icon`,required:!0,type:{name:`string`}},{name:`value`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`maxValue`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`variant`,required:!1,type:{name:`BsResourceChipVariant`},defaultValue:{func:!1,value:`'coins'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsResourceChip.vue`]})})),T,E,D,O,k,A;e((()=>{w(),T={title:`Atoms/BsResourceChip`,component:C,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:`Resource icon emoji`},value:{control:`text`,description:`Current value`},maxValue:{control:`text`,description:`Max value (optional)`},variant:{control:`select`,options:[`coins`,`gems`,`powerpoints`,`starrrops`],description:`Resource type`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},E={args:{icon:`🪙`,value:2500,variant:`coins`}},D={args:{icon:`💎`,value:50,variant:`gems`}},O={args:{icon:`⚡`,value:`240/300`,variant:`powerpoints`}},k={render:()=>({components:{BsResourceChip:C},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsResourceChip icon="🪙" :value="2500" variant="coins" />
        <BsResourceChip icon="💎" :value="50" variant="gems" />
        <BsResourceChip icon="⚡" :value="240" :maxValue="300" variant="powerpoints" />
        <BsResourceChip icon="🌟" :value="12" variant="starrrops" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '🪙',
    value: 2500,
    variant: 'coins'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '💎',
    value: 50,
    variant: 'gems'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '⚡',
    value: '240/300',
    variant: 'powerpoints'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsResourceChip
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsResourceChip icon="🪙" :value="2500" variant="coins" />
        <BsResourceChip icon="💎" :value="50" variant="gems" />
        <BsResourceChip icon="⚡" :value="240" :maxValue="300" variant="powerpoints" />
        <BsResourceChip icon="🌟" :value="12" variant="starrrops" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Coins`,`Gems`,`PowerPoints`,`AllResources`]}))();export{k as AllResources,E as Coins,D as Gems,O as PowerPoints,A as __namedExportsOrder,T as default};