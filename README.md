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

