import { styled } from '..'

export const CartItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '1.25rem',

  '& + &': {
    marginTop: '1.5rem',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.25rem',
  height: 92,
  maxWidth: 102,
  width: '100%',

  img: {
    objectFit: 'cover',
  },
})

export const CartItemDetails = styled('div', {
  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  strong: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: 2,
  },

  button: {
    background: 'none',
    border: 0,

    color: '$green500',
    fontSize: '$sm',
    fontWeight: 700,
    lineHeight: 1.6,

    marginTop: 8,
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      color: '$green300',
      transition: 'color 0.3s',
    },
  },
})
