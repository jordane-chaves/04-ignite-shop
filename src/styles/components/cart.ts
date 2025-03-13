import { styled } from '..'

export const CartButton = styled('button', {
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: 'auto',
  padding: '0.75rem',

  position: 'relative',
  cursor: 'pointer',

  svg: {
    color: '$gray500',
    height: 24,
    width: 24,
  },

  '&:hover': {
    filter: 'brightness(1.25)',
    transition: 'filter 0.2s',
  },
})

export const CartCount = styled('span', {
  backgroundColor: '$green500',
  border: '3px solid $gray900',
  borderRadius: '50%',
  color: '$gray100',
  fontSize: '$xs',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: 24,
  width: 24,

  position: 'absolute',
  top: -7,
  right: -7,
})
