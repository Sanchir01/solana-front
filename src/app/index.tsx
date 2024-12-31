import { ReactNode } from "react"
import AppWalletProvider from "./WalletProvider"

export const Providers = ({ children }: { children: ReactNode }) => {
  return <AppWalletProvider>{children}</AppWalletProvider>
}
