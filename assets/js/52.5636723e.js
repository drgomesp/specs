(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{428:function(e,t,n){"use strict";n.r(t);var a=n(46),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("!!!")]),e._v(" "),n("p",[e._v("This document has "),n("strong",[e._v("moved")]),e._v(".")]),e._v(" "),n("p",[e._v("You'll now find information like this in the "),n("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),n("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),n("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),n("p",[e._v("!!!")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("This document was archived from https://github.com/ipld/specs/issues/71.")]),e._v(" "),n("h2",{attrs:{id:"_71-ipld-type-convention"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_71-ipld-type-convention"}},[e._v("#")]),e._v(" #71: IPLD Type Convention")]),e._v(" "),n("p",[e._v("Opened 2018-09-20T22:57:15Z by Stebalien")]),e._v(" "),n("p",[e._v("Motivation 1: I'd like to be able to look at an IPLD object and know, approximately, it's intended interpretation (without guessing or using context).")]),e._v(" "),n("p",[e._v("Motivation 2: I'd like to be able to define or extend a type system for "),n("em",[e._v("my")]),e._v(" IPLD application without having it completely fail to interop with other IPLD type systems.")]),e._v(" "),n("p",[e._v("Motivation 3: I'd like to buy some time to figure out the perfect type system.")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("We've been discussing IPLD type "),n("em",[e._v("systems")]),e._v(" but these discussions usually boil down to implementing the perfect system. I'd like to propose an alternative: the IPLD type convention.")]),e._v(" "),n("p",[e._v("Proposal: "),n("code",[e._v("@type: $something")]),e._v(" denotes a type. What this type "),n("em",[e._v("means")]),e._v(" depends on the type's type (if specified).")]),e._v(" "),n("p",[e._v("Why @? It's less likely to conflict but I'm not fixated on it.")]),e._v(" "),n("p",[e._v('Why "the IPLD type convention"? This isn\'t a specification. Basically, I\'m giving in to JSON duck-typing and calling it "good enough".')]),e._v(" "),n("p",[e._v("Why is it good enough? This is a decentralized system so we'll have to check everything "),n("em",[e._v("anyways")]),e._v(". Trying to prescribe structure on users tends to lead to more trouble than it's worth (IMO). If we need more structure, we can always give the type a type to make sure we're operating within the correct type system.")]),e._v(" "),n("p",[e._v("How will this work with existing formats:")]),e._v(" "),n("ol",[n("li",[e._v("CBOR/JSON: Do nothing. For existing objects without a "),n("code",[e._v("@type")]),e._v(", these objects simply don't have types (within this system). Type systems that need to give everything "),n("em",[e._v("some")]),e._v(" type can just give these some")]),e._v(" "),n("li",[e._v("Git (tree, commit, etc), Eth, etc: I'd "),n("em",[e._v("like")]),e._v(" to retroactively add in a type field. Thoughts? I kind of doubt this will break anything.")])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("We've "),n("em",[e._v("also")]),e._v(" talked about adding a new format with the structure "),n("code",[e._v("<CidOf(type)><data>")]),e._v(". That is, introduce a new format where we put all the type and schema information in a separate object, prepending the CID of this separate object to the "),n("em",[e._v("actual")]),e._v(" object (the value).")]),e._v(" "),n("p",[e._v("After considering this for a bit, I've realized we should treat these as separate concerns: we're conflating "),n("em",[e._v("types")]),e._v(" with "),n("em",[e._v("schemas")]),e._v(". There's no reason we can't introduce this new, compressed format at some later date even if we go with the above \"type convention\" proposal.")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("Disclaimer: this was "),n("em",[e._v("not")]),e._v(" my idea, I've just finally convinced myself that it's probably \"good enough\".")]),e._v(" "),n("p",[e._v("Thoughts @jonnycrunch (you're the one who told me to look into the JSON-LD spec), @diasdavid, @davidad, @whyrusleeping?")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("While I'd like to avoid prescribing "),n("em",[e._v("too")]),e._v(" much, I'd like to define a set of conventions that users "),n("em",[e._v("should")]),e._v(" follow. For example:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("@type: CID")]),e._v(" -  CID points to the actual type.")]),e._v(" "),n("li",[n("code",[e._v("@type: {}")]),e._v(': inline type. This will often be used for type "constructors". For example: '),n("code",[e._v('{@type: {@type: "generic", constructor: CidOfConstructor, parameters: [...]}')]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v('@type: "string"')]),e._v(": A human readable string/path. IMO, this should "),n("em",[e._v("usually")]),e._v(" be used to specify the type "),n("em",[e._v("system")]),e._v(".")]),e._v(" "),n("li",[n("code",[e._v("@type: 1234")]),e._v(": A multicodec. A reasonable type-of function would look this multicodec up in the multicodec table to map it to a CID.")]),e._v(" "),n("li",[n("code",[e._v("@type: [thing1, thing2, thing3]")]),e._v(": multiple types.")])]),e._v(" "),n("hr"),e._v(" "),n("h4",{attrs:{id:"_2018-11-12t19-05-30z-jonnycrunch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2018-11-12t19-05-30z-jonnycrunch"}},[e._v("#")]),e._v(" (2018-11-12T19:05:30Z) jonnycrunch:")]),e._v(" "),n("p",[e._v("@Stebalien  Seems that you are most concerned with simple General Purpose data types definitions to start.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"simpleTypes": {\n"enum": [\n"array",\n"boolean",\n"integer",\n"null",\n"number",\n"object",\n"string"\n]\n},\n\n')])])]),n("p",[e._v("You could then build upon this and add support for more complex data types to give more meaning and context.  This would help with validation of the structure.")]),e._v(" "),n("p",[e._v("An simple example extension would be "),n("code",[e._v("date")]),e._v(" and "),n("code",[e._v("datetime")]),e._v(", which are an extension of "),n("code",[e._v('{ "@type" : "string"}')]),e._v(" but the context would define the syntax of the string.")]),e._v(" "),n("p",[e._v("Presently, the handling of "),n("code",[e._v("datetime")]),e._v(" in "),n("code",[e._v("@context")]),e._v(" is "),n("code",[e._v("xsd:datetime")]),e._v(" which references "),n("a",{attrs:{href:"http://www.w3.org/2001/XMLSchema#",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.w3.org/2001/XMLSchema#"),n("OutboundLink")],1),e._v(", where the explaination as "),n("code",[e._v("documentation source")]),e._v(" is in "),n("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#dateTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("html"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("My favorite annotation in this xml is:")]),e._v(" "),n("blockquote",[n("p",[e._v("First the built-in primitive datatypes. These definitions are for information only, the real built-in definitions are "),n("em",[e._v("magic")]),e._v(".")])]),e._v(" "),n("p",[e._v("Example for "),n("code",[e._v("string")]),e._v(" from "),n("a",{attrs:{href:"https://www.w3.org/2001/XMLSchema.xsd",target:"_blank",rel:"noopener noreferrer"}},[e._v("XMLSchema"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("p",[e._v('<xs:simpleType name="string" id="string">\n'),n("a",{attrs:{href:"xs:annotation"}},[e._v("xs:annotation")]),e._v(" "),n("a",{attrs:{href:"xs:appinfo"}},[e._v("xs:appinfo")]),e._v('\n<hfp:hasFacet name="length"/>\n<hfp:hasFacet name="minLength"/>\n<hfp:hasFacet name="maxLength"/>\n<hfp:hasFacet name="pattern"/>\n<hfp:hasFacet name="enumeration"/>\n<hfp:hasFacet name="whiteSpace"/>\n<hfp:hasProperty name="ordered" value="false"/>\n<hfp:hasProperty name="bounded" value="false"/>\n<hfp:hasProperty name="cardinality" value="countably infinite"/>\n<hfp:hasProperty name="numeric" value="false"/>\n</xs:appinfo>\n<xs:documentation source="http://www.w3.org/TR/xmlschema-2/#string"/>\n</xs:annotation>')]),e._v(" "),n("p",[e._v("And more specfically for "),n("code",[e._v("datetime")]),e._v(":")]),e._v(" "),n("p",[e._v('<xs:simpleType name="dateTime" id="dateTime">\n'),n("a",{attrs:{href:"xs:annotation"}},[e._v("xs:annotation")]),e._v(" "),n("a",{attrs:{href:"xs:appinfo"}},[e._v("xs:appinfo")]),e._v('\n<hfp:hasFacet name="pattern"/>\n<hfp:hasFacet name="enumeration"/>\n<hfp:hasFacet name="whiteSpace"/>\n<hfp:hasFacet name="maxInclusive"/>\n<hfp:hasFacet name="maxExclusive"/>\n<hfp:hasFacet name="minInclusive"/>\n<hfp:hasFacet name="minExclusive"/>\n<hfp:hasProperty name="ordered" value="partial"/>\n<hfp:hasProperty name="bounded" value="false"/>\n<hfp:hasProperty name="cardinality" value="countably infinite"/>\n<hfp:hasProperty name="numeric" value="false"/>\n</xs:appinfo>\n<xs:documentation source="http://www.w3.org/TR/xmlschema-2/#dateTime"/>\n</xs:annotation>\n<xs:restriction base="xs:anySimpleType">\n<xs:whiteSpace value="collapse" fixed="true" id="dateTime.whiteSpace"/>\n</xs:restriction>\n</xs:simpleType>')]),e._v(" "),n("p",[e._v("More complex data types would be generators and would help with the IPLD selectors issue.")]),e._v(" "),n("p",[e._v("As far as JSON-LD, I'm rolling back my support of it. There is SO much reliance on location-based mappings.  I have really started to look into how to strip out all reliance of the location and make it a pure content-addressed schema. But I'm getting a \"symbol grounding problem\".   Also, there is so much self-referencing that my script fails given the cycles in the graph.  I have moved away from the w3c model and looking at wikidata.  Unfortunately, there isn't a good mapping for simple data types like "),n("code",[e._v("datetime")]),e._v(' above.   I think your "good enough" approach expresses the fundamental "intentionality" that point the user in the direction of the proper meaning.  Wikidata\'s approach is to give many and and allow users to "triangulate" the meaning, especially across languages.')]),e._v(" "),n("p",[e._v("I, myself, like inline link "),n("code",[e._v("<cid>")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n...\n@type : {  "/" : "<cid>" }\n}\n')])])]),n("p",[e._v("The use of "),n("code",[e._v("@type")]),e._v(" to denote the object is an instance of a class of entities.")]),e._v(" "),n("p",[e._v("The problem is what do you link to?  You'd be building a whole "),n("a",{attrs:{href:"http://ontodm.com/ontodt/OntoDT.owl",target:"_blank",rel:"noopener noreferrer"}},[e._v("ontology"),n("OutboundLink")],1),e._v(" for data types.")]),e._v(" "),n("p",[e._v("BTW, there is an ISO standard for "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO/IEC_11404",target:"_blank",rel:"noopener noreferrer"}},[e._v("General Purpose Datatypes"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("If you keep it simple and start with "),n("code",[e._v("strings")]),e._v(", and those strings are defined in the "),n("code",[e._v("@context")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n@context : {  "/" : "<cid>" },\n...\n@type : "string"\n}\n')])])]),n("p",[e._v("More complicated examples can build out from here.")]),e._v(" "),n("p",[e._v("In theory, this syntx for links should be compatible with json-ld, but in practice it not. see my "),n("a",{attrs:{href:"https://github.com/w3c-ccg/did-spec/pull/110#issuecomment-431356177",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #110 in JSON-ld"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("hr"),e._v(" "),n("h4",{attrs:{id:"_2019-01-12t19-04-54z-pavetok"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2019-01-12t19-04-54z-pavetok"}},[e._v("#")]),e._v(" (2019-01-12T19:04:54Z) pavetok:")]),e._v(" "),n("blockquote",[n("p",[e._v("I'd like to be able to look at an IPLD object and know, approximately, it's intended interpretation (without guessing or using context).")])]),e._v(" "),n("p",[e._v("Why does it necessary to embed type information into data itself?\nModern CTT, for example, "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=LE0SSLizYUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("says"),n("OutboundLink")],1),e._v(" that typing judgments are completely separate things. As consequence one value can inhabit multiple types.")])])}),[],!1,null,null,null);t.default=o.exports}}]);