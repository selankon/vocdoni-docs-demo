"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6615],{83302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>p,metadata:()=>g,toc:()=>u});var o=t(87462),a=(t(67294),t(3905)),i=t(26389),r=t(94891),c=t(74933),s=t(47507),d=(t(24310),t(63303)),l=(t(75035),t(85162));const p={id:"transaction-by-block-index",title:"Returns the raw transaction content",description:"Returns the raw transaction content",sidebar_label:"Returns the raw transaction content",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"transactionByBlockIndex",tags:["chain"],parameters:[{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}}],responses:{200:{description:"Transaction object",content:{"application/json":{example:'{\n  "vote": {\n    "nonce": "BARp7R3nXyx2g5YsiRBMoyfRoAn8HswZ3Ds3AaBmwc4=",\n    "processId": "IbLqU0XS4MlB3UT/TEP8RoMIi4Rt2zI00WkLAAAAAAY=",\n    "proof": {\n      "ethereumStorage": {\n        "key": "friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY=",\n        "value": "SpVFE04rDsBN",\n        "siblings": [\n          "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"\n        ]\n      }\n    },\n    "votePackage": "eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ==",\n    "nullifier": "",\n    "encryptionKeyIndexes": []\n  }\n}'}}}},description:"Returns the raw transaction content",method:"get",path:"/chain/transaction/{blockHeight}/{txIndex}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Returns the raw transaction content",description:{type:"text/plain"},url:{path:["chain","transaction",":blockHeight",":txIndex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"blockHeight"},{disabled:!1,description:{content:"(Required) Transaction index on block",type:"text/plain"},type:"any",value:"",key:"txIndex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},h=void 0,g={unversionedId:"vocdoni/transaction-by-block-index",id:"vocdoni/transaction-by-block-index",title:"Returns the raw transaction content",description:"Returns the raw transaction content",source:"@site/docs/vocdoni/transaction-by-block-index.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/transaction-by-block-index",permalink:"/vocdoni/transaction-by-block-index",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/transaction-by-block-index.api.mdx",tags:[],version:"current",frontMatter:{id:"transaction-by-block-index",title:"Returns the raw transaction content",description:"Returns the raw transaction content",sidebar_label:"Returns the raw transaction content",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"transactionByBlockIndex",tags:["chain"],parameters:[{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}}],responses:{200:{description:"Transaction object",content:{"application/json":{example:'{\n  "vote": {\n    "nonce": "BARp7R3nXyx2g5YsiRBMoyfRoAn8HswZ3Ds3AaBmwc4=",\n    "processId": "IbLqU0XS4MlB3UT/TEP8RoMIi4Rt2zI00WkLAAAAAAY=",\n    "proof": {\n      "ethereumStorage": {\n        "key": "friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY=",\n        "value": "SpVFE04rDsBN",\n        "siblings": [\n          "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"\n        ]\n      }\n    },\n    "votePackage": "eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ==",\n    "nullifier": "",\n    "encryptionKeyIndexes": []\n  }\n}'}}}},description:"Returns the raw transaction content",method:"get",path:"/chain/transaction/{blockHeight}/{txIndex}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Returns the raw transaction content",description:{type:"text/plain"},url:{path:["chain","transaction",":blockHeight",":txIndex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Block height",type:"text/plain"},type:"any",value:"",key:"blockHeight"},{disabled:!1,description:{content:"(Required) Transaction index on block",type:"text/plain"},type:"any",value:"",key:"txIndex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Get the transaction reference by hash",permalink:"/vocdoni/transaction-by-reference"},next:{title:"Get registered organizations count",permalink:"/vocdoni/organization-count"}},m={},u=[{value:"Returns the raw transaction content",id:"returns-the-raw-transaction-content",level:2}],I={toc:u};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"returns-the-raw-transaction-content"},"Returns the raw transaction content"),(0,a.kt)("p",null,"Returns the raw transaction content"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(c.Z,{className:"paramsItem",param:{name:"blockHeight",in:"path",description:"Block height",required:!0,schema:{type:"integer",format:"int32",example:64924}},mdxType:"ParamsItem"}),(0,a.kt)(c.Z,{className:"paramsItem",param:{name:"txIndex",in:"path",description:"Transaction index on block",required:!0,schema:{type:"integer",format:"int32",example:0}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Transaction object")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(s.Z,{responseExample:'{\n  "vote": {\n    "nonce": "BARp7R3nXyx2g5YsiRBMoyfRoAn8HswZ3Ds3AaBmwc4=",\n    "processId": "IbLqU0XS4MlB3UT/TEP8RoMIi4Rt2zI00WkLAAAAAAY=",\n    "proof": {\n      "ethereumStorage": {\n        "key": "friRbvlOgkNexQvnZ1RL910Jlz3m1W4V5BzqhpZSBpY=",\n        "value": "SpVFE04rDsBN",\n        "siblings": [\n          "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"\n        ]\n      }\n    },\n    "votePackage": "eyJub25jZSI6ImFjYjcyOWU3ZmQ1OTA2ZWUiLCJ2b3RlcyI6WzJdfQ==",\n    "nullifier": "",\n    "encryptionKeyIndexes": []\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);