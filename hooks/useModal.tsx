import React, { useState } from 'react';

function useModal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [err, setErr] = useState<string | null>(null);
	function openModal() {
		setIsOpen(true);
		setErr('');
	}
	function closeModal() {
		setIsOpen(false);
		setErr('');
	}

	return {
		isOpen: isOpen,
		openModal: openModal,
		closeModal: closeModal,
		err,
		setErr,
	};
}

export default useModal;
