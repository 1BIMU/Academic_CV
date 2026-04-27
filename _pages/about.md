---
permalink: /
title: "Wang Tianyi | Academic Homepage"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am Wang Tianyi, an undergraduate student in Computer Science and Technology at Beijing University of Posts and Telecommunications. My current focus is post-training algorithms, especially reinforcement learning. I am also highly interested in optimizer design, implementation, and reproduction.

If you want a quick overview of my work, start with these pages:

* [CV](/cv/)
* [Publications](/publications/)
* [Blog Posts](/year-archive/)

Selected Works
======

<style>
.paper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.paper-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.paper-card img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.paper-card-body {
  padding: 0.9rem 1rem 1rem;
}

.paper-card-body h3 {
  margin: 0.2rem 0 0.55rem;
  font-size: 1rem;
  line-height: 1.35;
}

.paper-meta {
  color: #4b5563;
  font-size: 0.88rem;
  margin-bottom: 0.6rem;
}

.paper-summary {
  font-size: 0.92rem;
  line-height: 1.55;
  margin-bottom: 0.75rem;
}

.paper-links a {
  margin-right: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
}
</style>

<div class="paper-grid">
  <article class="paper-card">
    <img src="/images/publications/SPPO.png" alt="SPPO paper cover" />
    <div class="paper-card-body">
      <h3>SPPO: Sequence-Level PPO for Long-Horizon Reasoning</h3>
      <div class="paper-meta">ACL 2026 Main · First Author</div>
      <div class="paper-summary">Reformulates long-horizon reasoning as a sequence-level contextual bandit with a decoupled scalar value function to improve stability and reduce memory cost.</div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2604.08865" target="_blank" rel="noopener">arXiv</a>
        <a href="https://github.com/sustech-nlp/SPPO" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </article>

  <article class="paper-card">
    <img src="/images/publications/APO.png" alt="APO paper cover" />
    <div class="paper-card-body">
      <h3>Anchored Policy Optimization: Mitigating Exploration Collapse</h3>
      <div class="paper-meta">ICML Submission · First Author</div>
      <div class="paper-summary">Introduces support-constrained rectification for RLVR training to mitigate exploration collapse and improve both Pass@1 and response diversity.</div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2602.05717" target="_blank" rel="noopener">arXiv</a>
        <a href="https://github.com/1BIMU/APO_OFFICAL" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </article>

  <article class="paper-card">
    <img src="/images/publications/DyJR.png" alt="DyJR paper cover" />
    <div class="paper-card-body">
      <h3>DyJR: Preserving Diversity in Reinforcement Learning with Verifiable Rewards</h3>
      <div class="paper-meta">Under Review · First Author</div>
      <div class="paper-summary">Introduces Dynamic Jensen-Shannon Replay to preserve diversity in reinforcement learning through a verifiable rewards mechanism.</div>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2603.16157" target="_blank" rel="noopener">arXiv</a>
      </div>
    </div>
  </article>

</div>

