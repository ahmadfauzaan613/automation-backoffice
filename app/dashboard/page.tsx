import React from 'react'
import Image from 'next/image'
import profilePic from '../Assets/Image/undraw_hello_re_3evm.svg'
import Title from '../Components/Title'

export default function page() {
  return (
    <React.Fragment>
      <Title textTitle={'SELAMAT DATANG AHMAD'}>
        <div className="absolute bottom-12 right-12">
          <Image src={profilePic} width={600} height={500} alt="Picture of the author" />
        </div>
      </Title>
    </React.Fragment>
  )
}
