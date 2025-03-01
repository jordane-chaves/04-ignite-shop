import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import shirt1 from '@/assets/camisetas/1.png'
import shirt2 from '@/assets/camisetas/2.png'
import shirt3 from '@/assets/camisetas/3.png'
import shirt4 from '@/assets/camisetas/4.png'
import { HomeContainer, Product } from '@/styles/pages/home'

export default function Home() {
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
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="" height={480} width={520} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="" height={480} width={520} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="" height={480} width={520} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt4} alt="" height={480} width={520} />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
