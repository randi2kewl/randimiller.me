---
title: 'Contact me'
layout: page
path: '/contact'
---

If you are looking to contact me, there are several ways:

- [Twitter](https://twitter.com/sergeanthacker) (preferred)
- [LinkedIn](https://linkedin.com/in/randilmiller)
- [Email](mailto:mail@randimiller.me)
- Fill out the form below

---

## Get in Touch

Fill out the following form to get in contact with me or just send me puppy GIFs.

<form class="contact-form" name="contact" method="POST" action="/contact-thanks" netlify-honeypot="bot-field" data-netlify="true">
  <p style="display:none;" class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label><input type="text" name="name" /> Name</label>
  </p>
  <p>
    <label><input type="email" name="email" /> Email</label>
  </p>
  <p>
    <label><input type="tel" name="phone" /> Phone</label>
  </p>
  <p>
    <label><textarea name="message"></textarea> Message</label>
  </p>
  <p class="send-button">
    <button type="submit">Send</button>
  </p>
</form>
