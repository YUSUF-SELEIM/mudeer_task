export interface NotificationComponent {
    id: number;
    text: string;
    user: string;
    avatar: string;
    date: string;
    type: "assignment" | "status" | "deadline" | "task_creation" | "removal";
    comments?: {
        id: number;
        user: {
            name: string;
            avatar: string;
        };
        content: string;
        date: string;
    }[];
}