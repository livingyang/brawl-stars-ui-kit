import{i as e}from"./preload-helper-CeV3c4x5.js";import{E as t,T as n,_ as r,f as i,h as a,p as o,u as s,w as c,y as l}from"./iframe-De8NUuj5.js";import{a as u,c as d,i as f,n as p,o as m,t as h}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var g,_,v=e((()=>{s(),d(),g={class:`rank`},_=r({__name:`BsRankTag`,props:{rank:{},variant:{default:`victory`}},setup(e){let r=e,s=i(()=>{let e={victory:{bg:u.victoryBlue,text:u.white},defeat:{bg:u.defeatRed,text:u.white}}[r.variant];return{"--bs-rank-bg":e.bg,"--bs-rank-text":e.text,"--bs-border-width":f.width,"--bs-border-radius":f.radius.md,"--bs-font-size":m.sizes.xl,"--bs-font-weight":String(m.weights.bold)}});return(r,i)=>(l(),a(`div`,{class:c([`bs-rank-tag`,e.variant]),style:n(s.value)},[i[0]||=o(`span`,{class:`hash`},`#`,-1),o(`span`,g,t(e.rank),1)],6))}})})),y=e((()=>{})),b,x=e((()=>{v(),v(),y(),p(),b=h(_,[[`__scopeId`,`data-v-bd998848`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`BsRankTag`,description:``,tags:{},props:[{name:`rank`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`variant`,required:!1,type:{name:`BsRankTagVariant`},defaultValue:{func:!1,value:`'victory'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsRankTag.vue`]})})),S,C,w,T,E;e((()=>{x(),S={title:`Atoms/BsRankTag`,component:b,tags:[`autodocs`],argTypes:{rank:{control:`text`,description:`Rank number`},variant:{control:`select`,options:[`victory`,`defeat`],description:`Victory or defeat variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},C={args:{rank:1,variant:`victory`}},w={args:{rank:6,variant:`defeat`}},T={render:()=>({components:{BsRankTag:b},template:`
      <div style="display: flex; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsRankTag rank="#1" variant="victory" />
        <BsRankTag rank="#3" variant="victory" />
        <BsRankTag rank="#6" variant="defeat" />
        <BsRankTag rank="#12" variant="defeat" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 1,
    variant: 'victory'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    rank: 6,
    variant: 'defeat'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Victory`,`Defeat`,`RankExamples`]}))();export{w as Defeat,T as RankExamples,C as Victory,E as __namedExportsOrder,S as default};