import { useState } from 'react'
// import { tasks } from '../../data/tasks'
import cls from './Modal.module.css'

const Modal = ({ isOpen, isClose, setTasks }) => {
	const [name, setName] = useState('')

	function handleSubmit(event) {
		event.preventDefault()

		const newTask = {
			id: crypto.randomUUID(),
			name,
		}

		setTasks(prevTask => [...prevTask, newTask])
		console.log(setTasks)

		// tasks.push(newTask)

		// setName('')
	}

	return (
		<div className={`${cls.modal} ${isOpen ? cls.active : ''}`}>
			<h2>Добавление новой задачи</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Название задачи'
					value={name}
					onChange={event => setName(event.target.value)}
				/>
				<button className={cls.btn} type='submit'>
					Добавить
				</button>
			</form>

			<button className={cls.btn} onClick={isClose}>
				Закрыть модальное окно
			</button>
		</div>
	)
}

export default Modal
