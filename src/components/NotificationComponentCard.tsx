import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Ellipsis,
	Archive,
	Bookmark,
	BellDot,
	UserRoundX,
	CircleFadingPlus,
} from "lucide-react";

// Define the Notification interface based on our JSON structure
interface Notification {
	id: number;
	text: string;
	user: string;
	avatar: string;
	date: string;
	type: string;
	initials?: string;
	isUnread?: boolean;
	isCompleted?: boolean;
}

interface NotificationCardProps {
	item: Notification;
	isSelected: boolean;
	onSelect: () => void;
}

export function NotificationComponentCard({
	item,
	onSelect,
}: NotificationCardProps) {
	const isUnread =
		item.type === "assignment" ||
		item.type === "invitation" ||
		item.type === "mention";

	return (
		<Card
			className={`py-3 px-9 gap-3 h-[96px] cursor-pointer hover:bg-[#F4F4F5] relative group border border-[#F4F4F5]`}
			onClick={onSelect}>
			<div className="h-full flex items-center gap-3">
				{isUnread && (
					<div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
				)}
				{item.initials ? (
					<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ml-2">
						<span className="text-blue-500 font-bold">{item.initials}</span>
					</div>
				) : (
					<img
						src={item.avatar}
						alt={item.user}
						className="w-12 h-12 rounded-full ml-2"
					/>
				)}

				<div className="h-full flex-1 text-right ">
					<div className="h-full flex flex-col justify-center space-y-1 w-[268px]">
						<p className="font-medium text-[16px] leading-[24px]">
							{item.text}
						</p>

						<p className="font-light text-[14px] leading-[20px] text-[#71717A]">
							{item.date}
						</p>
					</div>
				</div>
			</div>

			<div className="w-[94px] h-[35px] absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 rounded flex items-center justify-between px-1 border border-[#E4E4E7] rounded-[6px]">
				<Button variant="ghost" size="icon" className="h-7 w-7 p-0">
					<Bookmark className="h-4 w-4 text-gray-500" />
				</Button>
				<Button variant="ghost" size="icon" className="h-7 w-7 p-0">
					<Archive className="h-4 w-4 text-gray-500" />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="h-7 w-7 p-0">
							<Ellipsis className="h-4 w-4 text-gray-500" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[204px]">
						<DropdownMenuItem className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
							تحديد كغير مقروء
							<BellDot className="h-4 w-4 ml-2" />
						</DropdownMenuItem>
						<DropdownMenuItem className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
							احفظها لاحقًا <Bookmark className="h-4 w-4 ml-2" />
						</DropdownMenuItem>
						<DropdownMenuItem className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
							أنشئ مهمة كمتابعة <CircleFadingPlus className="h-4 w-4 ml-2" />
						</DropdownMenuItem>
						<DropdownMenuItem className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
							أرشيف الإشعار <Archive className="h-4 w-4 ml-2" />
						</DropdownMenuItem>
						<DropdownMenuItem className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
							إلغاء متابعة هذه المهمة <UserRoundX className="h-4 w-4 ml-2" />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</Card>
	);
}
