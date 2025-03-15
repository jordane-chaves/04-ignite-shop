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
    lineHeight: 1.4,
    marginTop: 48,
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
    maxWidth: 560,
    marginTop: '1.5rem',
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    display: 'block',
    marginTop: '4rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 1180,
  margin: '4rem auto 0',
  width: '100%',
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  marginTop: 104,
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '0.25rem',
  height: 140,
  maxWidth: 140,
  width: '100%',

  img: {
    objectFit: 'cover',
  },

  '& + &': {
    marginLeft: -52,
  },
})
