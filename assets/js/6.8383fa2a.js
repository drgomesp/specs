(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{375:function(t,e,a){t.exports=a.p+"assets/img/what_is_ipld.e3a8f46c.png"},386:function(t,e,a){"use strict";a.r(e);var o=a(46),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("!!!")]),t._v(" "),o("p",[t._v("This document has "),o("strong",[t._v("moved")]),t._v(".")]),t._v(" "),o("p",[t._v("You'll now find information like this in the "),o("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipld/ipld"),o("OutboundLink")],1),t._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),t._v(" "),o("p",[t._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),t._v(" "),o("p",[t._v("!!!")]),t._v(" "),o("hr"),t._v(" "),o("h1",{attrs:{id:"ipld-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipld-specifications"}},[t._v("#")]),t._v(" IPLD Specifications")]),t._v(" "),o("p",[t._v("The goal of IPLD is to enable decentralized data-structures that are universally addressable and linkable which in turn will enable more decentralized applications.\nThese data-structures allow us to do for data what URLs and links did for HTML web pages.\nRead more about the principles that are guiding the ongoing development of IPLD in "),o("strong",[o("RouterLink",{attrs:{to:"/FOUNDATIONS.html"}},[t._v("IPLD Foundational Principles")])],1),t._v(".")]),t._v(" "),o("p",[t._v("IPLD is not a single specification, it is a set of specifications.\nMany of the specifications in IPLD are inter-dependent.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(375),alt:"What is IPLD?"}})]),t._v(" "),o("h2",{attrs:{id:"ipld-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipld-blocks"}},[t._v("#")]),t._v(" IPLD Blocks")]),t._v(" "),o("p",[t._v("The block layer encompasses all content addressed block formats and specifies how blocks are addressed, how they self-describe their codec for encoding/decoding, and how blocks link between each other.")]),t._v(" "),o("p",[t._v("IPLD blocks alone do not define data structures or types, although many codecs may convert these formats into native types, there are no type requirements or assurances about types at the block layer.")]),t._v(" "),o("p",[o("strong",[t._v("Documents:")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th"),t._v(" "),o("th")])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/block.html"}},[t._v("Concept: Block")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/block.html"}},[t._v("block-layer/block.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/concepts/content-addressability.html"}},[t._v("Concept: Content Addressability")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/concepts/content-addressability.html"}},[t._v("concepts/content-addressability.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/multihash.html"}},[t._v("Concept: Multihash")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/multihash.html"}},[t._v("block-layer/multihash.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/content-addressable-archives.html"}},[t._v("Specification: Content Addressable aRchives (CAR / .car)")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/content-addressable-archives.html"}},[t._v("block-layer/content-addressable-archives.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/graphsync/graphsync.html"}},[t._v("Specification: Graphsync")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/graphsync/graphsync.html"}},[t._v("block-layer/graphsync/graphsync.md")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"ipld-codecs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipld-codecs"}},[t._v("#")]),t._v(" IPLD Codecs")]),t._v(" "),o("p",[t._v("Codecs serve as an intermediary between raw bytes and the IPLD Data Model. They determine how data is converted to and from the Data Model.")]),t._v(" "),o("p",[t._v("Codecs vary in the completeness in which they can represent the IPLD Data Model. "),o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-cbor.html"}},[t._v("DAG-CBOR")]),t._v(" and "),o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-json.html"}},[t._v("DAG-JSON")]),t._v(" are native IPLD codecs that currently enable the most complete form of the Data Model. Their base codecs, CBOR and JSON, are also valid IPLD codecs, are unable to represent some Data Model kinds on their own, in particular the Link (CID) kind (and Bytes for JSON), so DAG-JSON and DAG-CBOR provide mechanisms to represent these kinds.")],1),t._v(" "),o("p",[t._v("IPLD can operate across a broad range of content-addressable codecs, including Git, Ethereum, Bitcoin, and more. "),o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-pb.html"}},[t._v("DAG-PB")]),t._v(" is a legacy IPLD format that is still actively used for representing file data for "),o("a",{attrs:{href:"https://ipfs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPFS"),o("OutboundLink")],1),t._v(".")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th"),t._v(" "),o("th")])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/serialization-and-formats.html"}},[t._v("Concept: Serialization and Formats")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/serialization-and-formats.html"}},[t._v("block-layer/serialization-and-formats.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/CID.html"}},[t._v("Specification: CIDs")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/CID.html"}},[t._v("block-layer/CID.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-cbor.html"}},[t._v("Specification: DAG-CBOR")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-cbor.html"}},[t._v("block-layer/codecs/dag-cbor.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-json.html"}},[t._v("Specification: DAG-JSON")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-json.html"}},[t._v("block-layer/codecs/dag-json.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-pb.html"}},[t._v("Specification: DAG-PB")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-pb.html"}},[t._v("block-layer/codecs/dag-pb.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-jose.html"}},[t._v("Specification: DAG-JOSE")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/block-layer/codecs/dag-jose.html"}},[t._v("block-layer/codecs/dag-jose.md")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"the-ipld-data-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-ipld-data-model"}},[t._v("#")]),t._v(" The IPLD Data Model")]),t._v(" "),o("p",[t._v("The Data Model describes a set of base required types to be implemented by a subset of IPLD codecs.")]),t._v(" "),o("p",[t._v("With these basic types authors can create various single-block data structures which can be read with predictable paths and selectors.")]),t._v(" "),o("p",[t._v("With just the data model, several data structures can be authored and put into a single block.\nThese data  structures can also link to one another, but a "),o("em",[t._v("single")]),t._v(" collection (Map or List) cannot be spread across many blocks with only the Data Model.")]),t._v(" "),o("p",[t._v("Since different systems and transports may impose block size limits (often 2mb or more) in order to control memory usage, larger collections need to be sharded over many blocks at the Schema Layer.")]),t._v(" "),o("p",[o("strong",[t._v("Documents:")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th"),t._v(" "),o("th")])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[t._v("Specification: IPLD Data Model")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[t._v("data-model-layer/data-model.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/data-model-layer/paths.html"}},[t._v("Specification: IPLD Paths")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/data-model-layer/paths.html"}},[t._v("data-model-layer/paths.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/selectors/selectors.html"}},[t._v("Specification: IPLD Selectors")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/selectors/selectors.html"}},[t._v("selectors/selectors.md")])],1)])])]),t._v(" "),o("h3",{attrs:{id:"schemas-and-advanced-data-layouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#schemas-and-advanced-data-layouts"}},[t._v("#")]),t._v(" Schemas and Advanced Data Layouts")]),t._v(" "),o("p",[t._v("IPLD Schemas define a mapping from the Data Model to instantiated data structures comprising complex layouts.\nSchemas add the ability to extend the IPLD Data Model to the wide variety of types required for typical programmatic interaction with a data source without the need to implement custom translation abstractions.")]),t._v(" "),o("p",[t._v("Schemas will also serve as an enabling layer for complex multi-block data structures via Advanced Data Layouts by providing stability and consistency of data model use within individual blocks and defined interaction points for the logic required for building and interacting with advanced data layouts, such as multi-block Maps, Lists and Sets.")]),t._v(" "),o("p",[o("strong",[t._v("Documents:")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th"),t._v(" "),o("th")])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/data-structures/multiblock-collections.html"}},[t._v("Concept: IPLD Multi-block Collections")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/data-structures/multiblock-collections.html"}},[t._v("data-structures/multiblock-collections.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/schemas/"}},[t._v("Specification: IPLD Schemas")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/schemas/"}},[t._v("schemas/README.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/data-structures/hashmap.html"}},[t._v("Specification: HashMap")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/data-structures/hashmap.html"}},[t._v("data-structures/hashmap.md")])],1)]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/data-structures/flexible-byte-layout.html"}},[t._v("Specification: FlexibleByteLayout")])],1),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/data-structures/flexible-byte-layout.html"}},[t._v("data-structures/flexible-byte-layout.md")])],1)])])]),t._v(" "),o("h2",{attrs:{id:"specification-document-status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specification-document-status"}},[t._v("#")]),t._v(" Specification document status")]),t._v(" "),o("p",[t._v("Specification documents in this repository fit into one of two categories and have one of three possible statuses:")]),t._v(" "),o("ul",[o("li",[t._v("Prescriptive\n"),o("ul",[o("li",[t._v("Exploratory")]),t._v(" "),o("li",[t._v("Draft")]),t._v(" "),o("li",[t._v("Final")])])]),t._v(" "),o("li",[t._v("Descriptive\n"),o("ul",[o("li",[t._v("Draft")]),t._v(" "),o("li",[t._v("Final")])])])]),t._v(" "),o("p",[o("strong",[t._v("Prescriptive")]),t._v(" specifications are intended to describe future  implementations or, in some cases, changes to existing implementations.")]),t._v(" "),o("p",[o("strong",[t._v("Descriptive")]),t._v(" specifications describe existing behavior.\nIn many cases these specifications are not intended to drive new implementations and are only written to understand existing behaviors.")]),t._v(" "),o("p",[t._v('Documents labelled "Specification" in this repository will also be labelled with a descriptor that indicates the category and status.\ne.g. '),o("em",[t._v('"Status: Prescriptive - Draft"')]),t._v(" or "),o("em",[t._v('"Status: Descriptive - Final"')]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"design-documentation-library-recommendations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#design-documentation-library-recommendations"}},[t._v("#")]),t._v(" Design documentation & Library recommendations")]),t._v(" "),o("p",[t._v("Included in this repository are some documents which chronicle our process in developing these specs,\nas well as some documents which are advisory to library authors (but not specifications, per se):")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/design"}},[t._v("design/...")]),t._v(" -- gathers all such documents")]),t._v(" "),o("li",[o("a",{attrs:{href:"/design/history"}},[t._v("design/history/...")]),t._v(" -- gathers research work and pre-spec content and notes")]),t._v(" "),o("li",[o("a",{attrs:{href:"/design/libraries"}},[t._v("design/libraries/...")]),t._v(" -- gathers recommendations for library authors")])]),t._v(" "),o("p",[t._v("These documents may be useful to read for those who want to participate more deeply in the\ndesign and specification processes (as well as implementation processes!) of IPLD.")]),t._v(" "),o("h2",{attrs:{id:"contributing-discussion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contributing-discussion"}},[t._v("#")]),t._v(" Contributing & Discussion")]),t._v(" "),o("p",[t._v("Suggestions, contributions, criticisms are welcome.")]),t._v(" "),o("p",[t._v("Discussion of specifications happens in "),o("a",{attrs:{href:"https://github.com/ipld/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository's issues"),o("OutboundLink")],1),t._v(" or via pull request. Discussion of IPLD more generally happens in the "),o("a",{attrs:{href:"https://github.com/ipld/ipld/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD repository"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Check out our "),o("a",{attrs:{href:"https://github.com/ipld/ipld/blob/master/contributing.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("contributing document"),o("OutboundLink")],1),t._v(" for more information on how we work, and about contributing in general.\nPlease be aware that all interactions related to IPLD are subject to the IPFS "),o("a",{attrs:{href:"https://github.com/ipfs/community/blob/master/code-of-conduct.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code of Conduct"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"governance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[t._v("#")]),t._v(" Governance")]),t._v(" "),o("p",[t._v("All changes to documents must take place via pull request.")]),t._v(" "),o("p",[t._v("Pull requests are governed by different rules depending on the document type and status of that document:")]),t._v(" "),o("p",[t._v("Specifications:")]),t._v(" "),o("ul",[o("li",[t._v("Exploratory Stage\n"),o("ul",[o("li",[t._v("Authors can merge changes into exploratory specifications at their own discretion")]),t._v(" "),o("li",[t._v("Exploratory specifications live in the "),o("code",[t._v("design")]),t._v(" directory until they reach the draft stage. Specs\nnames should include an alternative friendly naming convention ("),o("code",[t._v("-A")]),t._v(", "),o("code",[t._v("-B")]),t._v(", etc) while in this stage.")])])]),t._v(" "),o("li",[t._v("Draft Stage\n"),o("ul",[o("li",[t._v("Authors must attempt to reach a consensus between all active participants before a merge")]),t._v(" "),o("li",[t._v("If no objections are raised in a 48 hours period changes can be merged")]),t._v(" "),o("li",[t._v("If objections cannot be resolved the change can be voted on by the IPLD Team")])])]),t._v(" "),o("li",[t._v("Final Stage\n"),o("ul",[o("li",[t._v("Improvements that have a consensus can be merged")]),t._v(" "),o("li",[t._v("Changes to behavior should not be merged unless absolutely necessary and  agreed upon by a vote of the IPLD Team")])])])]),t._v(" "),o("p",[t._v("Concepts and other documents (including README.md):")]),t._v(" "),o("ul",[o("li",[t._v("Authors must attempt to reach a consensus between all active participants before a merge")]),t._v(" "),o("li",[t._v("If no objections are raised in a 48 hours period changes can be merged")]),t._v(" "),o("li",[t._v("If objections cannot be resolved the change can be voted on by the IPLD Team")])]),t._v(" "),o("h2",{attrs:{id:"glossary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("DAG")]),t._v(": Short for "),o("a",{attrs:{href:"https://en.m.wikipedia.org/wiki/Directed_acyclic_graph",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Directed Acyclic Graph."'),o("OutboundLink")],1),t._v("\nIt's a tree where two branches can point to the same sub-branch, but only in one direction\nso there's no possibility of recursion.")])]),t._v(" "),o("h2",{attrs:{id:"ipld-team"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ipld-team"}},[t._v("#")]),t._v(" IPLD Team")]),t._v(" "),o("p",[t._v("The IPLD Team consists of currently active IPLD developers.")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/mikeal",target:"_blank",rel:"noopener noreferrer"}},[t._v("@mikeal"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/vmx",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vmx"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/warpfork",target:"_blank",rel:"noopener noreferrer"}},[t._v("@warpfork"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/rvagg",target:"_blank",rel:"noopener noreferrer"}},[t._v("@rvagg"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/ribasushi",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ribasushi"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/mvdan",target:"_blank",rel:"noopener noreferrer"}},[t._v("@mvdan"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"license"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),o("p",[t._v("This repository is only for documents.\nAll of these are licensed under the "),o("a",{attrs:{href:"https://ipfs.io/ipfs/QmVreNvKsQmQZ83T86cWSjPu2vR3yZHGPm5jnxFuunEB9u",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC-BY-SA 3.0"),o("OutboundLink")],1),t._v(" license, © 2016 Protocol Labs Inc.")])])}),[],!1,null,null,null);e.default=r.exports}}]);