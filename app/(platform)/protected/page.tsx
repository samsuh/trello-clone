import { UserButton } from "@clerk/nextjs"

const ProtectedPage = () => {
    return (
        <div>
            Protected Page!
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default ProtectedPage