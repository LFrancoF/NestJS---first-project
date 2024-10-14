import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController{

    /*taskService:TaskService;

    constructor(taskService:TaskService){
        this.taskService = taskService;
    }*/

   constructor(private taskService: TaskService){}   //equivalente al codigo de arriba

    @Get()
    getAllTasks(@Query() query: any){
        console.log(query);
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.taskService.getTask(parseInt(id));
    }

    @Get('/test')
    testing(){
        return this.taskService.testingTasks();
    }

    @Post()
    createTask(@Body() task: createTaskDto){
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: updateTaskDto){
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.taskService.updateTaskStatus();
    }
}