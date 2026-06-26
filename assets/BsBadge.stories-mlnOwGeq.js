import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsBadge-Cs3_W8eO.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsBadge`,component:n,tags:[`autodocs`],argTypes:{value:{control:`text`,description:`Badge value`},variant:{control:`select`,options:[`positive`,`negative`,`neutral`],description:`Badge variant`},prefix:{control:`text`,description:`Value prefix`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{value:500,variant:`positive`,prefix:`+`}},a={args:{value:100,variant:`negative`,prefix:`-`}},o={args:{value:1250,variant:`neutral`}},s={args:{value:`#1`,variant:`positive`}},c={render:()=>({components:{BsBadge:n},template:`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsBadge :value="500" variant="positive" prefix="+" />
        <BsBadge :value="100" variant="negative" prefix="-" />
        <BsBadge :value="1250" variant="neutral" />
        <BsBadge value="#1" variant="positive" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 500,
    variant: 'positive',
    prefix: '+'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'negative',
    prefix: '-'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1250,
    variant: 'neutral'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '#1',
    variant: 'positive'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsBadge
    },
    template: \`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsBadge :value="500" variant="positive" prefix="+" />
        <BsBadge :value="100" variant="negative" prefix="-" />
        <BsBadge :value="1250" variant="neutral" />
        <BsBadge value="#1" variant="positive" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Positive`,`Negative`,`Neutral`,`TrophyCount`,`AllVariants`]}))();export{c as AllVariants,a as Negative,o as Neutral,i as Positive,s as TrophyCount,l as __namedExportsOrder,r as default};