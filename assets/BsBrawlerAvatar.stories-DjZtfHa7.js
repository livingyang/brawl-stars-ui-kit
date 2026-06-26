import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsBrawlerAvatar-Z4uh2MmG.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Basics/BsBrawlerAvatar`,component:n,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Brawler name`},avatarUrl:{control:`text`,description:`Avatar image URL`},locked:{control:`boolean`,description:`Locked state`},isNew:{control:`boolean`,description:`New badge state`},starLevel:{control:`number`,description:`Star level (0-3)`},trophyCount:{control:`number`,description:`Trophy count`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{name:`SHELLY`,locked:!1,isNew:!1,starLevel:0,trophyCount:0}},a={args:{name:`SHELLY`,locked:!1,isNew:!1,starLevel:2,trophyCount:1250}},o={args:{name:`MORTIS`,locked:!0,isNew:!1,starLevel:0,trophyCount:0}},s={args:{name:`GALE`,locked:!1,isNew:!0,starLevel:0,trophyCount:0}},c={args:{name:`SPike`,locked:!1,isNew:!1,starLevel:3,trophyCount:2500}},l={render:()=>({components:{BsBrawlerAvatar:n},template:`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E;">
        <BsBrawlerAvatar name="SHELLY" :locked="false" :isNew="false" :starLevel="0" />
        <BsBrawlerAvatar name="COLT" :locked="false" :isNew="true" :starLevel="1" />
        <BsBrawlerAvatar name="BULL" :locked="false" :isNew="false" :starLevel="2" :trophyCount="1500" />
        <BsBrawlerAvatar name="SPIKE" :locked="false" :isNew="false" :starLevel="3" :trophyCount="2500" />
        <BsBrawlerAvatar name="MORTIS" :locked="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 0,
    trophyCount: 0
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 2,
    trophyCount: 1250
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'MORTIS',
    locked: true,
    isNew: false,
    starLevel: 0,
    trophyCount: 0
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'GALE',
    locked: false,
    isNew: true,
    starLevel: 0,
    trophyCount: 0
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SPike',
    locked: false,
    isNew: false,
    starLevel: 3,
    trophyCount: 2500
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsBrawlerAvatar
    },
    template: \`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E;">
        <BsBrawlerAvatar name="SHELLY" :locked="false" :isNew="false" :starLevel="0" />
        <BsBrawlerAvatar name="COLT" :locked="false" :isNew="true" :starLevel="1" />
        <BsBrawlerAvatar name="BULL" :locked="false" :isNew="false" :starLevel="2" :trophyCount="1500" />
        <BsBrawlerAvatar name="SPIKE" :locked="false" :isNew="false" :starLevel="3" :trophyCount="2500" />
        <BsBrawlerAvatar name="MORTIS" :locked="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Unlocked`,`Locked`,`NewUnlock`,`MaxStar`,`AllStates`]}))();export{l as AllStates,i as Default,o as Locked,c as MaxStar,s as NewUnlock,a as Unlocked,u as __namedExportsOrder,r as default};