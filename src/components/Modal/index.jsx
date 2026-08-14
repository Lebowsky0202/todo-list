import { useState } from 'react'
import cls from './Modal.module.css'

const Modal = ({ isOpen, isClose }) => {
	const [name, setName] = useState('')

	function onChange(e) {
		setName(e.target.value)
	}

	return (
		<div className={`${cls.modal} ${isOpen ? cls.active : ''}`}>
			<h2>Добавление новой задачи</h2>
			<input
				type='text'
				placeholder='Название задачи'
				value={name}
				onChange={onChange}
			/>
			<div>{name}</div>

			<button className={cls.btn} onClick={isClose}>
				Закрыть модальное окно
			</button>
		</div>
	)
}

export default Modal
