import { db } from "@/lib/db"

const OrganizationPage = () => {

    async function create(formData: FormData) {
        "use server"

        // console.log("OrganizationIdPage function triggered")

        const title = formData.get("title") as string
        await db.board.create({
            data: {
                title
            }
        })
    }

    return (
        <div>
            <form action={create}>
                <input 
                    id="title" 
                    name="title"
                    placeholder="Enter name of new Board"    
                    className="border-black border p-1"
                />
            </form>
        </div>
    )
}

export default OrganizationPage