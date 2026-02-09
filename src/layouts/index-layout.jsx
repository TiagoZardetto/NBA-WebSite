import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<div className="bg-nba-deep min-h-screen w-screen overflow-x-hidden">
			<Outlet />
		</div>
	);
};

export { IndexLayout };
