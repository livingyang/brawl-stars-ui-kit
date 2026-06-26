import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./BrawlerCard-qf1saztK.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Composites/BrawlerCard`,component:n,tags:[`autodocs`],argTypes:{name:{control:`text`,description:`Brawler name`},avatarUrl:{control:`text`,description:`Avatar image URL`},level:{control:`number`,description:`Brawler level`},trophyCount:{control:`number`,description:`Trophy count`},coinCost:{control:`number`,description:`Coin cost`},powerPoints:{control:`number`,description:`Power points needed`},upgradeCoins:{control:`number`,description:`Upgrade coins needed`},isNew:{control:`boolean`,description:`New badge state`},isMaxPower:{control:`boolean`,description:`Max power state`},rarity:{control:`select`,options:[`trophyRoad`,`rare`,`superRare`,`epic`,`mythic`,`legendary`],description:`Brawler rarity`},bgColor:{control:`color`,description:`Avatar background color`}},parameters:{layout:`centered`,backgrounds:{default:`dark`,values:[{name:`dark`,value:`#1A1A2E`},{name:`light`,value:`#F5F5F5`}]}}},i={args:{name:`SHELLY`,level:5,trophyCount:209,coinCost:209,powerPoints:340,upgradeCoins:800,isNew:!1,isMaxPower:!1,rarity:`trophyRoad`,bgColor:`#4FC3F7`}},a={args:{name:`JACKY`,level:12,trophyCount:209,coinCost:209,powerPoints:0,upgradeCoins:0,isNew:!0,isMaxPower:!0,rarity:`rare`,bgColor:`#4FC3F7`}},o={args:{name:`JACKY`,level:12,trophyCount:209,coinCost:209,powerPoints:0,upgradeCoins:0,isNew:!1,isMaxPower:!0,rarity:`rare`,bgColor:`#4FC3F7`}},s={args:{name:`JESSIE`,level:10,trophyCount:209,coinCost:209,powerPoints:550,upgradeCoins:1250,isNew:!1,isMaxPower:!1,rarity:`rare`,bgColor:`#FF7043`}},c={args:{name:`EMZ`,level:5,trophyCount:209,coinCost:209,powerPoints:550,upgradeCoins:1250,isNew:!1,isMaxPower:!1,rarity:`epic`,bgColor:`#AB47BC`}},l={render:()=>({components:{BrawlerCard:n},template:`
      <div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 40px; background: #1A1A2E;">
        <BrawlerCard name="SHELLY" :level="5" :trophy-count="209" :coin-cost="209" :power-points="340" :upgrade-coins="800" rarity="trophyRoad" bg-color="#4CAF50" />
        <BrawlerCard name="JESSIE" :level="10" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="rare" bg-color="#2196F3" />
        <BrawlerCard name="NITA" :level="8" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="superRare" bg-color="#EF5350" />
        <BrawlerCard name="EMZ" :level="5" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="epic" bg-color="#AB47BC" />
        <BrawlerCard name="MORTIS" :level="7" :trophy-count="209" :coin-cost="209" :power-points="340" :upgrade-coins="800" rarity="mythic" bg-color="#E91E63" />
        <BrawlerCard name="SPIKE" :level="9" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="legendary" bg-color="#FFD700" />
      </div>
    `}),parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SHELLY',
    level: 5,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 340,
    upgradeCoins: 800,
    isNew: false,
    isMaxPower: false,
    rarity: 'trophyRoad',
    bgColor: '#4FC3F7'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'JACKY',
    level: 12,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 0,
    upgradeCoins: 0,
    isNew: true,
    isMaxPower: true,
    rarity: 'rare',
    bgColor: '#4FC3F7'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'JACKY',
    level: 12,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 0,
    upgradeCoins: 0,
    isNew: false,
    isMaxPower: true,
    rarity: 'rare',
    bgColor: '#4FC3F7'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'JESSIE',
    level: 10,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 550,
    upgradeCoins: 1250,
    isNew: false,
    isMaxPower: false,
    rarity: 'rare',
    bgColor: '#FF7043'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'EMZ',
    level: 5,
    trophyCount: 209,
    coinCost: 209,
    powerPoints: 550,
    upgradeCoins: 1250,
    isNew: false,
    isMaxPower: false,
    rarity: 'epic',
    bgColor: '#AB47BC'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BrawlerCard
    },
    template: \`
      <div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 40px; background: #1A1A2E;">
        <BrawlerCard name="SHELLY" :level="5" :trophy-count="209" :coin-cost="209" :power-points="340" :upgrade-coins="800" rarity="trophyRoad" bg-color="#4CAF50" />
        <BrawlerCard name="JESSIE" :level="10" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="rare" bg-color="#2196F3" />
        <BrawlerCard name="NITA" :level="8" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="superRare" bg-color="#EF5350" />
        <BrawlerCard name="EMZ" :level="5" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="epic" bg-color="#AB47BC" />
        <BrawlerCard name="MORTIS" :level="7" :trophy-count="209" :coin-cost="209" :power-points="340" :upgrade-coins="800" rarity="mythic" bg-color="#E91E63" />
        <BrawlerCard name="SPIKE" :level="9" :trophy-count="209" :coin-cost="209" :power-points="550" :upgrade-coins="1250" rarity="legendary" bg-color="#FFD700" />
      </div>
    \`
  }),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`NewBrawler`,`MaxPower`,`Rare`,`Epic`,`AllRarities`]}))();export{l as AllRarities,i as Default,c as Epic,o as MaxPower,a as NewBrawler,s as Rare,u as __namedExportsOrder,r as default};