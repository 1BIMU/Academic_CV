---
permalink: /
title: "Tianyi Wang"
body_class: academic-home
excerpt: "Undergraduate researcher at BUPT working on LLM post-training, reinforcement learning, and optimization. Currently at ByteDance Seed for research; previously a research intern at Tencent Youtu."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="intro-block reveal" data-reveal>
  <span class="intro-block__eyebrow">Undergraduate Researcher · BUPT</span>
  <p class="intro-block__lead">I work on <strong>post-training algorithms</strong> for large language models, with a focus on reinforcement learning and reliable optimization.</p>
  <p class="intro-block__text">My current research explores stable and efficient learning for long-horizon reasoning. I am also interested in optimizer design, implementation, and reproducible machine learning systems.</p>
  <div class="research-update">
    <span class="research-update__label"><span class="status-dot" aria-hidden="true"></span>Currently</span>
    <p>I have joined <strong>ByteDance Seed</strong> for research, following my research internship at <strong>Tencent Youtu</strong>.</p>
  </div>
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
    <li class="news-list__latest"><time datetime="2026-10">2026.10</time><span><a href="/publication/dyjr-preserving-diversity-rl">DyJR</a> was accepted to <strong>NeurIPS 2026</strong>. Congratulations to all the authors! 🎉</span></li>
    <li><time datetime="2026-10">2026.10</time><span>I have joined <strong>ByteDance Seed</strong> for research after completing my research internship at Tencent Youtu.</span></li>
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

<section class="academic-section" id="education" aria-labelledby="education-heading">
  <div class="academic-section__heading reveal" data-reveal>
    <div>
      <span class="section-kicker">Background</span>
      <h2 id="education-heading">Education</h2>
    </div>
  </div>
  <article class="background-entry reveal" data-reveal>
    <div class="background-entry__image">
      <img src="/images/education/bupt.png" alt="BUPT logo" width="180" height="54" loading="lazy" />
    </div>
    <div class="background-entry__content">
      <h3>Beijing University of Posts and Telecommunications</h3>
      <p>B.S. in Computer Science and Technology</p>
      <p class="background-entry__meta">2023.09 – Expected 2027.07</p>
    </div>
  </article>
</section>

<section class="academic-section" id="experience" aria-labelledby="experience-heading">
  <div class="academic-section__heading reveal" data-reveal>
    <div>
      <span class="section-kicker">Internships</span>
      <h2 id="experience-heading">Experience</h2>
    </div>
  </div>
  <div class="background-list">
    <article class="background-entry reveal" data-reveal>
      <div class="background-entry__image">
        <img src="/images/Experience/seed.jpg" alt="ByteDance Seed logo" width="180" height="42" loading="lazy" />
      </div>
      <div class="background-entry__content">
        <span class="background-entry__status background-entry__status--current">Current</span>
        <h3>ByteDance Seed</h3>
        <p>Research Intern</p>
      </div>
    </article>
    <article class="background-entry reveal" data-reveal>
      <div class="background-entry__image">
        <img src="/images/Experience/youtu.png" alt="Tencent Youtu logo" width="72" height="72" loading="lazy" />
      </div>
      <div class="background-entry__content">
        <span class="background-entry__status">Completed</span>
        <h3>Tencent Youtu</h3>
        <p>Research Intern</p>
        <p class="background-entry__meta">2026</p>
      </div>
    </article>
  </div>
</section>
