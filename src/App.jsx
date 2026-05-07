import { useState, useEffect, useRef } from 'react'
import refs from './references.json'

// ASCII image map — drop your files into /public and update the filenames here
const ASCII_IMAGES = {
  "1.0":  "/ascii/earth.png",
  "2.0":  "/ascii/geology.png",
  "3.0":  "/ascii/the-cloud.png",
  "4.0":  "/ascii/subsea-cables.png",
  "5.0":  "/ascii/data-centers.png",
  "6.0":  "/ascii/data-colonialism.png",
  "7.0":  "/ascii/ghost-work.png",
  "8.0":  "/ascii/encoding.png",
  "8.1":  "/ascii/workarounds.png",
  "9.0":  "/ascii/training-data.png",
  "9.1":  "/ascii/homogenization.png",
  "9.2":  "/ascii/english-dominance.png",
  "10.0": "/ascii/algorithmic-bias.png",
  "10.1": "/ascii/safety-failures.png",
  "11.0": "/ascii/moderation.png",
  "11.1": "/ascii/design-injustice.png",
  "12.0": "/ascii/facebook-myanmar.png",
  "12.1": "/ascii/iran.png",
  "12.2": "/ascii/twitter-cropping.png",
  "12.3": "/ascii/next-billion-users.png",
  "12.4": "/ascii/peru.png",
  "12.5": "/ascii/facebook-arabic-gaza.png",
  "12.6": "/ascii/old-arabic-font.png",
  "12.7": "/ascii/arab-spring.png",
  "12.8": "/ascii/hong-kong.png",
}

// Fallback image used until you replace each one
const FALLBACK = "/stacking-scripts/ascii-fallback.png"

function getImage(id) {
  return ASCII_IMAGES[id] || FALLBACK
}

