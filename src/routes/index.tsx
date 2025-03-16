import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
	loader: () => {
		// Uncomment this to automatically redirect to a specific account
		// throw redirect({
		//   to: '/:accountId/inbox',
		//   search: { tab: 'activity' },
		//   params: { accountId: '9018283645' }
		// })
	},
});

export default function Index() {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-[#18181B]">
			<a href="/9018283645/inbox?tab=activity">
				<img src="/logo.svg" alt="Logo" className="w-52 h-52" />
			</a>
		</div>
	);
}
