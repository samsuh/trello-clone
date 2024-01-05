import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationPage = () => {
    const {userId, orgId} = auth()

    return (
        <div>
            Organization Page
            <p>Organization: {orgId}</p>
            <p>user: {userId}</p>

            <OrganizationSwitcher 
                hidePersonal
            />
        </div>
    )
}

export default OrganizationPage