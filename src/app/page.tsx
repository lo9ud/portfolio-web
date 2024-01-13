import Loader from "@/components/loader"
import { Card, HalfCard, ThirdCard, DispatchedCard } from "@/components/structure/cards"
import { Suspense } from "react"
import Image from "next/image"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import ErrorCard from "./error"
function Intro() {
  return (
    <>
      <HalfCard>Intro Content Here</HalfCard>
      <HalfCard>
        <Image src={""} alt={""} />
      </HalfCard>
    </>
  )
}

function displayCardInner(projectPath: string) {
  const fs = require('fs')
  return <>{projectPath}</>
}

async function ProjectDemos() {
  throw "Failure to load projects"
  const fs = require('fs')
  const path = require('path')
  let projects: Array<string> = []
  for await (const d of await fs.promises.opendir(process.cwd() + "/src/app/(site)/projects")) {
    projects.push(d.name)
  }
  let display = projects.sort(() => 0.5 - Math.random()).slice(0, 4)
  return <DispatchedCard childLists={Array.from(display, (v) => [displayCardInner(v)])} />
}
function Bottom() {
  return <Card>Bottom card</Card>
}

export default function Home() {
  return (
    <>
      <Intro />
      <ErrorBoundary errorComponent={ErrorCard}>
        <Suspense fallback={<Card><Loader /></Card>}>
          <ProjectDemos />
        </Suspense>
      </ErrorBoundary>
      <Bottom />
    </>
  )
}
