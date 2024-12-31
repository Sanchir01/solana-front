import { useConnection } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react"
import { counterPDA, program, SolanaData } from "../anchor/setup"

export const Counter = () => {
  const { connection } = useConnection()

  const [counterData, setCounterData] = useState<SolanaData | null>(null)

  useEffect(() => {

    program.account.counter.fetch(counterPDA).then(data => setCounterData(data))

    const subscriptionId = connection.onAccountChange(counterPDA, AccountInfo => {
      setCounterData(
        program.coder.accounts.decode("solana", AccountInfo.data)
      )
    })
    return () => {
      connection.removeAccountChangeListener(subscriptionId)
    }
  }, [program])

  console.log(counterData)
  return <div className="">Count: </div>
} 
