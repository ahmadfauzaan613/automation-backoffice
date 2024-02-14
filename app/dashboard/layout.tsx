import React from 'react'
import Sidebar from '../Components/Sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </React.Fragment>
  )
}
