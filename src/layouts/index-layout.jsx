import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden bg-[#0b2e6e]">
				<Outlet />
			</div>
		</>
	);
};

export { IndexLayout };
