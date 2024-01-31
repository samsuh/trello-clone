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

Jan 31, 2024
Create a hook to accept safeAction and give us callbacks (i.e. onSuccess, onComplete). Create execute function we'll call inside our components, which accepts inputs. send input inside action. action runs it through action state and makes sure it's validated. if no result, action done with no callbacks. if field errors, something went wrong with validation; extract field errors then pass them to components. if theres a server error, set error and add options callback on error so we can render for user to see (inside a toast or something). if there's results, it successfully created the record, so we can use a callback to work with that record. finally, onComplete we clean up. 

Jan 30, 2024
Create handler for createBoard using create-safe-action. createBoard returns a promise that returns our board.

Jan 29, 2024 
Re-examine the server action refactor. useAction takes in safeAction. start to refactor create-board into actions/create-board folder.

Jan 28, 2024 
Use server actions instead of api calls to do work. Start to extract server action from actions folder to its own folder where expected inputs and outputs are defined. Create schema.ts for zod validation to keep the schema input type. Create-safe-action file. Create useAction hook and pass safeAction, and extract execute function to call server action, extract data, server/field errors, and callbacks. Create handler for safeAction. 

Jan 27, 2024
Disable form button while in submitting state using pending state from react-dom useFormStatus. Refactor button to have pending status. Extract button, delete button and form inputs into their own components. 

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
