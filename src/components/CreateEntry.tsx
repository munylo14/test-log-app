import { prisma } from "@/db"

    async function submitEntry(data: FormData) {
        "use server"
    const time = data.get("time")?.valueOf()
        //    if (typeof title !== "string" || title.length === 0) {
        //        throw new Error("Invalid Time Text")
        //    }

    const subject = data.get("subject")?.valueOf()
        //    if (typeof title !== "string" || title.length === 0) {
        //        throw new Error("Invalid Subject /text")
        //    }

    const entry = data.get("entry")?.valueOf()
        //    if (typeof title !== "string" || title.length === 0) {
        //        throw new Error("Invalid Entry Text")
        //    }

    await prisma.logEntry.create({ data: { time, subject, entry, operator: "514" }})

    }

export default function CreateEntry() {
    return (
        <div>
        
        <form action={submitEntry} className="flex flex-col">
        <input type="text/string" className="form-input rounded border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100" name="time" placeholder="Time:" />
        <br/>
        <input type="text/string" className="form-input rounded border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100" name="subject" placeholder="Subject:" />
        <br/>
        <input type="text/string" className="form-input rounded border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100" name="entry" placeholder="Entry:" />
        <br/>
        <button type="submit" className="border border-slate-300 bg-slate-700 text-slate-300 px-2 py-1 rounded hover:bg-slate-300 hover:text-slate-700 focus-within:bg-slate-300">ENTER</button>
        </form>
        </div>
    )
}