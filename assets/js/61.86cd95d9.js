(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{329:function(t,a,s){"use strict";s.r(a);var e=s(13),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("!!!")]),t._v(" "),s("p",[t._v("This document has "),s("strong",[t._v("moved")]),t._v(".")]),t._v(" "),s("p",[t._v("You'll now find information like this in the "),s("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ipld/ipld"),s("OutboundLink")],1),t._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),t._v(" "),s("p",[t._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),t._v(" "),s("p",[t._v("!!!")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"new-dag-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-dag-json"}},[t._v("#")]),t._v(" New DAG-JSON")]),t._v(" "),s("p",[t._v("This exploration report was originally "),s("a",{attrs:{href:"https://github.com/ipld/specs/pull/129",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pull Requst 129"),s("OutboundLink")],1),t._v(". It got converted "),s("a",{attrs:{href:"https://github.com/vmx/export_issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("via script"),s("OutboundLink")],1),t._v(" into an exploration report in order to preserve all the useful information it contains.")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_129-proposal-new-version-of-dag-json-open"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_129-proposal-new-version-of-dag-json-open"}},[t._v("#")]),t._v(" #129: Proposal: new version of dag-json (open)")]),t._v(" "),s("p",[t._v("Opened 2019-06-11T03:53:16Z by mikeal")]),t._v(" "),s("p",[t._v("This spec change would resolve the outstanding issue of "),s("code",[t._v("dag-json")]),t._v(" not being able to represent the “/“ key.")]),t._v(" "),s("p",[t._v("Since “/“ is already reserved, we use that key for the version definition, which makes this new version backwards compatible with all of the existing "),s("code",[t._v("dag-json")]),t._v(" data.")]),t._v(" "),s("p",[t._v("This change would also set up "),s("code",[t._v("dag-json")]),t._v(" to store data outside of the actual node data, which could be used similar to how tags are used in cbor or for something like https://github.com/ipld/js-generics/issues/3")]),t._v(" "),s("h2",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" Files")]),t._v(" "),s("p",[s("code",[t._v("block-layer/codecs/DAG-JSON.md")])]),t._v(" "),s("h1",{attrs:{id:"specification-dag-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification-dag-json"}},[t._v("#")]),t._v(" Specification: DAG-JSON")]),t._v(" "),s("p",[s("strong",[t._v("Status: Descriptive - Final")])]),t._v(" "),s("p",[t._v("DAG-JSON supports the full "),s("RouterLink",{attrs:{to:"/design/history/data-model-layer/data-model.html"}},[t._v("IPLD Data Model")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" Format")]),t._v(" "),s("h3",{attrs:{id:"simple-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-types"}},[t._v("#")]),t._v(" Simple Types")]),t._v(" "),s("p",[t._v("All simple types except binary are supported natively by JSON.")]),t._v(" "),s("p",[t._v("Contrary to popular belief, JSON as a format supports Big Integers. It's only\nJavaScript itself that has trouble with them. This means JS implementations\nof "),s("code",[t._v("dag-json")]),t._v(" can't use the native JSON parser and serializer.")]),t._v(" "),s("h3",{attrs:{id:"version-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-0"}},[t._v("#")]),t._v(" Version 0")]),t._v(" "),s("p",[t._v("This is an old version of "),s("code",[t._v("dag-json")]),t._v(" that reserved the "),s("code",[t._v('"/"')]),t._v(" key in order to\nrepresent binary and link data types.")]),t._v(" "),s("h4",{attrs:{id:"binary-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-type"}},[t._v("#")]),t._v(" Binary Type")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"base64"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"link-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-type"}},[t._v("#")]),t._v(" Link Type")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* base encoded CID */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"version-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version-1"}},[t._v("#")]),t._v(" Version 1")]),t._v(" "),s("h4",{attrs:{id:"format-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format-2"}},[t._v("#")]),t._v(" Format")]),t._v(" "),s("p",[t._v("The internal data format is valid JSON but is "),s("strong",[t._v("NOT")]),t._v(" identical to the decoded\nnode data codecs produce.")]),t._v(" "),s("blockquote",[s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t10-33-10z-daviddias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t10-33-10z-daviddias"}},[t._v("#")]),t._v(" (2019-06-11T10:33:10Z) daviddias:")]),t._v(" "),s("p",[t._v("I do not understand why this is necessary. Is there a place with the rationale to make JSON not JSON?")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t20-16-25z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t20-16-25z-mikeal"}},[t._v("#")]),t._v(" (2019-06-11T20:16:25Z) mikeal:")]),t._v(" "),s("p",[t._v("Right now, we’re using a reserved key, "),s("code",[t._v("”/“")]),t._v(", for encoding links and binary. Several people think that key reservation is highly problematic because it means there are certain data sets you just can encode.")]),t._v(" "),s("p",[t._v("This change would fix that changing the internal block format. The format would *"),s("em",[t._v("still")]),t._v(" be valid JSON, it just wouldn’t have as close of a 1-to-1 match with the decoded form of the data.")]),t._v(" "),s("p",[t._v("However, this change may not be worth it. This PR is to show that we have a solution to the reserved key issue and that is what it would take to fix it.")])]),t._v(" "),s("p",[t._v("Example internal format:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"_"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t11-13-53z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t11-13-53z-vmx"}},[t._v("#")]),t._v(" (2019-06-11T11:13:53Z) vmx:")]),t._v(" "),s("p",[t._v("Wouldn't it be simpler to just add a field called "),s("code",[t._v("version")]),t._v(" and move "),s("code",[t._v("meta")]),t._v(" and "),s("code",[t._v("data")]),t._v(" to the top-level?")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t20-17-34z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t20-17-34z-mikeal"}},[t._v("#")]),t._v(" (2019-06-11T20:17:34Z) mikeal:")]),t._v(" "),s("p",[t._v("“meta” and “data” "),s("em",[t._v("are")]),t._v(" top level. using “_” was just to save space but we can do whatever we want.")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t08-23-03z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t08-23-03z-vmx"}},[t._v("#")]),t._v(" (2019-06-12T08:23:03Z) vmx:")]),t._v(" "),s("p",[t._v("Oh, sorry I missed that they are top-level.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"hello"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"obj"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"array"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t11-10-07z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t11-10-07z-vmx"}},[t._v("#")]),t._v(" (2019-06-11T11:10:07Z) vmx:")]),t._v(" "),s("p",[t._v("So those "),s("code",[t._v("[0, 0]")]),t._v(" are placeholders? So if you want to encode "),s("code",[t._v('[CID, "some string"]')]),t._v(" it would be "),s("code",[t._v('[0, "some string"]')]),t._v("?")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t20-16-42z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t20-16-42z-mikeal"}},[t._v("#")]),t._v(" (2019-06-11T20:16:42Z) mikeal:")]),t._v(" "),s("p",[t._v("They are just placeholders to preserve the ordering of the array.")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t08-21-54z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t08-21-54z-vmx"}},[t._v("#")]),t._v(" (2019-06-12T08:21:54Z) vmx:")]),t._v(" "),s("p",[t._v("I'd use "),s("code",[t._v("null")]),t._v(" for that, but that's a minor detail. Perhaps the example could be expended to "),s("code",[t._v('[null, "some string", null]')]),t._v(" to make it clearer that there are place holders which are mixed with actual values.")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t16-42-19z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t16-42-19z-mikeal"}},[t._v("#")]),t._v(" (2019-06-12T16:42:19Z) mikeal:")]),t._v(" "),s("p",[t._v("originally it was null but i went with 0 because null encoding is extra bytes 😕")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"meta"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base64")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dmFsdWU="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t11-16-29z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t11-16-29z-vmx"}},[t._v("#")]),t._v(" (2019-06-11T11:16:29Z) vmx:")]),t._v(" "),s("p",[t._v('I key see where those tuples come from. Why not using an "overlay object" with proper nesting as you did in your other dag-json experiment?')]),t._v(" "),s("p",[t._v("Is it because you could get the binary data/links without traversing a nested structure?")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t20-19-57z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t20-19-57z-mikeal"}},[t._v("#")]),t._v(" (2019-06-11T20:19:57Z) mikeal:")]),t._v(" "),s("p",[t._v("If you recall, we considered that in a "),s("code",[t._v("dag-json")]),t._v(" alternative proposal and the problem, which I think you ended up alerting me to, was how to represent sparse values in an array.")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t08-23-54z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t08-23-54z-vmx"}},[t._v("#")]),t._v(" (2019-06-12T08:23:54Z) vmx:")]),t._v(" "),s("p",[t._v("Right, that would be a lot of placeholders then.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dmFsdWU="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dmFsdWU="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("links")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obj"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Decodes to:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("blockquote",[s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t11-24-50z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t11-24-50z-vmx"}},[t._v("#")]),t._v(" (2019-06-11T11:24:50Z) vmx:")]),t._v(" "),s("p",[t._v("I would really prefer if we'd move to an Browser first approach and not using Node.js primitives:")]),t._v(" "),s("div",{staticClass:"language-JS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-11t20-21-48z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-11t20-21-48z-mikeal"}},[t._v("#")]),t._v(" (2019-06-11T20:21:48Z) mikeal:")]),t._v(" "),s("p",[t._v("it’s just not entirely clear to everyone that this does binary encoding. perhaps we should just move to psuedo-code, something like "),s("code",[t._v("Bytes(‘value’)")])]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t08-24-51z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t08-24-51z-vmx"}},[t._v("#")]),t._v(" (2019-06-12T08:24:51Z) vmx:")]),t._v(" "),s("p",[t._v("That would work for me. I just don't want to give the impression it's a Node.js Buffer.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[t._v("#")]),t._v(" Comments")]),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t16-10-10z-stebalien"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t16-10-10z-stebalien"}},[t._v("#")]),t._v(" (2019-06-12T16:10:10Z) Stebalien:")]),t._v(" "),s("p",[t._v("Is the motivation "),s("em",[t._v("just")]),t._v(" to support "),s("code",[t._v("/")]),t._v(" keys? IMO, dag-json exists so users could read and write IPLD using JSON. I'm concerned this format looses that.")]),t._v(" "),s("p",[t._v("If we "),s("em",[t._v("just")]),t._v(" want to support "),s("code",[t._v("/")]),t._v(" in keys, we could use some form of escaping syntax. For full backwards compatibility, we could do something like "),s("code",[t._v('{"/": {"literal": foobar}}')]),t._v(". Alternatively, we can "),s("em",[t._v("probably")]),t._v(" allow escaping forward slash without breaking too much: "),s("code",[t._v("//")]),t._v(" -> "),s("code",[t._v("/")]),t._v(".")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t16-49-15z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t16-49-15z-mikeal"}},[t._v("#")]),t._v(" (2019-06-12T16:49:15Z) mikeal:")]),t._v(" "),s("blockquote",[s("p",[t._v("IMO, dag-json exists so users could read and write IPLD using JSON. I'm concerned this format looses that.")])]),t._v(" "),s("p",[t._v("I’m a little confused by this use case, because the "),s("code",[t._v("dag-json")]),t._v(" codec already isn’t "),s("code",[t._v("json")]),t._v(". If you want to take a block of existing "),s("code",[t._v("json")]),t._v(" data you should just use a "),s("code",[t._v("json")]),t._v(" codec (which we should implement since it would be trivial).")]),t._v(" "),s("p",[t._v("If you want to take existing JSON data and add links to it, you’re going to have to use an encoding interface anyway and all of these details are invisible.")]),t._v(" "),s("p",[t._v("Is there a case I’m missing where you want "),s("code",[t._v("dag-json")]),t._v(" instead of "),s("code",[t._v("json")]),t._v(" "),s("strong",[t._v("and")]),t._v(" you’re interacting directly with the block format?")]),t._v(" "),s("blockquote",[s("p",[t._v("Is the motivation just to support / keys?")])]),t._v(" "),s("p",[t._v("Yes, that’s the only thing we get out of this change. Using “/“ as a key will "),s("em",[t._v("still")]),t._v(" be highly problematic for anyone using paths and selectors, but this would fix the issue at the codec level.")]),t._v(" "),s("p",[t._v("I’m actually not too worried about “/“ being reserved in "),s("code",[t._v("dag-json")]),t._v(" but other people seem to be. I opened this PR to show what it would take to fix the issue, given some people are concerned.")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-12t18-57-53z-stebalien"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-12t18-57-53z-stebalien"}},[t._v("#")]),t._v(" (2019-06-12T18:57:53Z) Stebalien:")]),t._v(" "),s("blockquote",[s("p",[t._v("I’m a little confused by this use case, because the dag-json codec already isn’t json. If you want to take a block of existing json data you should just use a json codec (which we should implement since it would be trivial).")])]),t._v(" "),s("p",[t._v("dag-json wasn't designed to be 100% compatible but still mostly compatible. I agree we should have a plain JSON format for users who just want JSON but the point of "),s("em",[t._v("this")]),t._v(' format was to provide a familiar, JSON-like format that mostly "just works" (i.e., you can link up existing JSON objects).')]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-06-17t11-55-59z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-06-17t11-55-59z-vmx"}},[t._v("#")]),t._v(" (2019-06-17T11:55:59Z) vmx:")]),t._v(" "),s("p",[t._v("Another thing that might be worth keeping in mind. Having a format you can easily use as exchange format for tests: https://github.com/multiformats/rust-cid/pull/17#issuecomment-502395133")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-08-20t11-08-19z-vmx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-08-20t11-08-19z-vmx"}},[t._v("#")]),t._v(" (2019-08-20T11:08:19Z) vmx:")]),t._v(" "),s("p",[t._v("@mikeal We decided to put this into design history, but after having a closer look  I think the discussion can be easily be summed up. Instead of having it archived automatically I suggest that we create a proper exploration report like https://github.com/ipld/specs/blob/035683c97d0280de5e2d490822d63ad618a8acab/design/history/exploration-reports/2019.06-unixfsv2-spike-01.md. @mikeal if you think it's worth having it there, could you please create a new PR with that report?")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2019-10-02t10-27-07z-assigned-to-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-10-02t10-27-07z-assigned-to-mikeal"}},[t._v("#")]),t._v(" (2019-10-02T10:27:07Z) Assigned to mikeal")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_2020-10-08t21-19-39z-mikeal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2020-10-08t21-19-39z-mikeal"}},[t._v("#")]),t._v(" (2020-10-08T21:19:39Z) mikeal:")]),t._v(" "),s("p",[t._v("Closing as this was mostly informational. @vmx will use his script to create an exploration report for this.")])])}),[],!1,null,null,null);a.default=r.exports}}]);