import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsLoadingBar-_Chkxodv.js";var r,i,a,o,s;e((()=>{t(),r={title:`Basics/BsLoadingBar`,component:n,tags:[`autodocs`],argTypes:{loading:{control:`boolean`,description:`Loading animation state`}},parameters:{layout:`fullscreen`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{loading:!0}},a={args:{loading:!1}},o={render:()=>({components:{BsLoadingBar:n},template:`
      <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 0;">
        <BsLoadingBar :loading="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsLoadingBar
    },
    template: \`
      <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 0;">
        <BsLoadingBar :loading="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Loading`,`Stopped`,`FullScreen`]}))();export{o as FullScreen,i as Loading,a as Stopped,s as __namedExportsOrder,r as default};