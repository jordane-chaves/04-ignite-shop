import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { AppLayout } from '@/components/app-layout'
import { useCartProvider } from '@/contexts/cart-provider'
import { stripe } from '@/lib/stripe'
import { Button } from '@/styles/components/button'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { priceFormatter } from '@/utils/formatter'

interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface ProductProps {
  product: Product
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addItemToCart } = useCartProvider()

  if (isFallback) {
    return <p>Loading...</p>
  }

  function handleAddProductToCart() {
    addItemToCart({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      defaultPriceId: product.defaultPriceId,
      quantity: 1,
    })
  }

  return (
    <AppLayout>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(product.price)}</span>
          <p>{product.description}</p>

          <Button onClick={handleAddProductToCart}>Colocar na sacola</Button>
        </ProductDetails>
      </ProductContainer>
    </AppLayout>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
