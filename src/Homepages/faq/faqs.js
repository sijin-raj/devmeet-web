import React, { useState } from "react"
import { data } from "./data/data"
import FAQ from "./component/faq"
export default function FAQS() {
  const [faqs, setFaqs] = useState(data)

  return (
    <section
      id="faqs"
      className="bg-theme_two px-20 py-10 flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="text-left mx-auto space-y-10">
        <h1 className="w-4/5 mx-auto text-lg xl:text-6xl font-poppins font-medium  text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 ">
          FAQs
        </h1>
      </div>
      <div className="flex flex-col w-full lg:w-4/5 space-y-4 mt-2">
        {faqs.map(faq => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </div>
    </section>
  )
}
