import { sequelize } from "../../../database/db.js";
import { Quiz } from "../Quiz.js";
import {Genre} from '../Genre.js';
import {Locality} from '../Locality.js';
import {Question} from '../Questions.js';
import {Response} from '../Response.js';
import { QuestionsResponses } from "../QuestionsResponses.js";
import { QuizResponses } from "../QuizResponses.js";


Locality.hasMany(Quiz,{
    foreignKey:'locality_id',
    as:'locality_quiz'
});
Quiz.belongsTo(Locality,{
    foreignKey:'locality_id',
    as:'locality_quiz',
});

Genre.hasMany(Quiz,{
    foreignKey: 'genre_id',
    as:'genre_quiz',
});
Quiz.belongsTo(Genre,{
    foreignKey:'genre_id',
    as:'genre_quiz',
});
Response.belongsToMany(Question,{
    through: QuestionsResponses,
    foreignKey:'response_id',
    as:'questions',
});
Question.belongsToMany(Response,{
    through:QuestionsResponses,
    foreignKey:'question_id',
    as:'questions'
});
Quiz.belongsToMany(Response,{
    through:QuizResponses,
    foreignKey:'quiz_id',
    as:'quizResponses',
});
Response.belongsToMany(Quiz,{
    through:QuizResponses,
    foreignKey:'response_id',
    as:'quizResponses'
});
Locality.sync();
Genre.sync()
Question.sync();
Response.sync();
Quiz.sync();
QuizResponses.sync();
QuestionsResponses.sync();

export const comprobations = async () => {
            let CountLocality = await Locality.count();
            if(CountLocality < 50){
                const localidades = [
                    { name: "Formosa" },
                    { name: "Colonia Pastoril" },
                    { name: "Gran Guardia" },
                    { name: "San Hilario" },
                    { name: "Mariano Boedo" },
                    { name: "Villa del Carmen" },
                    { name: "Clorinda" },
                    { name: "Laguna Naick Neck" },
                    { name: "Riacho He He" },
                    {  name: "Monte Lindo" },
                    {  name: "S.F Laishí" },
                    {  name: "Gral. Mansilla" },
                    {  name: "Herradura" },
                    {  name: "Yatai" },
                    {  name: "Misión Tacaagle" },
                    {  name: "Laguna Gallo" },
                    {  name: "Tres Lagunas" },
                    {  name: "El Espinillo" },
                    {  name: "Pirané" },
                    {  name: "El Colorado" },
                    {  name: "Villa Dos Trece" },
                    {  name: "Mayor Villafañe" },
                    {  name: "Palo Santo" },
                    {  name: "Las Lomitas" },
                    {  name: "Comandante Fontana" },
                    {  name: "Villa Gral Guemes" },
                    {  name: "Estanislao del Campo" },
                    {  name: "Pozo del Tigre" },
                    {  name: "Gral. Belgrano" },
                    {  name: "San Martin I" },
                    {  name: "San Martin II" },
                    {  name: "Fortin Lugones" },
                    {  name: "Subt. Perin" },
                    {  name: "Posta Cambio Zalazar" },
                    {  name: "Colonia Sarmiento" },
                    {  name: "Juan G. Bazan" },
                    {  name: "Bartolomé De Las Casas" },
                    {  name: "El Recreo" },
                    {  name: "Fortin Sargento Leyes" },
                    {  name: "Fortin Soledad" },
                    {  name: "Guadalcazar" },
                    {  name: "Lamadrid" },
                    {  name: "La Rinconada" },
                    {  name: "Los Chiriguanos" },
                    {  name: "Pozo de Maza" },
                    {  name: "Pozo del Mortero" },
                    {  name: "Vaca Perdida" },
                    {  name: "Gral. Mosconi" },
                    {  name: "El Potrillo" },
                    {  name: "Ing. Juarez" },
                  ];
                for(let  item of localidades){
                    console.log(item);
                    await Locality.create(item);
                }
            };
    
    let CountQuestions = await Question.count();
    if(CountQuestions == 0){
        const questions = [
            "¿Qué carrera está cursando?",
            "¿Que materia le parece la mas adecuada a su curso?",
            "¿Que materia agregaría a su curso?",
            "En cuanto al contenido en general, ¿le parece actualizado u obsoleto?",
            "¿Consideras que alguna materia es innecesaria?",
            "Edad"
        ];
        for(let item of questions){
            console.log(item);
            await Question.create({question:item});
        }
    }else{
        console.log('Preguntas ya existentes!');
    }

    let Count = await Genre.count();
    if(Count === 0){
        const genres = [
            { name: "Masculino" },
            { name: "Femenino" },
            { name: "Otros" }
        ];
            for(let item of genres){
                console.log(item);
                await Genre.create(item);
            };
    }
    console.log('Comprobaciones realizadas!');
}
    

export {
    Locality,
    Genre,
    Quiz,
    Response,
    Question,
    QuestionsResponses
};