import { styled } from '@/styles'

export const Button = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,

  color: 'white',
  fontSize: '$md',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '1.25rem',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: 'background-color 0.2s',
  },

  variants: {
    variant: {
      icon: {
        fontSize: '1.25rem',
        padding: '0.75rem',

        svg: {
          color: '$white',
          height: 32,
          width: 32,
        },
      },
    },
  },
})
