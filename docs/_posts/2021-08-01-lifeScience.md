---
layout: post
title:  "Computational Biology & Chemistry"
date:   2021-09-01 13:27:04 -0400
categories: Project
---

Computational biology and chemistry.<br>

<style>
	.dropdown-menu>.active {
           background-color: #3967ac;
        }
	.img-fluid{border:1px solid #ccc;margin:5px 5px 5px 0px}
	.step_head{font-size:1.25em;color:#3967ac;font-weight:bold;    border-bottom: 1.3px solid #3967ac;margin-top:10px;}
	.sub_head{font-size:0.85em;color:#3967ac;font-weight:bold;margin-bottom:2px;}
	.doc-content p{font-size:0.9em;margin-bottom:2px;}
	h2{font-size:1.25em;}
	.target-title{color:#C03D96;font-weight:bold;text-decoration:underline}
    	/* Style the tab */
	.tab {
	  overflow: hidden;
	  background-color: #cceeff;
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
	  background-color: #3967ac;
	}

	/* Create an active/current tablink class */
	.tab button.active {
	  background-color: #3967ac;
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
<button class="tablinks" onclick="show(event, 'biology')">
        Computational biology
</button>
<button class="tablinks" onclick="show(event, 'chemistry')">
        Computational chemistry
</button>


</div>


<div class="tabcontent" id="biology" style="display:none;">
Computational biology 

<h3 class="step_head">Related publications</h3>
<div class="row">
- place holder
</div>

</div>


<div class="tabcontent" id="chemistry" style="display:none;">
Computational chemistry 


<h3 class="step_head">Related publications</h3>
<div class="row">
- place holder
</div>

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