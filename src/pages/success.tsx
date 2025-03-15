import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

import logoImg from '@/assets/logo.svg'
import { stripe } from '@/lib/stripe'
import {
  Header,
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '@/styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    id: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
        </Header>

        <ImagesContainer>
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image src={product.imageUrl} width={130} height={140} alt="" />
              </ImageContainer>
            )
          })}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <span>{products.length}</span> camisetas já está a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({
  query,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return {
      id: product.id,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
