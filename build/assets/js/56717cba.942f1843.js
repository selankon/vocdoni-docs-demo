"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7266],{52991:(e,t,r)=>{r.d(t,{Z:()=>_});var s=r(67294),n=r(86010),i=r(53438),o=r(39960),c=r(13919),a=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return s.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return s.createElement(m,{href:t},s.createElement("h2",{className:(0,n.Z)("text--truncate",u),title:i},r," ",i),o&&s.createElement("p",{className:(0,n.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?s.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(h,{item:t});case"category":return s.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return s.createElement(_,{items:r.items,className:t})}function _(e){const{items:t,className:r}=e;if(!t)return s.createElement(g,e);const o=(0,i.MN)(t);return s.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(v,{item:e})))))}},8267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=r(87462),n=(r(67294),r(3905)),i=r(52991),o=r(53438);const c={id:"user",title:"Users",description:"Users",custom_edit_url:null},a=void 0,l={unversionedId:"petstore_versioned/1.0.0/user",id:"petstore_versioned/1.0.0/user",title:"Users",description:"Users",source:"@site/docs/petstore_versioned/1.0.0/user.tag.mdx",sourceDirName:"petstore_versioned/1.0.0",slug:"/petstore_versioned/1.0.0/user",permalink:"/petstore_versioned/1.0.0/user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user",title:"Users",description:"Users",custom_edit_url:null},sidebar:"petstore-1.0.0",previous:{title:"Subscribe to the Store events",permalink:"/petstore_versioned/1.0.0/subscribe-to-the-store-events"},next:{title:"Create user",permalink:"/petstore_versioned/1.0.0/create-user"}},u={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Operations about user"),(0,n.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);