# Some topics for further investigation

## Inheritance

(Selected) container rules apply to <b>decendants</b>

## Cascading Style Sheets

Multiple rules can be applied to the same element

## Secificity

More specific selector´s rule wins over less specific selector

## Block elements - Exampels

```
  <h1></h1>
  <div></div>
  <p></p>
```

## Inline elements - Exampels

```
  <em></em>
  <b></b>
  <a href =""></a>
  <span></span>
```

## A List Of COMMON CSS Selectors

Here's a list / summary of all the CSS selectors that you can use in CSS:

### Tag type selector

CSS: p { ... }

Would select this HTML element for example: `<p>Some text...</p>`

This selector selects all HTML elements that are of this tag type

### ID selector

CSS: `#some-id { ... }`

Would select this HTML element for example: `<h1 id="some-id">...</h1>`

This selectors selects the element that has this ID on it (should only be once per page)

### Class selector

CSS: `.some-class { ... }`

Would select this HTML element for example: `<h1 class="some-class">...</h1>`

This selector selects all HTML elements that have this class on them

### Attribute selector (new)

CSS: `[src] { ... }`

Would select this HTML element for example: `<img src="...">`

This selector selects all elements that have this HTML attribute on them

### Universal selector (new)

CSS: `* { ... }`

Would select this HTML element for example: `<p>....</p><img ...>`

This selector selects ALL HTML elements (directly, not through inheritance but as if you would target them all individually)

### Grouping selector / selector list

CSS: `p, .some-class { ... }`

Would select this HTML element for example: `<p>...</p><h2 class="some-class">...</h2>`

This selector selects all elements that match the individual selectors in that list

### Combined selector

CSS: `p.some-class { ... }`

Would select this HTML element for example: `<p class="some-class">...</p>`

This selector selects all elements that meet both conditions (i.e. "<p>" elements with "some-class" class on it, in this example)

### Pseudo selector

CSS: `a:hover { ... }`

Would select this HTML element for example: `<a>...</a>` (when the user hovers over it)

This selector selects all elements that meet this "pseudo state" (i.e. all links that are hovered in this example)
