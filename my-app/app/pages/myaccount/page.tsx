/* Account page for the customer to manage any information and keep track of order/shipping details */
import AccountForm from './account-form'
import { createClient } from '@/lib/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const { data: claimsData } = await supabase.auth.getClaims()

  return <AccountForm claims={claimsData?.claims ?? null} />
}