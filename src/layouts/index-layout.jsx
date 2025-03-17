import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col bg-gray-300">
				<Outlet />
			</div>
		</>
	);
};

export { IndexLayout };
