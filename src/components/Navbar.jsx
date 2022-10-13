import React from "react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between z-[100] w-full p-4 absolute">
			<h1 className="text-red-700 font-bold text-7xl cursor-pointer  ">
				NETFLIX
			</h1>
			<div>
				<button className="text-white pr-6"> Sign In </button>
				<button className="bg-red-700 text-white px-6 py-2 rounded cursor-pointer">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Navbar;
