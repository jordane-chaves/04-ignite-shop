import { produce } from 'immer'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

const CART_STATE_KEY = '@ignite-shop:cart-state-1.0.0'

interface CartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

interface CartProviderState {
  items: CartItem[]
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (itemId: string) => void
  clearCart: () => void
}

const initialState: CartProviderState = {
  items: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearCart: () => null,
}

const CartProviderContext = createContext<CartProviderState>(initialState)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, setCartState] = useState<CartState>({ items: [] })

  const { items } = cartState

  function addItemToCart(cartItem: CartItem) {
    setCartState((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === cartItem.id)

      return produce(state, (draft) => {
        if (itemIndex >= 0) {
          draft.items[itemIndex] = cartItem
        } else {
          draft.items.push(cartItem)
        }
      })
    })
  }

  function removeItemFromCart(itemId: string) {
    setCartState((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === itemId)

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.items.splice(itemIndex, 1)
      })
    })
  }

  function clearCart() {
    setCartState((state) => ({ ...state, items: [] }))
  }

  useEffect(() => {
    const storedStateJSON = localStorage.getItem(CART_STATE_KEY)

    if (storedStateJSON) {
      const state = JSON.parse(storedStateJSON)
      setCartState(state)
    }
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(CART_STATE_KEY, stateJSON)
  }, [cartState])

  return (
    <CartProviderContext.Provider
      value={{ items, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartProviderContext.Provider>
  )
}

export function useCartProvider() {
  const context = useContext(CartProviderContext)

  if (context === undefined) {
    throw new Error('useCartProvider must be used within a CartProvider')
  }

  return context
}
