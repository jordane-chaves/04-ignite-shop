import {
  CartItemContainer,
  CartItemDetails,
  ImageContainer,
} from '@/styles/components/cart-item'

export function CartItem() {
  return (
    <CartItemContainer>
      <ImageContainer></ImageContainer>

      <CartItemDetails>
        <div>
          <p>Camiseta Beyond the Limits</p>
          <strong>R$ 79,90</strong>
        </div>

        <button>Remover</button>
      </CartItemDetails>
    </CartItemContainer>
  )
}
