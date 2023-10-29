'use client';
import React, { memo } from 'react';

type props = {
	children: React.ReactNode;
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	handlesubmit: () => void;
};
function Modal({
	children,
	isOpen,
	openModal,
	closeModal,
	handlesubmit,
}: props) {
	if (!isOpen) return;
	return (
		<div className=" bg-black/75 h-full w-full absolute z-50 left-0 top-0 duration-700 transition-transform">
			<div className="bg-white h-1/2 w-1/2 m-auto relative z-60  text-black flex top-1/4 flex-col p-3 rounded-lg dark:bg-gray-500 dark:text-white">
				{children}
				<div className="mx-auto space-x-4 bottom-1">
					<button
						className="dark:border-white border-black p-2 border rounded-md"
						onClick={closeModal}
					>
						close
					</button>
					<button
						className="dark:border-white border-black p-2 border rounded-md"
						onClick={handlesubmit}
					>
						submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default memo(Modal);
