import{i as e}from"./preload-helper-CeV3c4x5.js";import{E as t,T as n,_ as r,f as i,h as a,p as o,u as s,y as c}from"./iframe-De8NUuj5.js";import{a as l,c as u,i as d,n as f,r as p,t as m}from"./_plugin-vue_export-helper-Dw-_KY5i.js";var h,g,_,v,y=e((()=>{s(),u(),h={class:`icon-box`},g={class:`icon`},_={class:`label`},v=r({__name:`BsModeIcon`,props:{modeType:{},label:{}},setup(e){let r=e,s={solo:{icon:`🎯`,bg:`#FF6B6B`,label:`SOLO`},duo:{icon:`👥`,bg:`#4ECDC4`,label:`DUO`},team:{icon:`👔`,bg:`#45B7D1`,label:`TEAM`},ranked:{icon:`🏆`,bg:`#9C27B0`,label:`RANKED`},club:{icon:`🏠`,bg:`#FF9800`,label:`CLUB`},challenge:{icon:`⚡`,bg:`#E91E63`,label:`CHALLENGE`},special:{icon:`🌟`,bg:`#673AB7`,label:`SPECIAL`}},u=i(()=>r.label||s[r.modeType].label),f=i(()=>({"--bs-mode-bg":s[r.modeType].bg,"--bs-black":l.black,"--bs-white":l.white,"--bs-border-width":d.width,"--bs-border-radius":d.radius.md,"--bs-animation-fast":p.fast}));return(r,i)=>(c(),a(`div`,{class:`bs-mode-icon`,style:n(f.value)},[o(`div`,h,[o(`span`,g,t(s[e.modeType].icon),1)]),o(`span`,_,t(u.value),1)],4))}})})),b=e((()=>{})),x,S=e((()=>{y(),y(),b(),f(),x=m(v,[[`__scopeId`,`data-v-2d83ee6d`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`BsModeIcon`,description:``,tags:{},props:[{name:`modeType`,required:!0,type:{name:`GameModeType`}},{name:`label`,required:!1,type:{name:`string`}}],sourceFiles:[`/home/runner/work/brawl-stars-ui-kit/brawl-stars-ui-kit/src/components/atoms/BsModeIcon.vue`]})})),C,w,T,E,D,O,k,A,j,M;e((()=>{S(),C={title:`Atoms/BsModeIcon`,component:x,tags:[`autodocs`],argTypes:{modeType:{control:`select`,options:[`solo`,`duo`,`team`,`ranked`,`club`,`challenge`,`special`],description:`Game mode type`},label:{control:`text`,description:`Custom label`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},w={args:{modeType:`solo`}},T={args:{modeType:`duo`}},E={args:{modeType:`team`}},D={args:{modeType:`ranked`}},O={args:{modeType:`club`}},k={args:{modeType:`challenge`}},A={args:{modeType:`special`}},j={render:()=>({components:{BsModeIcon:x},template:`
      <div style="display: flex; flex-wrap: wrap; gap: 24px; padding: 40px; background: #1A1A2E; justify-content: center;">
        <BsModeIcon modeType="solo" />
        <BsModeIcon modeType="duo" />
        <BsModeIcon modeType="team" />
        <BsModeIcon modeType="ranked" />
        <BsModeIcon modeType="club" />
        <BsModeIcon modeType="challenge" />
        <BsModeIcon modeType="special" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'solo'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'duo'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'team'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'ranked'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'club'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'challenge'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    modeType: 'special'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BsModeIcon
    },
    template: \`
      <div style="display: flex; flex-wrap: wrap; gap: 24px; padding: 40px; background: #1A1A2E; justify-content: center;">
        <BsModeIcon modeType="solo" />
        <BsModeIcon modeType="duo" />
        <BsModeIcon modeType="team" />
        <BsModeIcon modeType="ranked" />
        <BsModeIcon modeType="club" />
        <BsModeIcon modeType="challenge" />
        <BsModeIcon modeType="special" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Solo`,`Duo`,`Team`,`Ranked`,`Club`,`Challenge`,`Special`,`AllModes`]}))();export{j as AllModes,k as Challenge,O as Club,T as Duo,D as Ranked,w as Solo,A as Special,E as Team,M as __namedExportsOrder,C as default};