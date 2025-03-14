import { X } from '@phosphor-icons/react'
import { DialogClose, DialogPortal } from '@radix-ui/react-dialog'
import axios from 'axios'
import { useState } from 'react'

import { useCartProvider } from '@/contexts/cart-provider'
import {
  CartDialogContent,
  CartDialogTitle,
  CartItens,
  CartSummaryTable,
  CloseButton,
  SubmitButton,
  TotalPrice,
} from '@/styles/components/cart-dialog'
import { priceFormatter } from '@/utils/formatter'

import { CartItem } from './cart-item'

export function CartDialog() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { items, clearCart } = useCartProvider()

  async function handleCreateCheckout() {
    const checkoutItems = items.map((item) => {
      return {
        priceId: item.defaultPriceId,
        quantity: item.quantity,
      }
    })

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post<{ checkoutUrl: string }>(
        '/api/checkout',
        {
          items: checkoutItems,
        },
      )

      clearCart()

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  const total = items.reduce((result, item) => {
    return result + item.price * item.quantity
  }, 0)

  return (
    <DialogPortal>
      <CartDialogContent>
        <DialogClose asChild>
          <CloseButton title="Fechar">
            <X />
            <span className="sr-only">Fechar</span>
          </CloseButton>
        </DialogClose>

        <CartDialogTitle>Sacola de compras</CartDialogTitle>

        <CartItens>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItens>

        <CartSummaryTable>
          <tbody>
            <tr>
              <th align="left">Quantidade</th>
              <td align="right">{items.length} itens</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th align="left">
                <strong>Valor total</strong>
              </th>
              <td align="right">
                <TotalPrice>{priceFormatter.format(total)}</TotalPrice>
              </td>
            </tr>
          </tfoot>
        </CartSummaryTable>

        <SubmitButton
          disabled={items.length === 0 || isCreatingCheckoutSession}
          onClick={handleCreateCheckout}
        >
          Finalizar compra
        </SubmitButton>
      </CartDialogContent>
    </DialogPortal>
  )
}
