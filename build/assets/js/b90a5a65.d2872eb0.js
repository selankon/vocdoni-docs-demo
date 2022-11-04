"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[869],{54711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>v,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=a(87462),o=(a(67294),a(3905)),i=a(26389),c=a(94891),s=a(74933),d=a(47507),r=(a(24310),a(63303)),p=(a(75035),a(85162));const u={id:"account-by-address",title:"Return specific account information",description:"Return specific account information",sidebar_label:"Return specific account information",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"accountByAddress",tags:["account"],parameters:[{name:"address",in:"path",description:"The account address also known as organization Id",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{example:'{\n  "address": "e0c941dd44ff4c43fc4683088b846ddb3234d169",\n   "balance": 9568,\n   "nonce": 186,\n   "infoURI": "ipfs://",\n   "processIndex": 38\n}'}}}},description:"Return specific account information",method:"get",path:"/account/{address}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Return specific account information",description:{type:"text/plain"},url:{path:["account",":address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The account address also known as organization Id",type:"text/plain"},type:"any",value:"",key:"address"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},l=void 0,m={unversionedId:"vocdoni/account-by-address",id:"vocdoni/account-by-address",title:"Return specific account information",description:"Return specific account information",source:"@site/docs/vocdoni/account-by-address.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/account-by-address",permalink:"/vocdoni-docs-demo/build/vocdoni/account-by-address",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/account-by-address.api.mdx",tags:[],version:"current",frontMatter:{id:"account-by-address",title:"Return specific account information",description:"Return specific account information",sidebar_label:"Return specific account information",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"accountByAddress",tags:["account"],parameters:[{name:"address",in:"path",description:"The account address also known as organization Id",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}}],responses:{200:{description:"Return account data",content:{"application/json":{example:'{\n  "address": "e0c941dd44ff4c43fc4683088b846ddb3234d169",\n   "balance": 9568,\n   "nonce": 186,\n   "infoURI": "ipfs://",\n   "processIndex": 38\n}'}}}},description:"Return specific account information",method:"get",path:"/account/{address}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Return specific account information",description:{type:"text/plain"},url:{path:["account",":address"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The account address also known as organization Id",type:"text/plain"},type:"any",value:"",key:"address"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"account",permalink:"/vocdoni-docs-demo/build/vocdoni/account"},next:{title:"Register an account to the blockchain",permalink:"/vocdoni-docs-demo/build/vocdoni/account-submit"}},f={},b=[{value:"Return specific account information",id:"return-specific-account-information",level:2}],h={toc:b};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"return-specific-account-information"},"Return specific account information"),(0,o.kt)("p",null,"Return specific account information"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(s.Z,{className:"paramsItem",param:{name:"address",in:"path",description:"The account address also known as organization Id",required:!0,schema:{type:"string",example:"0x370372b92514d81a0e3efb8eba9d036ae0877653"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Return account data")),(0,o.kt)("div",null,(0,o.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(d.Z,{responseExample:'{\n  "address": "e0c941dd44ff4c43fc4683088b846ddb3234d169",\n   "balance": 9568,\n   "nonce": 186,\n   "infoURI": "ipfs://",\n   "processIndex": 38\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);