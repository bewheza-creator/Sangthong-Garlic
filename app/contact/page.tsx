import CardContact from '@/components/contact/card_contact'
import React from 'react'
import Image from 'next/image'
import Hero_contact from '@/components/contact/hero-contact'

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#faf0e6]">
      <Hero_contact />
      {/* Contact Cards */}
      <div className="pb-20">
        <CardContact />
      </div>
    </div>
  )
}
