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

Jan 26, 2024 
Refactor; separate out input and button components from workspace form while retaining errors.

Jan 25, 2024 
Loading states and display errors in form fields. Move form to form.tsx file, add useFormState hook. 

Jan 24, 2024 
Pass dynamic id into server action. create delete button for boards and create new delete-board server action. 

Jan 23, 2024
Fetch results from server actions. Render iteration through existing boards. Revalidate path to keep rendered data up to date (hardcoded to the workspace, will fix later to make dynamic)

Jan 22, 2024 
Use zod to validate form input types. 

Jan 21, 2024
Install zod. Separate out concerns moving the db create fx to its own file inside "actions" folder. 

Jan 20, 2024 
Test nextjs server actions using form submission create function. Use create function to create a new board in the database. Set up prisma on windows machine and set up postgres on new machine. Make create function actually create a new board in the db. 

Jan 19, 2024
Testing how to make prisma work with server components to access and mutate data.

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
