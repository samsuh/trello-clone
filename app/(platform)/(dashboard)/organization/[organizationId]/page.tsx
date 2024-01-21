import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"

const OrganizationPage = () => {

    return (
        <div>
            <form action={create}>
                <input 
                    id="title" 
                    name="title"
                    placeholder="Enter name of new Board"    
                    className="border-black border p-1"
                />
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default OrganizationPage