import { useState } from 'react'
import cls from './Modal.module.css'

const Modal = () => {
	const [name, setName] = useState('')

	function onChange(e) {
		setName(e.target.value)
	}

	return (
		<div className={cls.modal}>
			<h2>Добавление новой задачи</h2>
			<input
				type='text'
				placeholder='Название задачи'
				value={name}
				onChange={onChange}
			/>
			<div>{name}</div>
		</div>
	)
}

export default Modal
