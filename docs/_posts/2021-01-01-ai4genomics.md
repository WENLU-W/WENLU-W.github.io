---
layout: default
title: "AI for Genomics"
date: 2022-12-01
categories: Project
---

## Adversarial Removal of Population Bias in Genomics Phenotype Prediction

**Removing population stratification bias in genotype–phenotype prediction using adversarial training.**

Population structure is a major confounding factor in genomic prediction.  
We propose a general-purpose adversarial framework that learns phenotype-relevant features while explicitly removing population-related information from the latent representation.

---

### 🔑 Key Contributions

- Introduces an **adversarial debiasing framework** for genomic phenotype prediction  
- Ensures latent genomic representation is **population-agnostic**  
- Orthogonal design — compatible with MLP, CNN, or other deep models  
- Demonstrated on real soybean SNP data (40 populations)  
- Improves prediction accuracy while minimizing stratification bias  

---

📄 **Paper**  
Honggang Zhao, Wenlu Wang  
*2022 IEEE International Conference on Data Mining Workshops (ICDMW)*  
DOI: 10.1109/ICDMW58026.2022.00052  
👉 [View on IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/10031177)

---

## 🧠 Method Overview

The framework consists of:

- **Encoder**: learns latent SNP representation  
- **Regressor**: predicts phenotype (main task)  
- **Adversarial classifier**: predicts population label  
- **Gradient Reversal Layer (GRL)**: forces encoder to remove population information  

The encoder is trained to:
- Minimize phenotype prediction loss
- Maximize adversarial classification error  

This ensures the learned representation contains phenotype information but not population bias.

---

<center>
<figure>
<img src="/assets/images/advremoval.png" width="600">
<figcaption>Adversarial training framework for removing population bias (Figure 1).</figcaption>
</figure>
</center>

---

## 📊 Experimental Results

Dataset:
- Soybean Nested Association Mapping (NAM) panel  
- 40 populations  
- Yield phenotype prediction  
- SNP genotypes (0/1/2 encoding)

Evaluation Metrics:
- MAE
- MSE
- Pearson Correlation Coefficient (PCC)

### Performance Comparison

| Method | MAE ↓ | MSE ↓ | PCC ↑ |
|--------|-------|-------|-------|
| Random Forest | 0.0719 | 0.0084 | 72.00% |
| Dual-CNN | 0.0742 | 0.0090 | 72.47% |
| RF + Linear Regression | 0.0706 | 0.0081 | 72.64% |
| **Ours (Adversarial + MLP)** | **0.0689** | **0.0077** | **74.17%** |

Our adversarial framework improves:

- MAE by 0.0036
- MSE by 0.0009
- PCC by +2.64%

---

<center>
<figure>
<img src="/assets/images/adversarial_training_curve.png" width="600">
<figcaption>Adversarial accuracy converges to chance level (2.5%), indicating successful removal of population signal.</figcaption>
</figure>
</center>

---

## 🌍 Why This Matters

Population stratification inflates associations and reduces generalization in:

- Human disease risk prediction  
- Crop yield modeling  
- Livestock genomic selection  
- Epidemiological modeling  

This work provides a **model-agnostic, scalable debiasing framework** applicable to:

- Continuous traits  
- Binary traits  
- Human, plant, and animal genomics  

---

## 🏛 Authors

**Honggang Zhao**  
Cornell University  

**Wenlu Wang**  
Texas A&M University–Corpus Christi  

---

<div class="project-footer">
<img src="/assets/images/tamucc_logo.png" width="120">
<p><strong>AI for Biology & Genomics</strong> — Developing robust and bias-aware machine learning models for biological data.</p>
</div>