(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{385:function(e,t,n){"use strict";n.r(t);var a=n(46),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("!!!")]),e._v(" "),n("p",[e._v("This document has "),n("strong",[e._v("moved")]),e._v(".")]),e._v(" "),n("p",[e._v("You'll now find information like this in the "),n("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),n("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),n("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),n("p",[e._v("!!!")]),e._v(" "),n("hr"),e._v(" "),n("h1",{attrs:{id:"ipld-foundational-principles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ipld-foundational-principles"}},[e._v("#")]),e._v(" IPLD Foundational Principles")]),e._v(" "),n("p",[e._v("This document outlines parts of IPLD that should and should not be changed to\nensure the success of future improvements and the continuity of direction.")]),e._v(" "),n("p",[n("strong",[e._v("Definitions")])]),e._v(" "),n("ul",[n("li",[e._v("Block: A block is a chunk of an IPLD DAG, encoded in a format.\nBlocks have "),n("RouterLink",{attrs:{to:"/block-layer/CID.html"}},[e._v("CID")]),e._v("s.")],1),e._v(" "),n("li",[e._v("Node: A node is a "),n("em",[e._v("point")]),e._v(" in an IPLD DAG (map, list, number, etc.).\nMany nodes can exist encoded inside one Block.")]),e._v(" "),n("li",[e._v("Link: A link is a kind of IPLD Node that points to another IPLD Node.\nLinks are what make IPLD data a DAG rather than only a tree.\nLinks are content-addressable -- see "),n("RouterLink",{attrs:{to:"/block-layer/CID.html"}},[e._v("CID")]),e._v(".")],1),e._v(" "),n("li",[e._v("Path Segment: A path segment is a piece of information that describes a move\nfrom one Node to a directly connected child Node.  (In other words, a\nPath Segment is either a map key or a list index.)")]),e._v(" "),n("li",[e._v("Path: A path is composed of Path Segments, thereby describing a traversal\nfrom one Node to another Node somewhere deeper in the DAG.")])]),e._v(" "),n("h2",{attrs:{id:"linked"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linked"}},[e._v("#")]),e._v(" Linked")]),e._v(" "),n("p",[e._v("IPLD must support linking to any IPLD node (even if the node is in the middle of\na block). That is, IPLD must support arbitrary IPLD paths in links.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" Considering this in the context of programming languages, not\nbeing able to "),n("em",[e._v("store")]),e._v(" a pointer to a struct "),n("em",[e._v("inside")]),e._v(" of another struct would be\nseverely limiting.")]),e._v(" "),n("p",[e._v("NOTE: We don't currently support arbitrary paths but, in the context of\nprogramming, we really need to.")]),e._v(" "),n("h2",{attrs:{id:"immutable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#immutable"}},[e._v("#")]),e._v(" Immutable")]),e._v(" "),n("p",[e._v("IPLD links must be immutable. We'll likely define a mutable link spec on top of\nIPLD but there needs to be an immutable layer at the bottom.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" "),n("em",[e._v("Having")]),e._v(" an immutable layer is important for a lot of analysis,\nmemoization, type checking, etc.")]),e._v(" "),n("h2",{attrs:{id:"multicodecs-are-not-meant-to-act-as-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multicodecs-are-not-meant-to-act-as-types"}},[e._v("#")]),e._v(" Multicodecs Are Not Meant to Act As Types")]),e._v(" "),n("p",[e._v("Multicodecs are used to indicate the format of data in a Block, and thus the\ncodec which transforms that serial data into a tree of Nodes conforming to the\n"),n("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[e._v("IPLD Data Model")]),e._v(".  This is the limit of\ntheir purpose.")],1),e._v(" "),n("p",[e._v("In particular, multicodecs should not be confused with a\n"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Type_system",target:"_blank",rel:"noopener noreferrer"}},[e._v("type system"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" Since it is impossible to understand data at a "),n("em",[e._v("structural")]),e._v("\nlevel without knowing the format, we use multicodecs describe the format.\nWith this information, we handle the transformation into the IPLD Data Model.\nBeyond this, we don't want to use multicodecs further, because we should avoid\nintroducing new formats unnecessarily: "),n("em",[e._v("every")]),e._v(" IPLD implementation needs to\nsupport these new formats, and this is a burden it's preferable to minimize.")]),e._v(" "),n("h2",{attrs:{id:"no-non-local-reasoning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#no-non-local-reasoning"}},[e._v("#")]),e._v(" No Non-Local Reasoning")]),e._v(" "),n("p",[e._v("Transforming content of a Block into Nodes conforming to the IPLD\n"),n("RouterLink",{attrs:{to:"/data-model-layer/data-model.html"}},[e._v("Data Model")]),e._v(" should never require\ninterpretation in the context of anything not contained in the Block plus CID.")],1),e._v(" "),n("p",[e._v("Similarly, traversing an IPLD Node according to a Path should not require\ninterpretation in the context of anything not already contained in that Node plus Path.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" IPLD needs to be easy to reason about.  Systems which use\nnonlocal reasoning become harder to reason about, and much harder (if not\nimpossible) to compose smoothly or with predictable results; therefore we\nshould avoid this.")]),e._v(" "),n("p",[n("strong",[e._v("Negative Examples:")])]),e._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This is an example of what is NOT possible.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"baz"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("Link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../../zot"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// NOT legal: makes a non-local reference.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" bar "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("CidOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"zot"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"something"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// `./foo/baz` imagines pointing here.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// resolution through block `foo` depends on block `bar`...")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("Resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ipld/${CidOf(bar)}/foo/baz/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// meaning this would be undefined, which is why relative links are NOT allowed:")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("Resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ipld/${CidOf(foo)}/baz/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("For the same reason, IPLD links can't rely on an authority (e.g., a blockchain).")]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(' Concepts that seem similar to relative linking can still be encoded\nat the application level.  This is fine, but distinct from "IPLD Links", because\nsuch linking won\'t be interpreted by IPLD path and link resolution (e.g. they\nwon\'t get the special "link" type, and won\'t violate the constraints that the\nIPLD Data Model expresses a DAG, etc).')]),e._v(" "),n("h3",{attrs:{id:"moving-beyond-local-reasoning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#moving-beyond-local-reasoning"}},[e._v("#")]),e._v(" Moving beyond local reasoning")]),e._v(" "),n("p",[e._v('The "no non-local reasoning" rule holds at the Data Model layer.\nSome higher-level layers relax the rule.')]),e._v(" "),n("p",[e._v("For example, Advanced Data Layouts which split data across multiple blocks\ndefacto carry some logical information in mind as they wield their constituent\nblocks (jumping into a HAMT mid-way through its trie with no context is unlikely\nto make any semantic sense, for example -- even though the data can still be\nparsed in terms of the Data Model).")]),e._v(" "),n("p",[e._v("Schemas describe constraints around data and are typically applied over\na whole DAG which may span multiple Blocks, and are themselves usually\nlocated in another Block (for ease of reference by CID).  Schemas thus also\ncan be seen as using some forms of non-local reasoning.")]),e._v(" "),n("p",[e._v("Applications built on top of IPLD can also use their own contextual reasoning,\nas described earlier in the relative linking example.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation")]),e._v(": Systems like HAMTs and Schemas are important to our goals in\nhaving good tooling in the ecosystem; both of these depend on some forms of\nreasoning which take context and apply it in addition to what's available\nstrictly at the Data Model level.")]),e._v(" "),n("p",[n("strong",[e._v("Remaining true to principles")]),e._v(': though we\'re refining the rules in this section,\nthese are not contradictions of the "no non-local reasoning" rule; it\'s just\nrelaxed for these high-level systems, in that the scope of "local" can be\nunderstood more broadly.')]),e._v(" "),n("p",[e._v("Since we can always interpret block structurally (e.g., parse them at least to\nthe Data Model layer) -- even in data that's also meant to be used with\nAdvanced Data Layouts or Schemas other application logic that uses contextual\nconcepts, etc -- we can still have replication and hashing and DAG traversal\nand all the rest of the important promises of the IPLD Data Model regardless of\nthat other context, meaning these systems are purely value-add and do not\ncompromise any of the other core promises of IPLD.")]),e._v(" "),n("h2",{attrs:{id:"no-cycles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#no-cycles"}},[e._v("#")]),e._v(" No Cycles")]),e._v(" "),n("p",[e._v("IPLD links must not be cyclic, even if we add support for relative links.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")])]),e._v(" "),n("ol",[n("li",[e._v("Security: Forbidding link cycles ensures that any graph traversal terminates.\nThis makes it easier to correctly and securely implement some graph\nalgorithms, even on potentially untrusted data in a distributed system.")]),e._v(" "),n("li",[e._v("Consistency: Without complex hacks, it's impossible to create link cycles\n"),n("em",[e._v("between")]),e._v(" hash-linked blocks. Allowing link cycles on one level (e.g., in\nrelative links within a single block) but not on a larger scale (between\nblocks) is inconsistent (even though there's nothing we can do about it).")])]),e._v(" "),n("h2",{attrs:{id:"stable-pathing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stable-pathing"}},[e._v("#")]),e._v(" Stable Pathing")]),e._v(" "),n("p",[e._v("An IPLD path always means the same thing, everywhere, every time. Importantly,\nusers shouldn't be able to configure their IPLD library to change how path\nresolution works. They should be able to use alternative path resolution\nalgorithms for "),n("em",[e._v("non")]),e._v("-IPLD paths (e.g., IPFS paths) but those should be built\non top of IPLD.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" Deterministic computations on top of a IPLD need to produce the\nsame result every time.")]),e._v(" "),n("h3",{attrs:{id:"higher-level-pathing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#higher-level-pathing"}},[e._v("#")]),e._v(" Higher Level Pathing")]),e._v(" "),n("p",[e._v('The "stable pathing" rule holds at the Data Model layer.\nSome higher-level layers refine the rule.')]),e._v(" "),n("p",[e._v("For example, Advanced Data Layouts work by operating like an IPLD Node which\nconforms with the Data Model specified behaviors in every way -- except that\nthey're internally implemented in some way that maps the Node content onto\nBlocks in a more advanced way than the basic Data Model way.  This means we\ncan \"path\" across an Advanced Data Layout that acts like a map or a list as\nif it's a regular Node.  We still aim for stable pathing: however, at this\nlayer, that stability now requires a fixed understanding of the Advanced Layout\nlogic itself.")]),e._v(" "),n("p",[e._v('Schemas describe data in terms of both semantic types and a representation\nstrategy, and in some cases the semantic type information contains a name\n(such as a struct field name) even while the representation does not (such as\nwhen a struct uses "tuple" representation, causing it to be transformed into\na list rather than a map when encoded).  In these cases, we can "path" across\ndata interpreted in context of a Schema using the field names, even if at the\nData Model layer it\'s been represented as a list (and thus has indexes instead\nof map keys corresponding to the field names).  This kind of pathing can be\nstable and predictable, but (as with the Advanced Data Layouts story), it\nrequires slightly more information: holding the Schema declaration.')]),e._v(" "),n("p",[n("strong",[e._v("Motivation")]),e._v(": Different views onto data is a powerful and useful primitive.")]),e._v(" "),n("p",[e._v("More concretely, we can observe that some of the earliest examples of systems\nbuilt with IPLD's concepts immediately introduced higher-level pathing: for\nexample, IPFS's UnixFS.  Such concept of pathing, built a layer above the core\nIPLD Data Model, has provided large amounts of value to applications.\nRecognizing this, we seek to offer some components of IPLD which make it easy\nto do these kind of constructions, but in a way that's reusable, and also fits\nwell with our principles of stability and predictability.")]),e._v(" "),n("p",[n("strong",[e._v("Remaining true to principles")]),e._v(": Note that regular, core Data Model still\nmaintains stable pathing -- this is not compromised by higher level systems\nwhich use additional rules and operate with additional context!  Falling back\nto the core Data Model stable pathing is "),n("em",[e._v("always")]),e._v(" possible on any data.")]),e._v(" "),n("p",[e._v("Even in higher level pathing: we still aim for stability, predictability, and\ndeterministic outcomes.  While more contextual information is required for\nthese higher level pathing modes, all of that information is by design easy\nto immutably snapshot and address in the same ways we link other IPLD data.")]),e._v(" "),n("h2",{attrs:{id:"link-transparent-pathing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#link-transparent-pathing"}},[e._v("#")]),e._v(" Link Transparent Pathing")]),e._v(" "),n("p",[e._v("Path resolution must transparently traverse links.")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" Deduplication and composability. If links are "),n("em",[e._v("not")]),e._v(" transparent,\nprogrammers will have to either make many small objects (lots of hashing) or\ninline data into large objects (lots of duplication and copying).")]),e._v(" "),n("h2",{attrs:{id:"primitives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#primitives"}},[e._v("#")]),e._v(" Primitives")]),e._v(" "),n("p",[e._v('The "recommended" IPLD format (currently DAG-CBOR) needs to support '),n("em",[e._v("at a minimum")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("32/64 bit integers without losing information.")]),e._v(" "),n("li",[e._v("32/64 bit floats without losing information.")]),e._v(" "),n("li",[e._v("Unicode strings.")]),e._v(" "),n("li",[e._v("Binary strings.")]),e._v(" "),n("li",[e._v("Objects (with string keys, at least).")]),e._v(" "),n("li",[e._v("Arrays.")]),e._v(" "),n("li",[e._v("Booleans.")]),e._v(" "),n("li",[e._v("A bottom type (null).")])]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" Convenience, really.")]),e._v(" "),n("h2",{attrs:{id:"non-cyclic-block-local-relative-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-cyclic-block-local-relative-links"}},[e._v("#")]),e._v(" Non-Cyclic, Block-Local Relative Links")]),e._v(" "),n("p",[e._v("That is, relative links that don't traverse out the back of an object. See the\nconclusions from: "),n("a",{attrs:{href:"https://github.com/ipld/specs/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[n("strong",[e._v("Motivation:")]),e._v(" This is required to efficiently represent a highly connected DAG\nof tiny nodes.")]),e._v(" "),n("p",[n("strong",[e._v("Caveat:")]),e._v(" This brings in some sticky issues around mutability. Depending on\nthe implementation, relative links within an object may be act like mutable\nlinks (from the perspective of the user). The concern here is that we don't want\nusers to bundle nodes together into single block "),n("em",[e._v("because")]),e._v(" they want this\nmutability.")]),e._v(" "),n("h1",{attrs:{id:"to-do"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#to-do"}},[e._v("#")]),e._v(" To Do")]),e._v(" "),n("p",[e._v("Working through this, I realized we have a few things we really need to finish a few things before we can\ncall IPLD ready.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Path links.")]),e._v(" Pointers that can only point to objects at block boundaries\nare useful but severely gimped. We've been fine up till now because we\ngenerally don't "),n("em",[e._v("edit")]),e._v(" complicated data structures but this will change.\n("),n("a",{attrs:{href:"https://github.com/ipld/specs/issues/83",target:"_blank",rel:"noopener noreferrer"}},[e._v("#83"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("li",[n("strong",[e._v("Slice links.")]),e._v(" For the same reason, we really should support\n"),n("code",[e._v("/ipld/QmID/start..stop")]),e._v(" as a syntax for slicing an array. Most programming\nlanguages support this so "),n("em",[e._v("not")]),e._v(" supporting it would be a bit awkward.\n("),n("a",{attrs:{href:"https://github.com/ipld/specs/issues/84",target:"_blank",rel:"noopener noreferrer"}},[e._v("#84"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("li",[n("strong",[e._v("Link Spec.")]),e._v(" We need to specify a complete and formal link spec and stick\nwith it.")]),e._v(" "),n("li",[n("strong",[e._v("Relative Links.")]),e._v(" "),n("a",{attrs:{href:"https://github.com/ipld/specs/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1"),n("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);