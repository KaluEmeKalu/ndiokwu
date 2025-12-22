# **Ndịokwu (ⴳ̈ 𑀏 ꘣̱) Igbo Abugida Language Guide **  


---

## 1. Introduction

**Ndịokwu** (ⴳ̈ 𑀏 ꘣̱) is the most efficient writing system ever developed for the **Igbo language**. Designed for phonetic precision, simplicity, and speed, it compresses the entire syllabic inventory of Igbo into:

- **32 base consonants**  
- **8 consistent vowel diacritics**  
- **8 independent vowels**  

It is fully Unicode-compatible, with each consonant-vowel pairing forming a single, elegant glyph. Mastery can be achieved in **under 30 minutes**.

---

## 2. Vowel Diacritics

Each consonant defaults to the vowel **"a"** (no mark). To indicate other vowels, apply the corresponding diacritic:

| Vowel | Diacritic | Unicode | Placement           | Example (`n`) |
|--------|-----------|----------|----------------------|---------------|
| a      | —         | —        | No mark              | 𑀦           |
| e      | ̄         | U+0304   | Macron above         | 𑀦̄          |
| i      | ̊         | U+030A   | One oval above       | 𑀦̊          |
| ị      | ̈         | U+0308   | Two ovals above      | 𑀦̈          |
| o      | ̣         | U+0323   | Dot below            | 𑀦̣          |
| ọ      | ̤         | U+0324   | Two dots below       | 𑀦̤          |
| u      | ̱         | U+0331   | Short tick below     | 𑀦̱          |
| ụ      | ̳         | U+0333   | Two ticks below      | 𑀦̳          |
| ∅ (bare consonant) | ̆       | U+0306   | Breve above center   | 𑀦̆          |

---
## **3. Full Consonant Inventory **

| **Sound** | **Glyph** | **Sound** | **Glyph** |
|-----------|-----------|-----------|-----------|
| **b**     | ꕫ         | **mb**    | 𑄘         |
| **ch**    | 𑀳         | **n**     | ꖫ         |
| **d**     | ꖙ         | **nd**    | ⴳ         |
| **f**     | ꗦ         | **ng**    | 𑀔         |
| **g**     | ꕪ         | **nj**    | ꖝ         |
| **gb**    | ꘛ         | **nk**    | 𑄉         |
| **gh**    | ꔎ         | **ns**    | 𑀶         |
| **gw**    | ꖸ         | **nt**    | ꘧         |
| **h**     | ꖹ         | **nw**    | ꖇ         |
| **j**     | ꗏ         | **ny**    | 𑀤         |
| **k**     | ꖑ         | **nz**    | ꗢ         |
| **kp**    | 𑁟         | **p**     | ꔵ         |
| **kw**    | ꘣         | **r**     | ꕼ         |
| **l (L)** | ꘗ         | **s**     | 𑀚         |
| **m**     | 𑀠         | **t**     | ꔧ         |
| **z**     | 𑀣         | **v**     | ꗷ         |
| **w**     | 𑀲         | **y**     | 𑀫         |

---

## **4. Independent Vowels**


| Vowel | Symbol |

|--------|--------|

| **a**  | 𑀅     |

| **e**  | 𑀟     |

| **i**  | 𑀇     |

| **ị**  | 𑀈     |

| **o**  | **𑀏** |

| **ọ**  | 𑀐     |

| **u**  | **𑀑** |

| **ụ**  | 𑀊     |



---

## 5. Writing Rules

### 🅰️ Rule 1: **True Digraphs Are Native Consonants**

Treat these digraphs as **single letters**:
- **ch, gb, gh, gw, kp, kw, nw, ny**

✅ They behave like any other base consonant:
- *nwa* → 𑀟̱  
- *nye* → 𑀤̄

---

### 🅱️ Rule 2: **Double Consonants (Geminates)**

For **repeated consonants**, just **double the base**.  
No diacritic is used.

- *mma* → 𑀫𑀫  
- *nno* → 𑀦𑀦̣  
- *nnyocha* → 𑀦𑀦̄𑀬̤𑀳̄

