import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  minHeight: 656,
  width: '100vw',
  // maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '2rem',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductInfo = styled('div', {
  strong: {
    color: '$gray100',
    fontSize: '$lg',
    display: 'block',
  },

  span: {
    color: '$green300',
    fontSize: '$xl',
    fontWeight: 'bold',
    display: 'block',
    marginTop: 4,
  },
})
