import{i as e}from"./preload-helper-CeV3c4x5.js";import{D as t,O as n,S as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-DVF5ZnWA.js";import{a as u,c as d,i as f,n as p,r as m,s as h,t as g}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var _,v,y=e((()=>{l(),d(),_={class:`icon`},v=i({__name:`BsSmallIconBtn`,props:{icon:{},variant:{default:`settings`},active:{type:Boolean,default:!1}},setup(e){let i={settings:`⚙️`,back:`←`,close:`✕`,info:`ℹ️`},l=a(()=>({"--bs-yellow":u.yellow,"--bs-white":u.white,"--bs-black":u.black,"--bs-border-width":f.width,"--bs-border-radius":f.radius.round,"--bs-animation-fast":m.fast,"--bs-transform-hover":h.hover,"--bs-transform-active":h.active}));return(a,u)=>(r(),o(`button`,{class:t([`bs-small-icon-btn`,[e.variant,{active:e.active}]]),style:n(l.value)},[c(`span`,_,s(e.icon||i[e.variant]),1)],6))}})})),b=e((()=>{})),x,S=e((()=>{y(),y(),b(),p(),x=g(v,[[`__scopeId`,`data-v-5f0390f5`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`BsSmallIconBtn`,description:``,tags:{},props:[{name:`icon`,required:!1,type:{name:`string`}},{name:`variant`,required:!1,type:{name:`BsSmallIconBtnVariant`},defaultValue:{func:!1,value:`'settings'`}},{name:`active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsSmallIconBtn.vue`]})})),C,w,T,E,D,O,k,A;e((()=>{S(),C={title:`Atoms/BsSmallIconBtn`,component:x,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:`Custom icon emoji`},variant:{control:`select`,options:[`settings`,`back`,`close`,`info`],description:`Button variant`},active:{control:`boolean`,description:`Active state`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},w={args:{variant:`settings`,active:!1}},T={args:{variant:`back`,active:!1}},E={args:{variant:`close`,active:!1}},D={args:{variant:`info`,active:!1}},O={args:{variant:`settings`,active:!0}},k={render:()=>({components:{BsSmallIconBtn:x},template:`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'back',
    active: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'close',
    active: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    active: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsSmallIconBtn
    },
    template: \`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Settings`,`Back`,`Close`,`Info`,`Active`,`AllVariants`]}))();export{O as Active,k as AllVariants,T as Back,E as Close,D as Info,w as Settings,A as __namedExportsOrder,C as default};