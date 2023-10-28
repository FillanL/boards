export type TicketStatus ='to do' | 'in progress' | 'review';

export type Ticket = {
	id: string;
	title: string;
	status: TicketStatus;
	due: string;
	assignee: string;
	timeworked: string;
	storypoints: number;
};
