// import { tasks } from '../../data/tasks'
import cls from './Tasks.module.css'

const Tasks = ({ tasks, onComplete }) => {
	{
		return (
			<div className={cls.tasks}>
				{tasks.map(item => {
					return (
						<div className={cls.task} key={item.id}>
							<input
								type='checkbox'
								onChange={() => {
									onComplete(item.id)
								}}
							/>
							{item.name}
						</div>
					)
				})}
			</div>
		)
	}
}

export default Tasks
