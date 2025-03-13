import { X } from '@phosphor-icons/react'
import { DialogClose, DialogPortal } from '@radix-ui/react-dialog'

import {
  CartDialogContent,
  CartDialogTitle,
  CartItens,
  CartSummaryTable,
  CloseButton,
  ItemPrice,
  SubmitButton,
} from '@/styles/components/cart-dialog'

import { CartItem } from './cart-item'

export function CartDialog() {
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
          <CartItem />
        </CartItens>

        <CartSummaryTable>
          <tbody>
            <tr>
              <th align="left">Quantidade</th>
              <td align="right">3 itens</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th align="left">
                <strong>Valor total</strong>
              </th>
              <td align="right">
                <ItemPrice>R$ 270,00</ItemPrice>
              </td>
            </tr>
          </tfoot>
        </CartSummaryTable>

        <SubmitButton>Finalizar compra</SubmitButton>
      </CartDialogContent>
    </DialogPortal>
  )
}
