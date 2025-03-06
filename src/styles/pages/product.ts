import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: '1180px',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.25rem',
  height: 656,
  maxWidth: 576,
  width: '100%',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    color: '$green300',
    display: 'block',
    fontSize: '$2xl',
    marginTop: '1rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: '2.5rem',
  },

  button: {
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,

    color: 'white',
    fontSize: '$md',
    fontWeight: 'bold',

    padding: '1.25rem',
    marginTop: 'auto',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
