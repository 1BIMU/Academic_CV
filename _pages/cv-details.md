---
layout: archive
title: "CV"
permalink: /cv-details/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.cv-block {
  display: flex;
  gap: 1.75rem;
  align-items: stretch;
  margin: 1.75rem 0 2.5rem;
  padding: 1.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #ffffff;
}

.cv-block-image {
  flex: 0 0 240px;
}

.cv-block-image img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 8px;
  background: #ffffff;
}

.cv-block-content {
  flex: 1;
}

.cv-block-content h2 {
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.cv-meta {
  margin: 0 0 0.85rem;
  color: #4b5563;
  line-height: 1.6;
}

.cv-list {
  margin: 0;
  padding-left: 1.2rem;
  line-height: 1.7;
}

.cv-subsection {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .cv-block {
    flex-direction: column;
  }

  .cv-block-image {
    flex-basis: auto;
  }
}
</style>

<div class="cv-block" id="education">
  <div class="cv-block-image">
    <img src="{{ '/images/education/bupt.png' | relative_url }}" alt="Beijing University of Posts and Telecommunications" />
  </div>
  <div class="cv-block-content">
    <h2>Education</h2>
    <p class="cv-meta">Beijing University of Posts and Telecommunications<br />B.S. in Computer Science and Technology<br />2023.09 -- expected 2027.07</p>
    <ul class="cv-list">
      <li>GPA 3.76/4.00, ranked 20/360 in the major</li>
      <li>CET-6 503, CET-4 571</li>
      <li>Focused on post-training algorithms, reinforcement learning, and optimizer engineering</li>
    </ul>
  </div>
</div>

<div class="cv-subsection">
  <h3>Research Interests</h3>
  <ul class="cv-list">
    <li>Post-training algorithms, especially reinforcement learning</li>
    <li>Optimizer design and implementation</li>
    <li>Reproduction and engineering work with PyTorch and TensorFlow</li>
  </ul>
</div>

<div class="cv-block" id="experience">
  <div class="cv-block-image">
    <img src="{{ '/images/Experience/youtu.png' | relative_url }}" alt="Youtu internship" />
  </div>
  <div class="cv-block-content">
    <h2>Experience</h2>
    <p class="cv-meta">Youtu<br />Research Intern<br />Expected start: 2026.07.01<br />End date: TBD</p>
    <ul class="cv-list">
      <li>Internship focused on machine learning and reinforcement learning related research</li>
      <li>Details will be updated once the internship officially starts</li>
    </ul>
  </div>
</div>

<div class="cv-subsection">
  <h3>Selected Projects</h3>
  <ul class="cv-list">
    <li>SPPO: Sequence-Level PPO for Long-Horizon Reasoning</li>
    <li>Anchored Policy Optimization (APO)</li>
    <li>PyTorch Implementation: Spectral-Sphere-Optimizer (SSO)</li>
  </ul>
</div>

<div class="cv-subsection">
  <h3>Skills</h3>
  <ul class="cv-list">
    <li>Python</li>
    <li>C</li>
    <li>Java</li>
    <li>PyTorch</li>
    <li>TensorFlow</li>
    <li>MySQL</li>
  </ul>
</div>

<div class="cv-subsection">
  <h3>Honors</h3>
  <ul class="cv-list">
    <li>Third-Class Scholarship, 2023-2024 academic year</li>
    <li>Third-Class Scholarship, 2024-2025 academic year</li>
  </ul>
</div>
