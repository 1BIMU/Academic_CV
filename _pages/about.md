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
.publication {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.publication:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.publication-image {
  flex-shrink: 0;
  width: 240px;
  height: 180px;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.publication-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
  border-radius: 6px;
}

.publication-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.publication-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  color: #111;
}

.publication-meta {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.publication-authors {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.publication-authors strong {
  font-weight: 600;
  color: #111;
  font-style: normal;
}

.publication-summary {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

.publication-links {
  display: flex;
  gap: 0.75rem;
}

.publication-links a {
  display: inline-block;
  padding: 0.45rem 1rem;
  background: #f0f4f8;
  color: #2563eb;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.publication-links a:hover {
  background: #2563eb;
  color: #ffffff;
}

@media (max-width: 768px) {
  .publication {
    flex-direction: column;
    gap: 1rem;
  }
  
  .publication-image {
    width: 100%;
    height: 200px;
  }
}
</style>

<div class="publications-list">
  <div class="publication">
    <div class="publication-image">
      <img src="/images/publications/SPPO.png" alt="SPPO paper" />
    </div>
    <div class="publication-content">
      <div>
        <h3 class="publication-title">SPPO: Sequence-Level PPO for Long-Horizon Reasoning</h3>
        <div class="publication-meta">ACL 2026 Main Conference · First Author</div>
        <div class="publication-authors"><strong>Tianyi Wang</strong>, Yixia Li, Long Li, Yibiao Chen, Shaohan Huang, Yun Chen, Peng Li, Yang Liu, Guanhua Chen</div>
        <div class="publication-summary">Reformulates long-horizon reasoning as a sequence-level contextual bandit with a decoupled scalar value function to improve stability and reduce memory cost.</div>
      </div>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2604.08865" target="_blank">arXiv</a>
        <a href="https://github.com/sustech-nlp/SPPO" target="_blank">GitHub</a>
      </div>
    </div>
  </div>

  <div class="publication">
    <div class="publication-image">
      <img src="/images/publications/APO.png" alt="APO paper" />
    </div>
    <div class="publication-content">
      <div>
        <h3 class="publication-title">Anchored Policy Optimization: Mitigating Exploration Collapse</h3>
        <div class="publication-meta">ICML Submission · First Author</div>
        <div class="publication-authors"><strong>Tianyi Wang</strong>, Long Li, Hongcan Guo, Yibiao Chen, Yixia Li, Yong Wang, Yun Chen, Guanhua Chen</div>
        <div class="publication-summary">Introduces support-constrained rectification for RLVR training to mitigate exploration collapse and improve both Pass@1 and response diversity.</div>
      </div>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2602.05717" target="_blank">arXiv</a>
        <a href="https://github.com/1BIMU/APO_OFFICAL" target="_blank">GitHub</a>
      </div>
    </div>
  </div>

  <div class="publication">
    <div class="publication-image">
      <img src="/images/publications/DyJR.png" alt="DyJR paper" />
    </div>
    <div class="publication-content">
      <div>
        <h3 class="publication-title">DyJR: Preserving Diversity in Reinforcement Learning with Verifiable Rewards via Dynamic Jensen-Shannon Replay</h3>
        <div class="publication-meta">Under Review</div>
        <div class="publication-authors">Long Li, Zhijian Zhou, <strong>Tianyi Wang</strong>, Weidi Xu, Zuming Huang, Wei Chu, Zhe Wang, Shirui Pan, Chao Qu, Yuan Qi</div>
        <div class="publication-summary">Introduces Dynamic Jensen-Shannon Replay to preserve diversity in reinforcement learning through a verifiable rewards mechanism.</div>
      </div>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2603.16157" target="_blank">arXiv</a>
      </div>
    </div>
  </div>
</div>
