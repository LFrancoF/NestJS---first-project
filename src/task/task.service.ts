import {Injectable, NotFoundException} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService{

    private tasks = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            return new NotFoundException(`No se encontro la tarea ${id}`)
        }
        return taskFound;
    }

    createTask(task: createTaskDto){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task
    }

    updateTask(task: updateTaskDto){
        console.log(task);
        return 'Actualizando tarea'
    }

    deleteTask(){
        return 'Eliminado tarea'
    }

    updateTaskStatus(){
        return 'Actualizando el estado de la tarea'
    }

    testingTasks(){
        return 'Testeando tareas'
    }
}