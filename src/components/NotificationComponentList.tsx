import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { NotificationComponent } from "@/../types";
import { NotificationComponentCard } from "./NotificationComponentCard";
import NotificationActions from "./NotificationActions";

interface NotificationComponentListProps {
	NotificationComponents: NotificationComponent[];
	selectedItem: NotificationComponent | null;
	setSelectedItem: (item: NotificationComponent | null) => void;
	accountId: string;
}

export function NotificationComponentList({
	NotificationComponents,
	selectedItem,
	setSelectedItem,
	accountId,
}: NotificationComponentListProps) {
	const [showUnreadOnly, setShowUnreadOnly] = useState(false);

	// Filter notifications if showUnreadOnly is true
	// Note: You might need to add an isRead property to your NotificationComponent type
	const filteredNotifications = showUnreadOnly
		? NotificationComponents.filter((item) => !(item))
		: NotificationComponents;

	return (
		<div className="w-[560px] border-l border-border overflow-y-auto">
			<div className="py-4 px-6 border-b border-border flex items-center justify-between overflow-y-auto">
				<NotificationActions accountId={accountId} />
				<div className="flex items-center gap-2">
					<span className="font-serif text-[14px] leading-[20px] text-[#18181B">
						غير مقروء
					</span>
					<Switch
						checked={showUnreadOnly}
						onCheckedChange={setShowUnreadOnly}
						className="rtl:scale-x-[-1]"
					/>
				</div>
			</div>

			<div className="h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 pr-0.5 pb-14">
				{filteredNotifications.map((item) => (
					<NotificationComponentCard
						key={item.id}
						item={item}
						isSelected={selectedItem?.id === item.id}
						onSelect={() => setSelectedItem(item)}
					/>
				))}
			</div>
		</div>
	);
}
