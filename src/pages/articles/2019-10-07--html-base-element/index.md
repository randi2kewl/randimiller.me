---
title: 'HTML: Base Element'
date: '2019-10-07T16:00:00.000Z'
layout: post
draft: false
path: '/posts/html-base-element/'
category: 'Development'
tags:
  - 'HTML'
  - 'Discovering Series'
description: 'This is a post reviewing the HTML base element.'
---

The `<base />` element in the HTML schema<sup>[1](#footnote-1)</sup> is used for declaring a location for relative links. It's setting the _base_ url and target for links.

The base tag can be used in either the head (most common) or the body as long as there is only one in the document. If more than one exists then it will use one then throw out the rest.

There are two attributes used with the base tag. They are `href` and `target`. 

`href` - This tag is used to set the base url. For example, if you want to set all links to https://twitter.com then you would set `<base href="https://twitter.com/">`.

`target` - Sets the default target for all links. If you want all links to open in a new tab then you can set `<base target="_blank">`.

If you wanted to have all links point to Twitter profiles then you can do the following:

```html
<base href="https://twitter.com/" target="_blank" />

<h1>Twitter User Accounts</h1>

<ul>
  <li><a href="sergeanthacker">sergeanthacker</a></li>
  <li><a href="rrhoover">rrhoover</a></li>
  <li><a href="jensimmons">jensimmons</a></li>
  <li><a href="theChrisDo">theChrisDo</a></li>
  <li><a href="wesbos">wesbos</a></li>
</ul>
```

This will prefix all of the relative links with the base URL. For example, `href="wesbos"` becomes `https://twitter.com/wesbos` and opening in a new tab because of the `target="_blank"`.

This is useful if you need all of the links to point to another domain than the one you are using. It could be useful when working with a development page where you need to link to the live pages.

[Test in Codepen](https://codepen.io/randi2kewl/pen/KKKwyoG)

<sup id="footnote-1">1</sup> [HTML 5.2 - 4.2.3. The base element](https://www.w3.org/TR/html52/document-metadata.html#the-base-element)