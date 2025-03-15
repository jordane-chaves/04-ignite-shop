import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import logoImg from '@/assets/logo.svg'
import { Container, Header } from '@/styles/components/app-layout'

import { Cart } from './cart'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Cart />
      </Header>

      {children}
    </Container>
  )
}
