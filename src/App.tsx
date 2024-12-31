import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import './App.css'
import { Counter } from './shared/ui/counter'

function App() {

  return (
    <>
      <WalletMultiButton />
      <div className="">test</div>
      <Counter />
    </>
  )
}

export default App
