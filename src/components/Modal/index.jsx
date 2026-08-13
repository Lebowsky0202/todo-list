import cls from './Modal.module.css'

const Modal = () => {
	return (
		<div className={cls.modal}>
			<h2>Добавление новой задачи</h2>
			<form action=''></form>
			<input type='text' placeholder='Название задачи' />
		</div>
	)
}

export default Modal
