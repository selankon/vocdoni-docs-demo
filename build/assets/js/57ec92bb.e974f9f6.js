"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2933],{10866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var a=n(87462),o=(n(67294),n(3905)),i=n(26389),s=n(94891),l=(n(74933),n(47507)),c=(n(24310),n(63303)),r=(n(75035),n(85162));const d={id:"wallet-election-post",title:"Creates an election",description:"Creates an election",sidebar_label:"Creates an election",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"walletElectionPost",tags:["wallet"],responses:{200:{description:"todo",content:{"application/json":{example:'{\n  "title": "APIv2 test process",\n  "description": "this is a testing election",\n  "header": "https://unsplash.com/photos/-TgHIH6glbk/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjd8fHx8fHwyfHwxNjY0MjI3ODM1&force=true&w=640",\n  "streamUri": "",\n  "startDate": "2022-09-27T00:40:29+02:00",\n  "endDate": "2022-09-28T00:20:29+02:00",\n  "voteType": {\n    "uniqueChoices": false,\n    "maxVoteOverwrites": 1,\n    "costFromWeight": false,\n    "costExponent": 10000\n  },\n  "electionType": {\n    "autoStart": true,\n    "interruptible": true,\n    "dynamicCensus": false,\n    "secretUntilTheEnd": false,\n    "anonymous": false\n  },\n  "census": {\n    "type": "csp",\n    "publicKey": "f6e19f03a6304cd25ba0bc536c5cfa2b5b6c9aa05d2d25fce2aa0682bc18dbda"\n  },\n  "questions": [\n    {\n      "title": {\n        "default": "first question"\n      },\n      "description": {\n        "default": "lets vote"\n      },\n      "choices": [\n        {\n          "title": {\n            "default": "this is a choice"\n          },\n          "value": 0\n        },\n        {\n          "title": {\n            "default": "this is another choice"\n          },\n          "value": 1\n        }\n      ]\n    }\n  ]\n}'}}}},description:"Creates an election",method:"post",path:"/wallet/election",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Creates an election",description:{type:"text/plain"},url:{path:["wallet","election"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni/vocdoni-api"},p=void 0,u={unversionedId:"vocdoni/wallet-election-post",id:"vocdoni/wallet-election-post",title:"Creates an election",description:"Creates an election",source:"@site/docs/vocdoni/wallet-election-post.api.mdx",sourceDirName:"vocdoni",slug:"/vocdoni/wallet-election-post",permalink:"/vocdoni-docs-demo/vocdoni/wallet-election-post",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/vocdoni/wallet-election-post.api.mdx",tags:[],version:"current",frontMatter:{id:"wallet-election-post",title:"Creates an election",description:"Creates an election",sidebar_label:"Creates an election",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"walletElectionPost",tags:["wallet"],responses:{200:{description:"todo",content:{"application/json":{example:'{\n  "title": "APIv2 test process",\n  "description": "this is a testing election",\n  "header": "https://unsplash.com/photos/-TgHIH6glbk/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjd8fHx8fHwyfHwxNjY0MjI3ODM1&force=true&w=640",\n  "streamUri": "",\n  "startDate": "2022-09-27T00:40:29+02:00",\n  "endDate": "2022-09-28T00:20:29+02:00",\n  "voteType": {\n    "uniqueChoices": false,\n    "maxVoteOverwrites": 1,\n    "costFromWeight": false,\n    "costExponent": 10000\n  },\n  "electionType": {\n    "autoStart": true,\n    "interruptible": true,\n    "dynamicCensus": false,\n    "secretUntilTheEnd": false,\n    "anonymous": false\n  },\n  "census": {\n    "type": "csp",\n    "publicKey": "f6e19f03a6304cd25ba0bc536c5cfa2b5b6c9aa05d2d25fce2aa0682bc18dbda"\n  },\n  "questions": [\n    {\n      "title": {\n        "default": "first question"\n      },\n      "description": {\n        "default": "lets vote"\n      },\n      "choices": [\n        {\n          "title": {\n            "default": "this is a choice"\n          },\n          "value": 0\n        },\n        {\n          "title": {\n            "default": "this is another choice"\n          },\n          "value": 1\n        }\n      ]\n    }\n  ]\n}'}}}},description:"Creates an election",method:"post",path:"/wallet/election",servers:[{url:"https://api.vocdoni.io/version/v3"}],security:[{bearerAuth:[]}],securitySchemes:{bearerAuth:{type:"http",scheme:"bearer"}},info:{version:"2.0.0",title:"Vocdoni API",license:{name:"MIT"},description:"**Goals and Objectives:** The Vocdoni API is meant to be the entry point for external integrators to add voting capabilities to an existing  CRM, customer base and product experience. The API should act as a satellite that facilitates creating votes using  Vocdoni, without the hassle of learning a deep platform."},postman:{name:"Creates an election",description:{type:"text/plain"},url:{path:["wallet","election"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"vocdoni/vocdoni-api"},sidebar:"petstore",previous:{title:"Transfer VOC tokens",permalink:"/vocdoni-docs-demo/vocdoni/wallet-transfer"},next:{title:"census",permalink:"/vocdoni-docs-demo/vocdoni/census"}},h={},f=[{value:"Creates an election",id:"creates-an-election",level:2}],m={toc:f};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creates-an-election"},"Creates an election"),(0,o.kt)("p",null,"Creates an election"),(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"ApiTabs"},(0,o.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"todo")),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"SchemaTabs"},(0,o.kt)(r.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(l.Z,{responseExample:'{\n  "title": "APIv2 test process",\n  "description": "this is a testing election",\n  "header": "https://unsplash.com/photos/-TgHIH6glbk/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjd8fHx8fHwyfHwxNjY0MjI3ODM1&force=true&w=640",\n  "streamUri": "",\n  "startDate": "2022-09-27T00:40:29+02:00",\n  "endDate": "2022-09-28T00:20:29+02:00",\n  "voteType": {\n    "uniqueChoices": false,\n    "maxVoteOverwrites": 1,\n    "costFromWeight": false,\n    "costExponent": 10000\n  },\n  "electionType": {\n    "autoStart": true,\n    "interruptible": true,\n    "dynamicCensus": false,\n    "secretUntilTheEnd": false,\n    "anonymous": false\n  },\n  "census": {\n    "type": "csp",\n    "publicKey": "f6e19f03a6304cd25ba0bc536c5cfa2b5b6c9aa05d2d25fce2aa0682bc18dbda"\n  },\n  "questions": [\n    {\n      "title": {\n        "default": "first question"\n      },\n      "description": {\n        "default": "lets vote"\n      },\n      "choices": [\n        {\n          "title": {\n            "default": "this is a choice"\n          },\n          "value": 0\n        },\n        {\n          "title": {\n            "default": "this is another choice"\n          },\n          "value": 1\n        }\n      ]\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);