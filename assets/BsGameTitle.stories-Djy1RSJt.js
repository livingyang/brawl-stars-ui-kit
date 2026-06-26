import{i as e}from"./preload-helper-CT_b8DTk.js";import{D as t,O as n,S as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-CJm2Q8zN.js";import{a as u,c as d,i as f,n as p,o as m,t as h}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var g,_,v,y=e((()=>{l(),d(),g={class:`title-container`},_={class:`text`},v=i({__name:`BsGameTitle`,props:{text:{},variant:{default:`neutral`}},setup(e){let i=e,l=a(()=>{let e={victory:{bg:u.victoryBlue,text:u.white},defeat:{bg:u.defeatRed,text:u.white},neutral:{bg:u.yellow,text:u.black}}[i.variant];return{"--bs-title-bg":e.bg,"--bs-title-text":e.text,"--bs-black":u.black,"--bs-border-width":f.width,"--bs-font-size":m.sizes.title,"--bs-font-weight":String(m.weights.bold)}});return(i,a)=>(r(),o(`div`,{class:t([`bs-game-title`,e.variant]),style:n(l.value)},[c(`div`,g,[c(`span`,_,s(e.text),1)]),a[0]||=c(`div`,{class:`underline`},null,-1)],6))}})})),b=e((()=>{})),x,S=e((()=>{y(),y(),b(),p(),x=h(v,[[`__scopeId`,`data-v-deb51cdb`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`BsGameTitle`,description:``,tags:{},props:[{name:`text`,required:!0,type:{name:`string`}},{name:`variant`,required:!1,type:{name:`BsGameTitleVariant`},defaultValue:{func:!1,value:`'neutral'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsGameTitle.vue`]})})),C,w,T,E,D,O;e((()=>{S(),C={title:`Atoms/BsGameTitle`,component:x,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`Title text`},variant:{control:`select`,options:[`victory`,`defeat`,`neutral`],description:`Title variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},w={args:{text:`VICTORY`,variant:`victory`}},T={args:{text:`DEFEAT`,variant:`defeat`}},E={args:{text:`BRAWL`,variant:`neutral`}},D={render:()=>({components:{BsGameTitle:x},template:`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px; background: #1A1A2E; align-items: center;">
        <BsGameTitle text="VICTORY" variant="victory" />
        <BsGameTitle text="DEFEAT" variant="defeat" />
        <BsGameTitle text="BRAWL" variant="neutral" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'VICTORY',
    variant: 'victory'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'DEFEAT',
    variant: 'defeat'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'BRAWL',
    variant: 'neutral'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsGameTitle
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px; background: #1A1A2E; align-items: center;">
        <BsGameTitle text="VICTORY" variant="victory" />
        <BsGameTitle text="DEFEAT" variant="defeat" />
        <BsGameTitle text="BRAWL" variant="neutral" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Victory`,`Defeat`,`Neutral`,`AllVariants`]}))();export{D as AllVariants,T as Defeat,E as Neutral,w as Victory,O as __namedExportsOrder,C as default};