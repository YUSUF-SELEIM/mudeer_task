import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { NotificationComponentList } from "@/components/NotificationComponentList";
import { NotificationComponentDetail } from "@/components/NotificationComponentDetail";
import { NotificationComponent } from "@/../types";
import EmptyActivityView from "./EmptyActivityView";
import { LoadingSpinner } from "./ui/spinner";

export default function Dashboard() {
	const [selectedItem, setSelectedItem] =
		useState<NotificationComponent | null>(null);

	const notificationUrl = import.meta.env.VITE_NOTIFICATION_URL || "";

	// Fetch data using React Query
	const {
		data: fetchedNotificationComponents,
		isLoading,
		isError,
	} = useQuery<NotificationComponent[]>({
		queryKey: ["notifications"], // Unique key for the query
		queryFn: async () => {
			const response = await fetch(notificationUrl);
			if (!response.ok) {
				throw new Error("Failed to fetch notifications");
			}
			return response.json();
		},
	});

	// Intermediate state to manage notifications locally
	const [notificationComponents, setNotificationComponents] = useState<
		NotificationComponent[]
	>([]);

	// Sync React Query data with local state
	useEffect(() => {
		if (fetchedNotificationComponents) {
			setNotificationComponents(fetchedNotificationComponents);
		}
	}, [fetchedNotificationComponents]);

	// Handle loading state
	if (isLoading) {
		return (
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<LoadingSpinner />
			</div>
		);
	}

	// Handle error state
	if (isError) {
		return <div>Error fetching notifications</div>;
	}

	return (
		<div dir="rtl" className="w-full h-full flex bg-background">
			{notificationComponents && notificationComponents.length > 0 ? (
				<>
					<NotificationComponentList
						NotificationComponents={notificationComponents}
						selectedItem={selectedItem}
						setSelectedItem={setSelectedItem}
						accountId={"9018283645"}
					/>
					{selectedItem && (
						<NotificationComponentDetail
							NotificationComponents={notificationComponents}
							selectedItem={selectedItem}
							setNotificationComponents={setNotificationComponents} // Pass the setter
							setSelectedItem={setSelectedItem}
						/>
					)}
				</>
			) : (
				<EmptyActivityView />
			)}
		</div>
	);
}
