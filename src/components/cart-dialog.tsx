import { X } from '@phosphor-icons/react'
import { DialogClose, DialogPortal } from '@radix-ui/react-dialog'

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
  const { items } = useCartProvider()

  const total = items.reduce((result, item) => {
    return result + item.price * item.quantity
  }, 0)

  return (
    <DialogPortal>
      <CartDialogContent>
        <DialogClose asChild>
          <CloseButton>
            <X />
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

        <SubmitButton disabled={items.length === 0}>
          Finalizar compra
        </SubmitButton>
      </CartDialogContent>
    </DialogPortal>
  )
}
