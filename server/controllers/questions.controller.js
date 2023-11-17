import { Question } from "../models/associations/associations.js";

export const createQuestion = async (req, res) => {
    const {question} = req.body;
    try {
        if(question === ''||  question === null || question === undefined){
            return res.status(400).json({message:'Question is required'})};
        const newQuestion = await Question.create({question});
        if(!newQuestion){
            return res.status(400).json({message:'Question not created'});
        };
        return res.status(201).json(newQuestion);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};

export const getQuestions = async (req,res)=>{
    try {
        const questions = await Question.findAll();
        if(!questions){
            return res.status(404).json({message:'No questions found'});
        };
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};

export const deleteQuestion = async (req,res)=>{
    const {id} = req.params;
    try {
        const question = await Question.findByPk(id);
        if(!question){
            return res.status(404).json({message:'Question not found'});
        };
        await Question.destroy({where:{id}});
    }catch{
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};