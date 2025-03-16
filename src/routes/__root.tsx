import {
	createRootRoute,
	Link,
	Outlet,
	useSearch,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const pathname = window.location.pathname;
	const isIndexPage = pathname === "/";

	const inboxMatch = pathname.match(/\/([^/]+)\/inbox/);
	const isInboxRoute = !!inboxMatch;
	const accountId = inboxMatch ? inboxMatch[1] : null;

	// Use the `useSearch` hook to dynamically get the current tab
	const { tab: currentTab = "activity" } = useSearch({ strict: false });

	return (
		<>
			{!isIndexPage && (
				<>
					<div className="w-full p-6 pb-0 text-right">
						<h1 className="text-[20px] leading-[24px] font-semibold">
							الإشعارات
						</h1>
						{isInboxRoute && accountId && (
							<div className="flex justify-end mt-4 relative">
								{/* Gray HR - Full Width */}

								{/* Tabs */}
								<div className="flex gap-[12px] relative z-10 bg-white">
									{["archive", "reminders", "activity"].map((tab) => (
										<div
											key={tab}
											className={`px-4 py-2 font-semibold text-[14px] leading-[20px] cursor-pointer transition-all ${
												currentTab === tab
													? "border-b-2 border-[#0037FF] text-black"
													: "text-gray-500"
											}`}>
											<Link
												to="/$accountId/inbox"
												params={{ accountId }}
												search={{ tab }}
												className="block">
												{tab === "archive"
													? "الأرشيف"
													: tab === "reminders"
														? "تذكر لاحقًا"
														: "الأنشطة"}
											</Link>
										</div>
									))}
								</div>
							</div>
						)}
						<hr className="-mx-6"/>
					</div>
				</>
			)}
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	);
}
