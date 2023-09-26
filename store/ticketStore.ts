import { Ticket } from '@/utils/types';
import { create } from 'zustand';
export type TicketStore = {
	todo: Ticket[];
	pending: Ticket[];
	finished: Ticket[];
	tickets: Ticket[];
	setTickets: (tickets: Ticket[]) => void;
	updateTickets: (id: string, to: string) => void;
};
const ticketStore = create<TicketStore>((set) => ({
	todo: [],
	pending: [],
	finished: [],
	tickets: [],
	setTickets: (tickets: Ticket[]) =>
		set((state) => {
			console.log(tickets);
			return {
				tickets,
				todo: tickets.filter((i) => i.status === 'to do'),
				pending: tickets.filter((i) => i.status === 'in progress'),
				finished: tickets.filter((i) => i.status === 'review'),
			};
		}),
	updateTickets: (id: string, to: string) =>
		set((state) => {
			const index = state.tickets.findIndex((ticket) => ticket.id === id);
			if (index === -1) {
				return state;
			}
			const updatedTicket = { ...state.tickets[index], status: to };
			const newTickets = [
				...state.tickets.filter((_, idx) => idx !== index),
				updatedTicket,
			];
			return {
				tickets: newTickets,
				todo: newTickets.filter((i) => i.status === 'to do'),
				pending: newTickets.filter((i) => i.status === 'in progress'),
				finished: newTickets.filter((i) => i.status === 'review'),
			};
		}),
}));
export default ticketStore;
