import Link from 'next/link'
import Layout from '../components/Layout'
import SliderPhoto from '@/components/SliderPhoto'

function about() {
  return (
      <Layout title='About Kabyle Soccer Events'>
          <h1>About</h1>
          <p>This is an app to find Soccer Game and other outSide Games</p>
          <p>Version: 1.0.0</p>
          <Link href='/'>Home</Link>
          <SliderPhoto />
      </Layout >
    
  )
}

export default about