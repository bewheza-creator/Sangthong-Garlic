import CardContact from '@/components/contact/card_contact'
import React from 'react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf0e6]">
      {/* Contact Cards */}
        <CardContact />
    </div>
  )
}
