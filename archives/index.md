---
title: 归档
layout: page
---

<div class="archives">
{% for post in site.posts %}
{% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
{% if year != y %}
  {% assign year = y %}
  <h2>{{ y }}</h2>
{% endif %}
<div class="list">
<time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>&nbsp;&nbsp;
<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
</div>
{% endfor %}
</div>
