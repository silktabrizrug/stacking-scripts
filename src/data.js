export const nodes = [
    {
      id: "1.0",
      title: "Earth",
      body: "Rare earth elements, coltan, silica, copper. The planetary substrate from which all digital infrastructure is extracted. Before a single character can be encoded, the ground must be broken. Joler and Crawford's anatomy map makes this literal: the Amazon Echo traces back to mines in the DRC and geological formations millions of years old.",
      sources: [
        { citekey: "crawfordAtlasAI", display: "Crawford, Atlas of AI" },
        { citekey: "jolerAnatomyAISystem2018", display: "Joler & Crawford, Anatomy of an AI System (2018)" }
      ]
    },
    {
      id: "2.0",
      title: "Geology & Mining",
      body: "The DRC supplies ~70% of the world's coltan. Mines staffed through conflict labor, with cave-ins, chemical leakage, and low-level radiation as documented occupational hazards. These minerals become chips, circuits, and servers. The hardware of language runs on extracted earth — and those extraction chains are racially and geographically concentrated in the Global South.",
      sources: [
        { citekey: "crawfordAtlasAI", display: "Crawford, Atlas of AI" },
        { citekey: "kwetDigitalColonialismInfrastructureasDebt2022", display: "Kwet, Digital Colonialism and Infrastructure-as-Debt (2022)" }
      ]
    },
    {
      id: "3.0",
      title: "Infrastructure as Debt",
      body: "Foreign corporations — predominantly US-based — build digital infrastructure in the Global South not as public good but as market capture. Kwet calls this 'infrastructure-as-debt': fiber, cloud, and connectivity rolled out by Big Tech to create long-term dependency, not sovereignty.",
      sources: [
        { citekey: "kwetDigitalColonialismInfrastructureasDebt2022", display: "Kwet, Digital Colonialism and Infrastructure-as-Debt (2022)" }
      ]
    },
    {
      id: "4.0",
      title: "Subsea Cables & Network Topology",
      body: "~900,000 km of submarine cable carry ~95% of international data. The physical routes of this network follow colonial trade geometries. Increasingly co-owned by hyperscalers (Google, Meta, Amazon), these cables concentrate control at the architecture level.",
      sources: [
        { citekey: "kwetDigitalColonialismUS2019", display: "Kwet, Digital Colonialism: US Empire (2019)" }
      ]
    },
    {
      id: "5.0",
      title: "Data Centers & Energy",
      body: "Massive energy and water consumers, geographically concentrated in the Global North. Language models are trained here. The infrastructure that decides which languages get modeled, at what scale, with what data.",
      sources: [
        { citekey: "CostsConnectionStanford2019", display: "Couldry & Mejias, The Costs of Connection (2019)" }
      ]
    },
    {
      id: "6.0",
      title: "Data Colonialism",
      body: "Data extracted from users in the Global South is processed into profit in the Global North. Thatcher, O'Sullivan & Mahmoudi theorize this as 'accumulation by dispossession' — a new form of primitive accumulation where daily life itself becomes raw material.",
      sources: [
        { citekey: "DataColonialismAccumulation", display: "Thatcher et al., Data Colonialism Through Accumulation by Dispossession (2016)" }
      ]
    },
    {
      id: "7.0",
      title: "Ghost Work & Gig Labor",
      body: "Data labeling, content moderation, RLHF annotation — outsourced to Nairobi, Manila, Caracas. Workers paid fractions of a dollar per task to train models they will never own, often annotating content in languages not their own.",
      sources: [
        { citekey: "jolerAnatomyAISystem2018", display: "Joler & Crawford, Anatomy of an AI System (2018)" }
      ]
    },
    {
      id: "8.0",
      title: "Encoding Systems & Unicode",
      body: "Before a language can be processed by any algorithm, it must be encoded. The Unicode Consortium — a private, US-corporate-dominated body — decides which scripts, characters, and symbols exist in the digital realm. Membership costs up to $18,000/year.",
      sources: [
        { citekey: "ConstructionMultilingualInternet", display: "John, The Construction of the Multilingual Internet (2013)" }
      ]
    },
    {
      id: "9.0",
      title: "Training Data & Language Hierarchies",
      body: "Training data reflects the internet's existing hierarchies: English-dominant, Western-centric, written-language-biased. Of the world's ~7,000 languages, only a few dozen receive meaningful NLP support.",
      sources: [
        { citekey: "paolilloLanguageDiversityInternet2005", display: "Paolillo, Language Diversity on the Internet (UNESCO, 2005)" }
      ]
    },
    {
      id: "10.0",
      title: "Algorithmic Bias",
      body: "When bias enters training data, it compounds through the model. Abid, Farooqi & Zou demonstrated that GPT-3 associates 'Muslim' with 'terrorist' in 23% of test completions — even with adversarial positive prompting to counteract it.",
      sources: [
        { citekey: "abidPersistentAntiMuslimBias2021", display: "Abid et al., Persistent Anti-Muslim Bias in Large Language Models (2021)" }
      ]
    },
    {
      id: "11.0",
      title: "Platform Moderation Pipelines",
      body: "Automated moderation systems trained predominantly on English. Slang, code-switching, diasporic hybrid scripts, and non-dominant language registers break or confuse classifiers. The platform sees these communities as edge cases — or not at all.",
      sources: [
        { citekey: "kupferLanguageColonialityNonDominant2022", display: "Kupfer & Muyumba, Language and Coloniality (2022)" }
      ]
    },
    {
      id: "12.0",
      title: "Social Case: Facebook & Myanmar",
      body: "In 2017–2018, Facebook's algorithm failed to detect anti-Rohingya hate speech in Burmese. The platform had no Burmese-language content moderators at scale. The UN's Fact-Finding Mission cited Facebook as a 'contributing factor' in the genocide.",
      sources: [
        { citekey: "FacebooksLanguageGaps2021", display: "AP News, Facebook's Language Gaps Weaken Screening of Hate, Terrorism (2021)" }
      ]
    }
  ]