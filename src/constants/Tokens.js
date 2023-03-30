export const TOKENS = `# \`keyword\`
Pre-defined and reserved words.
\`\`\`javascript
  for (const foo of bar) {
  if (foo === 'foobar') break;
  await foo;
  }
\`\`\`

# \`builtin\`
Functions/Methods/Classes/Types that are available out of the box.
\`\`\`python
pi = round(float('3.14159'), 2)
\`\`\`
\`\`\`typescript
type SearchFunc = (source: string, subStr: string) => boolean;
\`\`\`

# \`class-name\`
The name of a class, interface, trait, or type.
\`\`\`javascript
class Rectangle extends Square { /* ... */ }
\`\`\`
\`\`\`c#
public class CameraController : MonoBehaviour { /* ... */ }
\`\`\`

# \`function\`
Name of a function or method
\`\`\`javascript
function isEven(number) {
	return Number(number) % 2 === 0;
}
const isOdd = (number) => !isEven(number);
\`\`\`

# \`number\`
A numerical value, regardless of base and order, and no matter real or imaginary.
\`\`\`python
print(3.14159 * 42)
print(1e100 + .001j)
return foo & 0xdeadbeef
\`\`\`

# \`string\`
Literal text, including numbers and symbols and maybe even more special characters.
\`\`\`javascript
let greeting = 'Hello World!';
\`\`\`

# \`char\`
A string that can comprise only a single character, enforced by the language.
// What dis?
\`\`\`elm
['A', 'z', '0', '-', '\\t', '\\u{2728}']
\`\`\`

# \`symbol\`
A primitive data type found in some languages, can be thought of as an identifier.
\`\`\`smalltalk
#myFirstSymbol "#myFirstSymbol is a symbol in Smalltalk"
\`\`\`

# \`regex\`
A regular expression.
\`\`\`smalltalk
let entity = /&#x?[\\da-f]{1,8};/;
\`\`\`

# \`url\`
A link to another page or resource.
\`\`\`css
body {
	background: url(foo.png);
}
\`\`\`
\`\`\`markdown
[Prism](https://prismjs.com) is a cool syntax highlighter.
\`\`\`

# \`operator\`
A symbol that represents an action or process, whether it's a mathematical operation, logical operation, and so on.
\`\`\`javascript
x += (y + 4 >> -z === w) ? b ** c : ~a;
\`\`\`

# \`variable\`
The name of a variable. This token is intended to be used sparingly. It's generally used on special variables (e.g. Less or Bash), not general variables from imperative and procedural programming languages (e.g. C, JavaScript, Python).
\`\`\`less
@nice-blue: #5B83AD;
@light-blue: lighten(@nice-blue, 20%);
\`\`\`
\`\`\`bash
echo $STRING
args=("$@")
echo \${args[0]} \${args[1]} \${args[2]}
\`\`\`

# \`constant\`
The name of a constant.
\`\`\`javascript
const PI = 3.14159;
\`\`\`
\`\`\`rust
const THING: u32 = 0xABAD1DEA;
\`\`\`
\`\`\`c
fprintf(stdout, "hello world");
\`\`\`

# \`property\`
An attribute/characteristic or object/map key.
\`\`\`css
body {
	color: red;
	line-height: normal;
}
\`\`\`
\`\`\`json
{
	"data": { "labels": ["foo", "bar"], },
	"error": null,
	"status": "Ok"
}
\`\`\`


# \`punctuation\`
Punctuation such as brackets, parentheses, commas, and more.
\`\`\`python
def median(pool):
	copy = sorted(pool)
	size = len(copy)
	if size % 2 == 1:
		return copy[(size - 1) / 2]
	else:
		return (copy[size/2 - 1] + copy[size/2]) / 2
\`\`\`

# \`important\`
Anything that is important and needs special highlighting.
\`\`\`css
body {
	color: red !important;
}
\`\`\`

\`\`\`markdown
# This is a heading. Headings are important.
\`\`\`

# \`comment\`
Code comments.
\`\`\`markup
<!-- Here's a comment -->
<style>
	/* Here's another comment */
</style>
<script>
// Here's yet another comment
</script>
\`\`\`

# \`tag\`
A markup tag (e.g. HTML and XML tags).
\`\`\`markup
<p>Hello World!</p>
\`\`\`

# \`attr-name\`, \`attr-value\`
Kind of like a property of a markup tag and its value/argument respectively.
\`\`\`markup
<p id="greeting">Hello World!</p>
<video width="1280" height="720" allowfullscreen controls>
	<source src="hello_world.mp4" type="video/mp4" />
</video>
\`\`\`

# \`namespace\`
Used to provide uniquely named elements and attributes in XML documents. Outside of markup languages, it is used to tokenize the package/namespace part of identifiers.
\`\`\`markup
<html:p foo:bar="baz" foo:weee></html:p>
\`\`\`
\`\`\`java
class Foo extends foo.bar.Foo {
	java.util.List<foo.bar.Foo.Bar> bar(foo.bar.Baz bat) {
		throw new java.lang.UnsupportedOperationException();
	}
}
\`\`\`
\`\`\`rust
use std::sync::Arc;
\`\`\`

# \`prolog\`
The first part of an XML document.
\`\`\`markup
<?xml version="1.0" encoding="utf-8"?>
<svg></svg>
\`\`\`

# \`doctype\`
Document type declaration, specific to markup languages.
\`\`\`markup
<!DOCTYPE html>
<html></html>
\`\`\`

# \`entity\`
Code used to display reserved characters in markup languages.
\`\`\`markup
&amp; &#x2665; &#160; &#x152;
\`\`\`

# \`bold\`
Bolded text. Mostly found in document-markup languages.
\`\`\`markdown
**I am bolded text!**
\`\`\`

# \`italic\`
Italicised text. Mostly found in document-markup languages.
\`\`\`markdown
*I am italicised text!*
\`\`\`

# \`atrule\`
Literally @ rules (statements) in stylesheets.
\`\`\`css
@font-family {
	font-family: Questrial;
	src: url(questrial.otf);
}
@media screen and (min-width: 768px) { /* ... */ }
\`\`\`

# \`selector\`
Code that identifies or picks something out of a group to operate on, such as the names of HTML elements in stylesheets.
\`\`\`css
section h1,
#features li strong,
header h2,
footer p { /* ... */ }
\`\`\`

# \`inserted\`, \`deleted\`
Added or modified line and deleted line respectively, mainly for diffs. In general, also the idea of something being increased and decreased/removed respectively.
\`\`\`diff
--- bar.yml	2014-12-16 11:43:41 +0800
+++ /Users/foo/Desktop/bar.yml	2014-12-31 11:28:08 +0800
@@ -4,5 +4,5 @@
project:
	sources: "src/*.cpp"
	headers: "src/*.h"
-    qt: core
+    qt: core gui
public_headers: "src/*.h"
\`\`\`
`
