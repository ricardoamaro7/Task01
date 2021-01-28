<template>
  <div class="task">
     <input v-model="task" placeholder="Nova tarefa">
     <input placeholder="Ex: 07/07/1993" v-model="date" type="data">
     <button class="form-element" @click="add">+</button>
  </div>
</template>

<script>
import api from '../../config/index';

export default {
    data() {
        return {
            task: null,
            date: null,
            status: false,
        }
    },
    methods: {
         async add() {
             const payload = {
                 task: this.task,
                 date: this.date,
                 status: this.status
             }
             const result = await api.post('/send', payload)
             console.log("resultdo", result)
             return result; 
         }
    }
}
</script>

<style> 
    .new-task {
        margin: 35px;
    }
    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF ;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    input.placeholder {
        
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

    }

</style>