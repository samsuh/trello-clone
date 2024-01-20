import { OrganizationSwitcher } from "@clerk/nextjs"

const OrganizationPage = () => {

    async function create(formData: FormData) {
        "use server"

        console.log("OrganizationIdPage function triggered")
    }

    return (
        <div>
            <form>
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