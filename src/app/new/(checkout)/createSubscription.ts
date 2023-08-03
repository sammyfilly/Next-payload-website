import type { CheckoutState } from '@root/app/new/(checkout)/reducer'
import type { Project } from '@root/payload-cloud-types'

export interface PayloadStripeSubscription {
  client_secret: string
  paid?: boolean
  subscription?: string
  error?: string
}

export const createSubscription = async (args: {
  checkoutState: CheckoutState
  project: Project
}): Promise<PayloadStripeSubscription> => {
  const {
    checkoutState: { paymentMethod, freeTrial, plan, team },
    project,
  } = args

  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_CLOUD_CMS_URL}/api/create-subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project: {
          ...project,
          plan,
          team,
        },
        paymentMethod,
        freeTrial,
      }),
    })

    const res: PayloadStripeSubscription = await req.json()

    if (!req.ok) {
      throw new Error(res.error)
    }
    return res
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    throw new Error(`Could not create subscription: ${message}`)
  }
}
