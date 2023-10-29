'use client';
import { Ticket } from '@/utils/types';
import React, { DragEvent, memo, useCallback } from 'react';

type props = {
	details: Ticket;
	handleDragStart: (e: DragEvent<HTMLDivElement>, id: string) => void;
	handleDragEnd: (e: DragEvent<HTMLDivElement>) => void;
};
function KanbanCard({ details, handleDragStart, handleDragEnd }: props) {
	const HandleDragStart = useCallback(
		(e: DragEvent<HTMLDivElement>) => {
			handleDragStart(e, details.id);
		},
		[details.id, handleDragStart]
	);

	return (
		<div
			className={` bg-custom-white border border-gray-200 dark:border-gray-600 hover:-translate-y-2 p-2 cursor-pointer  isolate duration-[2000ms] peer peer-hover:translate-y-10 dark:bg-black rounded-lg shadow-lg `}
			data-testid="kanbanCard"
			draggable={true}
			onDragStart={HandleDragStart}
			onDragEnd={handleDragEnd}
		>
			<h3>{details.title}</h3>
			<p>update</p>
			<p>days left</p>
		</div>
	);
}
export default memo(KanbanCard);
