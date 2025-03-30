---
title: "On Switch to Hugo"
date: 2021-12-26T21:39:12-08:00
draft: false
---

I’ve had a personal website for years. When I started to learn Python eight years ago, I used the Flask framework to create a lightweight personal blog. It loaded my articles from my SQLite database and used the Jinja template engine to fill the contents in. GitHub apparently couldn’t host the Flask web server, so I hosted it on my personal VPS.

Later, as I learned more about React framework and good software engineer practices, I iterated on my website as well as decoupled the frontend and backend. The backend is still Flask and SQLite, but I switched the frontend part to React. The communication between the frontend and the backend is through REST APIs. Thus, I got the chance to only host my backend on my server and move all the static frontend pages to GitHub Pages.

After I went to CMU ETC in 2019, the faculty asked all the students to have a personal website to showcase all the work and projects we were working on. Also, I was not a productive writer, so I didn’t have much to write in my blog. I decided to remove the backend part completely from my website and only have one single page to list all my projects as my portfolio. I didn’t follow the rapid frontend trends too well, so mostly, I reused the components in my previous blog site.

Today, I decided to upgrade my website for the third time. I switch to Hugo as my static site generator, and here’s why.

## Why a new website?

I am perfectly satisfied with my previous website, a one-page portfolio. It’s neat, informative, and conveys all I want to tell my potential audience clearly. However, as I read more on note-taking, I figured that I needed to write something down to complete the full learning loop. The writings will be light on the regular notes but more about linking ideas and how they shape my decision-making.

As mentioned, the frontend technologies evolved so fast that I only know the names of React Hooks, Vue, and Svelt. My main focus is not on frontend development, so I don’t want to spend too much time catching up with the modern frontend world and extending my previously single react web page to a full-fledged web application. I need something simple to set up and yet powerful to be extended. I need a new personal website.

## Why Hugo and this template?

The first thing I decided for my new website is that I don’t want to host a backend web server. I appreciate the power of GitHub Pages and the potential to use Vercel/Netlify for acceleration. I further narrowed it down to Hugo because I’m not fond of JavaScript that much. Hugo is the hottest one on the list on [this page](https://jamstack.org/generators/) of static site generators, and Go is one of my most curious programming languages.

Choosing a theme is another tricky problem. According to my requirements, I listed several bullet points for my website theme:
- The theme should support both blogging and project showcasing.
- The theme should weigh personal introduction and project listing heavier than blog articles.
- The audience should be able to see all three sections (introduction, blogs, and projects) on the index page without clicking deeper.
- The website should support RSS feeds.

[Cactus](https://themes.gohugo.io/themes/hugo-theme-cactus/) is the template I found that fits my purpose best. It has a clean design, an informative index page, and is easily configurable. It lays everything out perfectly with a few changes on the fonts and paddings.

## Final words

During my master years at CMU ETC, I treated my website purely as a page to tell recruiters how great I am. I think it did its job well enough. Also, when I worked on the [Isetta Engine](https://isetta.io), I found that writing my process and learnings down is excellent for postmortem and retrospection. Such articles are also more educative and helpful than most step-by-step how-to guides. I want to bring them into my website so that people can see what I did and why I made it and how I came along. I hope you enjoy this article as my first article and hope you enjoy this website.