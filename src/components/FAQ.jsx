import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqItems = [
    {
      question: "Do I need AEO for my business?",
      answer: "AI shapes what your customers trust and who they choose. Platforms like ChatGPT and Google AI Overview have rapidly become go-to sources for trusted information. Real buying decisions now happen across a mix of invisible touchpoints – and a conversation with AI is one of them. We build the layer that validates your brand in those moments and helps drive conversions. Most brands haven't caught up. Right now, the space is open, but once AI starts associating your category with another name, it becomes harder to shift. Securing your position early is foundational to long-term brand relevance."
    },
    {
      question: "How long until I see results?",
      answer: "Our clients typically see initial results within 2-4 weeks of implementation. For AI automation projects, you'll notice immediate efficiency gains as soon as the first processes are automated. AEO optimization shows results within 4-8 weeks as AI platforms begin recognizing and citing your optimized content. Full ROI is typically achieved within 3-6 months, with many clients seeing 300-500% returns by the end of the first year."
    },
    {
      question: "How is performance measured?",
      answer: "We use specific, measurable KPIs tailored to your goals. For AI automation: time saved, cost reduction, error rate improvement, and process efficiency gains. For AEO: AI platform citations, voice search visibility, and branded query performance. For training: skill assessment scores, implementation rates, and productivity improvements. We provide monthly reports with clear metrics and ROI calculations, so you always know exactly how your investment is performing."
    },
    {
      question: "Do I still need to do regular SEO?",
      answer: "Yes, but the landscape is evolving rapidly. Traditional SEO remains important for direct website traffic, but 25% of organic traffic is moving to AI platforms by 2026. AEO (AI-Enhanced Optimization) complements SEO by ensuring your brand gets cited by AI chatbots and voice assistants. Think of AEO as future-proofing your digital presence – while SEO gets people to your website, AEO gets your brand mentioned in AI conversations where buying decisions increasingly happen."
    },
    {
      question: "Do you replace my marketing team?",
      answer: "No, we enhance and empower your existing team. Our approach is collaborative – we work alongside your marketing, operations, and leadership teams to implement AI solutions that amplify their capabilities. We provide training, tools, and ongoing support so your team can manage and optimize AI systems independently. Many clients find that AI automation actually frees up their team's time to focus on higher-value strategic work rather than repetitive tasks."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Our free 45-minute consultation (valued at £5,000) includes a comprehensive assessment of your current processes, identification of AI automation opportunities, preliminary ROI projections, and a customized roadmap for AI implementation. We also provide insights into AEO opportunities specific to your industry and competitive landscape analysis. No obligation, no sales pressure – just actionable insights."
    }
  ]

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg bg-white">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg font-semibold text-black pr-4">
              {item.question}
            </h3>
            {openItems.has(index) ? (
              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          {openItems.has(index) && (
            <div className="px-6 pb-4">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
