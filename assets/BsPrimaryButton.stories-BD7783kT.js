import{i as e}from"./preload-helper-CeV3c4x5.js";import{E as t,S as n,T as r,_ as i,f as a,h as o,m as s,p as c,u as l,w as u,y as d}from"./iframe-De8NUuj5.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var b,x,S,C,w=e((()=>{l(),p(),b=[`disabled`],x={key:0,class:`lock-icon`},S={class:`label`},C=i({__name:`BsPrimaryButton`,props:{label:{},disabled:{type:Boolean,default:!1},locked:{type:Boolean,default:!1},size:{default:`large`}},setup(e){let i=e,l=n(!1),p=n(!1),h=a(()=>{let e={"--bs-yellow":f.yellow,"--bs-yellow-dark":f.yellowDark,"--bs-black":f.black,"--bs-white":f.white,"--bs-border-width":m.width,"--bs-border-radius":m.radius.md,"--bs-font-size":i.size===`large`?g.sizes.xxl:g.sizes.lg,"--bs-font-weight":String(g.weights.bold),"--bs-animation-fast":_.fast,"--bs-transform-hover":v.hover,"--bs-transform-active":v.active};return i.disabled?(e.opacity=`0.5`,e.cursor=`not-allowed`):i.locked?e.cursor=`not-allowed`:e.cursor=`pointer`,e}),y=()=>{!i.disabled&&!i.locked&&(l.value=!0)},C=()=>{l.value=!1,p.value=!1},w=()=>{!i.disabled&&!i.locked&&(p.value=!0)},T=()=>{p.value=!1};return(n,i)=>(d(),o(`button`,{class:u([`bs-primary-button`,{locked:e.locked}]),style:r(h.value),disabled:e.disabled,onMouseenter:y,onMouseleave:C,onMousedown:w,onMouseup:T},[e.locked?(d(),o(`span`,x,`🔒`)):s(``,!0),c(`span`,S,t(e.label),1)],46,b))}})})),T=e((()=>{})),E,D=e((()=>{w(),w(),T(),h(),E=y(C,[[`__scopeId`,`data-v-0f843195`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`BsPrimaryButton`,description:``,tags:{},props:[{name:`label`,required:!0,type:{name:`string`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`locked`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"large"`},{name:`"medium"`}]},defaultValue:{func:!1,value:`'large'`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsPrimaryButton.vue`]})})),O,k,A,j,M,N,P;e((()=>{D(),O={title:`Atoms/BsPrimaryButton`,component:E,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Button label text`},disabled:{control:`boolean`,description:`Disabled state`},locked:{control:`boolean`,description:`Locked state`},size:{control:`select`,options:[`large`,`medium`],description:`Button size`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},k={args:{label:`PLAY`,disabled:!1,locked:!1,size:`large`}},A={args:{label:`PLAY`,disabled:!0,locked:!1,size:`large`}},j={args:{label:`UNLOCK`,disabled:!1,locked:!0,size:`large`}},M={args:{label:`SELECT`,disabled:!1,locked:!1,size:`medium`}},N={render:()=>({components:{BsPrimaryButton:E},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsPrimaryButton label="PLAY" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsPrimaryButton label="PLAY" :disabled="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsPrimaryButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium Size</h3>
          <BsPrimaryButton label="SELECT" size="medium" />
        </div>
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PLAY',
    disabled: false,
    locked: false,
    size: 'large'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PLAY',
    disabled: true,
    locked: false,
    size: 'large'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UNLOCK',
    disabled: false,
    locked: true,
    size: 'large'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'SELECT',
    disabled: false,
    locked: false,
    size: 'medium'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsPrimaryButton
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px;">
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Default</h3>
          <BsPrimaryButton label="PLAY" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Disabled</h3>
          <BsPrimaryButton label="PLAY" :disabled="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Locked</h3>
          <BsPrimaryButton label="UNLOCK" :locked="true" />
        </div>
        <div>
          <h3 style="color: white; margin-bottom: 12px;">Medium Size</h3>
          <BsPrimaryButton label="SELECT" size="medium" />
        </div>
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Disabled`,`Locked`,`Medium`,`AllStates`]}))();export{N as AllStates,k as Default,A as Disabled,j as Locked,M as Medium,P as __namedExportsOrder,O as default};