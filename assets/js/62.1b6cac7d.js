(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{438:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("!!!")]),e._v(" "),a("p",[e._v("This document has "),a("strong",[e._v("moved")]),e._v(".")]),e._v(" "),a("p",[e._v("You'll now find information like this in the "),a("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),a("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),a("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),a("p",[e._v("!!!")]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"a-unixfsv2-spike-using-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-unixfsv2-spike-using-schemas"}},[e._v("#")]),e._v(" A unixfsv2 spike, using schemas")]),e._v(" "),a("p",[e._v('This document is an exploration of what a hypothetical "unixfs v2" might look like,\nusing schemas as a design language for describing the data structures.')]),e._v(" "),a("p",[e._v("This is not a final proposal, but rather a lens to explore both unixfsv2\nconcepts and schemas themselves at the same time, and how we expect them\nto contribute to each other.  Several concepts in schemas, advanced layouts,\ntheir interactions, and their syntaxes will be trialled here; they are not final.")]),e._v(" "),a("p",[e._v("Without further ado...")]),e._v(" "),a("h2",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('type AnyFile union {\n\t| File "f"\n\t| Dir "d"\n\t| Symlink "s"\n} representation keyed\n\ntype Filename string\n\ntype Dir struct {\n\tmembers {Filename:DirEnt}<HAMT>\n}\n\ntype DirEnt struct {\n\tcontent &AnyFile\n\tattribs Attribs\n}\n\ntype File struct {\n\tcontent Bytes<Rabin>\n}\n\ntype Symlink struct {\n\ttarget String\n}\n\nadvanced Rabin {\n\tkind bytes\n\timplementation "IPLD/experimental/rabin/v1"\n}\n\nadvanced HAMT {\n\tkind map\n\timplementation "IPLD/experimental/HAMT/v1"\n}\n\ntype Attribs struct {\n\tmtime Int # Danger danger will robinson; int sizes will rear their ugly head.\n\tposix Int # Can we just... do the standard 0777 mask packing here?  I don\'t think anything else is *less* work.\n\tsticky Bool (implicit: false)\n\tsetuid Bool (implicit: false)\n\tsetgid Bool (implicit: false)\n\tuid Int # make another schema which deliberately excludes this.  try to match this one (the one with more info) first.\n\tgid Int # make another schema which deliberately excludes this.  try to match this one (the one with more info) first.\n}\n\n# You should be able to imagine sending a fancy graphsync request with some structure like:\n#\n#  {"schema": {{schemaCIDofUnixfs}}, "selector": {{selectorSpec}},\n#   "schemaPatch": {"./dir/transparently/through/to/file": {{schemaCIDofRabinLayout}},\n#   "startAt": {{rootBlockCID+path}} }\n#\n# This kind of fancy graphsync request can be used to make a query which does "the right thing" with\n# all advanced layouts transparently; then when reaching the \'patch\' area, perhaps the selector spec\n# wants to use the seeded-psuedorandomness feature, so it can issue queries like this across many peers.\n#\n# Perhaps we won\'t actually need the \'patch\' feature, because in practice if doing queries with lots\n# of fancy sharded requests, prooobably you\'ll do the path *up to* that first, in a separate query,\n# But either way, you can see how using schemas for signaling is useful here.\n')])])]),a("h2",{attrs:{id:"interesting-highlights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interesting-highlights"}},[e._v("#")]),e._v(" Interesting Highlights")]),e._v(" "),a("h3",{attrs:{id:"using-various-schemas-as-a-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-various-schemas-as-a-feature"}},[e._v("#")]),e._v(" Using various schemas as a feature!")]),e._v(" "),a("p",[e._v("Observe the comments on the "),a("code",[e._v("Attribs.uid")]),e._v(" and "),a("code",[e._v("Attribs.gid")]),e._v(" fields.")]),e._v(" "),a("p",[e._v("By using several different (but significantly overlapping) schemas to describe variations\nin which attributes we're storing, we can make unixfsv2 into an extensible yet still\nvery well defined system.")]),e._v(" "),a("p",[e._v("Concretely: If the "),a("code",[e._v("uid")]),e._v(" and "),a("code",[e._v("gid")]),e._v(" elements are found present in the first "),a("code",[e._v("Attribs")]),e._v(" map\nprocessed in a tree of data, then we match the first schema (the one with more info),\nand we can now expect "),a("em",[e._v("all future")]),e._v(" "),a("code",[e._v("Attribs")]),e._v(" maps to consistently include the same data.\nIf the "),a("code",[e._v("uid")]),e._v(" or "),a("code",[e._v("gid")]),e._v(" elements are found to be missing, we would flunk out of matching\nthe first schema, and try a second schema which does not include them... and again,\nnow expect "),a("em",[e._v("all future")]),e._v(" "),a("code",[e._v("Attribs")]),e._v(" maps to consistently "),a("em",[e._v("not")]),e._v(" include these data.")]),e._v(" "),a("p",[e._v("This kind of deep consistency makes it easier to build applications,\nespecially applications which may want to change their behavior\nor apply distinct transformations depending on which of the schemas matches.")]),e._v(" "),a("h3",{attrs:{id:"advanced-layout-usage-sites-are-marked-with-angle-brackets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-layout-usage-sites-are-marked-with-angle-brackets"}},[e._v("#")]),e._v(" Advanced layout usage sites are marked with angle brackets")]),e._v(" "),a("p",[e._v("E.g., on the line "),a("code",[e._v("members {Filename:DirEnt}<HAMT>")]),e._v(", it's the "),a("code",[e._v("<")]),e._v(" and "),a("code",[e._v(">")]),e._v("\ncharacters which denote that we'll be using an advanced layout here.")]),e._v(" "),a("p",[e._v("We might also consider using different characters for this denotation.\n(Angle brackets are reminiscent of generics in Java syntax;\nthis may or may not be a helpful reminiscence.)")]),e._v(" "),a("p",[e._v("We might also consider a different approach entirely: ditching the ability to\ndeclare advanced layouts on inline type terms at all, and instead using\nsomething more like the "),a("code",[e._v("representation")]),e._v(" keyword.\nSuch an approach would syntactically require a fully named type for any\nstructure that wants to use an advanced layout.\nGiven that the most common applications of advanced layouts are for map, list,\nand byte kinds, all of which tend to be used via anonymous inline types,\nthis could result in a substantial increase in syntax volume\n(e.g., in this example, it would've lead to two new named types).")]),e._v(" "),a("p",[e._v("(Note that the previous paragraph has only considered schema "),a("em",[e._v("DSL syntax")]),e._v(';\nperhaps the issue looks differently if considered via the IPLD-native "AST".)')]),e._v(" "),a("h3",{attrs:{id:"advanced-layout-usage-sites-are-marked"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-layout-usage-sites-are-marked"}},[e._v("#")]),e._v(" Advanced layout usage sites are marked")]),e._v(" "),a("p",[e._v('See https://github.com/ipld/specs/issues/130 -- specifically,\nthe "signaling" problem -- for more discussion of this.')]),e._v(" "),a("p",[e._v('We\'re exploring the "explicit signaling" approach, and doing so\nusing schemas as the vehicle, here.')]),e._v(" "),a("h3",{attrs:{id:"advanced-layouts-promising-a-kind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-layouts-promising-a-kind"}},[e._v("#")]),e._v(" Advanced layouts promising a kind?")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("kind map")]),e._v(" and "),a("code",[e._v("kind bytes")]),e._v(" markings in the "),a("code",[e._v("advanced")]),e._v(" blocks are a hypothesis.")]),e._v(" "),a("p",[e._v("In the cases shown in this example, we definitely know that these are the kinds\nwe expect the advanced layout algorithms in question to behave as.\nThis may not always be true (e.g. in the encryption user story, not explored here).")]),e._v(" "),a("p",[e._v("The kind is also indicated at the usage site -- e.g. the "),a("code",[e._v("{")]),e._v(" character\nat the start of the usage site "),a("code",[e._v("members {Filename:DirEnt}<HAMT>")]),e._v(" already\nmakes it quite clear that we're dealing with a map kind -- so perhaps\nkind indicators in the "),a("code",[e._v("advanced")]),e._v(" block is redundant.  Or, perhaps by the\nother side of the same coin, they're a good sanity-check landmark.")]),e._v(" "),a("h3",{attrs:{id:"advanced-layout-implementation-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-layout-implementation-strings"}},[e._v("#")]),e._v(" Advanced layout implementation strings")]),e._v(" "),a("p",[e._v('See https://github.com/ipld/specs/issues/130 -- specifically,\nthe "referencing" (or "rendezvous") problem -- for more discussion of this.')]),e._v(" "),a("p",[e._v('We\'re exploring with the "behavioral specification" approach here.')]),e._v(" "),a("h3",{attrs:{id:"what-are-executables-anyway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-executables-anyway"}},[e._v("#")]),e._v(" What are executables, anyway?")]),e._v(" "),a("p",[e._v("In this schema, the executablity bit is in the "),a("code",[e._v("Attribs.posix")]),e._v(" bitfield...\nas three distinct bools, once per user/group/everyone (the "),a("code",[e._v("0111")]),e._v(" mask).")]),e._v(" "),a("p",[e._v("Another way to regard executablity which would often (often!) be valid is\nto have a single bool per file.")]),e._v(" "),a("p",[e._v("These are two different opinions application design might take in regarding\nunix"),a("em",[e._v("ish")]),e._v(" filesystems.  Logically consistent arguments can be made for both.\nPerhaps this is another situation where two different schemas would be useful;\nwe can support both, and do so clearly, if we think it's useful to do so.")]),e._v(" "),a("h3",{attrs:{id:"ugh-int-sizes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ugh-int-sizes"}},[e._v("#")]),e._v(" Ugh, int sizes")]),e._v(" "),a("blockquote",[a("p",[e._v("mtime Int")])]),e._v(" "),a("p",[e._v("In designing the IPLD Data Model itself, we still have some deferred decisions\nabout how we want to regard integer precision (as well as what we expect,\nin practice, when client implementations in various languages hit their\nhost language's natural limitations).")]),e._v(" "),a("p",[e._v("We should probably give particular attention to timestamps in such decisions.\nThey're a very common user story.")]),e._v(" "),a("p",[e._v("Additionally, regardless of what precisely we decide to do about integer sizes,\nwe should aim to have documentation with recommendations of best practices\nfor the timestamp user story.")]),e._v(" "),a("h3",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("&")]),e._v(" syntax seen in "),a("code",[e._v("content &AnyFile")]),e._v(" denotes that the "),a("code",[e._v("AnyFile")]),e._v(" is\nexpected on the far side of a Link in that position.")]),e._v(" "),a("p",[e._v("Denotation of the position of a link is important because It Matters To The Hash,\nas well as mattering to the overall understanding of topology of the larger DAG;\nyet it's terse because it doesn't matter to the semantics of the design (much).")]),e._v(" "),a("p",[e._v("The single character sigil would seem to imply that there's no such thing as an "),a("code",[e._v("&&Foo")]),e._v(" or "),a("code",[e._v("&&&Foo")]),e._v(".\nWhich indeed I hope there isn't: this author can't think of any situations\nwhere that expresses a sane thing.  (It's rare enough in programming with pointers;\nit's an entirely separate thing to propose in a merkle-DAG, which has no mutablity\nsemantics in the first place, which removes even the 'rare' excuses.)\nWe haven't officially explored or documented this anywhere yet.  Probably we should.")]),e._v(" "),a("h3",{attrs:{id:"did-you-notice-we-still-don-t-have-enough-information-to-determine-cids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#did-you-notice-we-still-don-t-have-enough-information-to-determine-cids"}},[e._v("#")]),e._v(" Did you notice we still don't have enough information to determine CIDs?")]),e._v(" "),a("p",[e._v("This schema does not specify which:")]),e._v(" "),a("ul",[a("li",[e._v("CID version;")]),e._v(" "),a("li",[e._v("multicodec;")]),e._v(" "),a("li",[e._v("nor multihash")])]),e._v(" "),a("p",[e._v("... to use when serializing any block data and constructing links.")]),e._v(" "),a("p",[e._v("It also doesn't specify any restrictions for those values when reading data.")]),e._v(" "),a("p",[e._v("That's... interesting.  What does this imply for work that's still left to do\nin systems which build using these tools?")]),e._v(" "),a("h3",{attrs:{id:"do-advanced-layouts-deserve-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-advanced-layouts-deserve-parameters"}},[e._v("#")]),e._v(" Do advanced layouts deserve parameters?")]),e._v(" "),a("p",[e._v("We could imagine having blocks with details such as this in the schema:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('advanced Rabin {\n\tkind bytes\n\timplementation "IPLD/experimental/rabin/v1"\n\tbitmatch 14\n\tminchunksize 256\n\tmaxchunksize 262144\n}\n\nadvanced HAMT {\n\tkind map\n\timplementation "IPLD/experimental/HAMT/v1"\n\tbitwidth 14\n}\n')])])]),a("p",[e._v("Would this be better?")]),e._v(" "),a("p",[e._v('See the "Other" heading in https://github.com/ipld/specs/issues/130\nfor another introduction of this question.')]),e._v(" "),a("p",[e._v("A separate, but co-located, question is whether such parameters\n(if we have them) should be serialized in the internal data of the advanced\nlayout (e.g. typically in the 'root block' of that structure), or if\nthey should be here in the schema.\nThis author tends to think the answer may be \"both\"; it certainly seems\nthey must be in the schema if schemas are to fulfill their purpose\nas a design language and provide sufficient information for it to be\npossible to make diverse implementations in new languages.")]),e._v(" "),a("p",[e._v('The full schema at the top of the document explores the choices\nof "no", and is thus ambiguous on that second question.')]),e._v(" "),a("h2",{attrs:{id:"some-errata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-errata"}},[e._v("#")]),e._v(" Some Errata")]),e._v(" "),a("h3",{attrs:{id:"some-unixfs-naming-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-unixfs-naming-notes"}},[e._v("#")]),e._v(" Some unixfs naming notes")]),e._v(" "),a("p",[a("code",[e._v("AnyFile")]),e._v(" may be a clunky name.  Suggestions welcome.")]),e._v(" "),a("p",[e._v('One possible alternative that we\'ve already chosen to avoid here is "inode",\nbecause that term has a lot of associations with mutable filesystems (and\ncurrently MFS does already have such a concept).')]),e._v(" "),a("h3",{attrs:{id:"things-not-included-for-brevity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#things-not-included-for-brevity"}},[e._v("#")]),e._v(" Things not included for brevity")]),e._v(" "),a("p",[e._v("It's likely the real Unixfsv2 will include more members of "),a("code",[e._v("AnyFile")]),e._v(",\nsuch as unix socket files, device node properties, etc.\nThese are omitted here for brevity; omission here is not meant to suggest that\nsuch things don't belong in later more complete documents which are\non a path to becoming specs.")]),e._v(" "),a("h3",{attrs:{id:"remember-selectors-are-coming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remember-selectors-are-coming"}},[e._v("#")]),e._v(" Remember, Selectors Are Coming")]),e._v(" "),a("p",[e._v('It should be noted that there have been previous discussions about whether or not,\nand to what degree, it is important to be able to "inline" small objects.')]),e._v(" "),a("p",[e._v('To the best of this author\'s understanding, much (all?) of the reason to\nwish for the ability to "inline" small objects is loading a link is cheap\nonly when the content is local, and may become significantly high latency\nif the content requires retrieval over a network (especially if that retrieval\nrequires a search for a peer who has the content!).')]),e._v(" "),a("p",[e._v('Selectors are a feature which make it possible to describe fetching whole\ngraphs of linked data at once, rather than in an "N+1 query" fashion,\nand so they dramatically change the field of play here: possibly reducing\nthe performance penalties of "unnecessary" blocks/links to infinitesimal.')]),e._v(" "),a("p",[e._v('We\'re expecting this feature to land "soon" (on the same timescale, and\nalmost certainly before, any final unixfsv2 specs themselves), so it seems\nvalid to design link placements with that improvement in mind.')]),e._v(" "),a("h3",{attrs:{id:"inb4-timezones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inb4-timezones"}},[e._v("#")]),e._v(" inb4 timezones")]),e._v(" "),a("blockquote",[a("p",[e._v("mtime Int")])]),e._v(" "),a("p",[e._v("Yes, the posix syscalls use raw integers for modification times on files.")]),e._v(" "),a("p",[e._v("No, it does not include timezones.")]),e._v(" "),a("p",[e._v("Yes, really.")])])}),[],!1,null,null,null);t.default=s.exports}}]);