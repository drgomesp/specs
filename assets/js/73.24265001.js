(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{449:function(e,t,a){"use strict";a.r(t);var i=a(46),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("!!!")]),e._v(" "),a("p",[e._v("This document has "),a("strong",[e._v("moved")]),e._v(".")]),e._v(" "),a("p",[e._v("You'll now find information like this in the "),a("a",{attrs:{href:"https://github.com/ipld/ipld/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipld/ipld"),a("OutboundLink")],1),e._v(" meta-repo,\nand published to the web at https://ipld.io/ .")]),e._v(" "),a("p",[e._v("All documentation, fixtures, specifications, and web content is now gathered into that repo.\nPlease update your links, and direct new contributions there.")]),e._v(" "),a("p",[e._v("!!!")]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"let-s-talk-about-how-we-do-fixtures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-talk-about-how-we-do-fixtures"}},[e._v("#")]),e._v(" let's talk about how we do fixtures")]),e._v(" "),a("p",[e._v('This is an exploration report to talk about ways we could do test fixtures that is cross-language and generally "feels nice".')]),e._v(" "),a("p",[e._v("We have some work in this area already, but we need a lot more of it.\nMaybe some of it can adopt some standard conventions to save work and increase readability (and writeability).")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("separate document segments should be clearly delinated, and allow separate formats.\n"),a("ul",[a("li",[e._v("(e.g., no, one homogeneus JSON document full of more JSON documents is not actually ideal.)")])])]),e._v(" "),a("li",[e._v("separate document segments should be able to be combined into one file and edited together.\n"),a("ul",[a("li",[e._v("it just saves a lot of time and hastle in practice.")]),e._v(" "),a("li",[e._v('avoids the question of "which of these files are related?" without spaming tons of directories (which would otherwise be common in practice).')]),e._v(" "),a("li",[e._v("if document segments have to be split into wholy separate files, one can't copy-paste snippets of fixture easily.  (Means: bug reports and discussions in issues may be likely to invent an ad-hoc syntax for document segments, resulting in more work to turn those things into fixtures.)")])])]),e._v(" "),a("li",[e._v("easy to edit as a human.  Introducing new segments should ideally be context-free.\n"),a("ul",[a("li",[e._v("writing these fixtures needs to be as low-friction as practically possible.")]),e._v(" "),a("li",[e._v('e.g.: "put cursor at end of file, press enter, press dash three times" -- something like this complexity level is the goal.')])])]),e._v(" "),a("li",[e._v("should preserve whitespace precisely.\n"),a("ul",[a("li",[e._v("it would be problematic for parser fixtures if whitespace isn't preserved!  (Mind touchy things like trailing linebreaks, especially.)")])])]),e._v(" "),a("li",[e._v("must be able to frame incomplete sub-documents, and not require knowledge of the parser for them.\n"),a("ul",[a("li",[e._v("I need to use this to write fixtures for parsers "),a("em",[e._v("and their error modes")]),e._v(", which means sub-documents might be "),a("em",[e._v("intentionally")]),e._v(" unparsable.")])])]),e._v(" "),a("li",[e._v("nonrequirement: able to represent binary.\n"),a("ul",[a("li",[e._v("as close as possible is certainly better.")]),e._v(" "),a("li",[e._v('this can\'t be a goal simply because it runs directly crosswise to "easy to edit as a human".')]),e._v(" "),a("li",[e._v("we may want to make a convention around base64 (?) and possible around comments in that format (?) ... but this can be implemented separately from the overall document container format.")])])]),e._v(" "),a("li",[e._v("nonrequirement: recursiveness.\n"),a("ul",[a("li",[e._v("in practice, test fixtures tend not to require this.")]),e._v(" "),a("li",[e._v("less complexity is better.")])])]),e._v(" "),a("li",[e._v('nonrequirement: anything like "BDD" or smelling like cucumber.\n'),a("ul",[a("li",[e._v("that's just not the goal here.")])])]),e._v(" "),a("li",[e._v("stretch goal: programmatically updateable.  In other words: I should be able to write half a fixture, run a program, and have it write the rest of the file.\n"),a("ul",[a("li",[e._v("if this is supported, ideally we'll have a check in CI that makes sure all files are canonically formatted.")])])]),e._v(" "),a("li",[e._v("stretch goal: handles content-addressable documents well.\n"),a("ul",[a("li",[e._v("this is a stretch goal rather than a hard requirement because: content-addressable DAGs are "),a("em",[e._v("common")]),e._v(" in our work, but not "),a("em",[e._v("universal")]),e._v(".  Some things we write fixtures for don't involve DAGs, so we should solve that problem first, and then figure out how to also handle DAGs.")]),e._v(" "),a("li",[e._v("this is a stretch goal rather than a hard requirement because: this author has the hypothesis this will be easy to add to existing container formats.")])])])]),e._v(" "),a("h2",{attrs:{id:"prior-art"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prior-art"}},[e._v("#")]),e._v(" prior art")]),e._v(" "),a("ul",[a("li",[e._v("selector fixtures in json: https://github.com/ChainSafe/ipld-traversal-vectors\n"),a("ul",[a("li",[e._v('notes on outcome: awesome... except when people eyeball it, the fact that the top level maps are containing "control plane" info (which part of the fixture it is) is non-obvious.')])])]),e._v(" "),a("li",[e._v("schema DSL parser fixtures: https://github.com/ipld/js-ipld-schema/tree/master/test/fixtures and https://github.com/ipld/go-ipld-schema/tree/master/test/fixtures\n"),a("ul",[a("li",[e._v("notes on outcome: the parts that use yaml: awesome... although a lot of the yaml files are resorting to heredocs.\n"),a("ul",[a("li",[e._v("heredocs aren't always preserved by yaml parse and reserialize, so that's a knock against the \"programatically updatable\" goal.")]),e._v(" "),a("li",[e._v("This author is frankly just not a fan of yaml.  The parsers are... complex.")])])]),e._v(" "),a("li",[e._v("notes on outcome: the parts that don't use yaml: awesome... except sometimes there's two files that are siblings, and they're related, and you just have to \"know\" that.")])])]),e._v(" "),a("li",[e._v('(other project) "interactive" fixtures in noise: https://github.com/pipedown/noise/blob/master/repl-tests/limit.noise\n'),a("ul",[a("li",[e._v("it has a fixture update script!  (yes!)  https://github.com/pipedown/noise/blob/master/update-test-repl.sh")]),e._v(" "),a("li",[e._v("interesting example.  leans a lot on domain specifics for separation, but interesting.")]),e._v(" "),a("li",[e._v("hypothetically, the fact that these are commands to a textual interactive UI means it could also have included other binary files by commands in the system which do so.  (doesn't generalize to us, but interesting.)")])])]),e._v(" "),a("li",[e._v('(other project) "interactive" fixtures in mysql: https://dev.mysql.com/doc/dev/mysql-server/latest/PAGE_MYSQL_TEST_RUN.html\n'),a("ul",[a("li",[e._v("similar to (and probably inspiration of) what the noise project did.")])])]),e._v(" "),a("li",[e._v("(other project) fixtures in repeatr: https://github.com/polydawn/repeatr/blob/master/examples/hello-cached.tcase\n"),a("ul",[a("li",[e._v("this is using wishfix, which will be discussed more below")]),e._v(" "),a("li",[e._v("as with the above example, there are auto-updating scripts, so you write some of the fixture, and then run it, and use git to control changes in the future.")]),e._v(" "),a("li",[e._v('as with the above example, this happened to "run commands", and it does actually reference other files.  (probably doesn\'t generalize to IPLD needs, but interesting.)')])])])]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" options")]),e._v(" "),a("h3",{attrs:{id:"txtar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txtar"}},[e._v("#")]),e._v(" txtar")]),e._v(" "),a("p",[e._v("Txtar is a simple textual format, with reference implementation at https://pkg.go.dev/golang.org/x/tools/txtar .")]),e._v(" "),a("ul",[a("li",[e._v("Pros:\n"),a("ul",[a("li",[e._v("fits the requirements..")])])]),e._v(" "),a("li",[e._v("Cons:\n"),a("ul",[a("li",[e._v("probably needs porting to every other language than golang.")]),e._v(" "),a("li",[a("strong",[e._v("is not safe for all content!")]),e._v('  a file which contains "'),a("code",[e._v("^-- uhoh --$")]),e._v('" will be trouble.  There is no escaping mechanism for this.')])])]),e._v(" "),a("li",[e._v("Interesting:\n"),a("ul",[a("li",[e._v("is considered isomorphic to files, which can be kind of handy.")])])]),e._v(" "),a("li",[e._v("Needs verification:\n"),a("ul",[a("li",[e._v("clarity of trailing linebreaks")])])])]),e._v(" "),a("h3",{attrs:{id:"wishfix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wishfix"}},[e._v("#")]),e._v(" wishfix")]),e._v(" "),a("p",[e._v("Wishfix is a simple textual format, with reference implementation at https://github.com/warpfork/go-wish/blob/master/wishfix/format.md .")]),e._v(" "),a("ul",[a("li",[e._v("Pros:\n"),a("ul",[a("li",[e._v("fits the requirements.")]),e._v(" "),a("li",[e._v("is safe for all content (the indentation makes the control plane vs data fields unambiguous).")])])]),e._v(" "),a("li",[e._v("Cons:\n"),a("ul",[a("li",[e._v("probably needs porting to every other language than golang.\n"),a("ul",[a("li",[e._v("... and arguably a bit more complicated than txtar.")])])]),e._v(" "),a("li",[e._v("arguably, the fact it uses tabs.  I don't think this should be a problem for anyone with sane amounts of control over their text editor, but arguably, it could create a hassle for human editors.\n"),a("ul",[a("li",[e._v("this is probably largely mitigated by the fact it will be immediately checked and normalized by the library that handles the data.")]),e._v(" "),a("li",[e._v('keep in mind that this also is what was used to buy the feature of "safe for all content", which is a fairly significant feature.')])])])])]),e._v(" "),a("li",[e._v("Interesting:\n"),a("ul",[a("li",[e._v("made by @warpfork, as the url implies.  But I'm not super attached to it, honestly.  It's a shop-made-jig.")])])]),e._v(" "),a("li",[e._v("Needs verification:\n"),a("ul",[a("li",[e._v("clarity of trailing linebreaks")])])])]),e._v(" "),a("h3",{attrs:{id:"plain-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plain-json"}},[e._v("#")]),e._v(" plain json")]),e._v(" "),a("p",[e._v("Nuff said.")]),e._v(" "),a("ul",[a("li",[e._v("Pros:\n"),a("ul",[a("li",[e._v("trivial to implement in any language, since a json parser is surely already there.")]),e._v(" "),a("li",[e._v("is safe for all content (some things just get a great deal of escaping).")])])]),e._v(" "),a("li",[e._v("Cons:\n"),a("ul",[a("li",[e._v("doesn't fit the requirements.\n"),a("ul",[a("li",[e._v("Does not clearly separate document segments; does not allow separate formats per segment.")]),e._v(" "),a("li",[e._v("Cannot contain unparsable document segments!")])])]),e._v(" "),a("li",[e._v("will necessarily lead to document segment semantics being re-invented in unclear ways.\n"),a("ul",[a("li",[e._v("example: see the way the top-level maps in https://github.com/ChainSafe/ipld-traversal-vectors evolved.")]),e._v(" "),a("li",[e._v("this isn't a major problem, but it is a noticable source of friction for both writing and reading (especially novice reading -- and we do want to be able to link to these as living documentation).")])])])])])]),e._v(" "),a("h3",{attrs:{id:"plain-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plain-yaml"}},[e._v("#")]),e._v(" plain yaml")]),e._v(" "),a("p",[e._v("Nuff said.")]),e._v(" "),a("ul",[a("li",[e._v("Pros:\n"),a("ul",[a("li",[e._v("trivial to implement in any language, since a yaml parser is surely already there.\n"),a("ul",[a("li",[a("em",[e._v("debatable")]),e._v(", though.  if a yaml parser "),a("em",[e._v("isn't")]),e._v(" handy, it's a "),a("em",[e._v("bear")]),e._v(" to write one.")])])]),e._v(" "),a("li",[e._v('heredocs can be used to make sub-documents a bit more obvious!  and heredocs can contain "unparseable" subdocuments too.')])])]),e._v(" "),a("li",[e._v("Cons:\n"),a("ul",[a("li",[e._v("heredocs are a lie.  yaml heredocs are, by specification, incapable of retaining all forms of whitespace nonlossily.")]),e._v(" "),a("li",[e._v("heredocs are also not retained in practice by some common yaml implementations, which is... not a killer, but not fortunate, either.\n"),a("ul",[a("li",[e._v("this is a fairly significant problem because it means many libraries will not be viable for doing automated rewriting and updating of fixtures.\n"),a("ul",[a("li",[e._v('it\'s possible this can be made irrelevant by saying "xyz is the reference implementation and any automated updating is handled by that implementation", but still, ugh.')])])])])])])])]),e._v(" "),a("h3",{attrs:{id:"directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directories"}},[e._v("#")]),e._v(" directories")]),e._v(" "),a("p",[e._v("We can always ignore the requirement about composing multiple document segments into one file and use plain old directories.")]),e._v(" "),a("ul",[a("li",[e._v("Pros:\n"),a("ul",[a("li",[e._v("incredibly easy.")])])]),e._v(" "),a("li",[e._v("Cons:\n"),a("ul",[a("li",[e._v("skipped one of our requirements.\n"),a("ul",[a("li",[e._v("Having to open several files at once can be not super fun to edit.")])])])])])]),e._v(" "),a("h3",{attrs:{id:"other-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-options"}},[e._v("#")]),e._v(" other options?")]),e._v(" "),a("p",[e._v("This probably isn't an exhaustive list of ways data can be put together.")]),e._v(" "),a("h2",{attrs:{id:"patching-our-way-to-happiness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patching-our-way-to-happiness"}},[e._v("#")]),e._v(" patching our way to happiness")]),e._v(" "),a("h3",{attrs:{id:"txtar-plus-dag-helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txtar-plus-dag-helpers"}},[e._v("#")]),e._v(" txtar plus dag helpers")]),e._v(" "),a("p",[e._v('We could make a convention that any "directories" inside the txtar archive named "dag*/" will be parsed as dag-json,\nbut reformatted to be pretty-printed JSON,\nand renamed to have the correct v1 CID for that document.')]),e._v(" "),a("p",[e._v("This would make editing heaps of DAGs easy, with the help of very minor amounts of tooling...\nwhile also not obstructing the writing of fixtures which "),a("em",[e._v("don't")]),e._v(" want to opt into that tooling (for whatever reason (maybe it's testing v0 CIDs, etc!)).")]),e._v(" "),a("p",[e._v("This idea fits especially cleanly onto txtar, because of its metaphor about filesystems, but could really apply to almost anything.")]),e._v(" "),a("h2",{attrs:{id:"relating-the-fixtures-to-the-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relating-the-fixtures-to-the-implementations"}},[e._v("#")]),e._v(" relating the fixtures to the implementations")]),e._v(" "),a("p",[e._v("Connecting fixtures to implementations is an awkwardly two-way street.\nWe definitely need implementation repos to be able to refer to the fixtures.\nWe'd like to make sure the fixtures all work when making changes to the repo that contains them;\nbut that might be difficult since that could present a reference cycle problem,\nand there's also a one-to-many consideration to handle.")]),e._v(" "),a("p",[e._v("Likely we can refrain from being completely prescriptive about this.")]),e._v(" "),a("ul",[a("li",[e._v("git submodules are a good way for an implementation repo to refer to the spec repo clearly.")]),e._v(" "),a("li",[e._v("vendoring of fixture files into a implementation repo is also viable (it's just important that the implementation then makes sure they have a way to notice and pull in updates).")]),e._v(" "),a("li",[e._v("either of these works; implementation repos can do as they like.")])]),e._v(" "),a("p",[e._v("It's a little less clear what the repo containing the language-agnostic specs should do.\nThoughts on this welcome.")])])}),[],!1,null,null,null);t.default=s.exports}}]);