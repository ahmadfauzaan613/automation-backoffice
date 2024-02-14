import Title from '@/app/Components/Title'
import React from 'react'

export default function page() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between pr-12">
        <Title textTitle={'data bot'} />
        <button className="bg-[#FCA311] px-8 py-3 text-white rounded-md font-bold">ADD DATA</button>
      </div>
    </React.Fragment>
  )
}
