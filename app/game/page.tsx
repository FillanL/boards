'use client';
import React, { EventHandler, SyntheticEvent, useState } from 'react';

type Country = {
	id: string;
	state: string;
	capital: string;
};

type Data = Record<string, string>;
const data: Data = {
	'New York': 'Albany',
	'Conn T': 'Hartford',
	'Ford L': 'Tallahassee',
};

function page() {
    const [selected, setSelected] = useState<string|null>(null)
	const combine: string[] = [];
	Object.keys(data).map(state=> combine.push(state, data[state]))

    function getKeyofValue():string{
        return""
    }

	function selectCard(event: SyntheticEvent<HTMLButtonElement>, state:string) {
        const keyOfValue = getKeyofValue()
        if(selected){ 
            if(data[selected] === state || data[keyOfValue] ===  state) event.target
            // remove mboth
        }
		event.currentTarget.classList.add('bg-blue-400');
		// alert(`momo click`);
	}

	return (
		<div className="">
			<h2>Picker game</h2>
			<div className="space-x-10 text-center dark:text-black text-black text-3xl">
				{combine &&
					combine.map((info) => (
						<button
							onClick={(e: SyntheticEvent<HTMLButtonElement>) => selectCard(e, info)}
							key={info}
							className="border px-2 bg-[#e0afb9]"
						>
							{info}
						</button>
					))}
			</div>
		</div>
	);
}

export default page;
