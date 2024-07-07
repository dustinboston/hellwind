# Hellwind: Welcome to Hell

Why spend time learning a _framework_ to write CSS? Should you really have to
memorize (or use a cheat sheet) to find abbreviations for basic CSS properties?
And is it _really_ necessary to have a special build pipeline?

Hellwind uses the "utility-first" paradigm while embracing the CSS syntax that
you already know. And you don't need to to install anything to make your IDE or
browser understand it. That's because it's PURE CSS.

## Usage

Download `hellwind.css` and link to it in the head of your HTML:

```html
<link rel="stylesheet" href="hellwind.css" />
```

Add some classes to your HTML:

```html
<header class="background-color-black">
  <h1 class="color-orange font-size-2rem text-align-center">
     Welcome to Hell
  </h1>
</header>
```

Here are the steps you'll use with every declaration:

1. Write the CSS you would normally write.
2. Replace or remove invalid selector characters.
   1. Replace colons with a dash, `:` ➡ `-`
   2. Replace semicolons with a space, `;` ➡ ``
   3. Remove the at sign, curly braces, and parens `@ () {}` ➡ ``
3. Prefix selectors with pseudo-classes and media queries, plus a double-dash,
   `--`.
4. Put it in an HTML class attribute.

## Example 1: The Basics

**Step 1:** Write the CSS you would normally write.

```css
h1 { color: dodgerblue }
```

**Step 2:** Replace or remove invalid selector characters.

```text
h1 color-dodgerblue
```

**Step 3:** Prefix selectors with pseudo-classes and media queries

There aren't any pseudo-classes or media queries in this example.

**Step 4:**

Put it in an HTML class attribute.

```html
<h1 class="color-dogerblue">Example</h1>
```

## Example 2: Pseudo-Classes

Here's a more complicated example using pseudo-classes:

**Step 1:** Write the CSS you would normally write.

```css
a { color: blue; text-decoration-line: underline; text-decoration-style: solid; text-decoration-color: green; }
a:hover { color: red; text-decoration-color: red; }
```

**Step 2:** Replace or remove invalid selector characters.

```text
a color-blue text-decoration-line-underline text-decoration-style-solid text-decoration-color-green
a hover color-red text-decoration-color-red
```

**Step 3:** Prefix with pseudo-classes and media queries.

```text
a color-blue text-decoration-line-underline text-decoration-style-solid text-decoration-color-green
a hover--color-red hover--text-decoration-color-red
```

**Step 4:** Put it in an HTML class attribute.

```html
<a class="color-blue text-decoration-line-underline text-decoration-style-solid text-decoration-color-green hover--color-red hover--text-decoration-color-red">...</a>
```

## Example 3: Media Queries

Alright lets take this up a notch with media queries:

**Step 1:** Write the CSS you would normally write.

```css
\@media (min-width: 1280px) {
  a { color: blue; text-decoration-line: underline; text-decoration-style: solid; text-decoration-color: green; }
  a:hover { color: red; text-decoration-color: red; }
}
```

<small>Ignore the backslash before the @ symbol.</small>

**Step 2:** Replace or remove invalid selector characters.

```text
media-min-width-1280px
a color-blue text-decoration-line-underline text-decoration-style-solid text-decoration-color-green
a hover color-red text-decoration-color-red
```

**Step 3:** Prefix with pseudo-classes and media queries.

```text
a media-min-width-1280px--color-blue media-min-width-1280px--text-decoration-line-underline media-min-width-1280px--text-decoration-style-solid media-min-width-1280px--text-decoration-color-green
a media-min-width-1280px--hover--color-red media-min-width-1280px--hover--text-decoration-color-red
```

**Step 4:** Put it in an HTML class attribute.

```html
<a class="media-min-width-1280px--color-blue media-min-width-1280px--text-decoration-line-underline media-min-width-1280px--text-decoration-style-solid media-min-width-1280px--text-decoration-color-green media-min-width-1280px--hover--color-red media-min-width-1280px--hover--text-decoration-color-red">...</a>
```

There you have it.

## Installation

Download the **21 MB** `hellwind.css` file and add a link to it in your HTML
file like this:

Linking to `hellwind.css`

```html
<link rel="stylesheet" href="hellwind.css" />
```

## But Why?

Because it's a light-hearted way to make a point. And also it was fun to make!

Long ago we used to have styling elements in HTML such as the `<FONT>` tag. We
sprinkled these tags all over the HTML. It was hard to update and hard to
duplicate on other pages.

CSS was supposed to make that better by moving styles out of the HTML and by
giving developers a way to group styles together. That made life much easier.
But now we're writing CSS in the HTML that's even more verbose than the original
styling elements.

That said, I actually do enjoy writing HTML and CSS together this way, despite
its lack of semantics and reusability.

Also, this _does_ work... it might just need a little post-css processing.

## Class Reference

### Media Queries

Metrics are current as of July 2024, via:
https://gs.statcounter.com/screen-resolution-stats.

To use a media query, prefix the property with a media query class.

```css
.media-min-width-1280px--color-dodgerblue
```

#### Base

The term base is used to mean CSS that does not have any media queries applied
to it. The base classes apply to all screen resolutions, unless a media query
overrides it.

If you use the media query classes in conjunction with the base, the base would
cover min-widths from 0 to 429px which is **35.32%** of devices. Practically
speaking, the base targets these resolutions: 360x640, 360x760, 360x780,
360x800, 375x667, 375x812, 385x854, 390x844, 393x851, 393x873, 412x892, 412x915,
414x896, and 428x926.

```html
<b class="color-dodgerblue">...</b>
```

#### `media-min-width-430px` ("small")

The "small" media query is for resolutions ranging from 430px to 1279px which
acounts for **2.77%** of devices. Its primary target resolution is 1280x720. To
use the small media query, prefix your class with `media-min-width-430px--`.

```html
<b class="media-min-width-430px--color-dodgerblue">...</b>
```

#### `media-min-width-1280px` ("medium")

The "medium" media query is for resolutions ranging from 1280px to 1599px which
accounts for **12.43%** of devices. Its primary target resolutions are:
1366x768, 1440x900, and 1536x864. To use the medium media query, prefix your
class with `media-min-width-1280px--`.

```html
<b class="media-min-width-1280px--color-dodgerblue">...</b>
```

#### `media-min-width-1600px` ("large")

The "large" media query is for resolutions ranging from 1600px to 1919px which
accounts for **1.17%** of devices. Its primary target resolution is: 1600x900.
To use the large media query, prefix your class with `media-min-width-1600px--`.

```html
<b class="media-min-width-1600px--color-dodgerblue">...</b>
```

#### `media-min-width-1920px` ("extra large")

The "extra large" media query is for resolutions ranging from 1920px and above
which accounts for **9.24%** of devices. Its primary target resolution is:
1920x1080. To use the extra large media query, prefix your class with
`media-min-width-1920px--`.

```html
<b class="media-min-width-1600px--color-dodgerblue">...</b>
```

More documentation coming soon!
