
const DatabaseInteractionFunctions = require('../config/firebaseDb');

const getTasks = async (req, res) => {
    try {
        const tasksData=DatabaseInteractionFunctions("tasksData");
        const docRef=await tasksData.getAll();
        res.status(200).send({firebaseResponse:{ tasksData:docRef,message:"tasksData received successfully " }
    } ) }catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}; 


const createTask = async (req, res) => {
    const { title, description, stage } = req.body;

    try {
        const tasksData=DatabaseInteractionFunctions('tasksData');
        const docRef=await tasksData.add({title,description,stage});
        res.status(201).send({firebaseResponse:{ documentId: docRef.id, message: "tasksData added successfully" }
        });

        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}; 


const updateTaskStage = async (req, res) => {
    const { id } = req.body;
    const { stage } = req.body;
    try {
        const todoData=DatabaseInteractionFunctions("tasksData");
        const docRef=await todoData.update(id,{stage:stage});
        if (!docRef) {
            return res.status(404).send('Task not found');
        }
        res.json({message:"Task stage updated successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}; 


const updateTask = async (req, res) => {
    const {id,title,description}=req.body
    try {
        const tasksData=DatabaseInteractionFunctions("tasksData");
        const docRef=await tasksData.update(id,{title:title,description:description});
        if (!docRef) {
            return res.status(404).send('Task not found');
        }
        res.json({message:"Task updated successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}; 

const deleteTask = async (req, res) => {

    const { id } = req.body;

    try {
        const tasksData=DatabaseInteractionFunctions("tasksData");
        const docRef=await tasksData.delete(id);

        if (!docRef) {
            return res.status(404).send('Task not found');
        }
        res.json({ message: 'Task deleted successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}; 



module.exports = { getTasks, createTask, updateTask, deleteTask,updateTaskStage };
