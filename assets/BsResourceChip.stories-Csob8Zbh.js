import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsResourceChip-CMH_A9tE.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Basics/BsResourceChip`,component:n,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:`Resource icon emoji`},value:{control:`text`,description:`Current value`},maxValue:{control:`text`,description:`Max value (optional)`},variant:{control:`select`,options:[`coins`,`gems`,`powerpoints`,`starrrops`],description:`Resource type`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{icon:`🪙`,value:2500,variant:`coins`}},a={args:{icon:`💎`,value:50,variant:`gems`}},o={args:{icon:`⚡`,value:`240/300`,variant:`powerpoints`}},s={render:()=>({components:{BsResourceChip:n},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsResourceChip icon="🪙" :value="2500" variant="coins" />
        <BsResourceChip icon="💎" :value="50" variant="gems" />
        <BsResourceChip icon="⚡" :value="240" :maxValue="300" variant="powerpoints" />
        <BsResourceChip icon="🌟" :value="12" variant="starrrops" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '🪙',
    value: 2500,
    variant: 'coins'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '💎',
    value: 50,
    variant: 'gems'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: '⚡',
    value: '240/300',
    variant: 'powerpoints'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Coins`,`Gems`,`PowerPoints`,`AllResources`]}))();export{s as AllResources,i as Coins,a as Gems,o as PowerPoints,c as __namedExportsOrder,r as default};