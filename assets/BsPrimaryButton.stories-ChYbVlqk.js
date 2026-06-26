import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsPrimaryButton-DpkKkRv5.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Basics/BsPrimaryButton`,component:n,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},disabled:{control:`boolean`,description:`Disabled state`},locked:{control:`boolean`,description:`Locked state`},size:{control:`select`,options:[`large`,`medium`],description:`Button size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{label:`PLAY`,disabled:!1,locked:!1,size:`large`}},a={args:{label:`PLAY`,disabled:!0,locked:!1,size:`large`}},o={args:{label:`UNLOCK`,disabled:!1,locked:!0,size:`large`}},s={args:{label:`SELECT`,disabled:!1,locked:!1,size:`medium`}},c={render:()=>({components:{BsPrimaryButton:n},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsPrimaryButton label="PLAY" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsPrimaryButton label="PLAY" :disabled="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsPrimaryButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium Size</h3>
          <BsPrimaryButton label="SELECT" size="medium" />
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PLAY',
    disabled: false,
    locked: false,
    size: 'large'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PLAY',
    disabled: true,
    locked: false,
    size: 'large'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UNLOCK',
    disabled: false,
    locked: true,
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'SELECT',
    disabled: false,
    locked: false,
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsPrimaryButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsPrimaryButton label="PLAY" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsPrimaryButton label="PLAY" :disabled="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsPrimaryButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium Size</h3>
          <BsPrimaryButton label="SELECT" size="medium" />
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Disabled`,`Locked`,`Medium`,`AllStates`]}))();export{c as AllStates,i as Default,a as Disabled,o as Locked,s as Medium,l as __namedExportsOrder,r as default};