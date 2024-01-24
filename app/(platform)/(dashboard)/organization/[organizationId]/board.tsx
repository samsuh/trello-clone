import { deleteBoard } from "@/actions/delete-board"
import { Button } from "@/components/ui/button"

interface BoardProps {
    title: string
    id: string
}

export const Board = ({title, id}: BoardProps) => { 

    const deleteBoardById = deleteBoard.bind(null, id)

    return (
        <form className="flex items-center gap-x-2" action={deleteBoardById}>
            <p>Board name: {title}</p>
            <Button variant="destructive" size="sm" type="submit">Delete</Button>
        </form>
    )
}