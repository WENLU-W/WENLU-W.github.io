---
title: "Wenlu Wang - Research"
layout: page
excerpt: "Wenlu Wang -- Research"
sitemap: false
permalink: /research/
---

### Research Project

<article class="grid">
{%- if site.posts.size > 0 -%}
  {% for post in site.posts %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
  {% endfor %}
{%- endif -%}
</article>

<div class="container">

    {% for post in site.posts %}

        {% cycle 'add row' : '<div class="row">', nil, nil, nil %}

            <div class="col-sm-3">
                <a href="{{ post.url }}">{{ post.title }}</a>
                {{ post.excerpt }}
            </div>

        {% cycle 'end row' : nil, nil, nil, '</div>' %}

    {% endfor %}
    {% cycle 'end row' : nil, '</div>', '</div>', '</div>' %}

</div>

### Collaborators



<!--
<center><figure class="fourth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
</figure></center>
-->