const nodes = [
  {
    id: "1.0", title: "Earth",
    body: "Rare earth elements, coltan, silica, copper. The planetary substrate from which all digital infrastructure is extracted. Before a single character can be encoded, the ground must be broken. Joler and Crawford's anatomy map makes this literal: the Amazon Echo traces back to mines in the DRC and geological formations millions of years old.",
    sources: [
      { citekey: "crawfordAtlasAI", display: "Crawford, Atlas of AI" },
      { citekey: "jolerAnatomyAISystem2018", display: "Joler & Crawford, Anatomy of an AI System (2018)" }
    ]
  },
  {
    id: "2.0", title: "Geology",
    body: "The DRC supplies ~70% of the world's coltan. Mines staffed through conflict labor, with cave-ins, chemical leakage, and low-level radiation as documented occupational hazards. These minerals become chips, circuits, and servers. The hardware of language runs on extracted earth — and those extraction chains are racially and geographically concentrated in the Global South.",
    sources: [
      { citekey: "crawfordAtlasAI", display: "Crawford, Atlas of AI" },
      { citekey: "kwetDigitalColonialismInfrastructureasDebt2022", display: "Kwet, Digital Colonialism and Infrastructure-as-Debt (2022)" }
    ]
  },
  {
    id: "3.0", title: "The Cloud",
    body: "Foreign corporations — predominantly US-based — build digital infrastructure in the Global South not as public good but as market capture. Kwet calls this 'infrastructure-as-debt': fiber, cloud, and connectivity rolled out by Big Tech to create long-term dependency, not sovereignty. The routes and owners of the internet are determined before a user speaks a word.",
    sources: [
      { citekey: "kwetDigitalColonialismInfrastructureasDebt2022", display: "Kwet, Digital Colonialism and Infrastructure-as-Debt (2022)" },
      { citekey: "kwetDigitalColonialismUS2019", display: "Kwet, Digital Colonialism: US Empire (2019)" }
    ]
  },
  {
    id: "4.0", title: "Subsea Cables",
    body: "~900,000 km of submarine cable carry ~95% of international data. The physical routes of this network follow colonial trade geometries. Increasingly co-owned by hyperscalers (Google, Meta, Amazon), these cables concentrate control at the architecture level of the digital ecosystem.",
    sources: [
      { citekey: "kwetDigitalColonialismUS2019", display: "Kwet, Digital Colonialism: US Empire (2019)" },
      { citekey: "jolerAnatomyAISystem2018", display: "Joler & Crawford, Anatomy of an AI System (2018)" }
    ]
  },
  {
    id: "5.0", title: "Data Centers",
    body: "Massive energy and water consumers, geographically concentrated in the Global North. Language models are trained here. The infrastructure that decides which languages get modeled, at what scale, with what data. The costs — water, energy, land — are externalized onto local communities while the value flows upward.",
    sources: [
      { citekey: "CostsConnectionStanford2019", display: "Couldry & Mejias, The Costs of Connection (2019)" },
      { citekey: "crawfordAtlasAI", display: "Crawford, Atlas of AI" }
    ]
  },
  {
    id: "6.0", title: "Data Colonialism",
    body: "Data extracted from users in the Global South is processed into profit in the Global North. Thatcher, O'Sullivan & Mahmoudi theorize this as 'accumulation by dispossession' — a new form of primitive accumulation where daily life itself becomes raw material. The personal, the social, the linguistic: all quantified, captured, and commodified without consent or compensation.",
    sources: [
      { citekey: "DataColonialismAccumulation", display: "Thatcher et al., Data Colonialism Through Accumulation by Dispossession (2016)" },
      { citekey: "CostsConnectionStanford2019", display: "Couldry & Mejias, The Costs of Connection (2019)" }
    ]
  },
  {
    id: "7.0", title: "Ghost Work",
    body: "Data labeling, content moderation, RLHF annotation — outsourced to Nairobi, Manila, Caracas. Workers paid fractions of a dollar per task to train models they will never own, often annotating content in languages not their own, according to guidelines written in English by teams in San Francisco.",
    sources: [
      { citekey: "jolerAnatomyAISystem2018", display: "Joler & Crawford, Anatomy of an AI System (2018)" },
      { citekey: "mcintyreGigWorkersAfrica2026", display: "McIntyre et al., Gig Workers in Africa Have Been Helping the US Military (2026)" }
    ]
  },
  {
    id: "8.0", title: "Encoding",
    body: "Before a language can be processed by any algorithm, it must be encoded. The Unicode Consortium — a private, US-corporate-dominated body — decides which scripts, characters, and symbols exist in the digital realm. Membership costs up to $18,000/year. Languages without institutional backing are encoded late, incompletely, or not at all.",
    sources: [
      { citekey: "ConstructionMultilingualInternet", display: "John, The Construction of the Multilingual Internet (2013)" },
      { citekey: "zhaoChineseCharacterModernisation2005", display: "Zhao, Chinese Character Modernisation in the Digital Era (2005)" },
      { citekey: "jordanLanguagesLeftKeeping2002", display: "Jordan, Languages Left Behind: Keeping Taiwanese off the Web (2002)" },
      { citekey: "anderson7DigitalVitality2023", display: "Anderson, Digital Vitality for Linguistic Diversity (2023)" }
    ]
  },
  {
    id: "8.1", title: "Workarounds",
    body: "'Arabizi' — Arabic written in Latin script with numerals substituting for sounds — emerged as a workaround when Arabic keyboards were unavailable. Gulf Arabic teens in instant messaging used what researchers called 'a funky language for teenzz.' Greeks developed 'Greeklish.' These are not failures of literacy — they are adaptations to a hostile technical environment.",
    sources: [
      { citekey: "palfreymanFunkyLanguageTeenzz2003", display: "Palfreyman & al Khalil, A Funky Language for Teenzz (2003)" },
      { citekey: "koutsogiannisGreeklishGreeknessTrends2003", display: "Koutsogiannis & Mitsikopoulou, Greeklish and Greekness (2003)" },
      { citekey: "warschauerLanguageChoiceOnline2002", display: "Warschauer et al., Language Choice Online: Egypt (2002)" }
    ]
  },
  {
    id: "9.0", title: "Training Data",
    body: "Training data reflects the internet's existing hierarchies: English-dominant, Western-centric, written-language-biased. Of the world's ~7,000 languages, only a few dozen receive meaningful NLP support. Paolillo's UNESCO-commissioned research showed the internet appeared multilingual but was structurally English-first.",
    sources: [
      { citekey: "paolilloLanguageDiversityInternet2005", display: "Paolillo, Language Diversity on the Internet (UNESCO, 2005)" },
      { citekey: "adilazuardaMeasuringModelingCulture2024", display: "Adilazuarda et al., Towards Measuring and Modeling Culture in LLMs (2024)" },
      { citekey: "dorEnglishizationImposedMultilingualism2004", display: "Dor, From Englishization to Imposed Multilingualism (2004)" }
    ]
  },
  {
    id: "9.1", title: "Homogenization",
    body: "Even when non-English speakers are technically included, AI writing assistants steer them toward Western norms. A 2025 CHI study found that AI suggestions led Indian participants to adopt Western writing styles — altering not just what is written but how. The model doesn't just exclude: it assimilates.",
    sources: [
      { citekey: "agarwalAISuggestionsHomogenize2025", display: "Agarwal, Naaman & Vashistha, AI Suggestions Homogenize Writing (CHI 2025)" }
    ]
  },
  {
    id: "9.2", title: "English Dominance",
    body: "English proficiency is increasingly a prerequisite for meaningful participation in digital governance, public administration, and AI development itself. English dominance in AI paradigms creates exclusionary tendencies within global digital environments — not incidentally, but structurally.",
    sources: [
      { citekey: "ahmedEnglishDominanceDigital2025", display: "Ahmed et al., English Dominance, Digital Governance, and Strategic Planning (2025)" },
      { citekey: "crystalEnglishGlobalLanguage1997", display: "Crystal, English as a Global Language (1997)" }
    ]
  },
  {
    id: "10.0", title: "Algorithmic Bias",
    body: "When bias enters training data, it compounds through the model. Abid, Farooqi & Zou demonstrated that GPT-3 associates 'Muslim' with 'terrorist' in 23% of test completions — even with adversarial positive prompting to counteract it. These are not edge cases. They are the model's learned world.",
    sources: [
      { citekey: "abidPersistentAntiMuslimBias2021", display: "Abid, Farooqi & Zou, Persistent Anti-Muslim Bias in Large Language Models (2021)" },
      { citekey: "katzArtificialWhitenessColumbia2020", display: "Katz, Artificial Whiteness (Columbia University Press, 2020)" }
    ]
  },
  {
    id: "10.1", title: "Safety Failures",
    body: "LLM guardrails are built and tested primarily in English. Pakzad demonstrates that bilingual prompts can steer AI summaries in human rights contexts in ways that monolingual guardrails fail to catch. Safety itself is a monolingual infrastructure.",
    sources: [
      { citekey: "pakzadDontTrustSalt2026", display: "Pakzad, Don't Trust the Salt: AI Summarization, Multilingual Safety (2026)" }
    ]
  },
  {
    id: "11.0", title: "Moderation",
    body: "Automated moderation systems trained predominantly on English. Slang, code-switching, diasporic hybrid scripts, non-Latin orthographies, and non-dominant language registers break or confuse classifiers. Human review is thinly staffed for non-dominant languages. The platform sees these communities as edge cases — or not at all.",
    sources: [
      { citekey: "kupferLanguageColonialityNonDominant2022", display: "Kupfer & Muyumba, Language and Coloniality (Pollicy, 2022)" }
    ]
  },
  {
    id: "11.1", title: "Design Injustice",
    body: "These failures are not neutral accidents — they reflect who design processes center. Costanza-Chock's Design Justice framework argues that design reproduces the matrix of domination when communities most affected by technology are excluded from its creation. The monolingual, Western default is a design choice.",
    sources: [
      { citekey: "costanza-chockDesignJusticeCommunityLed2020", display: "Costanza-Chock, Design Justice (MIT Press, 2020)" },
      { citekey: "iraniPostcolonialComputingLens2010", display: "Irani et al., Postcolonial Computing (CHI 2010)" },
      { citekey: "aliBriefIntroductionDecolonial2016", display: "Ali, A Brief Introduction to Decolonial Computing (2016)" }
    ]
  },
  {
    id: "12.0", title: "Facebook & Myanmar",
    body: "In 2017–2018, Facebook's algorithm failed to detect anti-Rohingya hate speech in Burmese. The platform had no Burmese-language content moderators at scale. The UN's Fact-Finding Mission cited Facebook as a 'contributing factor' in the genocide. A direct line runs from encoding exclusion → data hierarchy → model failure → moderation gap → real-world atrocity.",
    sources: [
      { citekey: "FacebooksLanguageGaps2021", display: "AP News, Facebook's Language Gaps Weaken Screening of Hate, Terrorism (2021)" }
    ]
  },
  {
    id: "12.1", title: "Iran & Digital Memory Erasure",
    body: "During the 2022 Mahsa Jina Amini protests, platforms systematically removed content in Farsi and Kurdish. State suppression and platform algorithmic failure converged to erase digital records of the uprising. Personal archives were deleted, hashtags suppressed, and the collective memory of a resistance movement swallowed into what the author calls a 'black hole.'",
    sources: [
      { citekey: "CleansingPersonalArchives", display: "Cleansing Personal Archives and the Birth of the Black Hole, e-flux Journal #145" }
    ]
  },
  {
    id: "12.2", title: "Twitter's Image Cropping",
    body: "Pakzad's 2021 analysis found that when images contained both Persian/Arabic and Latin script, Twitter's cropping algorithm consistently centered the Latin text — rendering non-Latin language invisible. The gaze of the algorithm is a Western gaze: it learned to see Latin as the signal and everything else as noise.",
    sources: [
      { citekey: "pakzadGazingMotherTongue2021", display: "Pakzad, Gazing at the Mother Tongue: Twitter's Image Cropping Algorithm (2021)" }
    ]
  },
  {
    id: "12.3", title: "The Next Billion Users",
    body: "As platforms expanded into South and Southeast Asia, Latin America, and Sub-Saharan Africa, they brought design assumptions built for Western users. Arora documents radically different use patterns — shared devices, oral communication, non-Latin scripts — that platform design consistently failed to accommodate.",
    sources: [
      { citekey: "aroraNextBillionUsers2019", display: "Arora, The Next Billion Users (Harvard University Press, 2019)" }
    ]
  },
  {
    id: "12.4", title: "Peru & Free Software",
    body: "In 2002, a Peruvian congressman proposed legislation requiring the state to use free and open-source software, explicitly framing it as a matter of national sovereignty and access for Quechua and Aymara speakers. Code is not neutral, and proprietary English-first systems are a form of infrastructural lock-in.",
    sources: [
      { citekey: "chanCodingFreeSoftware2004", display: "Chan, Coding Free Software, Coding Free States (Anthropological Quarterly, 2004)" }
    ]
  },
  {
    id: "12.5", title: "Facebook, Arabic & Gaza",
    body: "During the Gaza war beginning October 2023, Facebook and Instagram's Arabic-language moderation broke down. The platform briefly banned #AlAqsa because NLP systems couldn't distinguish religious from prohibited content. Journalists described inoffensive Arabic posts flagged as terrorist content while actual incitement in other languages went unmoderated.",
    sources: [
      { citekey: "FacebookArabicLost", display: "On Facebook, Arabic Lost in Translation, The Arab Weekly" },
      { citekey: "FacebooksLanguageGaps2021", display: "AP News, Facebook's Language Gaps Weaken Screening of Hate, Terrorism (2021)" }
    ]
  },
  {
    id: "12.6", title: "The Old Arabic Font Workaround",
    body: "When Palestinian users found their accounts blocked, they switched to Ruqaa, an older Arabic script style not recognized by Facebook's OCR systems. Because the algorithm had been trained on modern standardized Arabic fonts, the archaic script was invisible to automated moderation. Communities adapted their written language to survive a hostile technical environment.",
    sources: [
      { citekey: "FacebookUsersDeploy", display: "Facebook Users Deploy Old Arabic Font to Bypass Algorithm, Middle East Eye" },
      { citekey: "palfreymanFunkyLanguageTeenzz2003", display: "Palfreyman & al Khalil, A Funky Language for Teenzz (2003)" }
    ]
  },
  {
    id: "12.7", title: "The Arab Spring",
    body: "During the Arab Spring uprisings of 2010–2012, amateur video became primary source material for international news — but platforms were not built for Arabic-language metadata or captions. Arabic-language content was systematically decontextualized and stripped of meaning as it circulated through Western media systems that couldn't read the text overlaid on images.",
    sources: [
      { citekey: "editionEyewitnessTextureConflict2018", display: "Global Media Journal, The Eyewitness Texture of Conflict: Arab Spring (2018)" }
    ]
  },
  {
    id: "12.8", title: "Hong Kong",
    body: "When Hong Kong protesters faced internet surveillance in 2019, they turned to AirDrop and the Bridgefy Bluetooth mesh app. The language of the protest — Cantonese, Traditional Chinese script, protest-specific slang — was itself a layer of security: systems trained on Simplified Chinese Mandarin were poorly equipped to parse it.",
    sources: [
      { citekey: "HongKongsProtesters2019", display: "Hong Kong Protesters Put AirDrop to Ingenious Use, Quartz (2019)" },
      { citekey: "HongKongProtesters", display: "Hong Kong Protesters Using Bluetooth Bridgefy App, BBC News" },
      { citekey: "zhaoChineseCharacterModernisation2005", display: "Zhao, Chinese Character Modernisation in the Digital Era (2005)" }
    ]
  }
]

