document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Calcular el IMC
    const bmi = (weight / (height * height)).toFixed(2);
    
    // Determinar la clasificación del IMC y los consejos
    let classification = "";
    let advice = "";

    if (bmi < 18.5) {
        classification = "Peso Bajo";
        advice = "Es recomendable que consultes a un nutricionista para evaluar una dieta que te ayude a ganar peso de manera saludable. También podrías considerar aumentar la ingesta de proteínas y grasas saludables.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = "Peso Normal";
        advice = "Estás en un peso saludable. Continúa manteniendo una dieta equilibrada y realizando ejercicio regularmente para mantenerte en forma.";
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = "Sobrepeso";
        advice = "Es recomendable que empieces a prestar más atención a tu dieta y a realizar más actividad física. Consulta con un profesional de la salud para recibir orientación sobre cómo lograr un peso más saludable.";
    } else if (bmi >= 30 && bmi < 34.9) {
        classification = "Obesidad clase 1";
        advice = "Es importante que comiences a tomar medidas para bajar de peso. Considera consultar a un médico o nutricionista para elaborar un plan personalizado que incluya una dieta adecuada y un plan de ejercicio.";
    } else if (bmi >= 35 && bmi < 39.9) {
        classification = "Obesidad clase 2";
        advice = "Tu salud puede estar en riesgo debido a tu peso. Es muy recomendable que busques apoyo médico para crear un plan de reducción de peso, que podría incluir cambios en la dieta y un aumento en la actividad física.";
    } else if (bmi >= 40) {
        classification = "Obesidad clase 3";
        advice = "Tu salud corre un riesgo elevado debido a tu peso. Te sugerimos buscar atención médica de inmediato para obtener ayuda con un plan integral de pérdida de peso, que puede incluir cambios en la dieta, ejercicio y posiblemente otros tratamientos médicos.";
    } else {
        classification = "ERROR, vuelva intentar";
        advice = "Por favor, verifica los datos ingresados e inténtalo de nuevo.";
    }

    // Mostrar resultado y consejo
    document.getElementById("result").innerHTML = `
        <p>Su IMC es De ${bmi}</p>
        <p>Usted tiene ${classification}.</p>
        <p><strong>Consejo de salud:</strong> ${advice}</p>
    `;
});
