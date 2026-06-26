import{i as e}from"./preload-helper-CeV3c4x5.js";import{D as t,O as n,S as r,b as i,f as a,g as o,h as s,k as c,p as l,u}from"./iframe-DVF5ZnWA.js";import{a as d,c as f,i as p,n as m,o as h,t as g}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var _,v,y,b,x,S,C,w,T,E=e((()=>{u(),f(),_={class:`avatar-ring`},v={class:`avatar-inner`},y=[`src`,`alt`],b={key:1,class:`avatar-placeholder`},x={key:0,class:`lock-overlay`},S={key:1,class:`new-badge`},C={key:0,class:`star-level`},w={key:1,class:`trophy-count`},T=i({__name:`BsBrawlerAvatar`,props:{name:{default:`Brawler`},avatarUrl:{},locked:{type:Boolean,default:!1},isNew:{type:Boolean,default:!1},starLevel:{default:0},trophyCount:{default:0}},setup(e){let i=a(()=>({"--bs-yellow":d.yellow,"--bs-black":d.black,"--bs-white":d.white,"--bs-border-width":p.width,"--bs-border-radius":p.radius.round,"--bs-font-weight":String(h.weights.bold)}));return(a,u)=>(r(),o(`div`,{class:t([`bs-brawler-avatar`,{locked:e.locked,new:e.isNew}]),style:n(i.value)},[l(`div`,_,[l(`div`,v,[e.avatarUrl?(r(),o(`img`,{key:0,src:e.avatarUrl,alt:e.name,class:`avatar-img`},null,8,y)):(r(),o(`span`,b,c(e.name.charAt(0)||`B`),1))]),e.locked?(r(),o(`div`,x,`🔒`)):s(``,!0),e.isNew?(r(),o(`div`,S,`NEW`)):s(``,!0)]),e.starLevel>0?(r(),o(`div`,C,c(`⭐`.repeat(e.starLevel)),1)):s(``,!0),e.trophyCount>0?(r(),o(`div`,w,`🏆 `+c(e.trophyCount),1)):s(``,!0)],6))}})})),D=e((()=>{})),O,k=e((()=>{E(),E(),D(),m(),O=g(T,[[`__scopeId`,`data-v-2cab2b32`]]),T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`BsBrawlerAvatar`,description:``,tags:{},props:[{name:`name`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Brawler'`}},{name:`avatarUrl`,required:!1,type:{name:`string`}},{name:`locked`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`isNew`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`starLevel`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},{name:`trophyCount`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsBrawlerAvatar.vue`]})})),A,j,M,N,P,F,I,L;e((()=>{k(),A={title:`Atoms/BsBrawlerAvatar`,component:O,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Brawler name`},avatarUrl:{control:`text`,description:`Avatar image URL`},locked:{control:`boolean`,description:`Locked state`},isNew:{control:`boolean`,description:`New badge state`},starLevel:{control:`number`,description:`Star level (0-3)`},trophyCount:{control:`number`,description:`Trophy count`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},j={args:{name:`SHELLY`,locked:!1,isNew:!1,starLevel:0,trophyCount:0}},M={args:{name:`SHELLY`,locked:!1,isNew:!1,starLevel:2,trophyCount:1250}},N={args:{name:`MORTIS`,locked:!0,isNew:!1,starLevel:0,trophyCount:0}},P={args:{name:`GALE`,locked:!1,isNew:!0,starLevel:0,trophyCount:0}},F={args:{name:`SPike`,locked:!1,isNew:!1,starLevel:3,trophyCount:2500}},I={render:()=>({components:{BsBrawlerAvatar:O},template:`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E;">
        <BsBrawlerAvatar name="SHELLY" :locked="false" :isNew="false" :starLevel="0" />
        <BsBrawlerAvatar name="COLT" :locked="false" :isNew="true" :starLevel="1" />
        <BsBrawlerAvatar name="BULL" :locked="false" :isNew="false" :starLevel="2" :trophyCount="1500" />
        <BsBrawlerAvatar name="SPIKE" :locked="false" :isNew="false" :starLevel="3" :trophyCount="2500" />
        <BsBrawlerAvatar name="MORTIS" :locked="true" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 0,
    trophyCount: 0
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SHELLY',
    locked: false,
    isNew: false,
    starLevel: 2,
    trophyCount: 1250
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'MORTIS',
    locked: true,
    isNew: false,
    starLevel: 0,
    trophyCount: 0
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'GALE',
    locked: false,
    isNew: true,
    starLevel: 0,
    trophyCount: 0
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SPike',
    locked: false,
    isNew: false,
    starLevel: 3,
    trophyCount: 2500
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsBrawlerAvatar
    },
    template: \`
      <div style="display: flex; gap: 32px; padding: 40px; background: #1A1A2E;">
        <BsBrawlerAvatar name="SHELLY" :locked="false" :isNew="false" :starLevel="0" />
        <BsBrawlerAvatar name="COLT" :locked="false" :isNew="true" :starLevel="1" />
        <BsBrawlerAvatar name="BULL" :locked="false" :isNew="false" :starLevel="2" :trophyCount="1500" />
        <BsBrawlerAvatar name="SPIKE" :locked="false" :isNew="false" :starLevel="3" :trophyCount="2500" />
        <BsBrawlerAvatar name="MORTIS" :locked="true" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Unlocked`,`Locked`,`NewUnlock`,`MaxStar`,`AllStates`]}))();export{I as AllStates,j as Default,N as Locked,F as MaxStar,P as NewUnlock,M as Unlocked,L as __namedExportsOrder,A as default};