import { Handbag } from '@phosphor-icons/react'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'

import { useCartProvider } from '@/contexts/cart-provider'
import { CartButton, CartCount } from '@/styles/components/cart'

import { CartDialog } from './cart-dialog'

export function Cart() {
  const { items } = useCartProvider()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CartButton title="Clique para abrir a sacola">
          <Handbag />
          <CartCount>{items.length}</CartCount>
          <span className="sr-only">Sacola</span>
        </CartButton>
      </DialogTrigger>

      <CartDialog />
    </Dialog>
  )
}
