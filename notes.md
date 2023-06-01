# Astro Overview

## Patterns that are the same as React
- conditional rendering
- map for listing out arrays of elements

## File system routing
all .astro and .md files inside the pages folder become url paths
subdirectories are also url paths

## Markdown Files
- have frontmatter with properties
- can utilize a layout via a layout property in the frontmatter ex:

---
layout: '../../layouts/PostsLayout.astro'
title: "Lets go Astro, lets go"
pubDate: 2023-05-31
description: "Trying out markdown file creation for populating an astro page. Lift off!"
author: "Ayyyy you already know"
---

in the layout you can access the properties in the frontmatter via the frontmatter object destructured via Astro.props

const { frontmatter } = Astro.props
