import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import Baner from './components/Baner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header/>
      <Baner/>
      
    </div> )
}
