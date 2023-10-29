'use client';
import React, {
	ChangeEvent,
	DragEvent,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import KanBanCard from '../[components]/KanBanCard';
import Container from '../[components]/Container';
import ticketStore from '@/store/ticketStore';
import Modal from '../[components]/Modal';
import useModal from '@/hooks/useModal';
import type { Ticket, TicketStatus } from '@/utils/types';
import usefetch from '@/hooks/useFetch';

function Page() {
	const modalInit: Ticket = {
		id: '',
		title: '',
		status: 'to do',
		due: '',
		assignee: '',
		timeworked: '',
		storypoints: 1,
	};
	const inputStyles =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	const containerStatus: TicketStatus[] = ['to do', 'in progress', 'review'];
	const [data] = usefetch();
	const [tickets, setTickets] = useState<Ticket[] | null>(data);
	const containerNameState = useRef<TicketStatus | null>(null);
	const ticketIdState = useRef<string>('');
	const { isOpen, openModal, closeModal, err, setErr } = useModal();
	const setTicketState = ticketStore((state) => state.setTickets);

	const [modalForm, setModalForm] = useState<Ticket>(modalInit);

	function addToEndOfList(newTicket: Ticket) {
		if (!tickets || tickets.length < 1) setTickets([newTicket]);
		else setTickets([...tickets, newTicket]);
	}
	function handleDragStart(e: DragEvent<HTMLDivElement>, ticketId: string) {
		console.log('cb1');

		e.currentTarget?.classList.add('opacity-5');
		ticketIdState.current = ticketId;
	}

	function handleDragEnter(e: DragEvent<HTMLDivElement>) {
		console.log('red');
		containerNameState.current = e.currentTarget.dataset[
			'contianername'
		] as TicketStatus;
	}

	const handleDragEnd = useCallback(
		(e: DragEvent<HTMLDivElement>) => {
			e.currentTarget.classList.remove('opacity-5');
			if (containerNameState.current && tickets && tickets.length > 0) {
				let chosenTicket: Ticket | null = null;
				let indexOfTicket: number = -1;
				const updatedstatusList = tickets.map((ticket, indx) => {
					if (ticket.id === ticketIdState.current) {
						ticket.status = containerNameState.current as TicketStatus;
						chosenTicket = ticket;
						indexOfTicket = indx;
					}
					return ticket;
				});
				if (!chosenTicket) return;

				const updateTickets = [
					...updatedstatusList.slice(0, indexOfTicket),
					...updatedstatusList.slice(indexOfTicket + 1),
				];
				setTickets([...updateTickets, chosenTicket]);
			}
		},
		[tickets]
	);

	function handleFormChange(
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) {
		setModalForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}
	function handleFormSubmit() {
		setErr('');
		if (
			modalForm.title.trim() !== '' &&
			['to do', 'in progress', 'review'].includes(modalForm.status) &&
			modalForm.due.trim() !== '' &&
			modalForm.assignee.trim() !== '' &&
			modalForm.timeworked.trim() !== '' &&
			!isNaN(modalForm.storypoints)
		) {
			modalForm.id = `${Math.random() * 32423423423423}`;
			modalForm.storypoints = Number(modalForm.storypoints);
			addToEndOfList(modalForm);
			setModalForm(modalInit);
			closeModal();
		} else setErr('something went wrong');
	}

	useEffect(() => {
		setTickets(data);
		setTicketState(data);

		return () => {};
	}, [data]);

	return (
		<div className="px-3 space-y-3">
			<Modal
				{...{ isOpen, openModal, closeModal, handlesubmit: handleFormSubmit }}
			>
				<form
					action=""
					className="  space-y-2"
					onChange={() => (err ? setErr('') : null)}
				>
					<div className=" mx-auto bg-black">
						<p className="text-red-700 text-center">{err}</p>
					</div>
					<div className="">
						<label htmlFor="title"></label>
						<input
							id="title"
							className={inputStyles}
							type="text"
							placeholder="title"
							name="title"
							value={modalForm.title}
							onChange={handleFormChange}
							required
						/>
					</div>
					<div className="w-1/2">
						<label htmlFor="status"></label>
						<select
							id="status"
							className={inputStyles}
							name="status"
							value={modalForm.status}
							onChange={handleFormChange}
						>
							{containerStatus.map((opt) => (
								<option key={`opt${opt}`} value={opt}>
									{opt}
								</option>
							))}
						</select>
					</div>
					<div className="">
						<label htmlFor="due"></label>
						<input
							id="due"
							className={inputStyles}
							type="datetime-local"
							placeholder="due"
							name="due"
							value={modalForm.due}
							onChange={handleFormChange}
							required
						/>
					</div>
					<div className="w-1/2">
						<label htmlFor="assignee"></label>
						<input
							id="assignee"
							className={inputStyles}
							type="text"
							placeholder="assignee"
							name="assignee"
							value={modalForm.assignee}
							onChange={handleFormChange}
							required
						/>
					</div>
					<div className="w-1/2">
						<label htmlFor="timeworked"></label>
						<input
							id="timeworked"
							className={inputStyles}
							type="datetime-local"
							placeholder="timeworked"
							name="timeworked"
							value={modalForm.timeworked}
							onChange={handleFormChange}
							required
						/>
					</div>
					<div className="w-1/4">
						<label htmlFor="storypoints"></label>
						<input
							id="storypoints"
							className={inputStyles}
							type="number"
							placeholder="storpointsy"
							name="storypoints"
							value={modalForm.storypoints}
							onChange={handleFormChange}
							required
						/>
					</div>
				</form>
			</Modal>

			<div className="">
				<button onClick={openModal} className="py-2 px-3 bg-green-500">
					add New
				</button>
			</div>
			<div className="flex justify-between text-center rounded-l space-x-3">
				{containerStatus.map((status) => (
					<Container
						key={status}
						{...{
							handleDragEnter,
							containerName: status,
						}}
					>
						<h3 className="uppercase">{status}</h3>
						<div className="-space-y-12 ">
							{!tickets && <>no data</>}
							{tickets &&
								tickets.map(
									(item) =>
										item.status === status && (
											<KanBanCard
												key={item.id}
												{...{
													details: item,
													handleDragStart,
													handleDragEnd,
												}}
											/>
										)
								)}
						</div>
					</Container>
				))}
			</div>
		</div>
	);
}
export default memo(Page);
