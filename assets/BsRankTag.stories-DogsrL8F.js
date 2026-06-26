import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BsRankTag-ChEC0y4m.js";var r,i,a,o,s;e((()=>{t(),r={title:`Basics/BsRankTag`,component:n,tags:[`autodocs`],argTypes:{rank:{control:`text`,description:`Rank number`},variant:{control:`select`,options:[`victory`,`defeat`],description:`Victory or defeat variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{rank:1,variant:`victory`}},a={args:{rank:6,variant:`defeat`}},o={render:()=>({components:{BsRankTag:n},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsRankTag rank="#1" variant="victory" />
        <BsRankTag rank="#3" variant="victory" />
        <BsRankTag rank="#6" variant="defeat" />
        <BsRankTag rank="#12" variant="defeat" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 1,
    variant: 'victory'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 6,
    variant: 'defeat'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsRankTag
    },
    template: \`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsRankTag rank="#1" variant="victory" />
        <BsRankTag rank="#3" variant="victory" />
        <BsRankTag rank="#6" variant="defeat" />
        <BsRankTag rank="#12" variant="defeat" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`Victory`,`Defeat`,`RankExamples`]}))();export{a as Defeat,o as RankExamples,i as Victory,s as __namedExportsOrder,r as default};