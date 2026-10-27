---
title: "Data pipelines"
collection: 'research'
date: 2020-05-01
excerpt: "Data processing pipeline for neurophysiological data collected in studies related to rehabilitation from injury to the nervous system.<br/><img alt='' src='/images/nigeLab_Logo.PNG'>"
---

Reliable analysis of neurophysiology experiments starts long before statistics: raw recordings have to be organized, synchronized, and processed the same way every time. During my doctoral work in the Cortical Plasticity Lab at KUMC, I built and maintained the data-processing pipelines — centered on the **nigeLab** MATLAB toolbox — that turned daily recordings from the [stroke-recovery reaching study](/research/RC-Study/) into analysis-ready datasets, with pipelines running from "the edge" (acquisition hardware) to "the cloud."

Related tools and resources:

* **Finite-state-machine (FSM) spike detector** — a low-latency state machine for detecting spikes and triggering activity-dependent stimulation in real time, built by improving an open-source commercial (Intan) system: [Murphy & Buccelli et al., *Journal of Neural Engineering* 2019](/publications/2019-10-29-Intan-FSM/).
* **[code.nml.wtf](https://code.nml.wtf)** — code and documentation for the Neuro-Mechatronics Lab at CMU, where the current generation of these pipelines lives.
* **[Neuro-Mechatronics-Interfaces on GitHub](https://github.com/Neuro-Mechatronics-Interfaces)** — the lab's open-source code organization.
