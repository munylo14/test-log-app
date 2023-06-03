import { prisma } from "@/db";

interface prismaInterface {
    
}

export default async function LogEntries() {
    
    const entries = await prisma.logEntry.findMany()

    return (
            <table className="table-auto">
            <thead>
                <tr>
                <td>Time</td>
                <td>Subject</td>
                <td>Entry</td>
                </tr>
            </thead>
            <tbody>
            {entries.map(entry => (
                <tr key={entry.id}>
                    <td>{entry.time}</td>
                    <td>{entry.subject}</td>
                    <td>{entry.entry}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )

}
