(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{397:function(e,t,s){"use strict";s.r(t);var a=s(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("!!!")]),e._v(" "),s("p",[e._v("This document has "),s("strong",[e._v("moved")]),e._v(".")]),e._v(" "),s("p",[e._v("You'll now find information like this in the "),s("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),s("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),s("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),s("p",[e._v("!!!")]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"graphsync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphsync"}},[e._v("#")]),e._v(" Graphsync")]),e._v(" "),s("p",[s("strong",[e._v("Status: Prescriptive - Draft")])]),e._v(" "),s("p",[e._v("A protocol to synchronize graphs across peers.")]),e._v(" "),s("p",[e._v("See also "),s("RouterLink",{attrs:{to:"/block-layer/IPLD.html"}},[e._v("ipld")]),e._v(", "),s("RouterLink",{attrs:{to:"/selectors/selectors.html"}},[e._v("IPLD Selectors")])],1),e._v(" "),s("h2",{attrs:{id:"meta-status-of-this-doc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-status-of-this-doc"}},[e._v("#")]),e._v(" [Meta: Status of this doc]")]),e._v(" "),s("ul",[s("li",[e._v("This was written around 2018-10-16 ("),s("a",{attrs:{href:"https://drive.google.com/file/d/1NbbVxZQFKXwW6mdodxgTaftsI8eID-c1/view",target:"_blank",rel:"noopener noreferrer"}},[e._v("video presentation"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("li",[e._v("This document is unfortunately far from complete. 😦 I want to finish this by EOQ.")]),e._v(" "),s("li",[e._v("But this document provides enough information for an implementation to be made by someone who has already implemented bitswap (or understands it well).")]),e._v(" "),s("li",[e._v("It relies heavily on an understanding of bitswap as it is now. It likely won't be useful to people without a good understanding of how Bitswap works at the moment.")]),e._v(" "),s("li",[e._v("This requires IPLD Selectors to exist and be implemented.")])]),e._v(" "),s("h2",{attrs:{id:"concepts-and-glossary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepts-and-glossary"}},[e._v("#")]),e._v(" Concepts and Glossary")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("peer")]),e._v(" - a program or process participating in the graphsync protocol. It can connect to other peers.")]),e._v(" "),s("li",[s("code",[e._v("graph")]),e._v(" - an authenticated directed acyclic graph (DAG) of content. an IPLD dag. consists of nodes with hash (content addressed, authenticated) links to other nodes. ($$ G $$)")]),e._v(" "),s("li",[s("code",[e._v("dag")]),e._v(" - a directed acyclic graph. For our purposes, our DAGs are all IPLD (connected by hash links, authenticated, content addressed, etc.)")]),e._v(" "),s("li",[s("code",[e._v("selector")]),e._v(" - an expression that identifies a specific subset of a graph.  ($$ S(G) \\subset G $$)")]),e._v(" "),s("li",[s("code",[e._v("selector language")]),e._v(" - the language defining a family of selectors")]),e._v(" "),s("li",[s("code",[e._v("request")]),e._v(" - a request for content from one "),s("code",[e._v("peer")]),e._v(" to another. This is similar to HTTP, RPC, or API requests.")]),e._v(" "),s("li",[s("code",[e._v("response")]),e._v(" - the content sent from "),s("code",[e._v("responder")]),e._v(" to "),s("code",[e._v("requester")]),e._v(" fulfilling a "),s("code",[e._v("request")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("requester")]),e._v(" - the peer which initiates a "),s("code",[e._v("request")]),e._v(" (wants content).")]),e._v(" "),s("li",[s("code",[e._v("responder")]),e._v(" - the peer receiving a "),s("code",[e._v("request")]),e._v(", and providing content in a "),s("code",[e._v("response")]),e._v(" (provides content).")]),e._v(" "),s("li",[s("code",[e._v("request process")]),e._v(" - a request and its fulfillment is a sub-process, a procedure call across peers with the following phases (at a high level):\n"),s("ul",[s("li",[e._v("(1) The "),s("code",[e._v("requester")]),e._v(" initiates by sending a request message ("),s("code",[e._v("req")]),e._v(") to the "),s("code",[e._v("responder")]),e._v(", specifying desired content and other request parameters.")]),e._v(" "),s("li",[e._v("(2) Upon receiving a request message, the "),s("code",[e._v("responder")]),e._v(" adds the request to a set of active requests, and starts processing it.")]),e._v(" "),s("li",[e._v("(3) The "),s("code",[e._v("responder")]),e._v(" fulfills the request by sending content to the "),s("code",[e._v("requester")]),e._v(" (the "),s("code",[e._v("response")]),e._v(") .")]),e._v(" "),s("li",[e._v("(4) The "),s("code",[e._v("responder")]),e._v(" and "),s("code",[e._v("requester")]),e._v(" can terminate the request process at any time.")]),e._v(" "),s("li",[e._v("Notes:\n"),s("ul",[s("li",[e._v("We are explicitly avoiding the "),s("code",[e._v("client-server")]),e._v(" terminology to make it clear that "),s("code",[e._v("requester")]),e._v(" and "),s("code",[e._v("responder")]),e._v(' are "roles" that any peer might play, and to avoid failing in the two-sided client-server model of the web..')]),e._v(" "),s("li",[s("code",[e._v("requests")]),e._v(" may be short or long-lived -- requests may be as short as microseconds or last indefinitely.")])])])])]),e._v(" "),s("li",[s("code",[e._v("priority")]),e._v(" - a numeric label associated with a "),s("code",[e._v("request")]),e._v(" implying the relative ordering of importance for requests. This is a "),s("code",[e._v("requester's")]),e._v(" way of expressing to a "),s("code",[e._v("responder")]),e._v(" the order in which the "),s("code",[e._v("requester")]),e._v(" wishes the "),s("code",[e._v("requests")]),e._v(" to be fulfilled. The "),s("code",[e._v("responder")]),e._v(" SHOULD respect "),s("code",[e._v("priority")]),e._v(", though may return "),s("code",[e._v("responses")]),e._v(" in any order.")])]),e._v(" "),s("h2",{attrs:{id:"interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),s("p",[e._v("This is a listing of the data structures and process interfaces involved in the graphsync protocol. For simplicity, we use Go type notation, though of course graphsync is language agnostic.")]),e._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Graphsync "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req\tRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Request "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    Selector Selector\n    Priority Priority      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// optional")]),e._v("\n    Expires  time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Duration "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// optional")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" GraphSyncNet "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("SendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("m Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("RecvMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("m Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"network-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-messages"}},[e._v("#")]),e._v(" Network Messages")]),e._v(" "),s("div",{staticClass:"language-protobuf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-protobuf"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GraphsyncMessage")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Request")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int32")]),e._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// unique id set on the requester side")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// a CID for the root node in the query")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" selector "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ipld selector to retrieve")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token map class-name"}},[e._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// side channel information")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int32")]),e._v(" priority "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the priority (normalized). default to 1")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),e._v("  cancel "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// whether this cancels a request")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),e._v("  update "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// whether this is an update to an in progress request")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Response")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int32")]),e._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the request id")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int32")]),e._v(" status "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// a status code.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token map class-name"}},[e._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" extensions "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// side channel information")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("message")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Block")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// CID prefix (cid version, multicodec and multihash prefix (type + length)")]),e._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// the actual data included in this message")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bool")]),e._v(" completeRequestList    "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This request list includes *all* requests, replacing outstanding requests.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("Request")]),e._v("  requests  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The list of requests.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("Response")]),e._v(" responses "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The list of responses.")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("repeated")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[e._v("Block")]),e._v("    data      "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Blocks related to the responses")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extensions"}},[e._v("#")]),e._v(" Extensions")]),e._v(" "),s("p",[e._v("The Graphsync protocol is extensible. A graphsync request and a graphsync response contain an "),s("code",[e._v("extensions")]),e._v(" field, which is a map type. Each key of the extensions field specifies the name of the extension, while the value is data (serialized as bytes) relevant to that extension.")]),e._v(" "),s("p",[e._v("Extensions help make Graphsync operate more efficiently, or provide a mechanism for exchanging side channel information for other protocols. An implementation can choose to support one or more extensions, but it does not have to.")]),e._v(" "),s("p",[e._v("A list of well known extensions is found "),s("RouterLink",{attrs:{to:"/block-layer/graphsync/known_extensions.html"}},[e._v("here")])],1),e._v(" "),s("h3",{attrs:{id:"updating-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-requests"}},[e._v("#")]),e._v(" Updating requests")]),e._v(" "),s("p",[e._v("A client may send an updated version of a request.")]),e._v(" "),s("p",[e._v("An update contains ONLY extension data, which the responder can use to modify an in progress request. For example, if a responder supports the Do Not Send CIDs extension, it could choose to also accept an update to this list and ignore CIDs encountered later. It is not possible to modify the original root and selector of a request through this mechanism. If this is what is needed, you should cancel the request and send a new one.")]),e._v(" "),s("p",[e._v("The update mechanism in conjunction with the paused response code can also be used to support incremental payment protocols.")]),e._v(" "),s("h3",{attrs:{id:"response-status-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-status-codes"}},[e._v("#")]),e._v(" Response Status Codes")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# info - partial\n10   Request Acknowledged. Working on it.\n11   Additional Peers. PeerIDs in extra.\n12   Not enough vespene gas ($)\n13   Other Protocol - info in extra.\n14   Partial Response w/ metadata, may include blocks\n15   Request Paused, pending update, see extensions for info\n\n# success - terminal\n20   Request Completed, full content.\n21   Request Completed, partial content.\n\n# error - terminal\n30   Request Rejected. NOT working on it.\n31   Request failed, busy, try again later (getting dosed. backoff in extra).\n32   Request failed, for unknown reason. Extra may have more info.\n33   Request failed, for legal reasons.\n34   Request failed, content not found.\n")])])]),s("h2",{attrs:{id:"example-use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-use-cases"}},[e._v("#")]),e._v(" Example Use Cases")]),e._v(" "),s("h3",{attrs:{id:"syncing-a-blockchain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syncing-a-blockchain"}},[e._v("#")]),e._v(" Syncing a Blockchain")]),e._v(" "),s("p",[e._v("Requests we would like to make for this:")]),e._v(" "),s("ul",[s("li",[e._v("Give me "),s("code",[e._v("<hash>/Parent")]),e._v(", "),s("code",[e._v("<hash>/Parent/Parent")]),e._v(" and so on, up to a depth of "),s("code",[e._v("N")]),e._v(".")]),e._v(" "),s("li",[e._v("Give me nodes that exist in "),s("code",[e._v("<hash1>")]),e._v(" but not "),s("code",[e._v("<hash2>")]),e._v(" "),s("ul",[s("li",[e._v('In addition to this, the ability to say "Give me some range of (the above query) is very important". For example: "Give me the second 1/3 of the nodes that are children of '),s("code",[e._v("<hash1>")]),e._v(" but not "),s("code",[e._v("<hash2>")]),e._v('"')])])])]),e._v(" "),s("h3",{attrs:{id:"downloading-package-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloading-package-dependencies"}},[e._v("#")]),e._v(" Downloading Package Dependencies")]),e._v(" "),s("ul",[s("li",[e._v("Give me everything within "),s("code",[e._v("<hash>/foo/v1.0.0")])])]),e._v(" "),s("h3",{attrs:{id:"loading-content-from-deep-within-a-giant-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-content-from-deep-within-a-giant-dataset"}},[e._v("#")]),e._v(" Loading content from deep within a giant dataset")]),e._v(" "),s("ul",[s("li",[e._v("Give me the nodes for the path "),s("code",[e._v("<hash>/a/b/c/d/e/f/g")])])]),e._v(" "),s("h3",{attrs:{id:"loading-a-large-video-optimizing-for-playback-and-seek"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-a-large-video-optimizing-for-playback-and-seek"}},[e._v("#")]),e._v(" Loading a large video optimizing for playback and seek")]),e._v(" "),s("ul",[s("li",[e._v("First, give me the first few data blocks "),s("code",[e._v("<hash>/data/*")])]),e._v(" "),s("li",[e._v("Second, give me all of the tree except for leaves "),s("code",[e._v("<hash>/**/!")])]),e._v(" "),s("li",[e._v("Third, give me everything else. "),s("code",[e._v("<hash>/**/*")])])]),e._v(" "),s("h3",{attrs:{id:"looking-up-an-entry-in-a-sharded-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#looking-up-an-entry-in-a-sharded-directory"}},[e._v("#")]),e._v(" Looking up an entry in a sharded directory")]),e._v(" "),s("p",[e._v("Given a directory entry I think "),s("em",[e._v("might")]),e._v(" exist in a sharded directory, I should be able to specify the speculative hamt path for that item, and get back as much of that path that exists. For example:")]),e._v(" "),s("p",[e._v('"Give me '),s("code",[e._v("<shardhash>/AB/F5/3E/B7/11/C3/B9")]),e._v('"')]),e._v(" "),s("p",[e._v("And if the item I want is actually just at "),s("code",[e._v("/AB/F5/3E")]),e._v(", I should get that back.")]),e._v(" "),s("h2",{attrs:{id:"other-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[e._v("#")]),e._v(" Other notes")]),e._v(" "),s("p",[s("strong",[e._v("Cost to the responder.")]),e._v(" The graphsync protocol will require a non-zero additional overhead of CPU and memory. This cost must be very clearly articulated, and accounted for, otherwise we will end up opening ugly DoS vectors")])])}),[],!1,null,null,null);t.default=n.exports}}]);