import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter, ArrowDownUp, ChevronLeft, Check } from "lucide-react";

interface NotificationActionsProps {
	accountId: string;
}

export default function NotificationActions({
	accountId,
}: NotificationActionsProps) {
	const handleFilterClick = (filterType: string) => {
		console.log(accountId);
		// Use window.location.href for a full page navigation instead of client-side routing
		window.location.href = `/${accountId || "9018283645"}/inbox?tab=activity&filterApplied=${filterType}`;
	};
	return (
		<div className="flex items-center gap-2 text-right">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="sm" className="flex items-center gap-1">
						<ListFilter className="h-4 w-4 font-medium text-[12px] leading-[20px] text-[#52525B]" />
						<div className="gap-2"></div>
						<span className="font-medium text-[12px] leading-[20px] text-[#52525B]">
							تصفية
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="text-right w-[174px]">
					<DropdownMenuLabel className="flex font-medium text-[14px] leading-[20px] text-[#18181B] items-center justify-end p-2.5">
						كل الأنشطة <Check className="h-4 w-4 ml-2" />
					</DropdownMenuLabel>
					<hr className="border-dotted bg-[#D4D4D8]" />
					<DropdownMenuItem
						className="flex items-center justify-between p-2.5"
						onClick={() => handleFilterClick("fromSomeone")}>
						<ChevronLeft className="h-4 w-4" />
						<span className="text-right font-medium text-[14px] leading-[20px] text-[#18181B]">
							من شخص ما
						</span>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex items-center justify-end p-2.5"
						onClick={() => handleFilterClick("assignedToMe")}>
						<span className="text-right font-medium text-[14px] leading-[20px] text-[#18181B]">
							مسنود لي
						</span>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex items-center justify-end p-2.5"
						onClick={() => handleFilterClick("mentioned")}>
						<span className="text-right font-medium text-[14px] leading-[20px] text-[#18181B]">
							@مذكور
						</span>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="flex items-center justify-end p-2.5"
						onClick={() => handleFilterClick("assignedByMe")}>
						<span className="text-right font-medium text-[14px] leading-[20px] text-[#18181B]">
							تم تعيينه من قبلي
						</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="sm" className="flex items-center gap-1">
						<ArrowDownUp className="h-4 w-4 font-medium text-[12px] leading-[20px] text-[#52525B]" />
						<div className="gap-2"></div>

						<span className="font-medium text-[12px] leading-[20px] text-[#52525B]">
							فرز: الأحدث
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="text-right w-[257px]">
					<DropdownMenuLabel className="flex flex-col justify-end py-1 px-2.5">
						<span className="font-medium text-[14px] leading-[20px] text-[#18181B]">
							الأحدث
						</span>
						<div className="gap-1"></div>
						<span className="font-light text-[12px] leading-[20px] text-[##71717A]">
							مشاهدة أحدث الإشعارات أولاً
						</span>
					</DropdownMenuLabel>
					<DropdownMenuLabel className="flex flex-col justify-end py-1 px-2.5">
						<span className="font-medium text-[14px] leading-[20px] text-[#18181B]">
							الأهمية
						</span>

						<div className="gap-1"></div>
						<span className="font-light text-[12px] leading-[20px] text-[##71717A]">
							مشاهدة الإشعارات التي يمكن اتخاذ إجراء بشأنها أولاً{" "}
						</span>
					</DropdownMenuLabel>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
