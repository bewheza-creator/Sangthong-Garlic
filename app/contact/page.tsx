import CardContact from '@/components/contact/card_contact'
import React from 'react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#faf0e6]">
      {/* Hero Section (Banner Image) */}
      <div className="w-full">
        {/* 
          เปลี่ยนรูปภาพแบนเนอร์ด้านล่างนี้โดยแก้ src="/images/hero/hero.png" ให้เป็นชื่อไฟล์ของคุณ 
          รูปที่คุณนำมาใส่ควรจะมีข้อความ "จัดจำหน่าย..." อยู่ในรูปเรียบร้อยแล้ว
        */}
        <div className="w-full relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]">
          <Image 
            src="/images/brand/logo.jpg" 
            alt="แบนเนอร์ ร้านแสงทอง" 
            fill 
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Contact Cards */}
      <div className="pb-20">
        <CardContact />
      </div>
    </div>
  )
}
