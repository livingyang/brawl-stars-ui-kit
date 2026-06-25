import{i as e}from"./preload-helper-CT_b8DTk.js";import{O as t,S as n,b as r,f as i,g as a,h as o,k as s,p as c,u as l}from"./iframe-KS8jrKc_.js";import{a as u,c as d,i as f,n as p,o as m,t as h}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var g,_,v,y=e((()=>{l(),d(),g={key:0,class:`prefix`},_={class:`value`},v=r({__name:`BsBadge`,props:{value:{},variant:{default:`neutral`},prefix:{}},setup(e){let r=e,l=i(()=>{let e={positive:{bg:u.green,text:u.white},negative:{bg:u.defeatRed,text:u.white},neutral:{bg:u.gray600,text:u.white}}[r.variant];return{"--bs-badge-bg":e.bg,"--bs-badge-text":e.text,"--bs-border-width":f.width,"--bs-border-radius":f.radius.sm,"--bs-font-size":m.sizes.md,"--bs-font-weight":String(m.weights.bold)}});return(r,i)=>(n(),a(`div`,{class:`bs-badge`,style:t(l.value)},[e.prefix?(n(),a(`span`,g,s(e.prefix),1)):o(``,!0),c(`span`,_,s(e.value),1)],4))}})})),b=e((()=>{})),x,S=e((()=>{y(),y(),b(),p(),x=h(v,[[`__scopeId`,`data-v-db24ff35`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`BsBadge`,description:``,tags:{},props:[{name:`value`,required:!0,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}},{name:`variant`,required:!1,type:{name:`BsBadgeVariant`},defaultValue:{func:!1,value:`'neutral'`}},{name:`prefix`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsBadge.vue`]})})),C,w,T,E,D,O,k;e((()=>{S(),C={title:`Atoms/BsBadge`,component:x,tags:[`autodocs`],argTypes:{value:{control:`text`,description:`Badge value`},variant:{control:`select`,options:[`positive`,`negative`,`neutral`],description:`Badge variant`},prefix:{control:`text`,description:`Value prefix`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},w={args:{value:500,variant:`positive`,prefix:`+`}},T={args:{value:100,variant:`negative`,prefix:`-`}},E={args:{value:1250,variant:`neutral`}},D={args:{value:`#1`,variant:`positive`}},O={render:()=>({components:{BsBadge:x},template:`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsBadge :value="500" variant="positive" prefix="+" />
        <BsBadge :value="100" variant="negative" prefix="-" />
        <BsBadge :value="1250" variant="neutral" />
        <BsBadge value="#1" variant="positive" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 500,
    variant: 'positive',
    prefix: '+'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'negative',
    prefix: '-'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1250,
    variant: 'neutral'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: '#1',
    variant: 'positive'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsBadge
    },
    template: \`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsBadge :value="500" variant="positive" prefix="+" />
        <BsBadge :value="100" variant="negative" prefix="-" />
        <BsBadge :value="1250" variant="neutral" />
        <BsBadge value="#1" variant="positive" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Positive`,`Negative`,`Neutral`,`TrophyCount`,`AllVariants`]}))();export{O as AllVariants,T as Negative,E as Neutral,w as Positive,D as TrophyCount,k as __namedExportsOrder,C as default};