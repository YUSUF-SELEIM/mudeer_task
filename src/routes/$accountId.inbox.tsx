import { createFileRoute } from "@tanstack/react-router";

// Define the search params type
interface SearchParams {
	tab: string; // Make tab required with a default value
}

export const Route = createFileRoute("/$accountId/inbox")({
	component: AccountInbox,
	validateSearch: (search: Record<string, unknown>): SearchParams => {
		// Validate and ensure tab is defined with a default value
		return {
			tab: typeof search.tab === "string" ? search.tab : "activity",
		};
	},
});

function AccountInbox() {
	// Use the provided hooks to access search params and route params
	const { tab } = Route.useSearch();
	const { accountId } = Route.useParams();

	return (
		<div className="bg-white h-full w-full">
			<div className="p-6">
				{/* Safely use search.tab and accountId */}
				Current tab: {tab} for account {accountId}
			</div>
		</div>
	);
}
