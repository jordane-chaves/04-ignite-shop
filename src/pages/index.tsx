import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 48,
      origin: 'center',
    },
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 1, spacing: 48, origin: 'center' },
      },
      '(min-width: 768px)': {
        slides: { perView: 1.25, spacing: 48, origin: 'center' },
      },
      '(min-width: 1024px)': {
        slides: { perView: 1.5, spacing: 48, origin: 0.1 },
      },
      '(min-width: 1200px)': {
        slides: (sliderSize, slides) => {
          const offset = (sliderSize - 1180) / 2
          const perView = 1.5
          const spacing = 48

          return slides.map((_, index) => {
            const size =
              (sliderSize - (offset * 2 + spacing * (perView - 1))) / perView

            let origin = offset

            if (index > slides.length - perView) {
              origin += (size + spacing) * (perView - (slides.length - index))
            }

            return {
              origin: origin / sliderSize,
              size: size / sliderSize,
              spacing: spacing / sliderSize,
            }
          })
        },
      },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} alt="" height={480} width={520} />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

/**
 * **Busca os dados do lado do servidor (SSG)**
 *
 * Executa apenas durante o build da aplicação e quando o tempo do `revalidate`
 * vencer e a próxima pessoa acessar a página. As próximas pessoas que acessarem
 * vão acessar uma página em cache até vencer o tempo novamente.
 *
 * A vantagem é que a página estática irá carregar muito mais rápido e não é
 * feito diversas requisições para a Stripe para buscar os dados.
 *
 * *OBS.: Não é possível ter acesso ao contexto da requisição.*
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: Product[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: price.currency,
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

/**
 * **Busca os dados do lado do servidor (SSR)**
 *
 * Executa em toda vez que a página é recarregada e a página só será mostrada
 * em tela após ter executado essa função, ou seja, a página ficará "em branco"
 * até ter carregado todos os dados.
 *
 * *OBS.: É possível ter acesso ao contexto da requisição.*
 */
/* export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: Product[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
} */
