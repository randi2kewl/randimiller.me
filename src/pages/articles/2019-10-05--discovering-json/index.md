---
title: 'Discovering: JSON'
date: '2019-10-05T16:00:00.000Z'
layout: post
draft: false
path: '/posts/discovering-json/'
category: 'Development'
tags:
  - 'JSON'
  - 'Discovering Series'
description: 'This is a post reviewing the JSON specifications.'
---

Today, we are going to review the current JSON specification<sup>[1](#footnote-1)</sup>. My hope is that this article helps someone understand JSON. These are basically the Cliff Notes of the specifications removing the obvious items.

JSON, short for JavaScript Object Notation, is a portable data interchange format. This is just techno-babble that means it's a way to structure information so that it's easily sharable.

There are six characters used to build a proper JSON document: `[ ] { } : ,`

The typical structure is starting with `[{` and ending with `}]`. The other variation if you don't need names is to just use `[]` surrounding the items (see arrays below) or just a single value type.

Each of these characters can have whitespace before or after them. Whitespace is defined as a space, horizontal tab, line feed (new line) or carriage return.

Side note: I had to look up the difference between a line feed and a carriage return. Basically, a carriage return (`\r`) moves the cursor to the beginning of the current line and line feed (`\n`) moves the cursor down to the next line. Not really something that you use on a daily basis anymore but they are more relevant to lower level programming languages.

JSON can contain objects, arrays, numbers, strings, booleans or null.

## Objects

An object is implemented using the curly braces surrounding a list of names and values (key-value pairs). The names (or keys) must be unique.

```json
[
  {
    "unique_key": "value1",
    "sub_object_key": {
      "sub_unique_key": true
    }
  }
]
```

The names must be unique for a very good reason. It would be hard to determine how someone's system might parse it if there is more than one of the same name. Unless you built the parser, it's hard to know if they are using the first instance of the name, last instance or just flat out going to error out on you. For consistency, the names should be unique to make sure other systems interpret the JSON the same way.

## Arrays

Arrays are used in JSON the same as they are used in most common programming languages. They are used by surrounding a list of elements with brackets. The elements are unnamed so if you need to use keys then opt for an object instead.

Arrays can contain any type of element allowed in JSON. That includes objects, strings, numbers, booleans, null or even other arrays. The values also don't have to be the same so the following is valid:

```json
[
  {
    "array_of_elements": [
        "I'm a string",
        true,
        false,
        null,
        {},
        [],
        100
    ]
  }
]
```

A simple single array is uncommon to see but valid JSON. Example:

```json
["item1", "item2", "item3"]
```

## Numbers

Numbers in JSON are base 10 (aka normal numbers 1, 2, 3, 4...etc). They can contain a decimal for fractions or minus signs for negative values.

They cannot have leading zeros so `001` is not valid but `1` is valid.

Exponents using `e` or `E` are valid such as `5e10`.

Examples of valid numbers in JSON:

```json
[
    201,
    14.3,
    15e6,
    -3.5,
    5e-16,
    3e+12
]
```

## Strings

String are declared using the double quotes. Valid JSON does not use the single quotes for strings like most programming languages allow.

Some characters need to be escaped, same as in programming languages, like the reverse solidus (`\`) and double quotes (`"`) within the text. To escape the characters, you will need to prefix the character with a reverse solidus (`\`). For example, `"This \\ that"` or `"Here is a \" in my text"`.

Strings are encoded in UTF-8 unless it's a custom solution that details to use something else.

```json
[
  "This is a string",
  "This string has an escaped \\ slash in it",
  "She said, \"Hello there!\" to the man."
]
```


## References

<sup id="footnote-1">1</sup> [RFC 8259](https://tools.ietf.org/html/rfc8259): The Internet Engineering Task Force (IETF)

<sup id="footnote-2">2</sup> [Difference Between Carriage Return, Line Feed and End of Line Characters](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000019KZDSA2&l=en-US): National Instruments
