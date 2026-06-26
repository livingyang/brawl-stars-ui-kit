import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsGameTitle-cPWU5Ptb.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Basics/BsGameTitle`,component:n,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`Title text`},variant:{control:`select`,options:[`victory`,`defeat`,`neutral`],description:`Title variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{text:`VICTORY`,variant:`victory`}},a={args:{text:`DEFEAT`,variant:`defeat`}},o={args:{text:`BRAWL`,variant:`neutral`}},s={render:()=>({components:{BsGameTitle:n},template:`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px; background: #1A1A2E; align-items: center;">
        <BsGameTitle text="VICTORY" variant="victory" />
        <BsGameTitle text="DEFEAT" variant="defeat" />
        <BsGameTitle text="BRAWL" variant="neutral" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'VICTORY',
    variant: 'victory'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'DEFEAT',
    variant: 'defeat'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'BRAWL',
    variant: 'neutral'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsGameTitle
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px; background: #1A1A2E; align-items: center;">
        <BsGameTitle text="VICTORY" variant="victory" />
        <BsGameTitle text="DEFEAT" variant="defeat" />
        <BsGameTitle text="BRAWL" variant="neutral" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Victory`,`Defeat`,`Neutral`,`AllVariants`]}))();export{s as AllVariants,a as Defeat,o as Neutral,i as Victory,c as __namedExportsOrder,r as default};