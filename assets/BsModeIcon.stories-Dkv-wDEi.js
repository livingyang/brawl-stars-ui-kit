import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsModeIcon-DPJb_m7W.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{t(),r={title:`Basics/BsModeIcon`,component:n,tags:[`autodocs`],argTypes:{modeType:{control:`select`,options:[`solo`,`duo`,`team`,`ranked`,`club`,`challenge`,`special`],description:`Game mode type`},label:{control:`text`,description:`Custom label`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{modeType:`solo`}},a={args:{modeType:`duo`}},o={args:{modeType:`team`}},s={args:{modeType:`ranked`}},c={args:{modeType:`club`}},l={args:{modeType:`challenge`}},u={args:{modeType:`special`}},d={render:()=>({components:{BsModeIcon:n},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 24px; padding: 40px; background: #1A1A2E; justify-content: center;">
        <BsModeIcon modeType="solo" />
        <BsModeIcon modeType="duo" />
        <BsModeIcon modeType="team" />
        <BsModeIcon modeType="ranked" />
        <BsModeIcon modeType="club" />
        <BsModeIcon modeType="challenge" />
        <BsModeIcon modeType="special" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'solo'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'duo'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'team'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'ranked'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'club'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'challenge'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'special'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsModeIcon
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 24px; padding: 40px; background: #1A1A2E; justify-content: center;">
        <BsModeIcon modeType="solo" />
        <BsModeIcon modeType="duo" />
        <BsModeIcon modeType="team" />
        <BsModeIcon modeType="ranked" />
        <BsModeIcon modeType="club" />
        <BsModeIcon modeType="challenge" />
        <BsModeIcon modeType="special" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Solo`,`Duo`,`Team`,`Ranked`,`Club`,`Challenge`,`Special`,`AllModes`]}))();export{d as AllModes,l as Challenge,c as Club,a as Duo,s as Ranked,i as Solo,u as Special,o as Team,f as __namedExportsOrder,r as default};