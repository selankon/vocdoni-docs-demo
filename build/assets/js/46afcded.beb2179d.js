"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9348],{95553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=i(87462),o=(i(67294),i(3905));const a={id:"versioning",hide_title:!0,sidebar_label:"Versioning",title:"Versioning"},r=void 0,s={unversionedId:"versioning",id:"versioning",title:"Versioning",description:"Overview",source:"@site/docs/versioning.md",sourceDirName:".",slug:"/versioning",permalink:"/vocdoni-docs-demo/versioning",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/versioning.md",tags:[],version:"current",frontMatter:{id:"versioning",hide_title:!0,sidebar_label:"Versioning",title:"Versioning"},sidebar:"tutorialSidebar",previous:{title:"Sidebars",permalink:"/vocdoni-docs-demo/sidebars"},next:{title:"Customization",permalink:"/vocdoni-docs-demo/category/customization"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Versioning CLI",id:"versioning-cli",level:2},{value:"Generating and Cleaning",id:"generating-and-cleaning",level:3},{value:"<code>versions.json</code>",id:"versionsjson",level:3},{value:"UI Helpers",id:"ui-helpers",level:2},{value:"Version selector",id:"version-selector",level:3},{value:"Version Crumb",id:"version-crumb",level:3}],d={toc:p};function u(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,'Although Docusaurus offers its own versioning system the OpenAPI Docs plugin comes equipped with one specifically aimed at versioning API docs. Aside from being relatively "lighter" than the Docusaurus system, it offers a way to automatically generate some useful UI components including:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A dropdown version selector for quickly switching API versions."),(0,o.kt)("li",{parentName:"ul"},"A version badge/breadcrumb for quickly knowing which version you are looking at.")),(0,o.kt)("p",null,"Finally, the OpenAPI Docs versioning implementation allows API docs to be versioned separately from non-API docs which provides greater flexibility."),(0,o.kt)("h2",{id:"versioning-cli"},"Versioning CLI"),(0,o.kt)("p",null,"The OpenAPI Docs plugin versioning system is driven by the CLI and is not unlike the experience of generating and cleaning non-versioned API docs."),(0,o.kt)("admonition",{title:"TIP",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For details around how to configure versioning see the ",(0,o.kt)("a",{parentName:"p",href:"/vocdoni-docs-demo/#plugin-configuration-options"},"Plugin Configuration Options")," and ",(0,o.kt)("a",{parentName:"p",href:"/vocdoni-docs-demo/#versioning-openapi-docs"},"Versioning")," guides.")),(0,o.kt)("h3",{id:"generating-and-cleaning"},"Generating and Cleaning"),(0,o.kt)("p",null,"Generating versioned API docs example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus gen-api-docs:version petstore:1.0.0\n")),(0,o.kt)("p",null,"Cleaning versioned API docs example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus clean-api-docs:version petstore:1.0.0\n")),(0,o.kt)("p",null,"Generating all Petstore versioned API docs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus gen-api-docs:version petstore:all\n")),(0,o.kt)("h3",{id:"versionsjson"},(0,o.kt)("inlineCode",{parentName:"h3"},"versions.json")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," file contains metadata that could be useful for building UI navigation and breadcrumb components. It is generated and written each time ",(0,o.kt)("inlineCode",{parentName:"p"},"gen-api-docs:version")," is executed, whether for a specific version ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"all")," versions. It is only automatically deleted when ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn docusaurus clean-api-docs:version <your-api-config-key>:all")," is executed. When attempting to remove or cleanup versions there are some details to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removing/deleting a version will require multiple steps.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),": Run the appropriate ",(0,o.kt)("inlineCode",{parentName:"li"},"clean-api-docs:version")," command."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),": Manually delete the version folder from the docs ",(0,o.kt)("inlineCode",{parentName:"li"},"path"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),": Remove the version from the OpenAPI plugin config."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),": Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"gen-api-docs:version")," command to update the ",(0,o.kt)("inlineCode",{parentName:"li"},"versions.json")," file.")))),(0,o.kt)("admonition",{title:"TIP",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The OpenAPI Docs plugin will ",(0,o.kt)("strong",{parentName:"p"},"not")," delete a versioned ",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir")," after executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"clean-api-docs:version")," command. This is by design, as the plugin tries to avoid removing non-API docs/files.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the future, we may decide to introduce a separate command for generating/updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"versioning.json")," file. For now, you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"gen-api-docs:version")," command for any version, including ",(0,o.kt)("inlineCode",{parentName:"p"},"all"),", to trigger the update.")),(0,o.kt)("h2",{id:"ui-helpers"},"UI Helpers"),(0,o.kt)("p",null,"As mentioned earlier, the OpenAPI plugin comes equipped with utilities for generating navigational UI components to help users switch API versions and quickly determine which version they are looking at."),(0,o.kt)("p",null,"Both the version selector and version crumb components leverage the Docusaurus ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," sidebar item type to inject pure HTML sidebar items."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although convenient, ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," sidebar items are somewhat limited in terms of rendering content dynamically or accessing state, since javascript is ignored.")),(0,o.kt)("h3",{id:"version-selector"},"Version selector"),(0,o.kt)("p",null,"As the name implies, this utility will generate a pure HTML version selector base on the ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," file."),(0,o.kt)("p",null,"Import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const {\n  versionSelector,\n} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils"); // imports utility\nconst petstoreVersions = require("./docs/petstore/versions.json"); // imports Petstore versions.json\n')),(0,o.kt)("p",null,"Add to existing sidebar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  type: "html",\n  defaultStyle: true,\n  value: versionSelector(petstoreVersions),\n  className: "version-button",\n}\n')),(0,o.kt)("h3",{id:"version-crumb"},"Version Crumb"),(0,o.kt)("p",null,"As the name implies, this utility will generate a pure HTML crumb to help users identify which version they are currently on."),(0,o.kt)("p",null,"Import:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const {\n  versionCrumb,\n} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");\n')),(0,o.kt)("p",null,"Add to existing sidebar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  type: "html",\n  defaultStyle: true,\n  value: versionCrumb(`v1.0.0`), // The version label you wish to display\n}\n')))}u.isMDXComponent=!0}}]);