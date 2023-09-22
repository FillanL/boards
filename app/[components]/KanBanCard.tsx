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
		<div className="shadow bg-white hover:-translate-y-2 p-2 cursor-pointer border isolate duration-[2000ms] hover:~translate-y-10 ~bg-blue-400 peer peer-hover:translate-y-10">
			<h3>{title}</h3>
			<p>update</p>
			<p>days left</p>
		</div>
	);
}
export default KanBanCard;
