import{i as e}from"./preload-helper-CT_b8DTk.js";import{D as t,O as n,S as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-CJm2Q8zN.js";import{a as u,c as d,i as f,n as p,r as m,s as h,t as g}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var _,v,y,b=e((()=>{l(),d(),_=[`aria-label`],v={class:`icon`},y=i({__name:`BsSmallIconBtn`,props:{icon:{},variant:{default:`settings`},active:{type:Boolean,default:!1},ariaLabel:{}},setup(e){let i=e,l={settings:`⚙️`,back:`←`,close:`✕`,info:`ℹ️`},d=a(()=>({"--bs-yellow":u.yellow,"--bs-white":u.white,"--bs-black":u.black,"--bs-border-width":f.width,"--bs-border-radius":f.radius.round,"--bs-animation-fast":m.fast,"--bs-transform-hover":h.hover,"--bs-transform-active":h.active})),p=a(()=>i.ariaLabel?i.ariaLabel:{settings:`Settings`,back:`Back`,close:`Close`,info:`Info`}[i.variant]);return(i,a)=>(r(),o(`button`,{class:t([`bs-small-icon-btn`,[e.variant,{active:e.active}]]),style:n(d.value),"aria-label":p.value},[c(`span`,v,s(e.icon||l[e.variant]),1)],14,_))}})})),x=e((()=>{})),S,C=e((()=>{b(),b(),x(),p(),S=g(y,[[`__scopeId`,`data-v-bf8f928a`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`BsSmallIconBtn`,description:``,tags:{},props:[{name:`icon`,required:!1,type:{name:`string`}},{name:`variant`,required:!1,type:{name:`BsSmallIconBtnVariant`},defaultValue:{func:!1,value:`'settings'`}},{name:`active`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`ariaLabel`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsSmallIconBtn.vue`]})})),w,T,E,D,O,k,A,j;e((()=>{C(),w={title:`Atoms/BsSmallIconBtn`,component:S,tags:[`autodocs`],argTypes:{icon:{control:`text`,description:`Custom icon emoji`},variant:{control:`select`,options:[`settings`,`back`,`close`,`info`],description:`Button variant`},active:{control:`boolean`,description:`Active state`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},T={args:{variant:`settings`,active:!1}},E={args:{variant:`back`,active:!1}},D={args:{variant:`close`,active:!1}},O={args:{variant:`info`,active:!1}},k={args:{variant:`settings`,active:!0}},A={render:()=>({components:{BsSmallIconBtn:S},template:`
      <div style="display: flex; gap: 16px; padding: 40px; background: #1A1A2E;">
        <BsSmallIconBtn variant="settings" />
        <BsSmallIconBtn variant="back" />
        <BsSmallIconBtn variant="close" />
        <BsSmallIconBtn variant="info" />
        <BsSmallIconBtn variant="settings" :active="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'back',
    active: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'close',
    active: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    active: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'settings',
    active: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Settings`,`Back`,`Close`,`Info`,`Active`,`AllVariants`]}))();export{k as Active,A as AllVariants,E as Back,D as Close,O as Info,T as Settings,j as __namedExportsOrder,w as default};