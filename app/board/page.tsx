'use client';
import React, { DragEvent, useEffect, useState } from 'react';
import fake from '@/fake.json';
import KanBanCard from '../[components]/KanBanCard';
import Container from '../[components]/Container';
import ticketStore from '@/store/ticketStore';

export default function Page() {
	const [ticketId, setTicketId] = useState('');
	const [containerName, setcontainerName] = useState('');
	const setTickets = ticketStore((state) => state.setTickets);
	const update = ticketStore((state) => state.updateTickets);
	const todo = ticketStore((state) => state.todo);
	const pending = ticketStore((state) => state.pending);
	const finished = ticketStore((state) => state.finished);

	function handleDragStart(
		e: DragEvent<HTMLDivElement>,
		containerName: string
	) {
		setTicketId((prev) => {
			console.log(prev);
			return (prev = containerName);
		});
	}
	function handleDragEnter(e: DragEvent<HTMLDivElement>, containerName: any) {
		setcontainerName(containerName);
	}
	function handleDragEnd(e: DragEvent<HTMLDivElement>) {
		update(ticketId, containerName);
		// send id and new status to api
	}

	useEffect(() => {
		setTickets(fake);
		return () => {};
	}, []);

	return (
		<div className="flex justify-between px-3 text-center rounded-l">
			<Container
				{...{
					handleDragEnter,
					containerName: 'to do',
				}}
				color="bg-red-200 dark:bg-board-done rounded-l-md"
			>
				<h3>todo</h3>
				<div className="-space-y-12 ">
					{todo &&
						todo.map((item) => (
							<KanBanCard
								key={item.id}
								{...{
									details: item,
									handleDragStart,
									handleDragEnd,
								}}
							/>
						))}
				</div>
			</Container>
			<Container
				{...{
					handleDragEnter,
					containerName: 'in progress',
				}}
				color="bg-green-200 dark:board-done"
			>
				<h3>Progessing</h3>
				<div className="-space-y-12">
					{pending &&
						pending.map((item) => (
							<KanBanCard
								key={item.id}
								{...{
									details: item,
									handleDragStart,
									handleDragEnd,
								}}
							/>
						))}
				</div>
			</Container>
			<Container
				{...{
					handleDragEnter,
					containerName: 'review',
				}}
				color="bg-blue-200 dark:bg-board-blue rounded-r-md"
			>
				<h3>Done</h3>
				<div className="-space-y-12">
					{finished &&
						finished.map((item) => (
							<KanBanCard
								key={item.id}
								{...{
									details: item,
									handleDragStart,
									handleDragEnd,
								}}
							/>
						))}
				</div>
			</Container>
		</div>
	);
}
