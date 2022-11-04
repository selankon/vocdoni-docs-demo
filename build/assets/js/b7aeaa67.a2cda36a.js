"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6459],{10048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),o=a(26389),l=a(94891),d=a(74933),s=a(47507),r=a(24310),c=a(63303),p=(a(75035),a(85162));const m={id:"vote-get",title:"Get full vote data",description:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",sidebar_label:"Get full vote data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["vote"],description:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",operationId:"voteGet",parameters:[{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{envelope:{type:"object",properties:{encryption_key_indexes:{type:"array",items:{type:"integer"},example:[1,2]},meta:{type:"object",properties:{height:{type:"integer",format:"int32",example:2929397},nullifier:{type:"string",example:"c3f32730a196d8ba928e775fad430969b500633adf33b3f63922b9d8713317a2"},process_id:{type:"string",example:"0213b31d622b6475d4f3a32cffdc26b02f3ea7589a72c1ea2b03587b7dc7a576"},tx_hash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},tx_index:{type:"integer",format:"int32",example:0}}},nonce:{type:"string",example:"4b6e87d0b01c82cd269a57658c49ef2c429eaf4d480ca6710ff07af72c7059df"},signature:{type:"string",example:"a7b8b2b4e9fb753627145b2f84770169e944f9e3f509c3402b7bb7d9c873a88a061de02aabc73355529f2b422d2a8d64f8ae39f0363d2aef7504142ef04d386c1c"},vote_package:{type:"string",example:"Yaiw2PMe8YZ+iTcPvOHAaZVoAiNzz3vdEed0pPXTRwF4unD15N79+7P4Jx5fk55CDBvhQuvpmD9mEprVJehur4I8ovqeaktwNoWUHvT8ue090r2J4yL33YqvZGlcpoa5lnGUMcRPra8bnBhqd1HX6KTTzhXV74fNijncNbj57/sdTr04ljolaA=="},weight:{type:"string",example:"1"}}}}}}}},400:{description:"Invalid nullifier supplied"},404:{description:"Vote not found"},500:{description:"Internal server error"}},method:"get",path:"/vote/{voteId}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get full vote data",description:{content:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",type:"text/plain"},url:{path:["vote",":voteId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},h=void 0,f={unversionedId:"vocdoni/vote-get",id:"vocdoni/vote-get",title:"Get full vote data",description:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",source:"@site/docs/vocdoni/vote-get.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/vote-get",permalink:"/vocdoni-docs-demo/vocdoni/vote-get",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/vote-get.api.mdx",tags:[],version:"current",frontMatter:{id:"vote-get",title:"Get full vote data",description:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",sidebar_label:"Get full vote data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["vote"],description:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",operationId:"voteGet",parameters:[{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string"}}],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{envelope:{type:"object",properties:{encryption_key_indexes:{type:"array",items:{type:"integer"},example:[1,2]},meta:{type:"object",properties:{height:{type:"integer",format:"int32",example:2929397},nullifier:{type:"string",example:"c3f32730a196d8ba928e775fad430969b500633adf33b3f63922b9d8713317a2"},process_id:{type:"string",example:"0213b31d622b6475d4f3a32cffdc26b02f3ea7589a72c1ea2b03587b7dc7a576"},tx_hash:{type:"string",example:"75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad"},tx_index:{type:"integer",format:"int32",example:0}}},nonce:{type:"string",example:"4b6e87d0b01c82cd269a57658c49ef2c429eaf4d480ca6710ff07af72c7059df"},signature:{type:"string",example:"a7b8b2b4e9fb753627145b2f84770169e944f9e3f509c3402b7bb7d9c873a88a061de02aabc73355529f2b422d2a8d64f8ae39f0363d2aef7504142ef04d386c1c"},vote_package:{type:"string",example:"Yaiw2PMe8YZ+iTcPvOHAaZVoAiNzz3vdEed0pPXTRwF4unD15N79+7P4Jx5fk55CDBvhQuvpmD9mEprVJehur4I8ovqeaktwNoWUHvT8ue090r2J4yL33YqvZGlcpoa5lnGUMcRPra8bnBhqd1HX6KTTzhXV74fNijncNbj57/sdTr04ljolaA=="},weight:{type:"string",example:"1"}}}}}}}},400:{description:"Invalid nullifier supplied"},404:{description:"Vote not found"},500:{description:"Internal server error"}},method:"get",path:"/vote/{voteId}",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Get full vote data",description:{content:"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope.",type:"text/plain"},url:{path:["vote",":voteId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Nullifier of the vote",type:"text/plain"},type:"any",value:"",key:"voteId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"vote",permalink:"/vocdoni-docs-demo/vocdoni/vote"},next:{title:"Submit a vote",permalink:"/vocdoni-docs-demo/vocdoni/vote-submit"}},v={},u=[{value:"Get full vote data",id:"get-full-vote-data",level:2}],b={toc:u};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-full-vote-data"},"Get full vote data"),(0,n.kt)("p",null,"Get the content of an existing Vote. The Vote is identified by the nullifier. Height and txIndex refer to the block height and the index on that block, respectively, of the transaction containing this  vote envelope."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"voteId",in:"path",description:"Nullifier of the vote",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(o.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful operation")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(c.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"envelope"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"encryption_key_indexes",required:!1,schemaDescription:void 0,schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"meta"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(r.Z,{collapsible:!1,name:"height",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"nullifier",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"process_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"tx_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"tx_index",required:!1,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(r.Z,{collapsible:!1,name:"nonce",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"vote_package",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(r.Z,{collapsible:!1,name:"weight",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(s.Z,{responseExample:'{\n  "envelope": {\n    "encryption_key_indexes": [\n      1,\n      2\n    ],\n    "meta": {\n      "height": 2929397,\n      "nullifier": "c3f32730a196d8ba928e775fad430969b500633adf33b3f63922b9d8713317a2",\n      "process_id": "0213b31d622b6475d4f3a32cffdc26b02f3ea7589a72c1ea2b03587b7dc7a576",\n      "tx_hash": "75e8f822f5dd13973ac5158d600f0a2a5fea4bfefce9712ab5195bf17884cfad",\n      "tx_index": 0\n    },\n    "nonce": "4b6e87d0b01c82cd269a57658c49ef2c429eaf4d480ca6710ff07af72c7059df",\n    "signature": "a7b8b2b4e9fb753627145b2f84770169e944f9e3f509c3402b7bb7d9c873a88a061de02aabc73355529f2b422d2a8d64f8ae39f0363d2aef7504142ef04d386c1c",\n    "vote_package": "Yaiw2PMe8YZ+iTcPvOHAaZVoAiNzz3vdEed0pPXTRwF4unD15N79+7P4Jx5fk55CDBvhQuvpmD9mEprVJehur4I8ovqeaktwNoWUHvT8ue090r2J4yL33YqvZGlcpoa5lnGUMcRPra8bnBhqd1HX6KTTzhXV74fNijncNbj57/sdTr04ljolaA==",\n    "weight": "1"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Invalid nullifier supplied")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Vote not found")),(0,n.kt)("div",null)),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal server error")),(0,n.kt)("div",null)))))}g.isMDXComponent=!0}}]);