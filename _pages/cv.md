---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /cv.html
---


{% include base_path %}
{% capture written_label %}'None'{% endcapture %}

---

## Education ##
* Ph.D in Bioengineering, University of Kansas, 2020
  + Thesis: *Neurophysiological mechanisms of sensorimotor recovery from stroke*
* B.S. in Biology, Stanford University, 2011
  + 2-time All-American (Fencing)

---

## Skills ##
* Full stack neurophysiology engineer
  * CAD for physical device design (Fusion, OnShape, KiCAD, EAGLE)
  * C/C++/Verilog for stuff that needs to be fast
  * **Matlab**/Python/Tableau for stuff that doesn't
  * CSS/JS for web-based behavioral tasks and HID-style interfaces
  * Biophysical and biomechanical simulations
* Rat pellet retrieval motor model  
* Nonhuman primate wrist-center-out motor model  
* Myoelectric realtime/online interfaces  
  * High-density surface EMG grids.

---

## Work experience ##
### 2026 - present: Special Faculty Researcher, CMU ###
* Neuro-Mechatronics Lab
  + PI: Doug Weber & Darcy Griffin
* Building experimental software, accessible interfaces, and neuromechanical simulation tools.

### 2021 - 2026: Postdoctoral Researcher, CMU ###
* Neuro-Mechatronics Lab
  + PI: Doug Weber & Darcy Griffin
* Studying sensorimotor integration using models from mice to humans.  

### 2014 - 2020: Graduate Research Assistant, KUMC ###
* Cortical Plasticity Lab
  + PI: Randy Nudo
  + Supervisor: David Guggenmos
* Developed data pipelines from "the edge" to "the cloud."
* Applied control systems models to cortical activity in relation to motor rehabilitation.

### 2013 - 2014: Research Technician, Lawrence KS ###
* Identigen North America
  + Supervisor: Stacie Eliades-Becker
* Assisted in installation of high-throughput tape-based liquid-handling system.
* Day-to-day involved conducting SNP-genotype array tests for bovine heritage.

---

## Publications ##

  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

---
  
## Talks ##
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

---
