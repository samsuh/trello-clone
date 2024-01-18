DAOify is a project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev``
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Goals for this project

- Reinforce my knowledge of NextJS, typescript, tailwindcss
- Create a trello clone that I can actually use personally and shared with people I know
- Ultimately, create additional features unique to what I need; metamask authentication and metamask-protected editing; Group project spaces for use in DAOs.

## Personal notes on my progress on this project

Jan 18, 2024
Add and initialize database via prisma. Set up local postgres server, create prisma Model, db push, ignored local postgres db folder. Install prisma client. Setup db.ts lib file to access database from globalThis and exclude db initialization from nextjs hot reloading.

Jan 17, 2024
Add workplace settings via Clerk's OrganizationProfile component to give access to settings functionality.

Jan 16, 2024
Create Settings Page and make sure the workspace sidebar Settings link properly routes to it. Create appropriate page in settings folder of organizationId inside organization of the dashboard of the app.

Jan 15, 2024
Workspace Sidebar loading Skeleton implemented.

Jan 14, 2024
Mobile version of workspaces sidebar.

Jan 13, 2024
Fill out the Accordion in workspace sidebar. Create an array of routes, map over the array of routes to render all the links. Style the links with icon and route name. Change organization.id to organization.name.

Jan 12, 2024
Styled the workspaces sidebar. Add Accordion to list workspaces and render organization. Replaced the organization.id with the NavItem component, with interface NavItemProps and Organization type to better lay out and style the workplaces information in sidebar, rendering existing workspaces and visually distinguishing the active organization. Added "img.clerk.com" to nextjs config.

Jan 11, 2024
I started the Personal notes section of the readme to track my thought process on the project, and to consolidate what I've learned each day while working on it. This will also help me visibly track the days I'm actively working on this project vs others.
