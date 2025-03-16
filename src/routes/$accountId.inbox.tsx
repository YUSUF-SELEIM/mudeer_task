import ActivityDashboard from "@/components/ActivityDashboard";
import FilteredActivityView from "@/components/FilteredActivityView";
import { createFileRoute } from "@tanstack/react-router";

// Define the search params type
interface SearchParams {
	tab: string;
	filterApplied?: string;
}

export const Route = createFileRoute("/$accountId/inbox")({
	component: AccountInbox,
	validateSearch: (search: Record<string, unknown>): SearchParams => {
		// Validate and ensure tab is defined with a default value
		return {
			tab: typeof search.tab === "string" ? search.tab : "activity",
			filterApplied:
				typeof search.filterApplied === "string"
					? search.filterApplied
					: undefined,
		};
	},
});

function AccountInbox() {
	const { tab, filterApplied } = Route.useSearch();
	const { accountId } = Route.useParams();
	console.log("Account ID:", accountId);
	console.log("Tab:", tab);
	console.log("Filter Applied:", filterApplied);

	return (
		<div dir="rtl" className="flex h-full bg-background">
			{tab === "activity" && !filterApplied && <ActivityDashboard />}
			{tab === "activity" && filterApplied && (
				<FilteredActivityView
					filterType={filterApplied}
				/>
			)}
		</div>
	);
}
