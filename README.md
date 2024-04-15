# KANBAN BOARD

## Description

A Kanban board is a visual project management tool that helps teams visualize and track their work. It is typically made up of a physical or digital board that is divided into columns, each of which represents a stage in the team's workflow. The columns are usually labeled with categories like "To Do", "In Progress", and "Done".

The Kanban board is used to track work items as they move through each stage of the workflow. Each work item is represented by a card that is placed on the board, and team members can move the cards from one column to another as they work on them. This helps the team to see at a glance which tasks are in progress, which tasks are waiting, and which tasks have been completed.

Kanban boards are often used in agile software development, but they can be used in any team or project that involves workflow management. They are particularly useful for teams that want to visualize their work, identify bottlenecks, and continuously improve their processes.

## Features

- Create and manage tasks using a drag-and-drop interface
- View tasks in a Kanban-style board with columns for "To Do", "In Progress", and "Done"
- Edit and delete tasks as needed


## Tech Stack

- Next JS
- TypeScript
- Tailwind CSS
- React beautiful DnD
- Redux toolkit
- Material UI
- React Icons
- React router

board = [
list : {}
]

list = {
list_id:"random id",
list_title:"todo/in-progress/done",
card: [
{
id: "id",
createdAt: "current date and time",
title:"task title",
}
]
}

list_id:[{
label: "Math.random()",
type: "number",
default: "null"
}]

list_title:[{
label: "todo/in-progress/done",
type: "String",
default: ""
}]

card :{
label: "card",
type: "array",
}


## Installation

To install and run the application locally, follow these steps:

1. Clone this repository to your local machine
2. Run npm install to install all dependencies
3. Run npm run dev to start the development server
4. Open http://localhost:3000/ in your browser to view the application

## Deployment Site link

https://master--next-js-kanban.netlify.app/

## Data Structure

```
List =[
    {
        id: 'uuidv4',
        title: 'Board title',
        Cards: [
            id: '22r0h9i444t'
            title: 'Card Title,
            tasks: [
                {
                    id: 'uuidv4',
                    title: 'Title 1'
                }
            ],
        ]
    }
]































This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
