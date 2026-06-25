import{i as e}from"./preload-helper-CeV3c4x5.js";import{T as t,_ as n,f as r,h as i,m as a,p as o,u as s,w as c,y as l}from"./iframe-De8NUuj5.js";import{a as u,c as d,i as f,n as p,t as m}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var h,g,_=e((()=>{s(),d(),h={key:0,class:`end-dot`},g=n({__name:`BsDividerLine`,props:{width:{default:400},hasEndDot:{type:Boolean,default:!1},variant:{default:`yellow`}},setup(e){let n=e,s={yellow:{start:u.yellow,end:u.yellowDark},blue:{start:u.victoryBlue,end:u.victoryBlueDark},gray:{start:u.gray400,end:u.gray500}},d=r(()=>{let e=s[n.variant];return{"--bs-start":e.start,"--bs-end":e.end,"--bs-black":u.black,"--bs-border-width":f.width,"--bs-width":`${n.width}px`}});return(n,r)=>(l(),i(`div`,{class:c([`bs-divider-line`,{"with-dot":e.hasEndDot}]),style:t(d.value)},[r[0]||=o(`div`,{class:`line`},null,-1),e.hasEndDot?(l(),i(`div`,h)):a(``,!0)],6))}})})),v=e((()=>{})),y,b=e((()=>{_(),_(),v(),p(),y=m(g,[[`__scopeId`,`data-v-2c905bc1`]]),g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:`default`,displayName:`BsDividerLine`,description:``,tags:{},props:[{name:`width`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`400`}},{name:`hasEndDot`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`variant`,required:!1,type:{name:`BsDividerLineVariant`},defaultValue:{func:!1,value:`'yellow'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsDividerLine.vue`]})})),x,S,C,w,T,E,D;e((()=>{b(),x={title:`Atoms/BsDividerLine`,component:y,tags:[`autodocs`],argTypes:{width:{control:`number`,description:`Line width in pixels`},hasEndDot:{control:`boolean`,description:`Show end dot decoration`},variant:{control:`select`,options:[`yellow`,`blue`,`gray`],description:`Line color variant`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},S={args:{width:400,hasEndDot:!1,variant:`yellow`}},C={args:{width:400,hasEndDot:!0,variant:`yellow`}},w={args:{width:300,hasEndDot:!1,variant:`blue`}},T={args:{width:200,hasEndDot:!0,variant:`gray`}},E={render:()=>({components:{BsDividerLine:y},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsDividerLine :width="600" variant="yellow" />
        <BsDividerLine :width="400" variant="yellow" :hasEndDot="true" />
        <BsDividerLine :width="300" variant="blue" />
        <BsDividerLine :width="200" variant="gray" :hasEndDot="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    hasEndDot: false,
    variant: 'yellow'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    width: 400,
    hasEndDot: true,
    variant: 'yellow'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    width: 300,
    hasEndDot: false,
    variant: 'blue'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    hasEndDot: true,
    variant: 'gray'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsDividerLine
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E;">
        <BsDividerLine :width="600" variant="yellow" />
        <BsDividerLine :width="400" variant="yellow" :hasEndDot="true" />
        <BsDividerLine :width="300" variant="blue" />
        <BsDividerLine :width="200" variant="gray" :hasEndDot="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithEndDot`,`Blue`,`Gray`,`VariousLengths`]}))();export{w as Blue,S as Default,T as Gray,E as VariousLengths,C as WithEndDot,D as __namedExportsOrder,x as default};