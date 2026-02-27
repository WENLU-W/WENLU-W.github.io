---
layout: default
title: "AI for Genomics"
date: 2022-12-01
categories: Project
---

## Adversarial Removal of Population Bias in Genomics Phenotype Prediction
 
We propose a general-purpose adversarial framework that learns phenotype-relevant features while explicitly removing population-related information from the latent representation.

---

### 🔑 Key Contributions

- Introduces an **adversarial debiasing framework** for genomic phenotype prediction  
- Ensures latent genomic representation is **population-agnostic**  

---

📄 **Paper**  
Adversarial Removal of Population Bias in Genomics Phenotype Prediction *2022 IEEE International Conference on Data Mining Workshops (ICDMW)*  
👉 [View on IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/10031177)

---

## 💻 Method

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
<img src="{{ site.url }}{{ site.baseurl }}/images/advremoval.png" width="600">
<figcaption>Adversarial training framework for removing population bias (Figure 1).</figcaption>
</figure>
</center>

---

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

