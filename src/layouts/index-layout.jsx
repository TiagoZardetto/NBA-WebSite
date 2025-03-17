import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<>
			<div className="flex w-screen h-screen flex-col bg-gray-300">
        <Outlet />
      </div>
		</>
	);
}

export { IndexLayout };