'use client'
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import KanBanCard from './KanBanCard';
import type { Ticket } from '@/utils/types';

describe('KanbanCard', () => {
	const detail: Ticket = {
		id: 'c8f91714-5dcb-4584-b4e3-50533e5d847f',
		title: 'Complete UI Design',
		status: 'in progress',
		due: '2023-09-15',
		assignee: 'John Doe',
		timeworked: '2hr',
		storypoints: 8,
	};
	it('should renders the component with memoized function', () => {
		const handleDragStart = jest.fn();
		const handleDragEnd = jest.fn();
		render(
			<KanBanCard
				key={detail.id}
				{...{
					details: detail,
					handleDragStart,
					handleDragEnd,
				}}
			/>
		);

		const card = screen.getByTestId('kanbanCard');
		fireEvent.dragStart(card);

		expect(handleDragStart).toHaveBeenCalledWith(
			expect.any(Object),
			detail.id
		);
	});
});
