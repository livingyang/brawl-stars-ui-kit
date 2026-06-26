import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsRewardButton-C1NpKOxy.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Basics/BsRewardButton`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},locked:{control:`boolean`,description:`Locked state`},glow:{control:`boolean`,description:`Glow animation effect`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{label:`CLAIM`,locked:!1,glow:!1}},a={args:{label:`UNLOCK`,locked:!0,glow:!1}},o={args:{label:`CLAIM`,locked:!1,glow:!0}},s={render:()=>({components:{BsRewardButton:n},template:`
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
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CLAIM',
    locked: false,
    glow: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UNLOCK',
    locked: true,
    glow: false
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CLAIM',
    locked: false,
    glow: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Locked`,`GlowEffect`,`AllStates`]}))();export{s as AllStates,i as Default,o as GlowEffect,a as Locked,c as __namedExportsOrder,r as default};