---

### 🅾️ **Rule 3: Bare Consonants (Breve ◌̆)**

In **Igbo**, **bare consonants should generally not occur**, since every syllable has a vowel, and consonant clusters are handled as **native digraphs** (e.g. *ndị* → ⴳ̈)

🔤 However, the **breve diacritic (◌̆)** is reserved for **non-Igbo words**, transliterations, or **foreign names** where a true bare consonant must be shown:

Examples:
- *Greg* → 𑀕̆𑀭̆𑀓̣
- *Chris* → 𑀙̆𑀭̊𑀲

Use this only when strictly necessary.

---

### 🆎 Rule 4: **Bare Consonants (No Vowel)**

Use **breve (̆)** to show that a consonant is "bare" (not followed by a vowel):

- *nta* → 𑀦̆𑀢  
- *ndị* → 𑀦̆𑀤̈

---

### 🆕 Rule 5: **Independent Vowels Stay Standalone**

Use **standalone vowel characters** when:

- A vowel starts a word
- The vowel is by itself

Examples:
- *ọ dị mma* → 𑀐 𑀤̈ 𑀫𑀫  
- *a na m* → 𑀅 𑀦 𑀫

---

## 🆕 Rule 6: Tone Markers with Vowel Diacritics

In **Ndịokwu**, tone is generally inferred from context. However, if explicit marking is required:

1. **High Tone**: Use an **up-caret** (˄)  
2. **Low Tone**: Use a **down-caret** (˅)  
3. **Mid Tone**: No tone mark  

### Placement

- If the **top of the glyph is free** (no diacritic), place the caret **above** the consonant.
- If there is **already a top diacritic** (e.g., **ʼ** or **̊**), place the caret at the **end** of the glyph to avoid collisions.

### Examples with 𑀳̄ ("he")

| Tone     | Marking      | Glyph    | Explanation                                              |
|----------|--------------|----------|----------------------------------------------------------|
| High     | 𑀳̄˄         | "hé"     | Up-caret (˄) appended after the ̄ top mark              |
| Low      | 𑀳̄˅         | "hè"     | Down-caret (˅) appended after the ̄ top mark            |
| Mid      | 𑀳̄          | "he"     | No tone mark (default)                                  |

**Use these tone markers only if tone distinction is crucial.** Otherwise, leaving them out simplifies the script.
---

## 📊 Glyph Groups

The Ndịokwu script organizes consonants into logical groups based on phonetic properties:

| Group | Assigned Sounds | Glyphs | Explanation |
|-------|-----------------|--------|-------------|
| Group A1 | gb, gh, gw | ꘛ, ꔎ, ꖸ | Voiced labial–velars/fricatives; looped energy |
| Group B1 | b, j, nt, nd | ꕫ, ꗏ, ꘧, ⴳ | Voiced stops + affricates |
| Group B2 | f, v | ꗦ, ꗷ | Voiceless/voiced fricatives |
| Group D2 | ng, kp | 𑀔, 𑁟 | Deep-back/nasal–labial clusters |
| Group F | mb, nk | 𑄘, 𑄉 | Pre-nasalized clusters |

Understanding these phonetic groupings helps to recognize patterns in the Ndịokwu script and makes learning the system more intuitive.

---

## ✅ Summary

- 44 consonants × 8 vowels = phonetic completeness  
- Compact, diacritic-based logic  
- Full Unicode support  
- Easy to learn, efficient to use

---

Igbo Abugida:
𑀐  𑀩̳𑀭̳ 𑀦 𑀈 𑀦 𑀅𑀕̳ 𑀇𑀳ʼ , 𑀐. 𑀧̳𑀢𑀭 𑀦 𑀅 𑀩̳ 𑀑𑀒ʼ 𑀐𑀨̳𑀭̈𑀓.

Igbo Latin:
Ọ bụrụ na ị na-agụ ihe a, ọ pụtara na ị bụ onye Afurịka.

English Translation:
If you are reading this, it means you are an African.
