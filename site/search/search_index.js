var __index = {"config":{"lang":["fr"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"home/index.html","title":"Welcome to MkDocs","text":"<p>index.md, 11 juin 2023 08h22.</p> <p>For full documentation visit mkdocs.org.</p>"},{"location":"home/index.html#commands","title":"Commands","text":"<ul> <li><code>mkdocs new [dir-name]</code> - Create a new project.</li> <li><code>mkdocs serve</code> - Start the live-reloading docs server.</li> <li><code>mkdocs build</code> - Build the documentation site.</li> <li><code>mkdocs -h</code> - Print help message and exit.</li> </ul>"},{"location":"home/index.html#project-layout","title":"Project layout","text":"<pre><code>mkdocs.yml    # The configuration file.\ndocs/\n    index.md  # The documentation homepage.\n    ...       # Other markdown pages, images and other files.\n</code></pre>"},{"location":"home/Markdown-Cheatsheet.html","title":"Markdown Cheatsheet","text":"<p>This is intended as a quick reference and showcase. For more complete info,  see John Gruber's original spec and  the Github-flavored Markdown info page.</p> <p>Note that there is also a Cheatsheet specific to Markdown Here if that's what you're looking for. You can also check out more Markdown tools.</p>"},{"location":"home/Markdown-Cheatsheet.html#table-of-contents","title":"Table of Contents","text":"<p>Headers Emphasis Lists Links Images Code and Syntax Highlighting Footnotes Tables Blockquotes Inline HTML Horizontal Rule Line Breaks YouTube Videos </p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#headers","title":"Headers","text":"<pre><code># H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n</code></pre>"},{"location":"home/Markdown-Cheatsheet.html#h1","title":"H1","text":""},{"location":"home/Markdown-Cheatsheet.html#h2","title":"H2","text":""},{"location":"home/Markdown-Cheatsheet.html#h3","title":"H3","text":""},{"location":"home/Markdown-Cheatsheet.html#h4","title":"H4","text":""},{"location":"home/Markdown-Cheatsheet.html#h5","title":"H5","text":""},{"location":"home/Markdown-Cheatsheet.html#h6","title":"H6","text":"<p>Alternatively, for H1 and H2, an underline-ish style:</p>"},{"location":"home/Markdown-Cheatsheet.html#alt-h1","title":"Alt-H1","text":""},{"location":"home/Markdown-Cheatsheet.html#alt-h2","title":"Alt-H2","text":""},{"location":"home/Markdown-Cheatsheet.html#emphasis","title":"Emphasis","text":"<pre><code>Emphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n</code></pre> <p>Emphasis, aka italics, with asterisks or underscores.</p> <p>Strong emphasis, aka bold, with asterisks or underscores.</p> <p>Combined emphasis with asterisks and underscores.</p> <p>Strikethrough uses two tildes. ~~Scratch this.~~</p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#lists","title":"Lists","text":"<p>(In this example, leading and trailing spaces are shown with with dots: \u22c5)</p> <pre><code>1. First ordered list item\n2. Another item\n\u22c5\u22c5* Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n\u22c5\u22c51. Ordered sub-list\n4. And another item.\n\n\u22c5\u22c5\u22c5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n\u22c5\u22c5\u22c5To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n\u22c5\u22c5\u22c5Note that this line is separate, but within the same paragraph.\u22c5\u22c5\n\u22c5\u22c5\u22c5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n</code></pre> <ol> <li>First ordered list item</li> <li>Another item</li> <li>Unordered sub-list. </li> <li>Actual numbers don't matter, just that it's a number</li> <li>Ordered sub-list</li> <li>And another item.</li> </ol> <p>You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).</p> <p>To have a line break without a paragraph, you will need to use two trailing spaces.    Note that this line is separate, but within the same paragraph.    (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p> <ul> <li>Unordered list can use asterisks</li> <li>Or minuses</li> <li>Or pluses</li> </ul> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#links","title":"Links","text":"<p>There are two ways to create links.</p> <pre><code>[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links. \nhttp://www.example.com or &lt;http://www.example.com&gt; and sometimes \nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n</code></pre> <p>I'm an inline-style link</p> <p>I'm an inline-style link with title</p> <p>I'm a reference-style link</p> <p>I'm a relative reference to a repository file</p> <p>You can use numbers for reference-style link definitions</p> <p>Or leave it empty and use the link text itself.</p> <p>URLs and URLs in angle brackets will automatically get turned into links.  http://www.example.com or http://www.example.com and sometimes  example.com (but not on Github, for example).</p> <p>Some text to show that the reference links can follow later.</p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#images","title":"Images","text":"<pre><code>Here's our logo (hover to see the title text):\n\nInline-style: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style: \n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n</code></pre> <p>Here's our logo (hover to see the title text):</p> <p>Inline-style:  </p> <p>Reference-style:  </p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#code-and-syntax-highlighting","title":"Code and Syntax Highlighting","text":"<p>Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.</p> <pre><code>Inline `code` has `back-ticks around` it.\n</code></pre> <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p> <p>Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.</p> <pre><code>```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n<pre><code>```python\ns = \"Python syntax highlighting\"\nprint s\n</code></pre>\n\n<pre><code>No language indicated, so no syntax highlighting. \nBut let's throw in a &amp;lt;b&amp;gt;tag&amp;lt;/b&amp;gt;.\n</code></pre>\n</code></pre> <pre><code>var s = \"JavaScript syntax highlighting\";\nalert(s);\n</code></pre> <pre><code>s = \"Python syntax highlighting\"\nprint s\n</code></pre> <pre><code>No language indicated, so no syntax highlighting in Markdown Here (varies on Github). \nBut let's throw in a &lt;b&gt;tag&lt;/b&gt;.\n</code></pre> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#footnotes","title":"Footnotes","text":"<p>Footnotes aren't part of the core Markdown spec, but they supported by GFM.</p> <pre><code>Here is a simple footnote[^1].\n\nA footnote can also have multiple lines[^2].  \n\nYou can also use words, to fit your writing style more closely[^note].\n\n[^1]: My reference.\n[^2]: Every new line should be prefixed with 2 spaces.  \n  This allows you to have a footnote with multiple lines.\n[^note]:\n    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  \n    This footnote also has been made with a different syntax using 4 spaces for new lines.\n</code></pre> <p>Renders to:</p> <p></p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#tables","title":"Tables","text":"<p>Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.</p> <pre><code>Colons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the \nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n</code></pre> <p>Colons can be used to align columns.</p> Tables Are Cool col 3 is right-aligned $1600 col 2 is centered $12 zebra stripes are neat $1 <p>There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.</p> Markdown Less Pretty Still <code>renders</code> nicely 1 2 3 <p></p>"},{"location":"home/Markdown-Cheatsheet.html#blockquotes","title":"Blockquotes","text":"<pre><code>&gt; Blockquotes are very handy in email to emulate reply text.\n&gt; This line is part of the same quote.\n\nQuote break.\n\n&gt; This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. \n</code></pre> <p>Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.</p> <p>Quote break.</p> <p>This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can put Markdown into a blockquote. </p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#inline-html","title":"Inline HTML","text":"<p>You can also use raw HTML in your Markdown, and it'll mostly work pretty well. </p> <pre><code>&lt;dl&gt;\n  &lt;dt&gt;Definition list&lt;/dt&gt;\n  &lt;dd&gt;Is something people use sometimes.&lt;/dd&gt;\n\n  &lt;dt&gt;Markdown in HTML&lt;/dt&gt;\n  &lt;dd&gt;Does *not* work **very** well. Use HTML &lt;em&gt;tags&lt;/em&gt;.&lt;/dd&gt;\n&lt;/dl&gt;\n</code></pre> Definition list Is something people use sometimes. Markdown in HTML Does *not* work **very** well. Use HTML tags. <p></p>"},{"location":"home/Markdown-Cheatsheet.html#horizontal-rule","title":"Horizontal Rule","text":"<pre><code>Three or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n</code></pre> <p>Three or more...</p> <p>Hyphens</p> <p>Asterisks</p> <p>Underscores</p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#line-breaks","title":"Line Breaks","text":"<p>My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. \"Markdown Toggle\" is your friend. </p> <p>Here are some things to try out:</p> <pre><code>Here's a line for us to start with.\n\nThis line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n\nThis line is also a separate paragraph, but...\nThis line is only separated by a single newline, so it's a separate line in the *same paragraph*.\n</code></pre> <p>Here's a line for us to start with.</p> <p>This line is separated from the one above by two newlines, so it will be a separate paragraph.</p> <p>This line is also begins a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the same paragraph.</p> <p>(Technical note: Markdown Here uses GFM line breaks, so there's no need to use MD's two-space line breaks.)</p> <p></p>"},{"location":"home/Markdown-Cheatsheet.html#youtube-videos","title":"YouTube Videos","text":"<p>They can't be added directly but you can add an image with a link to the video like this:</p> <pre><code>&lt;a href=\"http://www.youtube.com/watch?feature=player_embedded&amp;v=YOUTUBE_VIDEO_ID_HERE\n\" target=\"_blank\"&gt;&lt;img src=\"http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg\" \nalt=\"IMAGE ALT TEXT HERE\" width=\"240\" height=\"180\" border=\"10\"&gt;&lt;/a&gt;\n</code></pre> <p>Or, in pure Markdown, but losing the image sizing and border:</p> <pre><code>[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)\n</code></pre> <p>Referencing a bug by #bugID in your git commit links it to the slip. For example #1. </p> <p>License: CC-BY</p>"},{"location":"home/about.html","title":"\u00c0 propos","text":"<p>MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation.</p> <p>Documentation source files are written in Markdown, and configured with a single YAML configuration file.</p> <ul> <li>https://mkdocs.org</li> <li>https://www.markdownguide.org/</li> <li>https://www.markdowntutorial.com/</li> </ul> <p>mkdocs-material is a Material Design theme for MkDocs that allows you to create a branded static site from a set of Markdown files to host the documentation of your Open Source or commercial project.</p> <p>It is customizable, searchable, mobile-friendly and supports 40+ languages.</p> <ul> <li>https://squidfunk.github.io/mkdocs-material/</li> <li>https://material.io/</li> </ul> <p></p> <p></p> <p>https://squidfunk.github.io/mkdocs-material/reference/admonitions/</p> <p>Note</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css</p> <p>body_class: markdown-body</p>"},{"location":"home/markdown-folder/markdown.html","title":"Markdown","text":""},{"location":"home/markdown-folder/markdown.html#admonitions","title":"Admonitions","text":"<p>See here for more information about admonitions.</p>"},{"location":"home/markdown-folder/markdown.html#usage","title":"Usage","text":"<pre><code>!!! note \"Phasellus posuere in sem ut cursus\"\n\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod\n    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor\n    massa, nec semper lorem quam in massa.\n</code></pre> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p>"},{"location":"home/markdown-folder/markdown.html#inline-blocks","title":"Inline blocks","text":"<p>Admonitions can also be rendered as inline blocks (e.g., for sidebars), placing them to the right using the  <code>inline</code> + <code>end</code> modifiers, or to the left using only the <code>inline</code> modifier:</p> <pre><code>!!! info inline end \"Lorem ipsum\"\n\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit. Nulla et euismod nulla.\n    Curabitur feugiat, tortor non consequat\n    finibus, justo purus auctor massa, nec\n    semper lorem quam in massa.\n</code></pre> <p>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <pre><code>!!! info inline \"Lorem ipsum\"\n\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit. Nulla et euismod nulla.\n    Curabitur feugiat, tortor non consequat\n    finibus, justo purus auctor massa, nec\n    semper lorem quam in massa.\n</code></pre> <p>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p>"},{"location":"home/markdown-folder/markdown.html#supported-types","title":"Supported types","text":"<p>note</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>info</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>warning</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p> <p>example</p> <p>Phasellus posuere in sem ut cursus</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.</p>"},{"location":"home/markdown-folder/markdown.html#icons-emojis","title":"Icons, Emojis","text":"<p>See here for more information.</p>"},{"location":"home/markdown-folder/markdown.html#images","title":"Images","text":"<pre><code>![](assets/3.png)\n</code></pre> <pre><code>![Image title](https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg){: style=\"height:50px;\"}\n</code></pre> <p>See here for more information.</p> <p>Source : <code>home/markdown.md</code>, 11 juin 2023.</p>"},{"location":"part1/page1.html","title":"Titre de la page 1","text":""},{"location":"part1/page1.html#intermissa-summae-fallere-aliquis","title":"Intermissa summae fallere aliquis","text":"<p>Lorem markdownum peregit saxo umeros aequorei exitus terrae te Lucifer iniqua. Versus patriumque vincirem superest, nunc Latona, nos mollesque, valentius erubuit poenamque huic dixit? Cumulemus est mentis Orneus velamina, inmoriuntur adhibet clarissima aliena, quem artus, nec. Urbis vetito, umor cur herbis inplet, calenti tempora, sanguine metuens, quoque adversaque in?</p> <p>Sidera conlucere humanos scelerataque, huic: atque dum gradus. Motus gremio, generosa, infecerat nodoso mentis illo aquarum coniectum densus Phaethon servat, se non restat, non! Remis quae adspexit defendite sentiat sollicitat Verque membris.</p>"},{"location":"part1/page1.html#montis-quo-nec-hinc-inspirat-portas-me","title":"Montis quo nec hinc inspirat portas me","text":"<p>Populos aut non sustinet bubo dum: hoc esse memor? Et ac, modo latet persequar, ea foliis, vasta Phene scelerata inopino? Sacer non ideoque tegitur potuit, suos animi internodia virga spicula idque mensas sine avium opem crescit, nisi? Silentum tactu, sunt Nelei ipsa mens praecipuum amantes nec contraria fueris Achilles tecta Canentem. Doloris Delphosque nuper transitque quaque spoliavit et mirantur totiens suam Iuno somni domos nostroque decolor.</p> <ol> <li>Nec nec fuisses aera</li> <li>Cessant terga teli</li> <li>Praecipitata Neptunius dea tanta utendum hoc</li> <li>Nam curis vertuntur amori camini luebat</li> <li>Passis tecta petit sustinet tectoque tutum ut</li> <li>Percepit antro quam</li> </ol>"},{"location":"part1/page1.html#poposcerat-vocari","title":"Poposcerat vocari","text":"<p>Atlas flavae calescit volucrum. Sonti reddit multi audaci, caput. Rubigine evolat movere abripit, placidos arborei regionibus misit. Ignibus trisulcis tamen inveniunt quicquid peteret valuissent levat convicia.</p> <ul> <li>Mala apro audacia revertentes foliis subcrescit est</li> <li>Sorores potestas potentem flammifera quae ambierantque vidit</li> <li>Victima duce profuso circumspicit quoque</li> <li>Nec quid pedis facinusque nisi restabat dumque</li> <li>Hic aere cadet aut pugnantem fatus femineos</li> <li>In iuvenis et viso</li> </ul> <p>Mira Neptune redeuntis, hoc illa est moles, quoniamque Ulixis nympha; squamae erit. Est amantes horrida perspicit quoniam! Ordine et providus delubris nec, non neve saxo diemque, ita. Mori Caesaris sub aera!</p>"},{"location":"part1/page2.html","title":"Titre de la page 2","text":""},{"location":"part1/page2.html#mentem-tu-terraeque-pudici","title":"Mentem tu terraeque pudici","text":"<p>Lorem markdownum, sic sic undas iuncti cruores exanimis visa, omnique obstipuere pretium dicione trunca coniurataeque nondum. Citharaque onusque; frugum in nostrum femorum. Est Ethemon nos est arva: veneno nam, sorores. Inpubibus crevit, nec loco sunt deicit premis.</p> <ul> <li>Timuere illa unus mihi scrobibus monimenta stare</li> <li>Cognataque donasse ignes vino verteris eram retinente</li> <li>Illis modo quacumque deteriorque sui quo isdem</li> </ul> <p>Colorem nomina frondosus et futura inposuere ambit? Est uvae, ante sui pavidamque humo antiquas natam imo sit interdumque lacertis et eunti secuta? Tecum Nesse se percutit, ego sub deiectuque latrantes Argolicas, sibi primus. Iam artus tetigisse ignes. Sorores quas.</p> Tables Are Cool col 1 is left-aligned $1600 col 2 is centered $12 col 3 is right-aligned $1"},{"location":"part1/page2.html#primum-adusque-feremus-caput-utque","title":"Primum adusque feremus caput utque","text":"<p>Nescit inclusaque prima expugnare perstat tractare Acmona Iuppiter frontem et quodque suo! Dixit cum.</p> <ul> <li>Deseruit victor</li> <li>Quippe Polymestoris oculos colit torum quoque de</li> <li>Et causa dea corpora guttae loquor patriam</li> </ul>"},{"location":"part1/page2.html#levi-mora-pariter","title":"Levi mora pariter","text":"<p>Iubenti Dixit, meorum ore quod manu; fuit gaudent sonum certa corpora. Terram effugies ut sonat Phoebus timentem inde. Ait mentis dicar nostros est esse infelix gravis, vela efferor est. Harundo vitulos, in sanguine minuunt dumque habeat Palicorum prosunt caruissem unde prospexit nubes mentes ultima.</p> <ol> <li>Occupat verba Camenis restituit primoque cremarat et</li> <li>Secum lacrimas ruris me et frondes in</li> <li>Nunc vidit veteris digiti digna senectae tantis</li> <li>Precibusque Iani temptasse male</li> <li>Patefecerat Stygios semper</li> <li>Quoque e posse</li> </ol> <p>Pater ora, si sagittis dedit membra, prodit ita iam nuda, eque diri solidis, nec! Saeva brevior est sua enim nescis me ramos e adnuit pietate onerosa, per. Limina pisces, in aures cultro vincta in iuvenem nulli caelestes palmas damnantem nitido iamque nisi grandia nullos, ima.</p>"},{"location":"part2/page1.html","title":"Titre de la page 1","text":""},{"location":"part2/page1.html#interque-honore","title":"Interque honore","text":"<p>Lorem markdownum gaudete adest Alcyonen iuvenale longa me arce dixit. Orat interdum, genitor cani! Nec de quasque tenuerunt, quoque illa, des vi!</p> <ol> <li>Est divorum cum sub iactata potiuntur et</li> <li>Usus cacumina in equis huc rumpere Venus</li> <li>Suus porrexit</li> <li>Versa iam herbas carinam recludit</li> <li>Utraque viri captus</li> </ol> <p>Levitate gemmis; patent Phrygiae ac luctus superis. Dabat damus hanc desideret si deus augendo negare crudelis vires, quod, pressanda cum magnas et fluit incaluit adversam.</p>"},{"location":"part2/page1.html#tempore-mare-stridore-infra-submittere-evertere-deterruit","title":"Tempore mare stridore infra submittere evertere deterruit","text":"<p>Excipit poteratque oblivia. In ne letum scindere, collocat fas temploque: in sine. Rara Assyrius facit invecta cum fecunda precibus: nam: et avidus florem, torserat furtim bella!</p> <p>Qui sensit, Pomona in cuspide noviens ne decus id. Mores et delapsa responsa, timor caeruleum exaudire, florentis flammas ensis aliqua et nutricis vulnera quidem! Eram superum cum enim modo Iovis et in deae est, capere laevum tibi vera crimen fero, non! Nusquam habes mugit Erecthida plenaque, et exhalata pudoris tulerant, numina!</p> <p>Famulus nec obstitit linguae admovitque carbasa subit natique lambit, non rogus enim iudicis abscessisse ipse? Edam ventis, moly aegide. Revocare per!</p> <p>Minor labor tuo genitus Lycum! Gener mihi hanc ales mortalia matris, modo semel facit subit ille.</p> <p>Phoebeia senectus sacerdotis damnum videre lacrimas quod, auraeque bracchia, dant parte caede perisset cernere toto victarum pararet aures. Moram satus tempora, stimuletur quantusque vestigia pinu, bacae.</p>"},{"location":"part2/page2.html","title":"Titre de la page 2","text":"<p>Project documentation with Markdown</p> <p> </p> <p>MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation. Documentation source files are written in Markdown, and configured with a single YAML configuration file. It is designed to be easy to use and can be extended with third-party themes, plugins, and Markdown extensions.</p> <p>Please see the Documentation for an introductory tutorial and a full user guide.</p>"},{"location":"part2/page2.html#features","title":"Features","text":"<ul> <li>Build static HTML files from Markdown files.</li> <li>Use Plugins and Markdown Extensions to enhance MkDocs.</li> <li>Use the built-in themes, third party themes or create your own.</li> <li>Publish your documentation anywhere that static files can be served.</li> <li>Much more!</li> </ul>"},{"location":"part2/page2.html#support","title":"Support","text":"<p>If you need help with MkDocs, do not hesitate to get in contact with us!</p> <ul> <li>For questions and high-level discussions, use Discussions on GitHub.<ul> <li>For small questions, a good alternative is the Chat room on     Gitter/Matrix.</li> </ul> </li> <li>To report a bug or make a feature request, open an Issue on GitHub.</li> </ul> <p>Please note that we may only provide support for problems/questions regarding core features of MkDocs. Any questions or bug reports about features of third-party themes, plugins, extensions or similar should be made to their respective projects. But, such questions are not banned from the chat room.</p> <p>Make sure to stick around to answer some questions as well!</p>"},{"location":"part2/page2.html#links","title":"Links","text":"<ul> <li>Official Documentation</li> <li>Latest Release Notes</li> <li>Catalog of third-party plugins, themes and recipes</li> </ul>"},{"location":"part2/page2.html#contributing-to-mkdocs","title":"Contributing to MkDocs","text":"<p>The MkDocs project welcomes, and depends on, contributions from developers and users in the open source community. Please see the Contributing Guide for information on how you can help.</p>"},{"location":"part2/page2.html#code-of-conduct","title":"Code of Conduct","text":"<p>Everyone interacting in the MkDocs project's codebases, issue trackers, and discussion forums is expected to follow the PyPA Code of Conduct.</p>"},{"location":"part2/page2.html#license","title":"License","text":"<p>BSD-2-Clause</p>"}]}