import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsWinStreak-CnBeKw6f.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsWinStreak`,component:n,tags:[`autodocs`],argTypes:{streakNum:{control:`number`,description:`Win streak count`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{streakNum:0}},a={args:{streakNum:3}},o={args:{streakNum:5}},s={args:{streakNum:10}},c={render:()=>({components:{BsWinStreak:n},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsWinStreak :streakNum="0" />
        <BsWinStreak :streakNum="3" />
        <BsWinStreak :streakNum="5" />
        <BsWinStreak :streakNum="10" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 0
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 3
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 5
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 10
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsWinStreak
    },
    template: \`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsWinStreak :streakNum="0" />
        <BsWinStreak :streakNum="3" />
        <BsWinStreak :streakNum="5" />
        <BsWinStreak :streakNum="10" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`ZeroStreak`,`ThreeWinStreak`,`FiveWinStreak`,`TenWinStreak`,`StreakExamples`]}))();export{o as FiveWinStreak,c as StreakExamples,s as TenWinStreak,a as ThreeWinStreak,i as ZeroStreak,l as __namedExportsOrder,r as default};