import{i as e}from"./preload-helper-CT_b8DTk.js";import{O as t,S as n,T as r,b as i,f as a,g as o,k as s,p as c,u as l}from"./iframe-CJm2Q8zN.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var v,y,b,x=e((()=>{l(),d(),v=[`disabled`,`aria-label`],y={class:`label`},b=i({__name:`BsSecondaryButton`,props:{label:{},disabled:{type:Boolean,default:!1},size:{default:`medium`},ariaLabel:{}},setup(e){let i=e,l=r(!1),d=r(!1),p={large:{height:72,fontSize:m.sizes.xl,padding:`0 40px`,minWidth:180},medium:{height:64,fontSize:m.sizes.lg,padding:`0 32px`,minWidth:140},small:{height:48,fontSize:m.sizes.md,padding:`0 24px`,minWidth:100}},_=a(()=>{let e=p[i.size],t={"--bs-white":u.white,"--bs-black":u.black,"--bs-border-width":f.width,"--bs-border-radius":f.radius.md,"--bs-font-size":e.fontSize,"--bs-font-weight":String(m.weights.bold),"--bs-animation-fast":h.fast,"--bs-transform-hover":g.hover,"--bs-transform-active":g.active,height:`${e.height}px`,padding:e.padding,"min-width":`${e.minWidth}px`};return i.disabled?(t.opacity=`0.5`,t.cursor=`not-allowed`):t.cursor=`pointer`,t}),b=a(()=>i.ariaLabel||i.label),x=()=>{i.disabled||(l.value=!0)},S=()=>{l.value=!1,d.value=!1},C=()=>{i.disabled||(d.value=!0)},w=()=>{d.value=!1};return(r,i)=>(n(),o(`button`,{class:`bs-secondary-button`,style:t(_.value),disabled:e.disabled,"aria-label":b.value,onMouseenter:x,onMouseleave:S,onMousedown:C,onMouseup:w},[c(`span`,y,s(e.label),1)],44,v))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),p(),C=_(b,[[`__scopeId`,`data-v-eada5aae`]]),b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:`default`,displayName:`BsSecondaryButton`,description:``,tags:{},props:[{name:`label`,required:!0,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"large"`},{name:`"medium"`},{name:`"small"`}]},defaultValue:{func:!1,value:`'medium'`}},{name:`ariaLabel`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsSecondaryButton.vue`]})})),T,E,D,O,k,A,j;e((()=>{w(),T={title:`Atoms/BsSecondaryButton`,component:C,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},disabled:{control:`boolean`,description:`Disabled state`},size:{control:`select`,options:[`large`,`medium`,`small`],description:`Button size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},E={args:{label:`EXIT`,disabled:!1,size:`medium`}},D={args:{label:`EXIT`,disabled:!0,size:`medium`}},O={args:{label:`TRY BRAWLER`,disabled:!1,size:`large`}},k={args:{label:`OK`,disabled:!1,size:`small`}},A={render:()=>({components:{BsSecondaryButton:C},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Large</h3>
          <BsSecondaryButton label="TRY BRAWLER" size="large" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium (Default)</h3>
          <BsSecondaryButton label="EXIT" size="medium" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Small</h3>
          <BsSecondaryButton label="OK" size="small" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsSecondaryButton label="EXIT" :disabled="true" />
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'EXIT',
    disabled: false,
    size: 'medium'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'EXIT',
    disabled: true,
    size: 'medium'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'TRY BRAWLER',
    disabled: false,
    size: 'large'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'OK',
    disabled: false,
    size: 'small'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsSecondaryButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Large</h3>
          <BsSecondaryButton label="TRY BRAWLER" size="large" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium (Default)</h3>
          <BsSecondaryButton label="EXIT" size="medium" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Small</h3>
          <BsSecondaryButton label="OK" size="small" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsSecondaryButton label="EXIT" :disabled="true" />
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Disabled`,`Large`,`Small`,`AllSizes`]}))();export{A as AllSizes,E as Default,D as Disabled,O as Large,k as Small,j as __namedExportsOrder,T as default};