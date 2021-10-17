(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{420:function(e,t,a){"use strict";a.r(t);var o=a(46),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("!!!")]),e._v(" "),a("p",[e._v("This document has "),a("strong",[e._v("moved")]),e._v(".")]),e._v(" "),a("p",[e._v("You'll now find information like this in the "),a("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),a("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),a("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),a("p",[e._v("!!!")]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"concept-ipld-multi-block-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concept-ipld-multi-block-collections"}},[e._v("#")]),e._v(" Concept: IPLD Multi-block Collections")]),e._v(" "),a("p",[e._v("Organizing IPLD data into usable, efficient, complex collections spanning many blocks aimed for use by end-user applications.")]),e._v(" "),a("p",[e._v("This document will re-use some terms found in the "),a("RouterLink",{attrs:{to:"/IPLD-Data-Model-v1.html"}},[e._v("IPLD data model")]),e._v(', in particular "Map" and "List". These should not be confused as they are operating at different layers of the IPLD stack. In the context of the data model, these names represent forms that are serialized into blocks along with other primitive data kinds. However, a "Map" or a "List" as a multi-block collection is a structure that is mapped on to many blocks (making use of the primitive kinds in the data model within those blocks in various ways), and exposing interfaces for building and interacting with complex and potentially arbitrarily large data structures. A multi-block collection combines specific data model encoding for individual blocks as well as logic that ties multiple blocks together into a useful data structure.')],1),e._v(" "),a("p",[e._v("Contents:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#background"}},[e._v("Background")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#immutability"}},[e._v("Immutability")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#portability"}},[e._v("Portability")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#collection-types"}},[e._v("Collection types")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#singular-collections"}},[e._v("Singular collections")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#unordered"}},[e._v("Unordered")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#set"}},[a("code",[e._v("Set")])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ordered-by-construction"}},[e._v("Ordered by construction")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#list"}},[a("code",[e._v("List")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#queue"}},[a("code",[e._v("Queue")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#stack"}},[a("code",[e._v("Stack")])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ordered-by-comparator"}},[e._v("Ordered by comparator")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#sortedset"}},[a("code",[e._v("SortedSet")])])])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#associative-collections"}},[e._v("Associative collections")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#unordered-1"}},[e._v("Unordered")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#map"}},[a("code",[e._v("Map")])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ordered-by-construction-1"}},[e._v("Ordered by construction")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#listmap"}},[a("code",[e._v("ListMap")])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ordered-by-comparator-1"}},[e._v("Ordered by comparator")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#sortedmap"}},[a("code",[e._v("SortedMap")])])])])])])])])])]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Collections are a fundamental primitive in every programming language. Being able to organize data into collections that allow for convenient and efficient access and modification is a core activity in programming.")]),e._v(" "),a("p",[e._v("IPLD is not a programming language, but it represents enormous potential for sharing data and providing access to diverse and very large data sets. With sufficient data organization primitives, IPLD can replace many functions traditionally provided by a centralized database system. Client applications should be able to access and even manipulate data structures stored across many peers, from trivial lists to massive and complex data sets that are exposed with efficient query and search operations.")]),e._v(" "),a("p",[e._v('At its core, IPLD data is presented as a simple directed acyclic graph (DAG), with objects being able to store both stand-alone data and links to existing objects (it\'s both "directed" and "acyclic" because new blocks can only append and reference already-created blocks). In addition, because IPLD exposes only a content-addressed storage model, usability of the core IPLD data-access primitives for building rich applications is severely limited. IPLD essentially presents an append-only collection with inflexible indexing. However, as IPLD combines a set of standard data primitives (numbers, strings, bytes, etc.) with expansive linking capabilities, we can build abstractions that present both efficient and useful access to expansive data collections.')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Efficient")]),e._v(" in the sense that linear iteration and searches of naively linked data does not scale and is not practical in large peer-to-peer data sets. Efficiency in an IPLD collection abstraction must be "),a("em",[e._v("at least")]),e._v(" better than a linear scan and pushes toward an absolute minimum number of link traversals to access single data elements within very large collections.")]),e._v(" "),a("li",[a("strong",[e._v("Useful")]),e._v(" in the sense that rich applications are only practical when a basic set of data organization tools are available: maps, sets, arrays. And functionality to interact with that data is straightforward: lookups, searches, queries, mutations.")])]),e._v(" "),a("p",[e._v("IPLD, by design, removes the distinction between local and remote data sources (i.e. memory, disk, database/network). Data collection abstractions should remain consistent with this, essentially providing application programmers with simple access to potentially massive distributed data stores. With such interfaces, apparently simple data fetch operations, such as "),a("code",[e._v("Map->Get(Key)")]),e._v(", could traverse extremely large and distributed data stores without the aid of an intermediate, such as a DBMS (or perhaps without the "),a("em",[e._v("apparent")]),e._v(" aid of an intermediate since the IPFS network and its protocols provides such a service).")]),e._v(" "),a("h2",{attrs:{id:"immutability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutability"}},[e._v("#")]),e._v(" Immutability")]),e._v(" "),a("p",[e._v("As a content-addressed storage system, all collections implemented on top of IPLD are immutable. That is, any particular instance of a collection represents a structure that cannot change as the content, including its links, are fixed by their addresses.")]),e._v(" "),a("p",[e._v("It is likely that all IPLD collections will be represented by a single \"root\" block that provides a gateway to the entire collection—the beginning of a traversal algorithm specific to that collection (although we should not preclude the possibility of novel collections that aren't represented by a single root block). Any mutation of an IPLD collection necessarily means the alteration of content within the data structure. At a minimum this will require at least the creation of a new root block to contain such changes. For large data sets that span many blocks, mutations are likely to require a cascading replacement of many blocks. This will lead to copy-on-write semantics, where mutations of an existing data structure result in an overlay of only those blocks that must change to reflect those updates. In practical terms, many root blocks representing different data sets may share intermediate blocks if they are derived from similar sources via mutation operations; and as a content-addressed storage system it's entirely possible for collections created completely independently to share components if their content and links resolve to the same addresses.")]),e._v(" "),a("p",[e._v("For the purpose of mutation, IPLD collection interfaces will either have to track replaced root blocks or expose copy-on-write directly by returning new root blocks when users call mutation operations.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("A = Collection(OldRoot)\nA.Add(Element1)\nA.Delete(Element2)\nNewRoot = A.Root\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NewRoot1 = Collection(OldRoot).Add(Element1)\nNewRoot2 = Collection(NewRoot1).Delete(Element2)\n")])])]),a("h2",{attrs:{id:"portability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portability"}},[e._v("#")]),e._v(" Portability")]),e._v(" "),a("p",[e._v("All collection types must be implementable across multiple languages and serialized forms must be consistent. A high-level schema (TODO: link when we have one) and algorithm description should be available to make implementation possible across multiple programming languages. Collections should not be restricted to a single encoding form (e.g. CBOR or JSON) but the schema should make it possible for them to be represented across any that support IPLD schemas.")]),e._v(" "),a("p",[e._v("Portability should mean that collections created in Go should be usable in the browser, for example. Any two communicating applications should be able to share data using IPLD collections regardless of what language, platform or operating system being used.")]),e._v(" "),a("h2",{attrs:{id:"collection-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection-types"}},[e._v("#")]),e._v(" Collection types")]),e._v(" "),a("p",[e._v("Collections can be broadly categorized across two dimensions: singular or associative and ordered or unordered:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Singular")]),e._v(' collections that contain stand-alone entities. These entities may be complex but do not depend on an association with a "key".')]),e._v(" "),a("li",[a("strong",[e._v("Associative")]),e._v(' collections that contain pairs, in the form of a "key" and a "value". Where the "key" is generally a simple type, such as a string, and the "value" can be complex.')])]),e._v(" "),a("p",[a("em",[e._v("The delineation between singular and associative collections is not strict. An indexed vector or array could be categorized as a key/value store where the keys are the indexes, and a Map whose values are ignored could be used as a Set.")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Ordered")]),e._v(' collections expose their elements in some form of ordering. Ordering can either be "natural" based on some comparator of their elements or keys, or be dictated by construction, such as a vector whose elements are indexed by the order in which they are added. Iterators on ordered collections become useful for search operations, particularly when subset-selection is possible (i.e. range queries).')]),e._v(" "),a("li",[a("strong",[e._v("Unordered")]),e._v(" collections do not expose their elements in any useful order. Unordered collections are generally more efficient in their layout and access for large amounts of data and their algorithms are often simpler than that for ordered collections.")])]),e._v(" "),a("p",[e._v("Below is a list of collection types that have been found useful across many programming platforms. This currently represents a "),a("em",[e._v("wish-list")]),e._v(" for IPLD and pointers to areas of research. It is anticipated that multiple forms of any one type of IPLD collection may emerge, using different schemas and algorithms and being suited to different types and size of data.")]),e._v(" "),a("p",[e._v("These collections are not necessarily distinct. It is likely that IPLD collection implementations can serve as multiple collection types among this list. For example: a HashMap can also act as a HashSet (in fact it is common for implementations of these to share underlying components), or a Vector could expose operations that allow it to act as a simple Queue or Stack. It is probable that a small number of algorithms will serve as primitives for building many, or all of these data structures. Users should be able to select the interface that meet their programming needs and the implementations that best serve their data type and size needs. Trade-offs will be common and users will need to be presented with sufficient information to make appropriate choices.")]),e._v(" "),a("p",[e._v("Operations exposed by collections may depend on user ergonomics and the practicalities of the underlying algorithms. For example, an ordered collection may expose "),a("code",[e._v("Floor()")]),e._v(" and "),a("code",[e._v("Ceiling()")]),e._v(" convenience operations or only expose iterators with floor/ceiling modifiers that can serve the same purpose. The nature of collections algorithms is such that there may be efficiency reasons whereby apparent convenience methods provide significant performance gains over their long-hand versions.")]),e._v(" "),a("p",[a("em",[e._v("When listing collection operations below, those indicated with a '"),a("code",[e._v("?")]),e._v("' are not strictly necessary for a useful implementation of that collection type but are commonly made available for convenience.")])]),e._v(" "),a("h3",{attrs:{id:"singular-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#singular-collections"}},[e._v("#")]),e._v(" Singular collections")]),e._v(" "),a("h4",{attrs:{id:"unordered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unordered"}},[e._v("#")]),e._v(" Unordered")]),e._v(" "),a("h5",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" "),a("code",[e._v("Set")])]),e._v(" "),a("p",[e._v("A simple collection of non-duplicate entries stored without useful ordering.")]),e._v(" "),a("p",[e._v("Operations include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Add(element)")])]),e._v(" "),a("li",[a("code",[e._v("Remove(element)")])]),e._v(" "),a("li",[a("code",[e._v("Iterate()")])]),e._v(" "),a("li",[a("code",[e._v("Contains(element)?")])]),e._v(" "),a("li",[a("code",[e._v("Size()?")])]),e._v(" "),a("li",[a("code",[e._v("SubSet()?")])])]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: HashSet")]),e._v(" "),a("li",[e._v("Scala: HashSet")]),e._v(" "),a("li",[e._v("Clojure: hash-set")]),e._v(" "),a("li",[e._v("JavaScript: Set (no duplicates but ordered by insertion)")]),e._v(" "),a("li",[e._v("C++: unordered_set")])]),e._v(" "),a("h4",{attrs:{id:"ordered-by-construction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordered-by-construction"}},[e._v("#")]),e._v(" Ordered by construction")]),e._v(" "),a("h5",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[e._v("#")]),e._v(" "),a("code",[e._v("List")])]),e._v(" "),a("p",[e._v("An ordered collection that allows addressing and modification by index. Duplicates are allowed although only single elements may exist at any index. Indexes are not necessarily contiguous.")]),e._v(" "),a("p",[e._v("Operations include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Add(element)")])]),e._v(" "),a("li",[a("code",[e._v("Add(element, index)")])]),e._v(" "),a("li",[a("code",[e._v("Get(index)")])]),e._v(" "),a("li",[a("code",[e._v("Remove(index)")])]),e._v(" "),a("li",[a("code",[e._v("Remove(element)")])]),e._v(" "),a("li",[a("code",[e._v("Iterate()")])]),e._v(" "),a("li",[a("code",[e._v("Contains(element)?")])]),e._v(" "),a("li",[a("code",[e._v("IndexOf(element)?")])]),e._v(" "),a("li",[a("code",[e._v("Replace(index, element)?")])])]),e._v(" "),a("p",[e._v("Some implementations implement a fixed size (i.e. Array / Vector) and may include "),a("code",[e._v("Resize()?")]),e._v(" or "),a("code",[e._v("EnsureSize()?")]),e._v(" operations exposing implementation details for the sake of performance.")]),e._v(" "),a("p",[e._v("Vector (and Array) variants are generally designed to allow (near) constant-time addressing of individual elements, whereas a standard List type may be most efficient when dealing with one end.")]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: Vector, ArrayList, LinkedList, CopyOnWriteArrayList, LinkedHashSet")]),e._v(" "),a("li",[e._v("Scala: List, Vector")]),e._v(" "),a("li",[e._v("Clojure: list, vector")]),e._v(" "),a("li",[e._v("JavaScript: Array, TypedArray, Set (no duplicates)")]),e._v(" "),a("li",[e._v("C++: array (fixed-size), vector, list, forward_list")])]),e._v(" "),a("h5",{attrs:{id:"queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[e._v("#")]),e._v(" "),a("code",[e._v("Queue")])]),e._v(" "),a("p",[e._v("A FIFO list allowing only insertions in one end and retrieval from the other.")]),e._v(" "),a("p",[e._v("Operations include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Add(element)")])]),e._v(" "),a("li",[a("code",[e._v("Remove()")])]),e._v(" "),a("li",[a("code",[e._v("Peek()")])])]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: Queue, Deque (double-ended)")]),e._v(" "),a("li",[e._v("Scala: Queue")]),e._v(" "),a("li",[e._v("C++: queue, deque (double-ended)")])]),e._v(" "),a("h5",{attrs:{id:"stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stack"}},[e._v("#")]),e._v(" "),a("code",[e._v("Stack")])]),e._v(" "),a("p",[e._v("A LIFO list allowing only insertions and retrieval from a single end.")]),e._v(" "),a("p",[e._v("Operations include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Push()")])]),e._v(" "),a("li",[a("code",[e._v("Pop()")])]),e._v(" "),a("li",[a("code",[e._v("Peek()")])])]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: Stack")]),e._v(" "),a("li",[e._v("Scala: Stack")]),e._v(" "),a("li",[e._v("C++: stack")])]),e._v(" "),a("h4",{attrs:{id:"ordered-by-comparator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordered-by-comparator"}},[e._v("#")]),e._v(" Ordered by comparator")]),e._v(" "),a("h5",{attrs:{id:"sortedset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortedset"}},[e._v("#")]),e._v(" "),a("code",[e._v("SortedSet")])]),e._v(" "),a("p",[e._v("A simple collection of non-duplicate entries that is ordered according to some comparison operation.")]),e._v(" "),a("p",[e._v("Operations include all those for an unordered Set and may extend to include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("First()")])]),e._v(" "),a("li",[a("code",[e._v("Last()")])]),e._v(" "),a("li",[a("code",[e._v("Floor()?")])]),e._v(" "),a("li",[a("code",[e._v("Ceiling()?")])]),e._v(" "),a("li",[a("code",[e._v("Iterate()")])]),e._v(" "),a("li",[a("code",[e._v("SubSet()?")])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Iterate()")]),e._v(" and "),a("code",[e._v("SubSet()?")]),e._v(' operations may include "floor", "ceiling" and direction modifiers for range queries; '),a("code",[e._v("Floor()")]),e._v(" and "),a("code",[e._v("Ceiling()")]),e._v(" methods may be unnecessary convenience methods in this case.")]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: TreeSet, PriorityQueue")]),e._v(" "),a("li",[e._v("Scala: TreeSet")]),e._v(" "),a("li",[e._v("Clojure: sorted-set")]),e._v(" "),a("li",[e._v("C++: set, multiset (can contain duplicate elements)")])]),e._v(" "),a("h3",{attrs:{id:"associative-collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#associative-collections"}},[e._v("#")]),e._v(" Associative collections")]),e._v(" "),a("h4",{attrs:{id:"unordered-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unordered-2"}},[e._v("#")]),e._v(" Unordered")]),e._v(" "),a("h5",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" "),a("code",[e._v("Map")])]),e._v(" "),a("p",[e._v("An unordered collection of key/value entries where, for any key, it contains zero or one value.")]),e._v(" "),a("p",[e._v("Operations include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Set(key, value)")])]),e._v(" "),a("li",[a("code",[e._v("Get(key)")])]),e._v(" "),a("li",[a("code",[e._v("Contains(key)?")])]),e._v(" "),a("li",[a("code",[e._v("EntriesIterator()?")])]),e._v(" "),a("li",[a("code",[e._v("KeysIterator()?")])]),e._v(" "),a("li",[a("code",[e._v("ValuesIterator()?")])]),e._v(" "),a("li",[a("code",[e._v("Size()?")])])]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: HashMap")]),e._v(" "),a("li",[e._v("Scala: Map, HashMap")]),e._v(" "),a("li",[e._v("Clojure: hash-map")]),e._v(" "),a("li",[e._v("C++: unordered_map")])]),e._v(" "),a("h4",{attrs:{id:"ordered-by-construction-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordered-by-construction-2"}},[e._v("#")]),e._v(" Ordered by construction")]),e._v(" "),a("h5",{attrs:{id:"listmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listmap"}},[e._v("#")]),e._v(" "),a("code",[e._v("ListMap")])]),e._v(" "),a("p",[e._v("An instance of a Map whose ordering is dictated by the insertion order of elements.")]),e._v(" "),a("p",[e._v("Allows for all operations of a Map but the "),a("code",[e._v("*Iterator()")]),e._v(" operations yield elements in insertion order.")]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: LinkedHashMap")]),e._v(" "),a("li",[e._v("Scala: ListMap")]),e._v(" "),a("li",[e._v("Clojure: array-map")]),e._v(" "),a("li",[e._v("JavaScript: Map")])]),e._v(" "),a("h4",{attrs:{id:"ordered-by-comparator-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordered-by-comparator-2"}},[e._v("#")]),e._v(" Ordered by comparator")]),e._v(" "),a("h5",{attrs:{id:"sortedmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortedmap"}},[e._v("#")]),e._v(" "),a("code",[e._v("SortedMap")])]),e._v(" "),a("p",[e._v("A Map whose entries are ordered according to some comparison operation on the key.")]),e._v(" "),a("p",[e._v("Allows for all operations of a Map but the "),a("code",[e._v("*Iterator()?")]),e._v(" operations yield entries ordered by key (according to some comparison operation). In addition, a SortedMap can support forms of:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("First()?")])]),e._v(" "),a("li",[a("code",[e._v("Last()?")])]),e._v(" "),a("li",[a("code",[e._v("Floor()?")])]),e._v(" "),a("li",[a("code",[e._v("Ceiling()?")])])]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("SubMap()?")]),e._v(" is possible for generating an instance or view of a subset of the elements. "),a("code",[e._v("*Iterator()?")]),e._v(" operations and "),a("code",[e._v("SubMap()?")]),e._v(" may include floor, ceiling and direction modifiers for range queries; "),a("code",[e._v("Floor()")]),e._v(" and "),a("code",[e._v("Ceiling()")]),e._v(" methods may be unnecessary convenience methods in this case.")]),e._v(" "),a("p",[e._v("Implementations:")]),e._v(" "),a("ul",[a("li",[e._v("Java: TreeMap")]),e._v(" "),a("li",[e._v("Scala: TreeMap")]),e._v(" "),a("li",[e._v("Clojure: sorted-map, sorted-map-by")]),e._v(" "),a("li",[e._v("C++: map, multimap (can contain duplicate elements)")])])])}),[],!1,null,null,null);t.default=i.exports}}]);