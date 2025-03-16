import NotificationActions from "./NotificationActions";
import { Button } from "./ui/button";

export default function FilteredActivityView({
	filterType,
}: {
	filterType: string;
}) {
	// Map filter types to their Arabic names for display
	const filterNames = {
		assignedToMe: "مسنود لي",
		mentioned: "@مذكور",
		assignedByMe: "تم تعيينه من قبلي",
		fromSomeone: "من شخص ما",
	};

	const filterTitle =
		filterNames[filterType as keyof typeof filterNames] || filterType;

	console.log("Filter Title:", filterTitle);
	return (
		<div
			dir="rtl"
			className="h-full w-full flex flex-col  bg-background py-4 px-6">
			<NotificationActions accountId={"9018283645"} />

			<div className="w-full flex flex-col h-full items-center justify-center space-y-6">
				<img src="/public/assets/looking_under_couch 1.svg" alt="" />
				<span className="font-[600] text-[24px] leading-[32px] text-center">
					لم يتم العثور على أي نشاط.
				</span>
				<span className="font-[500] text-[16px] leading-[22px] text-center text-[#71717A]">
					لم يتم العثور على نتائج، يرجى تجربة اسم آخر أو عنوان بريد إلكتروني أو
					إعداد فلتر آخر.
				</span>
				<Button variant={"outline"} className="text-[#0037FF] bg-[#E5EBFF]">
					مسح الفلاتر
				</Button>
			</div>
		</div>
	);
}
