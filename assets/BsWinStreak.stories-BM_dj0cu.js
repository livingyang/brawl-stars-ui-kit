import{i as e}from"./preload-helper-CeV3c4x5.js";import{D as t,O as n,S as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-DVF5ZnWA.js";import{a as u,c as d,i as f,n as p,o as m,r as h,t as g}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var _,v,y,b=e((()=>{l(),d(),_={class:`flame`},v={class:`number`},y=i({__name:`BsWinStreak`,props:{streakNum:{}},setup(e){let i=e,l=a(()=>i.streakNum>0),d=a(()=>({"--bs-yellow":u.yellow,"--bs-yellow-dark":u.yellowDark,"--bs-black":u.black,"--bs-white":u.white,"--bs-border-width":f.width,"--bs-border-radius":f.radius.md,"--bs-font-size-sm":m.sizes.sm,"--bs-font-size-lg":m.sizes.xl,"--bs-font-weight":String(m.weights.bold),"--bs-animation":h.slow}));return(i,a)=>(r(),o(`div`,{class:t([`bs-win-streak`,{active:l.value}]),style:n(d.value)},[c(`span`,_,s(l.value?`🔥`:`💨`),1),a[0]||=c(`div`,{class:`text-container`},[c(`span`,{class:`label`},`WIN`),c(`span`,{class:`label`},`STREAK`)],-1),c(`span`,v,s(e.streakNum),1)],6))}})})),x=e((()=>{})),S,C=e((()=>{b(),b(),x(),p(),S=g(y,[[`__scopeId`,`data-v-dceeb9e1`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`BsWinStreak`,description:``,tags:{},props:[{name:`streakNum`,required:!0,type:{name:`number`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsWinStreak.vue`]})})),w,T,E,D,O,k,A;e((()=>{C(),w={title:`Atoms/BsWinStreak`,component:S,tags:[`autodocs`],argTypes:{streakNum:{control:`number`,description:`Win streak count`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},T={args:{streakNum:0}},E={args:{streakNum:3}},D={args:{streakNum:5}},O={args:{streakNum:10}},k={render:()=>({components:{BsWinStreak:S},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsWinStreak :streakNum="0" />
        <BsWinStreak :streakNum="3" />
        <BsWinStreak :streakNum="5" />
        <BsWinStreak :streakNum="10" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 0
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 3
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 5
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    streakNum: 10
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsWinStreak
    },
    template: \`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsWinStreak :streakNum="0" />
        <BsWinStreak :streakNum="3" />
        <BsWinStreak :streakNum="5" />
        <BsWinStreak :streakNum="10" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`ZeroStreak`,`ThreeWinStreak`,`FiveWinStreak`,`TenWinStreak`,`StreakExamples`]}))();export{D as FiveWinStreak,k as StreakExamples,O as TenWinStreak,E as ThreeWinStreak,T as ZeroStreak,A as __namedExportsOrder,w as default};