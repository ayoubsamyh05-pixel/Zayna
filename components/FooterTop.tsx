import { Clock, Mail, Phone } from 'lucide-react';
import React from 'react'

interface ContactItemData {
    title: string;
    description: string;
    icon: React.ReactNode;
}
const data: ContactItemData[] = [
    {
        title: "Call Us",
        description: "+212 6 12 34 56 78",
        icon: (
            <Phone className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
    {
        title: "Working Hours",
        description: "Mon-Fri: 9AM - 6PM",
        icon: (
            <Clock className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
    {
        title: "Email Us",
        description: "contact@company.com",
        icon: (
            <Mail className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 border-b'>
        {data?.map((item, index)=>
            <div key={index} className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect'>
                {item?.icon}
                <div>
                    <h3 className='font-semibold text-gray-900 group-hover:text-black hoverEffect'>{item?.title}</h3>
                    <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect'>{item?.description}</p>
                </div>
            </div>
        )}
    </div>
  )
}


export default FooterTop