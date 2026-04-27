# Publication Images

This folder contains cover images for your research papers.

## How to use:

1. **Place your paper cover images here:**
   - Name them by paper topic or ID for easy reference
   - Recommended formats: PNG, JPG (landscape orientation, ~16:9 aspect ratio, min 260x170px)
   - File size: keep under 500KB for faster loading

2. **In your publication markdown file, use the `header.teaser` field:**

```yaml
header:
  teaser: /images/publications/sppo-cover.png
```

Or reference from the root /images/ folder:

```yaml
header:
  teaser: publications/sppo-cover.png
```

## Example publication metadata:

```yaml
---
title: "SPPO: Sequence-Level PPO for Long-Horizon Reasoning"
collection: publications
category: conferences
permalink: /publication/sppo-sequence-level-ppo
excerpt: 'Your paper summary here'
date: 2026-04-01
venue: 'ACL 2026 Main'
paperurl: 'https://arxiv.org/abs/2604.08865'
arxivurl: 'https://arxiv.org/abs/2604.08865'
githuburl: 'https://github.com/sustech-nlp/SPPO'
header:
  teaser: /images/publications/sppo-cover.png
citation: 'Tianyi Wang et al. (2026). "SPPO..." <i>ACL 2026 Main</i>.'
---
```

## Upload steps:

1. Create your cover images (or generate using design tools)
2. Save them in this folder: `/images/publications/`
3. Update each publication `.md` file with the correct teaser path
4. Commit and push to GitHub
5. Your publication cards on the homepage will display the images
