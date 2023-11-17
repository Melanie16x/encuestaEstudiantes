const formEncuesta = document.getElementById('formEncuesta');
const selectLocalidad = document.getElementById('localidad');
const selectGenre = document.getElementById('genero');
const questionCareer = document.getElementById('carrera');
const questionSuitableSubject = document.getElementById('materiaAdecuada');
const questionAddSubject = document.getElementById('materiaAgregar');
const questionObsolete = document.getElementById('esObsoleto');
const questionUnnecessary = document.getElementById('materiaInnecesaria');
const divCareer = document.getElementById('divCarrera');
const divSubject = document.getElementById('divMateria');
const edad = document.getElementById('edad');
const getLocality = async ()=>{
    const res = await fetch('/api/localities');
    const localidades = await res.json();
    localidades.forEach(localidad => {
        selectLocalidad.innerHTML += `<option value="${localidad.id_locality}">${localidad.name}</option>`
    });
};

questionCareer.addEventListener('change',()=>{
    switch (questionCareer.value) {
        case ("TEC. SUP. EN DESARROLLO DE SOFTWARE"):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="Arquitectura y sistemas operativos"> Arquitectura y sistemas operativos</option>
            <option value="Algoritmos y estructura de datos"> Algoritmos y estructura de datos</option>
            <option value="Taller de lenguaje de programacion"> Taller de lenguaje de programacion</option>
            <option value="Base de datos"> Base de datos</option>
            <option value="Practica Profesional"> Practica Profesional</option>
            <option value="Laboratorio de Ingles"> Laboratorio de Ingles</option>
            <option value="Matematica aplicada"> Matematica aplicada</option>
            <option value="Tecnologia y sociedad"> Tecnologia y sociedad</option>
            <option value="Ingenieria de software"> Ingenieria de software</option>
            <option value="Seminarios de talleres de actualizacion"> Seminarios de talleres de actualizacion</option>
            <option value="Orientacion en valores y motivacional"> Orientacion en valores y motivacional</option>
            `
            break;
        }case ('TEC. SUP. TELECOMUNICACIONES' ):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="Calculo aplicado a las telecomunicaciones">Calculo aplicado a las telecomunicaciones</option>
            <option value="Fisica aplicada a las telecomunicaciones">Fisica aplicada a las telecomunicaciones</option>
            <option value="Señales y sistemas continuos y discretos">Señales y sistemas continuos y discretos</option>
            <option value="Introduccion a la progamacion">Introduccion a la progamacion</option>
            <option value="Fundamentos de las telecomunicaciones">Fundamentos de las telecomunicaciones</option>
            <option value="Laboratorio de electrotecnia, electronica analogica y digital">Laboratorio de electrotecnia, electronica analogica y digital</option>
            <option value="Ingles tecnico">Ingles tecnico</option>
            <option value="Comunicaciones analogicas">Comunicaciones analogicas</option>
            <option value="Laboratorio de electromagnetismo aplicado">Laboratorio de electromagnetismo aplicado</option>
            <option value="Comunicaciones degitales">Comunicaciones degitales</option>
            <option value="Laboratorio de redes de datos y comunicaciones">Laboratorio de redes de datos y comunicaciones</option>
            <option value="Gestion y mantenimiento de calidad">Gestion y mantenimiento de calidad</option>
            <option value="Sistemas opticos">Sistemas opticos</option>
            <option value="Normativas de comunicaciones">Normativas de comunicaciones</option>
            <option value="Economia y proyectos">Economia y proyectos</option>
            <option value="Seguridad e higiene industrial">Seguridad e higiene industrial</option>
            `
            break;
        }

        case ('TEC. SUP. MECATRÓNICA'):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="Ingles tecnico">Ingles tecnico</option>
            <option value="Seguridad e Higiene industrial">Seguridad e Higiene industrial</option>
            <option value="Metro fisica">Metro fisica</option>
            <option value="Elementos de maquinas">Elementos de maquinas</option>
            <option value="Taller de dibujo tecnico">Taller de dibujo tecnico</option>
            <option value="Taller de matematica">Taller de matematica</option>
            <option value="Sistema hidraulicos y neumaticos">Sistema hidraulicos y neumaticos</option>
            <option value="Sistema electricos y electronicos">Sistema electricos y electronicos</option>
            <option value="Introduccion a la mecatronica">Introduccion a la mecatronica</option>
            <option value="Taller de electricidad y electronica">Taller de electricidad y electronica</option>
            <option value="Diseño industrial y CAD">Diseño industrial y CAD</option>
            <option value="Sistema mecanico">Sistema mecanico</option>
            <option value="Integracion de sistemas">Integracion de sistemas</option>
            <option value="Robotica">Robotica</option>
            `
            break;
        }case('TEC. SUP. EN QUIMICA INDUSTRIAL'):{
            questionSuitableSubject.innerHTML = ``
            questionSuitableSubject.innerHTML += `
            <option value="Analisis de dato">Analisis de datos</option>
            <option value="Formulacion y preparacion de mezcla">Formulacion y preparacion de mezclas</option>
            <option value="Operaciones basicas en la industria quimic">Operaciones basicas en la industria quimica</option>
            <option value="Generacion y recuperacion de energi">Generacion y recuperacion de energia</option>
            <option value="Practica profesionalizant">Practica profesionalizante</option>
            <option value="Ingles tecnic">Ingles tecnico</option>
            <option value="Acondicionamiento y almacenamiento de productos quimico">Acondicionamiento y almacenamiento de productos quimicos</option>
            <option value="Regulacion y control de procesos quimico">Regulacion y control de procesos quimicos</option>
            <option value="Mantenimiento electromecanico en insdustrias de proces">Mantenimiento electromecanico en insdustrias de proceso</option>
            <option value="prevencion de riesgos en industrias quimica">prevencion de riesgos en industrias quimicas</option>
            <option value="Formacion y orientacion labora">Formacion y orientacion laboral</option>
            <option value="Transporte de solidos y fluido">Transporte de solidos y fluidos</option>
            <option value="Reactores quimico">Reactores quimicos</option>
            <option value="Comunicacio">Comunicacion</option>
            <option value="Ciencia sociedad y estad">Ciencia sociedad y estado</option>
            <option value="Gestion de emprendimientos">Gestion de emprendimientos</option>
            `
            break;
        }
    }

})
formEncuesta.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('localidad_id',selectLocalidad.value);
    formData.append('genre_id',selectGenre.value);
    const responses = {
        questionId: [1, 2, 3, 4, 5, 6],
        response: [
            questionCareer.value,
            questionSuitableSubject.value,
            questionAddSubject.value,
            questionObsolete.value,
            questionUnnecessary.value,
            edad.value
        ]
    };

    // Agregar 'responses' al objeto 'data'
    formData.append("responses", JSON.stringify(responses));
    const data = Object.fromEntries(formData);
    const res = await fetch('/api/quiz/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' // Asegúrate de establecer el encabezado 'Content-Type' correctamente
        }
        
    });
    Swal.fire({
        title: "Good job!",
        text: "Encuesta Completada!",
        icon: "success"
      });
      formEncuesta.reset();
});
document.addEventListener('DOMContentLoaded', async ()=>{
    await getLocality();
});