const N = nodes.length
function mod(n, m) { return ((n % m) + m) % m }

function SourceItem({ source }) {
  const [open, setOpen] = useState(false)
  const ref = refs[source.citekey] || {}
  const hasDetail = ref.abstract || ref.url || ref.journal || ref.booktitle || ref.publisher

  return (
    <div style={{ borderBottom: '1px solid #FF3DDF' }}>
      <div
        onClick={() => hasDetail && setOpen(o => !o)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.45rem 0', cursor: hasDetail ? 'pointer' : 'default' }}
      >
        <span style={{ fontSize: '0.63rem', letterSpacing: '0.07em', color: '#555', flex: 1 }}>
          {source.display}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginLeft: '1rem', flexShrink: 0 }}>
          {ref.year && <span style={{ fontSize: '0.58rem', color: '#bbb', letterSpacing: '0.1em' }}>{ref.year}</span>}
          {hasDetail && (
            <span style={{
              fontSize: '0.72rem', color: '#FF3DDF', width: '14px', textAlign: 'center',
              display: 'inline-block', transition: 'transform 0.2s',
              transform: open ? 'rotate(45deg)' : 'none',
            }}>+</span>
          )}
        </div>
      </div>
      {open && hasDetail && (
        <div style={{ padding: '0.5rem 0 0.9rem', fontSize: '0.61rem', lineHeight: '1.75', color: '#666' }}>
          {(ref.journal || ref.booktitle || ref.publisher) && (
            <div style={{ marginBottom: '0.35rem', color: '#aaa', fontStyle: 'italic' }}>
              {ref.journal || ref.booktitle || ref.publisher}
            </div>
          )}
          {ref.abstract && <p style={{ marginBottom: '0.4rem' }}>{ref.abstract}</p>}
          {ref.url && (
            <a href={ref.url} target="_blank" rel="noreferrer" style={{ color: '#999', textDecoration: 'underline' }}>
              {ref.url.length > 55 ? ref.url.slice(0, 55) + '...' : ref.url}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

function NodeCard({ node, position }) {
  const styleMap = {
    current: { transform: 'translateX(0px) translateZ(0px) scale(1)', opacity: 1, pointerEvents: 'auto', visibility: 'visible' },
    next:    { transform: 'translateX(62vw) translateZ(-320px) scale(0.52)', opacity: 0, pointerEvents: 'none', visibility: 'visible' },
    prev:    { transform: 'translateX(-130vw) translateZ(-200px) scale(0.65)', opacity: 0, pointerEvents: 'none', visibility: 'visible' },
  }
  const s = styleMap[position] || styleMap.prev

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0,
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '1.5rem 8rem 1rem',
      transition: 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
      transformOrigin: '50% 50%',
      transformStyle: 'preserve-3d',
      overflowY: position === 'current' ? 'auto' : 'hidden',
      ...s
    }}>
      <div style={{ flex: '0 0 auto', marginBottom: '1.2rem' }}>
        <img
          src={getImage(node.id)}
          alt={node.title}
          onError={e => { e.target.src = FALLBACK }}
          style={{ maxHeight: '40vh', maxWidth: '52vw', objectFit: 'contain', filter: 'grayscale(100%) contrast(1.1)' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem', maxWidth: '540px', width: '100%' }}>
        <span style={{
          fontSize: '0.58rem', letterSpacing: '0.2em', color: '#FF3DDF',
          border: '1px solid #FF3DDF', padding: '0.12rem 0.35rem', borderRadius: '4px', whiteSpace: 'nowrap'
        }}>
          {node.id}
        </span>
        <span style={{ fontSize: '1.4rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#222', fontWeight: 400 }}>
          {node.title}
        </span>
      </div>

      <p style={{ maxWidth: '540px', width: '100%', fontSize: '0.79rem', lineHeight: '1.9', color: '#222', textAlign: 'left', marginBottom: '1.4rem' }}>
        {node.body}
      </p>

      <div style={{ maxWidth: '540px', width: '100%', borderTop: '1px solid #FF3DDF', paddingTop: '0.4rem' }}>
        {node.sources.map((s, i) => <SourceItem key={i} source={s} />)}
      </div>
    </div>
  )
}

function AboutPanel({ onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed', top: '70px', left: '1.4rem',
          width: '340px', height: 'calc(100vh - 160px)',
          background: '#fff', borderRight: '1px solid #FF3DDF',
          zIndex: 50, padding: '2.5rem 2rem 2rem',
          display: 'flex', flexDirection: 'column',
          fontFamily: "'Courier New', Courier, monospace",
          overflowY: 'auto',
        }}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.75rem', color: '#aaa', fontFamily: 'inherit',
        }}>✕</button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF3DDF', lineHeight: '1.5', marginBottom: '0.3rem' }}>
            Stacking Scripts:
          </div>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', lineHeight: '1.6' }}>
            Power, Platforms, and the Politics of Digital Language
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', background: '#FF3DDF', marginBottom: '1.5rem' }} />

        <p style={{ fontSize: '0.74rem', lineHeight: '1.9', color: '#333', letterSpacing: '0.02em' }}>
          A quick guide to understanding some of the infrastructural layers that collectively reproduce linguistic asymmetry — what happens as major tech companies and their imperialist interests shape our digital spaces.
        </p>

        <p style={{ fontSize: '0.74rem', lineHeight: '1.9', color: '#333', letterSpacing: '0.02em', marginTop: '1rem' }}>
          To create a true digital commons, we must interrogate the architecture itself and work towards building safe, sovereign infrastructure that can carry our cultures, communities, and movements across borders and through generations.
        </p>

      </div>
    </>
  )
}

