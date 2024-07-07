"use client"

import { Roboto } from 'next/font/google'
import './globals.css'
import { LogonStateContextProvider } from '@/hooks/contexts/LogonStateContext'
import Footer from '@/features/common/modules/Footer'
import Navigation from '@/features/common/modules/Navigation'
import Sidebar from '@/features/common/modules/Sidebar'
import { useContext, useState } from 'react'
 
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  const [sidebar, setSidebar] = useState(false)
  return (
    <html lang="en" >
      <body>
        <div className='wrapper flex flex-col h-full'>        
        <LogonStateContextProvider>
          <Navigation sidebar={sidebar} setSidebar={setSidebar} />
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
          {children}
          <Footer />
        </LogonStateContextProvider>
        </div>
      </body>
    </html>
  )
}