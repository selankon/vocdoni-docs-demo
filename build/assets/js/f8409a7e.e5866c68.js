"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3206],{69568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1,hide_title:!0,sidebar_label:"Docusaurus OpenAPI Docs",title:"Overview",slug:"/",image:"https://docusaurus-openapi.tryingpan.dev/img/docusaurus-openapi-docs-logo.svg",tags:["documentation","openapi","getting started","quickstart"]},r=void 0,l={unversionedId:"intro",id:"intro",title:"Overview",description:"OpenAPI plugin for generating API reference docs in Docusaurus v2.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/vocdoni-docs-demo/",draft:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/intro.mdx",tags:[{label:"documentation",permalink:"/vocdoni-docs-demo/tags/documentation"},{label:"openapi",permalink:"/vocdoni-docs-demo/tags/openapi"},{label:"getting started",permalink:"/vocdoni-docs-demo/tags/getting-started"},{label:"quickstart",permalink:"/vocdoni-docs-demo/tags/quickstart"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_title:!0,sidebar_label:"Docusaurus OpenAPI Docs",title:"Overview",slug:"/",image:"https://docusaurus-openapi.tryingpan.dev/img/docusaurus-openapi-docs-logo.svg",tags:["documentation","openapi","getting started","quickstart"]},sidebar:"tutorialSidebar",next:{title:"Sidebars",permalink:"/vocdoni-docs-demo/sidebars"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuring the plugin",id:"configuring-the-plugin",level:3},{value:"Configuring the theme",id:"configuring-the-theme",level:3},{value:"Complete example",id:"complete-example",level:3},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Generating OpenAPI Docs",id:"generating-openapi-docs",level:3},{value:"Cleaning API Docs",id:"cleaning-api-docs",level:3},{value:"Versioning OpenAPI docs",id:"versioning-openapi-docs",level:3},{value:"Plugin Configuration Options",id:"plugin-configuration-options",level:2},{value:"config",id:"config",level:3},{value:"sidebarOptions",id:"sidebaroptions",level:3},{value:"versions",id:"versions",level:3},{value:"Installing from Template",id:"installing-from-template",level:2},{value:"Developer Quick Start",id:"developer-quick-start",level:2},{value:"Credits",id:"credits",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Support",id:"support",level:2},{value:"Where&#39;s the &quot;Try It&quot; feature?",id:"wheres-the-try-it-feature",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"200",src:"https://user-images.githubusercontent.com/9343811/165975569-1bc29814-884c-4931-83df-860043b625b7.svg"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("p",null,"OpenAPI plugin for generating API reference docs in Docusaurus v2."),(0,i.kt)("img",{src:"https://img.shields.io/badge/dynamic/json?style=for-the-badge&logo=meta&color=blueviolet&label=Docusaurus&query=dependencies%5B%22%40docusaurus%2Fcore%22%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FPaloAltoNetworks%2Fdocusaurus-openapi-docs%2Fmain%2Fdemo%2Fpackage.json"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/HEAD/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/docusaurus-plugin-openapi-docs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/docusaurus-plugin-openapi-docs/latest.svg",alt:"npm latest package"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/docusaurus-plugin-openapi-docs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/docusaurus-plugin-openapi-docs.svg",alt:"npm downloads"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/docusaurus-plugin-openapi-docs"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/docusaurus-plugin-openapi-docs/canary.svg",alt:"npm canary package"}))),(0,i.kt)("iframe",{src:"https://ghbtns.com/github-btn.html?user=PaloAltoNetworks&repo=docusaurus-openapi-docs&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," package extends the Docusaurus CLI with commands for generating MDX using the OpenAPI specification as the source. The resulting MDX is fully compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"},"plugin-content-docs")," and can be used to render beautiful, interactive API reference docs."),(0,i.kt)("p",null,"Key Features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compatible:")," Works with Swagger 2.0 and OpenAPI 3.x."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast:")," Convert large OpenAPI specs into MDX docs in seconds. \ud83d\udd25"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stylish:")," Based on the same ",(0,i.kt)("a",{parentName:"li",href:"https://infima.dev/"},"Infima styling framework")," that powers the Docusaurus UI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Capable:")," Supports single, multi and ",(0,i.kt)("em",{parentName:"li"},"even micro")," OpenAPI specs.")),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'If you"re building a Docusaurus site from scratch the easiest way to get started is by ',(0,i.kt)("a",{parentName:"p",href:"#installing-from-template"},"installing from template"),".")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Both the plugin and theme are currently designed to pair with a specific Docusaurus release. The Docusaurus badge in the ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," and at the top of this page will always reflect the current compatible versions.")),(0,i.kt)("p",null,"Plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-plugin-openapi-docs\n")),(0,i.kt)("p",null,"Theme:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add docusaurus-theme-openapi-docs\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"configuring-the-plugin"},"Configuring the plugin"),(0,i.kt)("p",null,"The plugin configuration is comprised of options that are read by the CLI while generating and cleaning API docs."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"#plugin-configuration-options"},"plugin configuration options")," for a more thorough reference.")),(0,i.kt)("p",null,"The following is an example configuration to help get you started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="docusaurus-plugin-openapi-docs"',title:'"docusaurus-plugin-openapi-docs"'},'plugins: [\n  [\n    "docusaurus-plugin-openapi-docs",\n    {\n      id: "openapi",\n      docsPluginId: "<your docs plugin id>", // e.g. "classic" or the plugin-content-docs id\n      config: {\n        petstore: { // "petstore" is considered the <id> that you will reference in the CLI\n          specPath: "examples/petstore.yaml", // path or URL to the OpenAPI spec\n          outputDir: "api/petstore", // output directory for generated *.mdx and sidebar.js files\n          sidebarOptions: {\n            groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag\n          },\n        }\n      }\n    },\n  ]\n],\n')),(0,i.kt)("h3",{id:"configuring-the-theme"},"Configuring the theme"),(0,i.kt)("p",null,'To use the theme you"ll need to define it under ',(0,i.kt)("inlineCode",{parentName:"p"},"themes")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="docusaurus-theme-openapi-docs"',title:'"docusaurus-theme-openapi-docs"'},'themes: ["docusaurus-theme-openapi-docs"] // exports ApiItem and ApiDemoPanel\n')),(0,i.kt)("p",null,'Finally, you"ll need to replace ',(0,i.kt)("inlineCode",{parentName:"p"},"@theme/DocItem")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/ApiItem")," as your ",(0,i.kt)("inlineCode",{parentName:"p"},"docItemComponent"),". Where you do this will depend on whether you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," or a standalone ",(0,i.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs")," to render your docs (see examples below)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/ApiItem")," component is designed to be a drop-in replacement for ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/DocItem")," that supports rendering OpenAPI documentation while maintaining backwards compatibility with non-API docs. In other words, it can be used for rendering both API ",(0,i.kt)("em",{parentName:"p"},"and")," non-API docs.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="preset-classic example"',title:'"preset-classic','example"':!0},'presets: [\n  [\n    "classic",\n    ({\n      docs: {\n        sidebarPath: require.resolve("./sidebars.js"),\n        editUrl:\n          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",\n        docLayoutComponent: "@theme/DocPage",\n        // highlight-next-line\n        docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here\n      },\n      blog: {\n        showReadingTime: true,\n        editUrl:\n          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"\n      },\n      theme: {\n        customCss: require.resolve("./src/css/custom.css")\n      }\n    })\n  ]\n]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="plugin-content-docs example"',title:'"plugin-content-docs','example"':!0},'plugins: [\n    [\n      "@docusaurus/plugin-content-docs",\n      {\n        path: "docs",\n        breadcrumbs: true,\n        routeBasePath: "docs",\n        include: ["**/*.md", "**/*.mdx"],\n        sidebarPath: "sidebars.js",\n        docLayoutComponent: "@theme/DocPage",\n        // highlight-next-line\n        docItemComponent: "@theme/ApiItem", // add @theme/ApiItem here\n      },\n    ],\n  ],\n')),(0,i.kt)("h3",{id:"complete-example"},"Complete example"),(0,i.kt)("p",null,"For a complete example of how to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-openapi-docs")," see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/main/demo/docusaurus.config.js"},"demo configuration"),"."),(0,i.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,i.kt)("p",null,"After you've installed and configured the plugin and theme, the CLI can be used to ",(0,i.kt)("inlineCode",{parentName:"p"},"generate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clean")," API docs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: docusaurus <command> [options]\n\nOptions:\n  -V, --version                                            output the version number\n  -h, --help                                               display help for command\n\nCommands:\n  build [options] [siteDir]                                Build website.\n  swizzle [options] [themeName] [componentName] [siteDir]  Wraps or ejects the original theme files into website folder for customization.\n  deploy [options] [siteDir]                               Deploy website to GitHub pages.\n  start [options] [siteDir]                                Start the development server.\n  serve [options] [siteDir]                                Serve website locally.\n  clear [siteDir]                                          Remove build artifacts.\n  write-translations [options] [siteDir]                   Extract required translations of your site.\n  write-heading-ids [options] [siteDir] [files...]         Generate heading ids in Markdown content.\n  docs:version <version>                                   Tag a new docs version\n  gen-api-docs <id>                                        Generates OpenAPI docs in MDX file format and sidebar.js (if enabled).\n  gen-api-docs:version <id:version>                        Generates versioned OpenAPI docs in MDX file format, versions.js and sidebar.js (if enabled).\n  clean-api-docs <id>                                      Clears the generated OpenAPI docs MDX files and sidebar.js (if enabled).\n  clean-api-docs:version <id:version>                      Clears the versioned, generated OpenAPI docs MDX files, versions.json and sidebar.js (if\n                                                           enabled).\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're configuring multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," instances use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--plugin-id")," option to specify which plugin instance to run the commands against."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Options:\n  -p, --plugin-id <plugin>  OpenAPI docs plugin ID.\n  -h, --help                display help for command\n"))),(0,i.kt)("h3",{id:"generating-openapi-docs"},"Generating OpenAPI Docs"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following command will generate API docs for all of the OpenAPI specifications referenced in your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," config.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus gen-api-docs all\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following command will generate API docs for a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus gen-api-docs <id>\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"generating API docs for 'petstore'\"",title:'"generating',API:!0,docs:!0,for:!0,"'petstore'\"":!0},"yarn docusaurus gen-api-docs petstore\n")),(0,i.kt)("h3",{id:"cleaning-api-docs"},"Cleaning API Docs"),(0,i.kt)("p",null,"Occasionally you may need to clean and re-generate API docs, especially following changes to your OpenAPI specification(s)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following command will clean all API docs referenced in your ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," config.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus clean-api-docs all\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following command will clean API docs for a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus clean-api-docs <id>\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"cleaning API docs for 'petstore'\"",title:'"cleaning',API:!0,docs:!0,for:!0,"'petstore'\"":!0},"yarn docusaurus clean-api-docs petstore\n")),(0,i.kt)("h3",{id:"versioning-openapi-docs"},"Versioning OpenAPI docs"),(0,i.kt)("p",null,"To generate ",(0,i.kt)("em",{parentName:"p"},"all")," versioned OpenAPI docs, run the following command from the root directory of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn docusaurus gen-api-docs:version <id>:all\n")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"generate all versioned API docs for 'petstore'\"",title:'"generate',all:!0,versioned:!0,API:!0,docs:!0,for:!0,"'petstore'\"":!0},"yarn docusaurus gen-api-docs:version petstore:all\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"generate version 1.0.0 API docs for 'petstore'\"",title:'"generate',version:!0,"1.0.0":!0,API:!0,docs:!0,for:!0,"'petstore'\"":!0},"yarn docusaurus gen-api-docs:version petstore:1.0.0\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Substitue ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," with a specific version ID to generate/clean a specific version. Generating for ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," or a specific version ID will automatically update the ",(0,i.kt)("inlineCode",{parentName:"p"},"versions.json")," file.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#versions"},"versions options")," for a list of available options. For a complete example of how to configure versining see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/main/demo/docusaurus.config.js#L190"},"demo configuration"),"."),(0,i.kt)("h2",{id:"plugin-configuration-options"},"Plugin Configuration Options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-plugin-openapi-docs")," plugin can be configured with the following options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"A unique document id.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docsPluginId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"The ID associated with the ",(0,i.kt)("inlineCode",{parentName:"td"},"plugin-content-docs")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"preset"),' instance used to render the OpenAPI docs (e.g. "your-plugin-id", "classic", "default").')))),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config")," can be configured with the following options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"specPath")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Designated URL or path to the source of an OpenAPI specification file or directory of multiple OpenAPI specification files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ouputDir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Desired output path for generated MDX files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"template")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Customize MDX content with a desired template.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"downloadUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Designated URL for downloading OpenAPI specification. (requires ",(0,i.kt)("inlineCode",{parentName:"td"},"info")," section/doc)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sidebarOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Set of options for sidebar configuration. See below for a list of supported options.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"version")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Version assigned to single or micro-spec API specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"specPath"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Version label used when generating version selector dropdown menu.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Version base URL used when generating version selector dropdown menu.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"versions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Set of options for versioning configuration. See below for a list of supported options.")))),(0,i.kt)("h3",{id:"sidebaroptions"},"sidebarOptions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sidebarOptions")," can be configured with the following options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"groupPathsBy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Organize and group sidebar slice by specified option. Note: Currently, ",(0,i.kt)("inlineCode",{parentName:"td"},"groupPathsBy")," only contains support for grouping by ",(0,i.kt)("inlineCode",{parentName:"td"},"tag"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"categoryLinkSource")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines what source to use for rendering category link pages when grouping paths by tag. ",(0,i.kt)("br",null),(0,i.kt)("br",null),"The supported options are as follows: ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"tag"),": Sets the category link config type to ",(0,i.kt)("inlineCode",{parentName:"td"},"generated-index")," and uses the tag description as the link config description. ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"info"),": Sets the category link config type to ",(0,i.kt)("inlineCode",{parentName:"td"},"doc")," and renders the ",(0,i.kt)("inlineCode",{parentName:"td"},"info")," section as the category link (recommended only for multi/micro-spec scenarios).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sidebarCollapsible")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether sidebar categories are collapsible by default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sidebarCollapsed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether sidebar categories are collapsed by default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional props for customizing a sidebar item.")))),(0,i.kt)("admonition",{title:"TIP",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may optionally configure a ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarOptions"),". In doing so, an individual ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar.js")," slice with the configured options will be generated within the respective ",(0,i.kt)("inlineCode",{parentName:"p"},"outputDir"),".")),(0,i.kt)("h3",{id:"versions"},"versions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"versions")," can be configured with the following options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"specPath")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Designated URL or path to the source of an OpenAPI specification file or directory of micro OpenAPI specification files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ouputDir")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"Desired output path for versioned, generated MDX files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Version label used when generating version selector dropdown menu.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"baseUrl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional:")," Version base URL used when generating version selector dropdown menu.")))),(0,i.kt)("admonition",{title:"NOTE",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All versions will automatically inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebarOptions")," from the parent/base config.")),(0,i.kt)("h2",{id:"installing-from-template"},"Installing from Template"),(0,i.kt)("p",null,"Run the following to bootstrap a Docsaurus v2 site (classic theme) with ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-openapi-docs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@2.1.0 my-website --package-manager yarn\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When prompted to select a template choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Git repository"),".")),(0,i.kt)("p",null,"Template Repository URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs.git\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'When asked how the template repo should be cloned choose "copy" (unless you know better).')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nyarn start\n")),(0,i.kt)("h2",{id:"developer-quick-start"},"Developer Quick Start"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Looking to make a contribution? Make sure to checkout out our contributing guide.")),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/fork"},"forking")," the main repository, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<your account>/docusaurus-openapi-docs.git\ncd docusaurus-openapi-docs\nyarn\nyarn build-packages\nyarn watch:demo\n")),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"Special thanks to @bourdakos1 (Nick Bourdakos), the author of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloud-annotations/cloud-annotations"},"docusaurus-openapi"),", which this project is heavily based on."),(0,i.kt)("p",null,"For more insight into why we decided to completely fork see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/pull/47"},"#47")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("a",{href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/graphs/contributors"},(0,i.kt)("img",{src:"https://contrib.rocks/image?repo=PaloAltoNetworks/docusaurus-openapi-docs"})),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/main/SUPPORT.md"},"SUPPORT.md")," for details on how to get support for this project."),(0,i.kt)("h2",{id:"wheres-the-try-it-feature"},'Where\'s the "Try It" feature?'),(0,i.kt)("p",null,'You may have noticed that our plugin does not include a "try it" feature for generating and sending API requests from the browser. Although we recognize the utility of such a feature, we decided it would go against security best practices to encourage sharing API keys/tokens with the browser without proper safeguards in place (e.g. session authentication, OpenID, short-lived tokens, etc.).'),(0,i.kt)("p",null,"That said, we might one day revisit this use case if we can engineer a safer way to enable it."))}u.isMDXComponent=!0}}]);