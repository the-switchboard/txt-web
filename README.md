# txt-web: A Simple Engine For a Plain-text Internet

Download the Addon ([txt_web-1.1-an+fx.xpi](https://github.com/the-switchboard/txt-web/raw/master/addon/txt_web-1.1.2-an+fx.xpi))

[Jump to Installation](#installation)

---

**Main hub:** https://txt-web.com/index.txt

---

Index:
- [Introduction](#introduction)
- [Designed for a Post-Technological World](#designed-for-a-post-technological-world)
- [In the Beginning...](#in-the-beginning)
- [A Simple Markup Standard](#a-simple-markup-standard)
- [The Firefox Browser Addon](#the-firefox-browser-addon)
- [Installation](#installation)
---

## Introduction

Lets start a new internet based on plain text.

The goal of txt-web is to create an engine that interprets simple text documents to an interweb, without sacrificing the human readability of the documents in their raw form.

In short, ***it allows the creation of websites, and an entire internet, out of basic human readable-text files***.

## Designed for a Post-Technological World

Society's roots of written communication are in printed, plain text. txt-web seeks to restore that standard.

This system aids to downscale the complexity of information-delivery and information-accessibility so that if major systems fail, there will still be a plain-text internet of reference that is easily stored and fetched in even the most basic devices.

A good real-world comparison would be HAM radio. HAM radio is often a fallback for essential communication in times of crisis. This is an attempt to create a text-based internet that is modular and simple. With some innovation, it could be adapted to HAM radio as well.

If the more complex internet fails, there should be a strong interweb of basic text resources and images containing important information on any subject important to a technological society.

## In the Beginning
We will leverage the main internet while the system is being explored, and focus on rendering .txt documents into simple webpages.

Later on, new methods of transmission and storage can be explored, making a new branch of internet.

For a starting example, see the firefox browser extension below:

### A Simple Markup Standard

At this time, the only links that are interactable are .txt links, such as:
`#https://txt-web.com/index.txt`

Likewise, images are recognized and rendered if they are in this format:
`#/images/txt-web-logo-small.jpg`
or:
`#https://txt-web.com/images/txt-web-logo-small.jpg`

The aim is to keep text files as pure and simple as possible, with only the most minor markup-tricks for device interactions (such as clicking links or viewing images).

### The Firefox Browser Addon
The firefox browser extension is a very simple script that replaces standard txt-web links with viewable and interactable elements. It is strongly advised that this be used as an example in implementing similar client-side applications among browsers and devices.

## Installation

In Firefox Go to:
- ***File*** > ***Addons***
- On that window, choose the ***Gear*** icon beside the ***Manage Your Extensions***
- Choose ***Install Addon From File***
- Navigate to where you saved the ***.xpi*** addon file.
- Select the ***.xpi*** file and follow the prompts.
