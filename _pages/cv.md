---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<script>
document.addEventListener('DOMContentLoaded', function () {
  const link = document.createElement('a');
  link.href = '{{ "/main_en.pdf" | relative_url }}';
  link.download = 'Wang_Tianyi_CV.pdf';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  const message = document.createElement('p');
  message.innerHTML = 'Your CV download should start automatically. If it does not, <a href="{{ "/main_en.pdf" | relative_url }}" download>click here</a>.';
  document.body.appendChild(message);
});
</script>
