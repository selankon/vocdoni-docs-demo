"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3819],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var c=n(67294),s=n(86010),r=n(53438),i=n(39960),o=n(13919),a=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return c.createElement(i.Z,{href:t,className:(0,s.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:r,description:i}=e;return c.createElement(m,{href:t},c.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:r},n," ",r),i&&c.createElement("p",{className:(0,s.Z)("text--truncate",d),title:i},i))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?c.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(t.docId??void 0);return c.createElement(p,{href:t.href,icon:n,title:t.label,description:null==s?void 0:s.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(h,{item:t});case"category":return c.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.jA)();return c.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return c.createElement(v,e);const i=(0,r.MN)(t);return c.createElement("section",{className:(0,s.Z)("row",n)},i.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(g,{item:e})))))}},19631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var c=n(87462),s=(n(67294),n(3905)),r=n(52991),i=n(53438);const o={id:"census",title:"census",description:"census",custom_edit_url:null},a=void 0,l={unversionedId:"vocdoni/census",id:"vocdoni/census",title:"census",description:"census",source:"@site/docs/vocdoni/census.tag.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/census",permalink:"/vocdoni/census",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"census",title:"census",description:"census",custom_edit_url:null},sidebar:"petstore",previous:{title:"Creates an election",permalink:"/vocdoni/wallet-election-post"},next:{title:"Create new census",permalink:"/vocdoni/census-post"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,c.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Manage census: create, add, get..."),(0,s.kt)(r.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);