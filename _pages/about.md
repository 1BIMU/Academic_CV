---
permalink: /
title: "Tianyi Wang"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="intro-block reveal" data-reveal>
  <span class="intro-block__eyebrow">Undergraduate Researcher · BUPT</span>
  <p class="intro-block__lead">I work on post-training algorithms for large language models, with a focus on reinforcement learning and reliable optimization.</p>
  <p class="intro-block__text">My current research explores stable and efficient learning for long-horizon reasoning. I am also interested in optimizer design, implementation, and reproducible machine learning systems.</p>
  <div class="intro-actions" aria-label="Profile links">
    <a href="https://github.com/1BIMU/Academic_CV/raw/refs/heads/master/main_en.pdf">View CV <span aria-hidden="true">↗</span></a>
    <a href="/publications/">Publications</a>
    <a href="mailto:bimu@bupt.edu.cn">Email</a>
    <a href="https://github.com/1BIMU" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="academic-section reveal" data-reveal aria-labelledby="news-heading">
  <div class="academic-section__heading">
    <div>
      <span class="section-kicker">Updates</span>
      <h2 id="news-heading">News</h2>
    </div>
  </div>
  <ul class="news-list">
    <li><time datetime="2026-05">2026.05</time><span>SPPO was selected for an oral presentation at ACL 2026.</span></li>
    <li><time datetime="2026-04">2026.04</time><span>SPPO was accepted to ACL 2026.</span></li>
    <li><time datetime="2026-04">2026.04</time><span>APO was accepted to ICML 2026.</span></li>
  </ul>
</section>

<section class="academic-section" aria-labelledby="works-heading">
  <div class="academic-section__heading reveal" data-reveal>
    <div>
      <span class="section-kicker">Research</span>
      <h2 id="works-heading">Selected Works</h2>
    </div>
    <a href="/publications/">All publications →</a>
  </div>
  <div class="research-list">
    {% assign selected_pubs = site.publications | sort: 'date' | reverse %}
    {% for publication in selected_pubs limit: 3 %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>

<section class="academic-section" aria-labelledby="background-heading">
  <div class="academic-section__heading reveal" data-reveal>
    <div>
      <span class="section-kicker">Background</span>
      <h2 id="background-heading">Education & Experience</h2>
    </div>
  </div>
  <div class="profile-row">
    <article class="profile-card reveal" data-reveal id="education">
      <span class="section-kicker">Education</span>
      <h3>BUPT</h3>
      <p>2023–2027</p>
    </article>
    <article class="profile-card reveal" data-reveal id="experience">
      <span class="section-kicker">Experience</span>
      <h3>Youtu</h3>
      <p>Research Intern · 2026–Present</p>
    </article>
  </div>
</section>
