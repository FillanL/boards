'use client';
import { TicketStatus } from '@/utils/types';
import { DragEvent, memo, useCallback } from 'react';

type props = {
	children: React.ReactNode;
	containerName: string;
	handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
};
function Container({ children, handleDragEnter, containerName }: props) {
	const color = "bg-red-200 dark:bg-board-done rounded-md"

	return (
		<div
			className={`w-1/3 h-[75vh] ${color} p-2 `}
			onDragEnter={handleDragEnter}
			data-contianername={containerName}
		>
			{children}
		</div>
	);
}
export default memo(Container);
