---
layout: default
title:  "AI for Science"
date:   2021-09-01 13:27:04 -0400
categories: Project
---

We work on <br>

- Generative molecular design.
- Genomic selection.


<style>
	.dropdown-menu>.active {
           background-color: #333436;
        }
	.img-fluid{border:1px solid #ccc;margin:5px 5px 5px 0px}
	.step_head{font-size:1.25em;color:#333436;font-weight:bold;    border-bottom: 1.3px solid #333436;margin-top:10px;}
	.sub_head{font-size:0.85em;color:##333436;font-weight:bold;margin-bottom:2px;}
	.doc-content p{font-size:0.9em;margin-bottom:2px;}
	h2{font-size:1.25em;}
	.target-title{color:#C03D96;font-weight:bold;text-decoration:underline}
    	/* Style the tab */
	.tab {
	  overflow: hidden;
	  background-color: #cacdcf;
	}

	/* Style the buttons that are used to open the tab content */
	.tab button {
	  background-color: inherit;
	  float: left;
	  border: none;
	  outline: none;
	  cursor: pointer;
	  padding: 14px 16px;
	  transition: 0.3s;
	}

	/* Change background color of buttons on hover */
	.tab button:hover {
	  background-color: #333436;
	}

	/* Create an active/current tablink class */
	.tab button.active {
	  background-color: #333436;
          color: #FFFFFF;
	}

	/* Style the tab content */
	.tabcontent {
	  display: none;
	  padding: 6px 12px;
	  border-top: none;
	}
 </style>



<div class="tab-pane" id="overview_mac">

<div class="tab">
<button class="tablinks" onclick="show(event, 'chemistry')">
        Generative AI molecular design
</button>
<button class="tablinks" onclick="show(event, 'biology')">
        Genomic selection
</button>

</div>



<div class="tabcontent" id="chemistry" style="display:none;">

<center><figure class="fifth">
  <img src="{{ site.url }}{{ site.baseurl }}/images/drugdiscovery.png" style="width: 300px; box-shadow: none">
  <img src="{{ site.url }}{{ site.baseurl }}/images/EGFR.png" style="width: 200px; box-shadow: none">
  <img src="{{ site.url }}{{ site.baseurl }}/images/HTR1A.png" style="width: 200px; box-shadow: none">
  <img src="{{ site.url }}{{ site.baseurl }}/images/S1PR1.png" style="width: 200px; box-shadow: none">
</figure></center>

<br>cMolGPT: A Conditional Generative Pre-Trained Transformer for Target-Specific De Novo Molecular Generation. [pdf](https://www.mdpi.com/1420-3049/28/11/4430) ([Code](https://github.com/VV123/cMolGPT))
<br>cMolGPT is a valuable tool for de novo molecule design and accelerates the molecular optimization cycle time for biotech and pharmaceutical companies. 


<img align="left" src="{{ site.url }}{{ site.baseurl }}/images/biogen.jpeg" width="90px" style="margin-right:50px">

<br>

This project is a collaboration with Biogen Inc.

<br>


</div>



<div class="tabcontent" id="biology" style="display:none;">
<br>1. Consequences of domestication in eastern oyster: Insights from whole genomic analyses [pdf](https://onlinelibrary.wiley.com/doi/full/10.1111/eva.13710)
<br>2. Adversarial Removal of Population Bias in Genomics Phenotype Prediction. [pdf](https://ieeexplore.ieee.org/abstract/document/10031177)
<a href=""> <img src="{{ site.url }}{{ site.baseurl }}/images/advremoval.png" style="width: 500px; box-shadow: none"></a>
<br>3. A cross-platform tool that utilizes a multi-thread parallel algorithm for processing multiple iterations of bioinformatic analyses. 
<br><a href="https://github.com/hzz0024/EasyParallel"> <img src="{{ site.url }}{{ site.baseurl }}/images/easyparallel.png" style="width: 200px; box-shadow: none"></a>
</div>






<script>
	function show(evt, cityName) {
  var i, tabcontent, tablinks;
  
  //Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}
function hideshow(id) {
        var e = document.getElementById(id);
        e.style.display = (e.style.display == 'block') ? 'none' : 'none';
}
function showhide(id) {
       	var e = document.getElementById(id);
       	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}
</script>
