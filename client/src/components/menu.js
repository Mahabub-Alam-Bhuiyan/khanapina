export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboard.text",
        icon: "bx-home-circle",
        link: "/",
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: "menuitems.apps.text",
        isTitle: true
    },

    {
        id: 13,
        label: "menuitems.communications.text",
        icon: "bx bxs-message-dots",
        subItems: [
            {
                id: 14,
                label: "menuitems.communications.list.msz",
                link: "/massage-box",
                parentId: 10
            },
            {
                id: 16,
                label: "menuitems.communications.list.notifications",
                link: "/notifications",
                parentId: 10
            }
        ]
    },
    {
        id: 46,
        label: "menuitems.pages.text",
        isTitle: true
    },

    {
        id: 50,
        label: "menuitems.tasks.text",
        icon: "bx bx-task",
        subItems: [
            {
                id: 51,
                label: "menuitems.tasks.list.create",
                link: "/create-task",
                parentId: 50
            },
            {
                id: 52,
                label: "menuitems.tasks.list.list",
                link: "/task-list",
                parentId: 50
            }
        ]
    },
    {
        id: 54,
        label: "menuitems.teams.text",
        icon: "bx bxs-group",
        link: "/create-team",
    },
    {
        id: 60,
        label: "menuitems.project.text",
        icon: "bx bxl-dropbox",
        link: "/create-project",
    },
    {
        id: 62,
        label: "menuitems.myteam.text",
        icon: "bx bxs-user-rectangle",
        link: "/teams",
    },
];

