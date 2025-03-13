import { Handbag } from '@phosphor-icons/react'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'

import { CartButton, CartCount } from '@/styles/components/cart'

import { CartDialog } from './cart-dialog'

export function Cart() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CartButton>
          <Handbag />
          <CartCount>5</CartCount>
        </CartButton>
      </DialogTrigger>

      <CartDialog />
    </Dialog>
  )
}
