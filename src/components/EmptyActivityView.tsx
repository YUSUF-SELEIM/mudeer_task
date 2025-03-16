export default function EmptyActivityView() {
	return (
		<div
			dir="rtl"
			className="h-full w-full flex flex-col  bg-background py-4 px-6">
			<div className="w-full flex flex-col h-full items-center justify-center space-y-6">
				<img src="/public/assets/SearchEmptyState 1.svg" alt="" />
				<span className="font-[600] text-[24px] leading-[32px] text-center">
					أنت على اطلاع دائم بأعمال فريقك.
				</span>
				<span className="font-[500] text-[16px] leading-[22px] text-center text-[#71717A]">
					راجع لاحقًا للحصول على تحديثات حول العمل الذي تتعاون فيه.
				</span>
			</div>
		</div>
	);
}
