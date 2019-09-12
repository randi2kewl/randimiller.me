---
title: Stop form spam with a Honeypot
date: '2019-08-19T16:00:00.000Z'
layout: post
draft: false
path: '/posts/form-spam-honeypot/'
category: 'Programming'
tags:
  - 'Forms'
  - 'Netlify'
  - 'HTML'
  - 'Honeypot'
description: 'Learn to stop form spam using a honeypot'
---

Form spam has always been a concern of mine with websites. Today, I learned a new way to filter some of this spam by using a "Honeypot".

I've setup this new blog using GatsbyJs running on [Netlify](https://www.netlify.com/). While reading their documentation on how to handle forms with their platform, I saw this method of form validation.

The premise of using a honeypot for spam filtering is that you would place a hidden field in the form that if it contains _any_ data then you would just toss out the whole form.

It's not like your typical `<input type="hidden" />` field. Those are usually thrown out by the scam tools anyways.

The problem with just doing it like this is that spam automation tools will recognize the field as hidden and ignore it.

With a honeypot, you want the field to be a normal `type="text"` just like any other field but hidden from real people.

```html
<div style="display: none;">
    <label for="honeypot">
        If you are a human don't fill this out!
    </label>
    <input type="text" />
</div>
```

The problem with using a honeypot is they can use the `:visible` selector or check if the `offsetParent` value is `null`. The automation script would just skip that field assuming it's a honeypot or unnecessary.

Something like this:

```javascript
const inputs = document.querySelectorAll('input[type=text]')
for (let input of inputs) {
  if (input.offsetParent) {
    input.value = 'some value'
  }
}
```

[View the Codepen to see in action.](https://codepen.io/randi2kewl/pen/vYBjQao)

If you feel that a lot of spam is still getting thru the filter then consider using traditional Captchas but this will work for most. It does catch most spam though, this is basically how the Akismet system checks for spam already. I've used that for years with WordPress but it was just magic to me until now.
