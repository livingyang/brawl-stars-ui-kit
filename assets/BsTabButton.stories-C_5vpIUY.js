import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsTabButton-dEch1G_w.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Basics/BsTabButton`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Tab label text`},active:{control:`boolean`,description:`Active state`},disabled:{control:`boolean`,description:`Disabled state`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{label:`BRAWLERS`,active:!1,disabled:!1}},a={args:{label:`BRAWLERS`,active:!0,disabled:!1}},o={args:{label:`BRAWLERS`,active:!1,disabled:!0}},s={render:()=>({components:{BsTabButton:n},template:`
      <div style="display: flex; gap: 12px; padding: 40px; background: #1A1A2E;">
        <BsTabButton label="BRAWLERS" :active="true" />
        <BsTabButton label="MODES" :active="false" />
        <BsTabButton label="EVENTS" :active="false" />
        <BsTabButton label="SETTINGS" :active="false" :disabled="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: true,
    disabled: false
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'BRAWLERS',
    active: false,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Active`,`Disabled`,`TabGroup`]}))();export{a as Active,i as Default,o as Disabled,s as TabGroup,c as __namedExportsOrder,r as default};