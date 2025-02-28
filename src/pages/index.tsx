import { styled } from '@/styles'

export const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  color: 'White',
  padding: '4px 8px',
})

export default function Home() {
  return <Button>Enviar</Button>
}
