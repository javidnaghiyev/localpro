import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Head from 'next/head'

const metadata = {
    title: 'Salam'
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <div className="main">

            </div>

            <main className="app">
                <Navbar />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout