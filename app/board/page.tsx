import React from 'react';
import fake from '@/fake.json';
import KanBanCard from '../[components]/KanBanCard';
import Container from '../[components]/Container';

export default function Page() {
	const todo = fake.filter((i) => i.status === 'to do');
	const inProgress = fake.filter((i) => i.status === 'in progress');
	const done = fake.filter((i) => i.status === 'review');
	return (
		<div className="flex justify-between px-3 text-center">
			<Container color="bg-red-200">
				<h3>todo</h3>
				<div className="-space-y-12 ">
					{todo.map((item) => (
						<KanBanCard key={item.title} {...item} />
					))}
				</div>
			</Container>
			<Container color="bg-green-200">
				<h3>Progessing</h3>
				<div className="-space-y-12">
					{inProgress.map((item) => (
						<KanBanCard key={item.title} {...item} />
					))}
				</div>
			</Container>
			<Container color="bg-blue-200">
				<h3>Done</h3>
				<div className='-space-y-12'>
					{done.map((item) => (
						<KanBanCard key={item.title} {...item} />
					))}
				</div>
			</Container>
		</div>
	);
}
