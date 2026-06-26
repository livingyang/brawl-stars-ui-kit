import{i as e}from"./preload-helper-CT_b8DTk.js";import{O as t,S as n,b as r,f as i,g as a,h as o,k as s,p as c,u as l}from"./iframe-CJm2Q8zN.js";import{a as u,c as d,i as f,n as p,o as m,t as h}from"./_plugin-vue_export-helper-yTqPlQ-I.js";var g,_,v,y=e((()=>{l(),d(),g={class:`track`},_={key:0,class:`text`},v=r({__name:`BsProgressBar`,props:{current:{},max:{},color:{default:`yellow`},showText:{type:Boolean,default:!0}},setup(e){let r=e,l=i(()=>Math.min(100,Math.max(0,r.current/r.max*100))),d={yellow:{fill:u.yellow,shadow:u.yellowDark},blue:{fill:u.victoryBlue,shadow:u.victoryBlueDark},red:{fill:u.defeatRed,shadow:u.defeatRedDark},green:{fill:u.green,shadow:`#388E3C`}},p=i(()=>{let e=d[r.color];return{"--bs-fill":e.fill,"--bs-shadow":e.shadow,"--bs-black":u.black,"--bs-white":u.white,"--bs-border-width":f.width,"--bs-border-radius":f.radius.sm,"--bs-font-size":m.sizes.md,"--bs-font-weight":String(m.weights.bold)}});return(r,i)=>(n(),a(`div`,{class:`bs-progress-bar`,style:t(p.value)},[c(`div`,g,[c(`div`,{class:`fill`,style:t({width:`${l.value}%`})},[...i[0]||=[c(`div`,{class:`shine`},null,-1)]],4)]),e.showText?(n(),a(`span`,_,s(e.current)+`/`+s(e.max),1)):o(``,!0)],4))}})})),b=e((()=>{})),x,S=e((()=>{y(),y(),b(),p(),x=h(v,[[`__scopeId`,`data-v-0adea782`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`BsProgressBar`,description:``,tags:{},props:[{name:`current`,required:!0,type:{name:`number`}},{name:`max`,required:!0,type:{name:`number`}},{name:`color`,required:!1,type:{name:`BsProgressBarColor`},defaultValue:{func:!1,value:`'yellow'`}},{name:`showText`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsProgressBar.vue`]})})),C,w,T,E,D,O,k,A;e((()=>{S(),C={title:`Atoms/BsProgressBar`,component:x,tags:[`autodocs`],argTypes:{current:{control:`number`,description:`Current value`},max:{control:`number`,description:`Max value`},color:{control:`select`,options:[`yellow`,`blue`,`red`,`green`],description:`Progress bar color`},showText:{control:`boolean`,description:`Show text value`}},parameters:{layout:`padded`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},w={args:{current:650,max:1e3,color:`yellow`,showText:!0}},T={args:{current:75,max:100,color:`blue`,showText:!0}},E={args:{current:25,max:100,color:`red`,showText:!0}},D={args:{current:80,max:100,color:`green`,showText:!0}},O={args:{current:45,max:100,color:`yellow`,showText:!1}},k={render:()=>({components:{BsProgressBar:x},template:`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E; width: 400px;">
        <BsProgressBar :current="650" :max="1000" color="yellow" />
        <BsProgressBar :current="75" :max="100" color="blue" />
        <BsProgressBar :current="25" :max="100" color="red" />
        <BsProgressBar :current="80" :max="100" color="green" />
        <BsProgressBar :current="45" :max="100" color="yellow" :showText="false" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    current: 650,
    max: 1000,
    color: 'yellow',
    showText: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    current: 75,
    max: 100,
    color: 'blue',
    showText: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    current: 25,
    max: 100,
    color: 'red',
    showText: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    current: 80,
    max: 100,
    color: 'green',
    showText: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    current: 45,
    max: 100,
    color: 'yellow',
    showText: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 40px; background: #1A1A2E; width: 400px;">
        <BsProgressBar :current="650" :max="1000" color="yellow" />
        <BsProgressBar :current="75" :max="100" color="blue" />
        <BsProgressBar :current="25" :max="100" color="red" />
        <BsProgressBar :current="80" :max="100" color="green" />
        <BsProgressBar :current="45" :max="100" color="yellow" :showText="false" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Blue`,`Red`,`Green`,`WithoutText`,`ProgressExamples`]}))();export{T as Blue,w as Default,D as Green,k as ProgressExamples,E as Red,O as WithoutText,A as __namedExportsOrder,C as default};