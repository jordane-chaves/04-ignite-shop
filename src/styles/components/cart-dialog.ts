import { DialogContent, DialogTitle } from '@radix-ui/react-dialog'

import { keyframes, styled } from '..'
import { Button } from './button'

const leftSlideIn = keyframes({
  '100%': {
    opacity: 1,
    transform: 'translateX(0%)',
  },
})

export const CartDialogContent = styled(DialogContent, {
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  padding: '3rem',
  maxWidth: 480,
  width: '100%',

  opacity: 0,
  transform: 'translateX(100%)',

  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,

  animation: `${leftSlideIn} 300ms forwards`,
})

export const CloseButton = styled('button', {
  background: 'none',
  border: 0,

  position: 'absolute',
  right: 24,
  top: 24,

  cursor: 'pointer',

  svg: {
    color: '$gray500',
    height: 24,
    width: 24,
  },

  '&:hover': {
    svg: {
      color: '$gray300',
    },
  },
})

export const CartDialogTitle = styled(DialogTitle, {
  fontSize: '$lg',
  lineHeight: 1.6,
  marginTop: '1.5rem',
})

export const CartItens = styled('div', {
  flex: 1,
  margin: '2rem 0',
  overflowY: 'auto',
})

export const CartSummaryTable = styled('table', {
  color: '$gray100',
  lineHeight: 1.6,

  marginTop: 'auto',

  th: {
    fontSize: '$sm',
    fontWeight: 400,
  },

  tbody: {
    td: {
      color: '$gray300',
      fontSize: '$md',
    },
  },

  tfoot: {
    th: {
      fontSize: '$md',
    },
  },
})

export const TotalPrice = styled('strong', {
  fontSize: '$xl',
  lineHeight: 1.4,
})

export const SubmitButton = styled(Button, {
  marginTop: '3.5rem',
})
