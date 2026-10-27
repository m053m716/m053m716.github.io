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

## Research Profile ##
I study how residual signals in damaged sensorimotor systems can be measured, interpreted, and converted into useful everyday function. My current work focuses on residual motor-unit activity, wearable surface EMG, adaptive decoding, and hybrid computer interaction for people with cervical spinal cord injury. My training spans stroke neurophysiology, NHP electrophysiology and stimulation, signal processing, embedded systems, machine learning, and human-facing assistive technology.

*Research interests:* Residual motor control after neurological injury · cervical spinal cord injury · wearable neural interfaces · high-density surface EMG and motor-unit activity · biosignal processing and adaptive machine learning · human-computer interaction and accessibility · rehabilitation engineering · neurophysiology of motor recovery · embedded and multimodal sensor systems.

---

## Education ##
* Ph.D. in Bioengineering (Honors), University of Kansas Medical Center, 2020
  + GPA: 3.980 · Advisor: Randy Nudo
  + Dissertation: *Neurophysiological mechanisms of sensorimotor recovery from stroke* (ProQuest 28262386)
* B.S. in Biology, Stanford University, 2011
  + 2-time NCAA Division I All-American (Fencing, sabre)

---

## Academic Appointments ##
### 2026 - present: Special Faculty, Neuroscience Institute, CMU ###
* Neuro-Mechatronics Lab
  + PI: Doug Weber

### 2021 - 2026: Postdoctoral Researcher, CMU ###
* Neuro-Mechatronics Lab
  + Advisors: Doug Weber & Darcy Griffin

### 2014 - 2020: Graduate Research Assistant, KUMC ###
* Cortical Plasticity Lab
  + PI: Randy Nudo · Supervisor: David Guggenmos

---

## Research Experience ##
### Meta Reality Labs / CMU Collaboration — Lead for CMU Activities, 2021 - present ###
* Lead Carnegie Mellon's collaboration with Meta Reality Labs to improve the EMG-driven gesture models used by the Meta Neural Band; project lead on all HD-EMG offline validation and online decoding experiments for the myoelectric wristband.
* First study: longitudinal assessment in persons with cervical SCI testing volitional control of individual motor units in zones of partial preservation in the forearm, validated against research-grade HD-EMG textile arrays.
* Follow-up study (contract extended, now concluding): hybrid HID interaction combining the commercial Neural Band with trackball pointer navigation, so a person can point and click without removing a hand from the trackball. Browser-based benchmark tests implemented and hosted at chr.nml.wtf.

### DARPA N3 (Next-Generation Nonsurgical Neurotechnology) — Postdoctoral Researcher, 2021 - 2024 ###
* *N3-Patch:* designed experiments in anesthetized NHPs testing the stimulating resolution of a non-invasive TES electrode array; wrote acquisition/analysis software synchronizing stimulation technologies with up to 128 channels of monopolar HD-EMG, including an online pipeline to identify stimuli with characteristic responses. Software transitioned to Phase 3 human experiments.
* *N3-MeNTs:* worked with Battelle, University of Miami, and UC Irvine teams on acute magnetoelectric nano-transducer injection/stimulation experiments in anesthetized NHPs, evaluating whether apparent evoked responses were physiological or stimulation artifacts.

### DARPA ADAPTER (NTRAIN) — Researcher, 2021 - 2022 ###
* Circadian-rhythm study using an in-cage training system; Android application development on tablets and remote longitudinal sensing.

### CMU NHP Thalamocortical and Stimulation Systems, 2021 - 2024 ###
* Built components of the NHP laboratory (no NHP behavioral assemblies existed in the lab before my arrival). Collected awake/behaving data from two rhesus macaques using up to 256 synchronized biopotential channels — primary motor cortex and motor thalamus with concurrent HD-EMG from extrinsic arm flexors/extensors — during a wrist-based center-out task.
* Developed stim/rec interfaces for dorsal-rootlet / dorsal-root-ganglion stimulation (mice, then monkeys).

### Cortical Plasticity Lab, KUMC — Doctoral Researcher, 2014 - 2020 ###
* Doctoral thesis on dynamics of cortical network activity in rats recovering from focal unilateral motor-cortex ischemia (reaching/pellet-retrieval task); found post-stroke shifts in bilateral motor network population dynamics consistent with inappropriate reintegration of sensory information.
* Developed parallel neural time-series analysis pipelines; led population-dynamics analyses; trained high-school and undergraduate researchers.

