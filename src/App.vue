
<template>
	<div id="app">
		<h1>Tarefas</h1> 	
		<NewTask @taskAdded="addTask"/> 
		 <TaskGrid :tasks="tasks" /> 
		 <bootstrap-data-tables></bootstrap-data-tables>
 	</div>
</template>


<script>
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
import api from '../config'
import bootstrapDataTable from './components/bootstrapDataTables'
import BootstrapDataTables from './components/bootstrapDataTables.vue'

export default {
	components: { NewTask, TaskGrid, BootstrapDataTables },
	data() {
		return {
			tasks: [
				{ name:'Lavar a Louça', pending: false },
				{ name: 'Comprar Blusa', pending: true },
			]
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0 
			if(reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		}
	},
	
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	
</style>
