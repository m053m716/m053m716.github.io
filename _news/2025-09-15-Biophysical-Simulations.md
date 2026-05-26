---
title: 'Biophysical Simulations'
date: 2025-09-15
collection: 'news'
permalink: /posts/2025/09/Biophysical-Simulations/
tags:
  - neuroscience
  - simulation
  - biomechanics
  - NEURON
  - muscle
---

### Biophysical Simulations ###
In September I was working in earnest on **[biophysical simulation tools](https://sims.nml.wtf)** for thinking about how muscle mechanics and neural dynamics can be modeled together instead of treated as separate layers.

The main idea was to build from the muscle fibers outward. I was especially interested in viscoelastic muscle-fiber models, where force production depends on activation but also on length, velocity, history, and passive elastic properties. That gives the simulated muscle a mechanical memory and lets the model represent behavior that is hard to capture with a simple instantaneous force command.

#### Linking mechanics to neural dynamics ####
The next step was connecting those muscle models to NEURON-like dynamics for motor neuron pools and sensory feedback pathways. In that framing, motor units are not just output channels: they sit inside a loop with muscle spindles, Golgi tendon organs, interneurons, and descending drive. The hope is to make network simulations where reflex arcs, recruitment, activation dynamics, and musculoskeletal mechanics all share the same biophysical bookkeeping.

Long term, I would like these simulations to support more principled biomechanical network models. That means being able to ask how changes in muscle properties, motor neuron excitability, proprioceptive feedback, or task constraints shape the behavior of the whole neuromechanical system.