### Early Research and Infrastructure ###
* Labs of Wolf Zuckert (KUMC) and Julie Theriot (Stanford): BSL-2 work isolating cell-surface localization of the *Borrelia burgdorferi* lipoproteome and modeling membrane lipoprotein insertion dynamics.
* Maintains the NML wiki (nml-wiki.org), the Neuro-Mechatronics-Interfaces GitHub organization, and lab documentation (code.nml.wtf); built automated NHP booth monitoring and lab data systems.

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

## Teaching and Mentoring ##
* **Neural Engineering Lab, CMU** — Course co-designer and instructor. Taught during the first year of the lab while the course was being set up, and designed an Arduino-based EMG sensing module that gave students a concrete route from electrodes and embedded hardware to biosignal acquisition and analysis.
* **Intro to Deep Learning, CMU** — Course-project mentor. Mentored student teams; provided documentation, explanation, and labeling/curation of a key experimental dataset from the lab's Meta collaboration.
* **Program in Neural Computation, CMU** — Undergraduate research mentor. Mentored undergraduates in project design, neural-data analysis, scientific communication, and asking answerable questions.
* **Neuro-Mechatronics Lab, CMU** — Graduate research advisor. Advises graduate researchers on experimental design, technical implementation, analysis, and scientific communication.
* **Science Corporation / CMU** — Teaching and industry collaboration to make palm-sized wireless multimodal sensing practical for first-year master's students.
* **Bioengineering Advisory Council, Olathe, Kansas** — Curriculum advisor, 2017–2020. Advised Olathe's Bioengineering Academy on laboratory and curriculum design.
* **Student mentor, Nudo Lab, 2015–2020.** Trained high-school and undergraduate researchers (basic data analysis, animal handling, MATLAB, signal filtering, automated video tracking).

---

## Awards and Recognition ##
* DARPA Riser, Carnegie Mellon University, 2022
* PhD with Honors, University of Kansas, 2020
* 3MT Finalist, KUMC, 2019
* BIOE GEA Travel Award, University of Kansas, 2017
* Capitol Graduate Research Summit presenter, University of Kansas, 2017
* T32 Training Fellowship, University of Kansas, 2015
* Chancellor's Fellowship, University of Kansas, 2014
* Elwynn Bugge Leadership Award, Stanford University, 2011
* NCAA Division I All-American, fencing (sabre), Stanford University, 2009 & 2011

---

## Service ##
* Peer review (2021–present): Scientific Reports · Journal of Neural Engineering · Advanced Science · Neuromorphic Computing and Engineering · npj Flexible Electronics · Frontiers in Systems Neuroscience
* Science fair judge, Regeneron ISEF (virtual), 2021
* Executive Committee, Society for Neuroscience — Kansas City chapter, 2015–2020
* Bioengineering Advisory Council, Olathe, Kansas, 2017–2020
* Science fair judge, Kansas (undergraduate research competition; Shawnee Heights high school), 2015

---

## Technical Background ##
* *Wearable neurotechnology:* HD-EMG; motor-unit tracking; myoelectric interfaces; wireless sensing
* *Neural computation:* signal processing; neural time-series; machine learning; experimental design
* *Sensor integration:* sensor-to-dashboard muscle sensing and analysis; motion and pose sensing; Bluetooth/WiFi stream handling
* *Build and measurement:* Arduino; Raspberry Pi; data acquisition and synchronization; embedded firmware design; electronics CAD (KiCAD, EAGLE); 3D-printed CAD (Fusion, OnShape); multi-DOF robotics (e.g. hand exoskeleton); behavioral systems
* *Models:* rat pellet-retrieval motor model; nonhuman primate wrist center-out motor model; biophysical and biomechanical simulations
* *Languages/tools:* C/C++/Verilog for stuff that needs to be fast; MATLAB/Python for stuff that doesn't; CSS/JS for web-based behavioral tasks and HID-style interfaces
* *Research infrastructure:* documentation; reproducible analysis workflows; laboratory data systems and experiment dashboards; scientific writing

---
