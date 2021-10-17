(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{398:function(e,t,s){"use strict";s.r(t);var a=s(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("!!!")]),e._v(" "),s("p",[e._v("This document has "),s("strong",[e._v("moved")]),e._v(".")]),e._v(" "),s("p",[e._v("You'll now find information like this in the "),s("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),s("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),s("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),s("p",[e._v("!!!")]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"graphsync-known-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphsync-known-extensions"}},[e._v("#")]),e._v(" Graphsync: Known Extensions")]),e._v(" "),s("h3",{attrs:{id:"do-not-send-cids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#do-not-send-cids"}},[e._v("#")]),e._v(" Do Not Send CIDs")]),e._v(" "),s("p",[e._v("Extension Name: "),s("code",[e._v("graphsync/do-not-send-cids")])]),e._v(" "),s("p",[e._v("What it does:")]),e._v(" "),s("p",[e._v("Often a node may know ahead of time that it has some of the blocks needed to match a selector query in its local store already. Some reasons this might occur include:")]),e._v(" "),s("ul",[s("li",[e._v("a previous request was interrupted")]),e._v(" "),s("li",[e._v("a previous request for a subset of the requested selector was already completed")])]),e._v(" "),s("p",[e._v("How it works:")]),e._v(" "),s("p",[e._v("When a requestor sends a request, it should send a CBOR encoded IPLD Node that is a list of CIDs it already has as the value for this extension.")]),e._v(" "),s("p",[e._v("The IPLD schema is as follows:")]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DoNotSendCids")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Cid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("The responder node will execute the selector query as it would normally. However, if it supports the extension, when the selector query passes over any blocks that have a cid from the DoNotSend list, the responder will not send that block back, knowing ahead of time the requestor already has it. The responder does not send a value back in the response for this extension.")]),e._v(" "),s("h3",{attrs:{id:"response-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-metadata"}},[e._v("#")]),e._v(" Response Metadata")]),e._v(" "),s("p",[e._v("Extension Name: "),s("code",[e._v("graphsync/response-metadata")])]),e._v(" "),s("p",[e._v("What it does:")]),e._v(" "),s("p",[e._v("Response metadata provides information about the response to help the requestor more efficiently verify that the blocks sent back from the responder are valid for the requested IPLD selector. It contains information about the CIDs the responder traversed, in order, during the course of performing the selector query, and whether or not the corresponding block was present in its local block store. Telling the requestor immediately that the query passed over a block the responder did not have allows the requestor to advance its local query, and return a separate error for that particular block.")]),e._v(" "),s("p",[e._v("How it works:")]),e._v(" "),s("p",[e._v('When a requestor node sends a request, it should include the "graphsync/response-metadata" key with an CBOR-encoded IPLD encoded boolean value of true to request metadata.')]),e._v(" "),s("p",[e._v("When the responder sends responses, it should include the key with a CBOR-encoded IPLD node of the format:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cidabcdef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"blockPresent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"link"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"abcdedf443"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"blockPresent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("or in IPLD Schema:")]),e._v(" "),s("div",{staticClass:"language-ipldsch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[s("code",[s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LinkMetadata")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  link Cid\n  blockPresent Bool\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token typedef"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ResponseMetadata")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("LinkMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);