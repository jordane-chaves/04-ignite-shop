import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '@/assets/logo.svg'
import { Cart } from '@/components/cart'
import { CartProvider } from '@/contexts/cart-provider'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <Cart />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
