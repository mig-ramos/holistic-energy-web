import { Header } from './header'
import { Footer } from './footer'
 
export function LayoutPublic({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}