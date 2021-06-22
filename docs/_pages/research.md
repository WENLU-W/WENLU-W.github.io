---
title: "Wenlu Wang - Research"
layout: page
excerpt: "Wenlu Wang -- Research"
sitemap: false
permalink: /research/
---

<style>
.grid { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
  }
.grid img {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}
</style>

### Research Project

<article class="grid">
{%- if site.posts.size > 0 -%}
  {% for post in site.posts %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
  {% endfor %}
{%- endif -%}
</article>

### Collaborators

<div class="container">

    {% for post in site.posts %}

        {% cycle 'add row' : '<div class="row">', nil, nil, nil %}

            <div class="col-sm-3">
                <!-- liquid tags here -->
            </div>

        {% cycle 'end row' : nil, nil, nil, '</div>' %}

    {% endfor %}
    {% cycle 'end row' : nil, '</div>', '</div>', '</div>' %}

</div>

<!--
<center><figure class="fourth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/" style="width: 150px">
</figure></center>
-->
