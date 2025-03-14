import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { z } from 'zod'

import { stripe } from '@/lib/stripe'

const checkoutBodySchema = z.object({
  items: z
    .array(
      z.object({
        priceId: z
          .string({ required_error: 'Informe o ID do preço' })
          .min(1, 'Informe o ID do preço'),
        quantity: z
          .number({ required_error: 'Informe a quantidade' })
          .min(1, 'A quantidade deve ser maior ou igual à 1'),
      }),
      { required_error: 'Informe os itens' },
    )
    .min(1, 'Informe pelo menos um item'),
})

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const bodyParsed = checkoutBodySchema.safeParse(request.body)

  if (bodyParsed.success === false) {
    return response.status(400).json({
      error: 'Validation failed!',
      issues: bodyParsed.error.format(),
    })
  }

  const { items } = bodyParsed.data

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
    (item) => {
      return {
        price: item.priceId,
        quantity: item.quantity,
      }
    },
  )

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
