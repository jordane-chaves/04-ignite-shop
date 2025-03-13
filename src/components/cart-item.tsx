import Image from 'next/image'

import { useCartProvider } from '@/contexts/cart-provider'
import {
  CartItemContainer,
  CartItemDetails,
  ImageContainer,
} from '@/styles/components/cart-item'
import { priceFormatter } from '@/utils/formatter'

interface CartItemProps {
  item: {
    id: string
    name: string
    imageUrl: string
    price: number
  }
}

export function CartItem({ item }: CartItemProps) {
  const { removeItemFromCart } = useCartProvider()

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={item.imageUrl} width={95} height={95} alt="" />
      </ImageContainer>

      <CartItemDetails>
        <div>
          <p>{item.name}</p>
          <strong>{priceFormatter.format(item.price)}</strong>
        </div>

        <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
      </CartItemDetails>
    </CartItemContainer>
  )
}
