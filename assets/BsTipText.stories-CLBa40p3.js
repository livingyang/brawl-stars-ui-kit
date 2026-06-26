import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsTipText-CPTP9_gf.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsTipText`,component:n,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`Tip text content`},icon:{control:`text`,description:`Tip icon emoji`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{text:`Tip: Push enemies into traps!`,icon:`💡`}},a={args:{text:`Warning: High difficulty ahead`,icon:`⚠️`}},o={args:{text:`New brawler available!`,icon:`📢`}},s={args:{text:`Press SPACE to dodge`,icon:`🎮`}},c={render:()=>({components:{BsTipText:n},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsTipText text="Tip: Push enemies into traps!" icon="💡" />
        <BsTipText text="Warning: High difficulty ahead" icon="⚠️" />
        <BsTipText text="New brawler available!" icon="📢" />
        <BsTipText text="Press SPACE to dodge" icon="🎮" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Tip: Push enemies into traps!',
    icon: '💡'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Warning: High difficulty ahead',
    icon: '⚠️'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'New brawler available!',
    icon: '📢'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Press SPACE to dodge',
    icon: '🎮'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsTipText
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsTipText text="Tip: Push enemies into traps!" icon="💡" />
        <BsTipText text="Warning: High difficulty ahead" icon="⚠️" />
        <BsTipText text="New brawler available!" icon="📢" />
        <BsTipText text="Press SPACE to dodge" icon="🎮" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Warning`,`Info`,`CustomIcon`,`VariousTips`]}))();export{s as CustomIcon,i as Default,o as Info,c as VariousTips,a as Warning,l as __namedExportsOrder,r as default};