import { KanbanCard } from '@/utils/types';
import React from 'react';

type props = {
	details: KanbanCard;
};
function KanBanCard({
	title,
	status,
	due,
	assignee,
	timeworked,
	storypoints,
}: KanbanCard) {
	return (
		<div className=" bg-custom-white border border-gray-200 dark:border-gray-600 hover:-translate-y-2 p-2 cursor-pointer  isolate duration-[2000ms] peer peer-hover:translate-y-10 dark:bg-black rounded-lg shadow-lg ">
			<h3>{title}</h3>
			<p>update</p>
			<p>days left</p>
		</div>
	);
}
export default KanBanCard;
