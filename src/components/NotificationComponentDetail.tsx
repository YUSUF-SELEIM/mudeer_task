import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Maximize2,
	Check,
	Ellipsis,
	Link,
	Paperclip,
	ThumbsUp,
} from "lucide-react";
import { NotificationComponent } from "@/../types";

interface NotificationComponentDetailProps {
	NotificationComponents: NotificationComponent[];
	selectedItem: NotificationComponent;
	setNotificationComponents?: (components: NotificationComponent[]) => void;
	setSelectedItem?: (item: NotificationComponent | null) => void;
}

export function NotificationComponentDetail({
	NotificationComponents,
	selectedItem,
	setNotificationComponents,
	setSelectedItem,
}: NotificationComponentDetailProps) {
	// Find the selected notification's comments from the NotificationComponents array
	const selectedItemComments =
		NotificationComponents.find((item) => item.id === selectedItem.id)
			?.comments || [];

	// Function to handle marking item as complete (removing it from the list)
	const handleMarkComplete = () => {
		if (setNotificationComponents && setSelectedItem) {
			// Filter out the selected item
			const updatedComponents = NotificationComponents.filter(
				(item) => item.id !== selectedItem.id
			);

			// Update the state with filtered components
			setNotificationComponents(updatedComponents);

			// Set selected item to the first item in the list or null if empty
			if (updatedComponents.length > 0) {
				setSelectedItem(updatedComponents[0]);
			} else {
				setSelectedItem(null);
			}
		}
	};

	return (
		<div className="hidden md:block flex-1 border-border border-l">
			<div className="py-3.5 px-6 border-b border-border flex items-center justify-between">
				<Button
					className="flex items-center gap-2"
					variant={"outline"}
					onClick={handleMarkComplete}>
					<Check className="h-4 w-4" />
					<span className="font-[500] text-[14px]">تحديد مكتملة</span>
				</Button>
				<div className="flex items-center gap-1 text-gray-500">
					<Button variant="ghost" size="icon">
						<ThumbsUp className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Paperclip className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<img src="/icons/network.svg" alt="" />
					</Button>
					<Button variant="ghost" size="icon">
						<Link className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Maximize2 className="h-4 w-4" />
					</Button>
					<Button variant="ghost" size="icon">
						<Ellipsis className="h-4 w-4" />
					</Button>
				</div>
			</div>

			<div className="h-[calc(100vh-120px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 pr-0.5 px-8 py-6 pb-14">
				<div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
					{selectedItemComments.length > 0 ? (
						selectedItemComments.map((comment) => (
							<div
								key={comment.id}
								className={`flex gap-3 p-3  ${comment.id % 2 === 0 ? "bg-[#F4F4F5] py-5 px-4 rounded-lg" : "border-b border-border"}`}>
								<img
									src={comment.user.avatar}
									alt={comment.user.name}
									className="w-8 h-8 rounded-full"
								/>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<p className="font-semibold text-[14px] leading-[20px]">
											{comment.user.name}
										</p>
										<p className="font-light text-[14px] leading-[20px] text-[#71717A]">
											{comment.date}
										</p>
									</div>
									<p className="mt-1 font-[500] text-[14px] leading-[20px]">
										{comment.content}
									</p>
								</div>
							</div>
						))
					) : (
						<div className="text-center text-muted-foreground py-4">
							لا توجد تعليقات بعد
						</div>
					)}
				</div>

				<div className="border-t border-border pt-4 flex flex-col">
					<div className="flex space-x-3">
						<img
							src={"https://avatar.iran.liara.run/public/boy"}
							className="w-8 h-8 rounded-full"
						/>
						<div className="relative flex-1">
							<Textarea
								placeholder="اكتب تعليقك هنا..."
								className="resize-none font-medium h-[160px] w-full"
							/>
							<div className="absolute bottom-3 left-3 font-medium">
								<Button variant="outline">انشر التعليق</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
