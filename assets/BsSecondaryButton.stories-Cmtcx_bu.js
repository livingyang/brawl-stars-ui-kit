import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsSecondaryButton-DFz6xK3Y.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsSecondaryButton`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},disabled:{control:`boolean`,description:`Disabled state`},size:{control:`select`,options:[`large`,`medium`,`small`],description:`Button size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{label:`EXIT`,disabled:!1,size:`medium`}},a={args:{label:`EXIT`,disabled:!0,size:`medium`}},o={args:{label:`TRY BRAWLER`,disabled:!1,size:`large`}},s={args:{label:`OK`,disabled:!1,size:`small`}},c={render:()=>({components:{BsSecondaryButton:n},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Large</h3>
          <BsSecondaryButton label="TRY BRAWLER" size="large" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium (Default)</h3>
          <BsSecondaryButton label="EXIT" size="medium" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Small</h3>
          <BsSecondaryButton label="OK" size="small" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsSecondaryButton label="EXIT" :disabled="true" />
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'EXIT',
    disabled: false,
    size: 'medium'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'EXIT',
    disabled: true,
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'TRY BRAWLER',
    disabled: false,
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'OK',
    disabled: false,
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsSecondaryButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Large</h3>
          <BsSecondaryButton label="TRY BRAWLER" size="large" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium (Default)</h3>
          <BsSecondaryButton label="EXIT" size="medium" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Small</h3>
          <BsSecondaryButton label="OK" size="small" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsSecondaryButton label="EXIT" :disabled="true" />
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Disabled`,`Large`,`Small`,`AllSizes`]}))();export{c as AllSizes,i as Default,a as Disabled,o as Large,s as Small,l as __namedExportsOrder,r as default};