export default function App() {
  const [current, setCurrent] = useState(9)
  const [aboutOpen, setAboutOpen] = useState(true)
  const isAnimating = useRef(false)
  const filmstripRef = useRef(null)

  const goTo = (i) => {
    if (isAnimating.current) return
    isAnimating.current = true
    setCurrent(mod(i, N))
    setTimeout(() => { isAnimating.current = false }, 980)
  }

  // Scroll navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return
      isAnimating.current = true
      if (e.deltaY > 0) setCurrent(c => mod(c + 1, N))
      else setCurrent(c => mod(c - 1, N))
      setTimeout(() => { isAnimating.current = false }, 980)
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  // Auto-scroll filmstrip to current
  useEffect(() => {
    if (!filmstripRef.current) return
    const thumb = filmstripRef.current.children[current]
    if (thumb) thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [current])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#fff', position: 'relative', fontFamily: "'Courier New', Courier, monospace" }}>

      {/* About button */}
      <button
        onClick={() => setAboutOpen(o => !o)}
        style={{
          position: 'fixed', top: '1.4rem', left: '1.4rem', zIndex: 60,
          background: 'none', border: '1px solid #FF3DDF', borderRadius: '4px', cursor: 'pointer',
          fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#FF3DDF', padding: '0.5rem 1rem', fontFamily: 'inherit',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF3DDF'; e.currentTarget.style.color = '#FF3DDF' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#FF3DDF'; e.currentTarget.style.color = '#FF3DDF' }}
      >
        About
      </button>

      {aboutOpen && <AboutPanel onClose={() => setAboutOpen(false)} />}

      {/* 3D scene */}
      <div style={{
        position: 'relative', width: '100%',
        height: 'calc(100vh - 90px)',
        overflow: 'hidden',
        perspective: '900px',
        perspectiveOrigin: '50% 45%',
      }}>
        {nodes.map((node, i) => {
          let position
          if (i === current) position = 'current'
          else if (i === mod(current + 1, N)) position = 'next'
          else if (i === mod(current - 1, N)) position = 'prev'
          else return null
          return <NodeCard key={node.id} node={node} position={position} />
        })}
      </div>

      <div style={{ position: 'fixed', bottom: '115px', left: 0, right: 0, zIndex: 100, fontSize: '0.6rem', letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', textAlign: 'center', whiteSpace: 'nowrap' }}>
        Scroll back and forth to discover a path of connections between hardware → software → society
      </div>

      {/* Left arrow */}
      <button
        onClick={() => goTo(current - 1)}
        style={{
          position: 'fixed', left: 'calc(2rem + 40px)', top: 'calc(50% + 80px)', transform: 'translateY(-50%)',
          zIndex: 100, background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: '2rem',
          color: '#FF3DDF', lineHeight: 1, padding: 0,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
        onMouseLeave={e => e.currentTarget.style.opacity = 1}
      >←</button>

      {/* Right arrow */}
      <button
        onClick={() => goTo(current + 1)}
        style={{
          position: 'fixed', right: 'calc(2rem + 40px)', top: 'calc(50% + 80px)', transform: 'translateY(-50%)',
          zIndex: 100, background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: '2rem',
          color: '#FF3DDF', lineHeight: 1, padding: 0,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.5}
        onMouseLeave={e => e.currentTarget.style.opacity = 1}
      >→</button>

      {/* Filmstrip */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '90px',
        borderTop: '2px solid #FF3DDF', background: '#fff',
        display: 'flex', alignItems: 'center',
        paddingLeft: '1rem', paddingRight: '1rem',
      }}>
        <div
          ref={filmstripRef}
          style={{
            display: 'flex', overflowX: 'hidden',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
            alignItems: 'center', height: '100%',
            paddingBottom: '4px', width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {nodes.map((node, i) => (
            <div
              key={node.id}
              onClick={() => goTo(i)}
              style={{
                flex: '0 0 auto', textAlign: 'center', cursor: 'pointer',
                opacity: i === current ? 1 : 0.28,
                transition: 'opacity 0.3s',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px'
              }}
            >
              <img
                src={getImage(node.id)}
                onError={e => { e.target.src = FALLBACK }}
                style={{
                  height: '56px', width: '56px', objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  outline: i === current ? '1.5px solid #FF3DDF' : 'none', borderRadius: '4px',
                  display: 'block'
                }}
              />
              <span style={{ fontSize: '0.44rem', letterSpacing: '0.1em', color: '#aaa' }}>
                {node.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
