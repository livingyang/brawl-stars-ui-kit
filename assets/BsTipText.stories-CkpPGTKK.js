import{i as e}from"./preload-helper-CeV3c4x5.js";import{E as t,T as n,_ as r,f as i,h as a,p as o,u as s,y as c}from"./iframe-De8NUuj5.js";import{a as l,c as u,i as d,n as f,o as p,t as m}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var h,g,_,v=e((()=>{s(),u(),h={class:`icon`},g={class:`text`},_=r({__name:`BsTipText`,props:{text:{},icon:{default:`💡`}},setup(e){let r=i(()=>({"--bs-yellow":l.yellow,"--bs-black":l.black,"--bs-white":l.white,"--bs-gray500":l.gray500,"--bs-border-width":d.width,"--bs-border-radius":d.radius.sm,"--bs-font-size":p.sizes.md}));return(i,s)=>(c(),a(`div`,{class:`bs-tip-text`,style:n(r.value)},[o(`span`,h,t(e.icon),1),o(`span`,g,t(e.text),1)],4))}})})),y=e((()=>{})),b,x=e((()=>{v(),v(),y(),f(),b=m(_,[[`__scopeId`,`data-v-b726cc17`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`BsTipText`,description:``,tags:{},props:[{name:`text`,required:!0,type:{name:`string`}},{name:`icon`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'💡'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsTipText.vue`]})})),S,C,w,T,E,D,O;e((()=>{x(),S={title:`Atoms/BsTipText`,component:b,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`Tip text content`},icon:{control:`text`,description:`Tip icon emoji`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},C={args:{text:`Tip: Push enemies into traps!`,icon:`💡`}},w={args:{text:`Warning: High difficulty ahead`,icon:`⚠️`}},T={args:{text:`New brawler available!`,icon:`📢`}},E={args:{text:`Press SPACE to dodge`,icon:`🎮`}},D={render:()=>({components:{BsTipText:b},template:`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsTipText text="Tip: Push enemies into traps!" icon="💡" />
        <BsTipText text="Warning: High difficulty ahead" icon="⚠️" />
        <BsTipText text="New brawler available!" icon="📢" />
        <BsTipText text="Press SPACE to dodge" icon="🎮" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Tip: Push enemies into traps!',
    icon: '💡'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Warning: High difficulty ahead',
    icon: '⚠️'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'New brawler available!',
    icon: '📢'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Press SPACE to dodge',
    icon: '🎮'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsTipText
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsTipText text="Tip: Push enemies into traps!" icon="💡" />
        <BsTipText text="Warning: High difficulty ahead" icon="⚠️" />
        <BsTipText text="New brawler available!" icon="📢" />
        <BsTipText text="Press SPACE to dodge" icon="🎮" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Warning`,`Info`,`CustomIcon`,`VariousTips`]}))();export{E as CustomIcon,C as Default,T as Info,D as VariousTips,w as Warning,O as __namedExportsOrder,S as default};