import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsProgressBar-BjSyUXwC.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Basics/BsProgressBar`,component:n,tags:[`autodocs`],argTypes:{current:{control:`number`,description:`Current value`},max:{control:`number`,description:`Max value`},color:{control:`select`,options:[`yellow`,`blue`,`red`,`green`],description:`Progress bar color`},showText:{control:`boolean`,description:`Show text value`}},parameters:{layout:`padded`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{current:650,max:1e3,color:`yellow`,showText:!0}},a={args:{current:75,max:100,color:`blue`,showText:!0}},o={args:{current:25,max:100,color:`red`,showText:!0}},s={args:{current:80,max:100,color:`green`,showText:!0}},c={args:{current:45,max:100,color:`yellow`,showText:!1}},l={render:()=>({components:{BsProgressBar:n},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E; width: 400px;">
        <BsProgressBar :current="650" :max="1000" color="yellow" />
        <BsProgressBar :current="75" :max="100" color="blue" />
        <BsProgressBar :current="25" :max="100" color="red" />
        <BsProgressBar :current="80" :max="100" color="green" />
        <BsProgressBar :current="45" :max="100" color="yellow" :showText="false" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    current: 650,
    max: 1000,
    color: 'yellow',
    showText: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    current: 75,
    max: 100,
    color: 'blue',
    showText: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    current: 25,
    max: 100,
    color: 'red',
    showText: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    current: 80,
    max: 100,
    color: 'green',
    showText: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    current: 45,
    max: 100,
    color: 'yellow',
    showText: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E; width: 400px;">
        <BsProgressBar :current="650" :max="1000" color="yellow" />
        <BsProgressBar :current="75" :max="100" color="blue" />
        <BsProgressBar :current="25" :max="100" color="red" />
        <BsProgressBar :current="80" :max="100" color="green" />
        <BsProgressBar :current="45" :max="100" color="yellow" :showText="false" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Blue`,`Red`,`Green`,`WithoutText`,`ProgressExamples`]}))();export{a as Blue,i as Default,s as Green,l as ProgressExamples,o as Red,c as WithoutText,u as __namedExportsOrder,r as default};