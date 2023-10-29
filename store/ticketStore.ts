import { Ticket } from '@/utils/types';
import { create } from 'zustand';
export type TicketStore = {
	tickets: Ticket[] | null;
	setTickets: (tickets: Ticket[] | null) => void;
};
const ticketStore = create<TicketStore>((set) => ({
	tickets: [],
	setTickets: (tickets: Ticket[] | null) =>
		set(() => {
			return {
				tickets: tickets ? tickets : null,
			};
		}),
}));
export default ticketStore;
