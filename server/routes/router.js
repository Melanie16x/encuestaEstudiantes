import express from 'express';
import { getQuestions, createQuestion,deleteQuestion } from '../controllers/questions.controller.js';
import { createQuiz, getQuiz,findQuiz } from '../controllers/quiz.controller.js';
import {getLocality} from '../controllers/localidad.controllers.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});





//APIS

//Questions
router.get('/api/questions', getQuestions);
router.post('/api/questions/create', createQuestion);
router.delete('/api/questions/delete/:id', deleteQuestion);

//Quiz
router.get('/api/quiz/:id', findQuiz);
router.post('/api/quiz/create', createQuiz);
router.get('/api/quizs', getQuiz);

//obtener Localidades

router.get('/api/localities', getLocality);

export default router;