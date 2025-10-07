import React from 'react'
import TestimalCard from '../otherComponents/TestimalCard'

function TestimalsFromStudents() {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold pb-5'>Testimals from our Students</h1>

      {/* Scrollable container */}
      <div className='w-full text-center flex p-4'>
        <div className='flex ml-20'>
          <TestimalCard
            quote="https://res.cloudinary.com/dcttatiuj/image/upload/v1758388188/png-transparent-quotation-mark-quotation-quote-symbol-speech-review-customer-removebg-preview_vo0ymy.png"
            text="The LIVE classes were so engaging that it was super easy to always stay focused. The teachers were always there to resolve my doubts in no time! I felt empowered & confident!"
            name="Aritro Ray"
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFwGkA8rjuAsLdWdVmY0DFh3BsRO5SRzh0g&s"
            rank="AIR 50, JEE '25, IIT Bombay"
          />
          <TestimalCard
            quote="https://res.cloudinary.com/dcttatiuj/image/upload/v1758388188/png-transparent-quotation-mark-quotation-quote-symbol-speech-review-customer-removebg-preview_vo0ymy.png"
            text="I got to stay home with my family & aced my JEE prep with ALLEN Online. My favourite feature was the Improvement Book, which helped track & fix all my mistakes."
            name="Arka Banerjee"
            link="https://media.licdn.com/dms/image/v2/C5103AQFGCUCQrb4_XA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1527789931724?e=2147483647&v=beta&t=NYLMm4n-8l3cj-_NG0e0EOY5QJLwDnj8Zc8oQ-3O_xI"
            rank="AIR 395, JEE '25, IIT Kharagpur"
          />
          <TestimalCard
            quote="https://res.cloudinary.com/dcttatiuj/image/upload/v1758388188/png-transparent-quotation-mark-quotation-quote-symbol-speech-review-customer-removebg-preview_vo0ymy.png"
            text="I wanted to stay close to family & avoid travel. ALLEN Online's LIVE classes, NCERT-based study material & quick doubt-solving helped me crack NEET with AIR 74. Best decision ever!"
            name="Tanmay Jagga"
            link="https://asset.allen.in/ba842df0-1f38-4b87-9d95-fd57c6e811bc/sc/image_preview_extra_large/secondaryContent.png?__ar__=1.076271"
            rank="AIR 74, NEET '25, MAMC Delhi"
          />
          <TestimalCard
            quote="https://res.cloudinary.com/dcttatiuj/image/upload/v1758388188/png-transparent-quotation-mark-quotation-quote-symbol-speech-review-customer-removebg-preview_vo0ymy.png"
            text="ALLEN's track record gave me confidence. The LIVE online classes, regular tests with analysis & strong doubt support helped me stay focused & improve steadily. It was the discipline I needed."
            name="Aritro Ray"
            link="https://media.licdn.com/dms/image/v2/D4D03AQHzo3n69_bd0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691147436049?e=2147483647&v=beta&t=HGSiGAtR0hJ1oWffBO2gHf8RKk4oIp_My-RZA3gLoUU"
            rank="AIR 247, NEET '25, AIIMS Delhi"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimalsFromStudents
