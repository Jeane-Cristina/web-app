import FilterProvider from '@/contexts/FilterContext'

import Header from '@/components/header/header'
import styles from './page.module.css'
import Thumbnails from '@/components/thumbnails/thumbnails'

export default function Home() {
  return (
    <FilterProvider>
      <main className={styles.main}>
        <Header />
        <Thumbnails />
      </main>
    </FilterProvider>
  )
}
