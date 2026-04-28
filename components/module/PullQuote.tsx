import React from "react"

type PullQuoteProps = {
  children: React.ReactNode
  source?: string
}

export function PullQuote({ children, source }: PullQuoteProps) {
  return (
    <div className="my-8 pl-6 border-l-4 border-[#3DBFA0]">
      <blockquote className="text-xl font-light italic text-[#1B2D5B] leading-relaxed mb-2">
        {children}
      </blockquote>
      {source && <p className="text-sm text-gray-400">{source}</p>}
    </div>
  )
}