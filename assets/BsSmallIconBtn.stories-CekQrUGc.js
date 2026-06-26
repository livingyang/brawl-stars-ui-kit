import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsSmallIconBtn-avf0OFi8.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Basics/BsSmallIconBtn`,component:n,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:`Custom icon emoji`},variant:{control:`select`,options:[`settings`,`back`,`close`,`info`],description:`Button variant`},active:{control:`boolean`,description:`Active state`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{variant:`settings`,active:!1}},a={args:{variant:`back`,active:!1}},o={args:{variant:`close`,active:!1}},s={args:{variant:`info`,active:!1}},c={args:{variant:`settings`,active:!0}},l={render:()=>({components:{BsSmallIconBtn:n},template:`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'back',
    active: false
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'close',
    active: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    active: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsSmallIconBtn
    },
    template: \`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Settings`,`Back`,`Close`,`Info`,`Active`,`AllVariants`]}))();export{c as Active,l as AllVariants,a as Back,o as Close,s as Info,i as Settings,u as __namedExportsOrder,r as default};