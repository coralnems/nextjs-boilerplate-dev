import Link from "next/link"

import { Container, Nav } from "@/components"

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-900/10 bg-white">
        <Container size="lg">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <figure>
                <figcaption>Logo</figcaption>
              </figure>
            </Link>

            <div className="flex items-center">
              <Nav />

              <div className="border-l border-neutral-200 ml-6 pl-6">
                Dark Theme
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}