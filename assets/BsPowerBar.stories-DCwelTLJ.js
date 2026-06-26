import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsPowerBar-aEKgO6os.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Basics/BsPowerBar`,component:n,tags:[`autodocs`],argTypes:{segments:{control:`object`,description:`Array of boolean for each segment`},isMax:{control:`boolean`,description:`Max power state`},starLevel:{control:`number`,description:`Star level (0-3)`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{segments:[!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],isMax:!1,starLevel:0}},a={args:{segments:[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1],isMax:!1,starLevel:0}},o={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1],isMax:!1,starLevel:0}},s={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],isMax:!0,starLevel:1}},c={args:{segments:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],isMax:!0,starLevel:3}},l={render:()=>({components:{BsPowerBar:n},template:`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 40px; background: #1A1A2E;">
        <BsPowerBar :segments="[true, false, false, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="1" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="3" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, false, false, false, false, false, false, false, false],
    isMax: false,
    starLevel: 0
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, false, false, false, false, false],
    isMax: false,
    starLevel: 0
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, false],
    isMax: false,
    starLevel: 0
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 1
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [true, true, true, true, true, true, true, true, true, true],
    isMax: true,
    starLevel: 3
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsPowerBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 40px; background: #1A1A2E;">
        <BsPowerBar :segments="[true, false, false, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, false, false, false, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, false, false, false, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, false]" :starLevel="0" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="1" />
        <BsPowerBar :segments="[true, true, true, true, true, true, true, true, true, true]" :isMax="true" :starLevel="3" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`PartialPower`,`MidPower`,`AlmostMax`,`MaxPower`,`MaxWithStars`,`PowerLevels`]}))();export{o as AlmostMax,s as MaxPower,c as MaxWithStars,a as MidPower,i as PartialPower,l as PowerLevels,u as __namedExportsOrder,r as default};