import { OrganizationSwitcher, auth } from "@clerk/nextjs"

const OrganizationPage = () => {
    const {userId, orgId} = auth()

    return (
        <div className="mt-14">
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