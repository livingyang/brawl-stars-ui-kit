import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsDividerLine-CCSumYpy.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsDividerLine`,component:n,tags:[`autodocs`],argTypes:{width:{control:`number`,description:`Line width in pixels`},hasEndDot:{control:`boolean`,description:`Show end dot decoration`},variant:{control:`select`,options:[`yellow`,`blue`,`gray`],description:`Line color variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{width:400,hasEndDot:!1,variant:`yellow`}},a={args:{width:400,hasEndDot:!0,variant:`yellow`}},o={args:{width:300,hasEndDot:!1,variant:`blue`}},s={args:{width:200,hasEndDot:!0,variant:`gray`}},c={render:()=>({components:{BsDividerLine:n},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsDividerLine :width="600" variant="yellow" />
        <BsDividerLine :width="400" variant="yellow" :hasEndDot="true" />
        <BsDividerLine :width="300" variant="blue" />
        <BsDividerLine :width="200" variant="gray" :hasEndDot="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    hasEndDot: false,
    variant: 'yellow'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    hasEndDot: true,
    variant: 'yellow'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: 300,
    hasEndDot: false,
    variant: 'blue'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    hasEndDot: true,
    variant: 'gray'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsDividerLine
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsDividerLine :width="600" variant="yellow" />
        <BsDividerLine :width="400" variant="yellow" :hasEndDot="true" />
        <BsDividerLine :width="300" variant="blue" />
        <BsDividerLine :width="200" variant="gray" :hasEndDot="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithEndDot`,`Blue`,`Gray`,`VariousLengths`]}))();export{o as Blue,i as Default,s as Gray,c as VariousLengths,a as WithEndDot,l as __namedExportsOrder,r as default};