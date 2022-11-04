"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8110],{7308:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var o=n(87462),a=(n(67294),n(3905)),s=n(26389),c=n(94891),i=(n(74933),n(47507)),r=(n(24310),n(63303)),l=(n(75035),n(85162));const d={id:"transaction-cost",title:"Get transaction actual cost",description:"Get transaction actual cost",sidebar_label:"Get transaction actual cost",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"transactionCost",tags:["chain"],responses:{200:{description:"Return transaction cost parameters",content:{"application/json":{examples:{cost:{value:'{\n  "costs": {\n    "AddDelegateForAccount": 5,\n    "CollectFaucet": 0,\n    "DelDelegateForAccount": 5,\n    "NewProcess": 10,\n    "RegisterKey": 1,\n    "SendTokens": 1,\n    "SetAccountInfo": 5,\n    "SetProcessCensus": 1,\n    "SetProcessQuestionIndex": 1,\n    "SetProcessResults": 1,\n    "SetProcessStatus": 1\n  }\n}'}}}}}},description:"Get transaction actual cost",method:"get",path:"/chain/transaction/cost",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get transaction actual cost",description:{type:"text/plain"},url:{path:["chain","transaction","cost"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},p=void 0,u={unversionedId:"vocdoni/transaction-cost",id:"vocdoni/transaction-cost",title:"Get transaction actual cost",description:"Get transaction actual cost",source:"@site/docs/vocdoni/transaction-cost.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/transaction-cost",permalink:"/vocdoni-docs-demo/build/vocdoni/transaction-cost",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/transaction-cost.api.mdx",tags:[],version:"current",frontMatter:{id:"transaction-cost",title:"Get transaction actual cost",description:"Get transaction actual cost",sidebar_label:"Get transaction actual cost",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"transactionCost",tags:["chain"],responses:{200:{description:"Return transaction cost parameters",content:{"application/json":{examples:{cost:{value:'{\n  "costs": {\n    "AddDelegateForAccount": 5,\n    "CollectFaucet": 0,\n    "DelDelegateForAccount": 5,\n    "NewProcess": 10,\n    "RegisterKey": 1,\n    "SendTokens": 1,\n    "SetAccountInfo": 5,\n    "SetProcessCensus": 1,\n    "SetProcessQuestionIndex": 1,\n    "SetProcessResults": 1,\n    "SetProcessStatus": 1\n  }\n}'}}}}}},description:"Get transaction actual cost",method:"get",path:"/chain/transaction/cost",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get transaction actual cost",description:{type:"text/plain"},url:{path:["chain","transaction","cost"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"chain",permalink:"/vocdoni-docs-demo/build/vocdoni/chain"},next:{title:"Sumbit a transaction",permalink:"/vocdoni-docs-demo/build/vocdoni/transaction-submit"}},m={},h=[{value:"Get transaction actual cost",id:"get-transaction-actual-cost",level:2}],v={toc:h};function b(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-transaction-actual-cost"},"Get transaction actual cost"),(0,a.kt)("p",null,"Get transaction actual cost"),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Return transaction cost parameters")),(0,a.kt)("div",null,(0,a.kt)(c.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(r.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Cost",value:"Cost",mdxType:"TabItem"},(0,a.kt)(i.Z,{responseExample:'{\n  "costs": {\n    "AddDelegateForAccount": 5,\n    "CollectFaucet": 0,\n    "DelDelegateForAccount": 5,\n    "NewProcess": 10,\n    "RegisterKey": 1,\n    "SendTokens": 1,\n    "SetAccountInfo": 5,\n    "SetProcessCensus": 1,\n    "SetProcessQuestionIndex": 1,\n    "SetProcessResults": 1,\n    "SetProcessStatus": 1\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);