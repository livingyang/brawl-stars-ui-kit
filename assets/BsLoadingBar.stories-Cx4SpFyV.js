import{i as e}from"./preload-helper-CeV3c4x5.js";import{D as t,O as n,S as r,b as i,f as a,g as o,p as s,u as c}from"./iframe-DVF5ZnWA.js";import{a as l,c as u,n as d,r as f,t as p}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var m,h=e((()=>{c(),u(),m=i({__name:`BsLoadingBar`,props:{loading:{type:Boolean,default:!0}},setup(e){let i=a(()=>({"--bs-yellow":l.yellow,"--bs-yellow-dark":l.yellowDark,"--bs-black":l.black,"--bs-animation-slow":f.slow}));return(a,c)=>(r(),o(`div`,{class:t([`bs-loading-bar`,{loading:e.loading}]),style:n(i.value)},[...c[0]||=[s(`div`,{class:`track`},[s(`div`,{class:`fill`}),s(`div`,{class:`shine`})],-1)]],6))}})})),g=e((()=>{})),_,v=e((()=>{h(),h(),g(),d(),_=p(m,[[`__scopeId`,`data-v-cec3364d`]]),m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:`default`,displayName:`BsLoadingBar`,description:``,tags:{},props:[{name:`loading`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsLoadingBar.vue`]})})),y,b,x,S,C;e((()=>{v(),y={title:`Atoms/BsLoadingBar`,component:_,tags:[`autodocs`],argTypes:{loading:{control:`boolean`,description:`Loading animation state`}},parameters:{layout:`fullscreen`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},b={args:{loading:!0}},x={args:{loading:!1}},S={render:()=>({components:{BsLoadingBar:_},template:`
      <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 0;">
        <BsLoadingBar :loading="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsLoadingBar
    },
    template: \`
      <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 0;">
        <BsLoadingBar :loading="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Loading`,`Stopped`,`FullScreen`]}))();export{S as FullScreen,b as Loading,x as Stopped,C as __namedExportsOrder,y as default};