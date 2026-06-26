import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsCurrencyIcon-DU2xbg5z.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`Basics/BsCurrencyIcon`,component:n,tags:[`autodocs`],argTypes:{currencyType:{control:`select`,options:[`coins`,`gems`,`powerpoints`,`trophies`,`starrrops`],description:`Currency type`},size:{control:`select`,options:[`small`,`medium`,`large`],description:`Icon size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{currencyType:`coins`,size:`medium`}},a={args:{currencyType:`gems`,size:`medium`}},o={args:{currencyType:`powerpoints`,size:`medium`}},s={args:{currencyType:`trophies`,size:`medium`}},c={args:{currencyType:`starrrops`,size:`medium`}},l={render:()=>({components:{BsCurrencyIcon:n},template:`
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
    `}),parameters:{backgrounds:{default:`dark`}}},u={render:()=>({components:{BsCurrencyIcon:n},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsCurrencyIcon currencyType="coins" />
        <BsCurrencyIcon currencyType="gems" />
        <BsCurrencyIcon currencyType="powerpoints" />
        <BsCurrencyIcon currencyType="trophies" />
        <BsCurrencyIcon currencyType="starrrops" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'coins',
    size: 'medium'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'gems',
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'powerpoints',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'trophies',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    currencyType: 'starrrops',
    size: 'medium'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Coins`,`Gems`,`PowerPoints`,`Trophies`,`Starrrops`,`AllSizes`,`AllTypes`]}))();export{l as AllSizes,u as AllTypes,i as Coins,a as Gems,o as PowerPoints,c as Starrrops,s as Trophies,d as __namedExportsOrder,r as default};