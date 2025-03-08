import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
    maxWidth: 560,
    marginTop: '2rem',
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    display: 'block',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: '4rem',
  padding: '0.25rem',
  height: 145,
  maxWidth: 130,
  width: '100%',

  img: {
    objectFit: 'cover',
  },
})
