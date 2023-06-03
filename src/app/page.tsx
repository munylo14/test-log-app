import LogEntries from "../components/LogEntries"
import CreateEntry from "../components/CreateEntry"

export default function Home() {
  return (
    <div>
    <h1>Booneville Police Department Log</h1>
    <LogEntries />

    <CreateEntry />
  </div>
  )
}