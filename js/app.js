"use strict"

console.log("Jquery 2024")
$(()=>{


    $(".header__ul").on("click",()=>{
        $(".header__li").toggleClass("active")
        $(".menu").toggleClass("active")
    })

    var horarioSemanal = {};
    $('#download__schedule').hide();

    const validarPreguntas = () => {
        let todasRespondidas = true;

        $('.input__question').each(function () {
            if ($(this).val() === '') {
                todasRespondidas = false;
                return false;
            }
        });

        return todasRespondidas;
    };

    const generateOrUpdateSchedule = () => {
        if (!validarPreguntas()) {
            alert('Por favor, responde todas las preguntas antes de generar o actualizar el horario.');
            return;
        }

        const day = $('#day').val().toLowerCase();
        const diasEnEspanol = {
            monday: 'LUNES',
            tuesday: 'MARTES',
            wednesday: 'MIÉRCOLES',
            thursday: 'JUEVES',
            friday: 'VIERNES',
        };
        const dayEspanol = diasEnEspanol[day];
        const wakeupTime = $('#wakeupTime').val();
        const classHours = $('#classHours').val();
        const classTime = $('#classTime').val();
        const studyHours = $('#studyHours').val();
        const studyTime = $('#studyTime').val();
        const homeworkTime = $('#homeworkTime').val();
        const sleepHours = $('#sleepHours').val();
        const homeworkHours = $('#homeworkHours').val();

        // VALIDA NUMERO NEGATIVO Y CEROS
        if (parseFloat(classHours) <= 0 || parseFloat(studyHours) <= 0 || parseFloat(homeworkHours) <= 0 || parseFloat(sleepHours) <= 0) {
            alert('Por favor, ingresa valores positivos para las horas. No se permiten números negativos ni cero.');
            return;
        }

        const classStartTime = parseTime(classTime);
        const classDuration = parseFloat(classHours);
        const classEndTime = addHours(classStartTime, classDuration);

        const studyStartTime = parseTime(studyTime);
        const studyDuration = parseFloat(studyHours);
        const studyEndTime = addHours(studyStartTime, studyDuration);

        const homeworkStartTime = parseTime(homeworkTime);
        const homeworkDuration = parseFloat(homeworkHours);
        const homeworkEndTime = addHours(homeworkStartTime, homeworkDuration);

        const scheduleOutput = `
            <div class="semana__cont" data-day="${day}">
                <div class="day__week">
                    <p class="day__p">
                        ${dayEspanol}
                    </p>
                </div>
                <p class="detalle__horarios"><strong>Despertarse a las:</strong> ${wakeupTime}</p>
                <p class="detalle__horarios"><strong>Clases de:</strong> ${formatTime(classStartTime)} - ${formatTime(classEndTime)}</p>
                <p class="detalle__horarios"><strong>Estudiar de:</strong> ${formatTime(studyStartTime)} - ${formatTime(studyEndTime)}</p>
                <p class="detalle__horarios"><strong>Tarea de:</strong> ${formatTime(homeworkStartTime)} - ${formatTime(homeworkEndTime)}</p>
                <p class="detalle__horarios"><strong>Cantidad de horas de sueño:</strong> ${sleepHours}</p>
                <p id="bedtimeRecommendation_${day}"></p>
                </br>
                <button class="delete__day" data-day="${day}">Eliminar Día</button>
            </div>
        `;

        const existingSchedule = $('#outputSchedule').find(`[data-day="${day}"]`);
        if (existingSchedule.length > 0) {
            existingSchedule.replaceWith(scheduleOutput);
        } else {
            $('#outputSchedule').append(scheduleOutput);
        }

        horarioSemanal[day] = {
            scheduleOutput: scheduleOutput,
            bedtimeRecommendation: null
        };
        $('#download__schedule').show();
        recommendBedtime(day, wakeupTime, sleepHours);

        $('.input__question').val('');
    };

    const parseTime = (timeString) => {
        const timeParts = timeString.split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        return { hours: hours, minutes: minutes };
    };

    const addHours = (time, hours) => {
        const newTime = {
            hours: time.hours + Math.floor(hours),
            minutes: time.minutes + (hours % 1) * 60
        };

        if (newTime.minutes >= 60) {
            newTime.hours += 1;
            newTime.minutes -= 60;
        }

        return newTime;
    };

    const subtractHours = (time, hours) => {
        const newTime = {
            hours: time.hours - Math.floor(hours),
            minutes: time.minutes - (hours % 1) * 60
        };

        while (newTime.hours < 0) {
            newTime.hours += 24;
        }

        if (newTime.minutes < 0) {
            newTime.hours -= 1;
            newTime.minutes += 60;
        }

        return newTime;
};

const formatTime = (time) => {
    const formattedHours = (time.hours < 10) ? '0' + time.hours : time.hours;
    const formattedMinutes = (time.minutes < 10) ? '0' + time.minutes : time.minutes;
    return formattedHours + ':' + formattedMinutes;
};

const recommendBedtime = (day, wakeupTime, sleepHours) => {
    const wakeupTimeObj = parseTime(wakeupTime);
    const sleepHoursNum = parseFloat(sleepHours);
    const bedtimeObj = subtractHours(wakeupTimeObj, sleepHoursNum);
    const bedtimeFormatted = formatTime(bedtimeObj);

    horarioSemanal[day].bedtimeRecommendation = bedtimeFormatted;

    $('#bedtimeRecommendation_' + day).text('Dormir a las: ' + bedtimeFormatted);
};

$('#generate__schedule').on('click', () => generateOrUpdateSchedule());

$('#outputSchedule').on('click', '.delete__day', function () {
    const dayToDelete = $(this).data('day');
    delete horarioSemanal[dayToDelete];
    $(this).parent().remove();

    if ($.isEmptyObject(horarioSemanal)) {
        $('#download__schedule').hide();
    }
});

$('#download__schedule').on('click', () => {
    let scheduleText = '';

    for (const day in horarioSemanal) {
        if (horarioSemanal.hasOwnProperty(day)) {
            const scheduleData = horarioSemanal[day];
            const bedtimeRecommendation = scheduleData.bedtimeRecommendation;
            const scheduleHTML = scheduleData.scheduleOutput;
            const plainText = scheduleHTML.replace(/<\/?[^>]+(>|$)/g, "");
            scheduleText += plainText + '\nRecomendación de dormir: ' + bedtimeRecommendation + '\n\n';
        }
    }

    const blob = new Blob([scheduleText], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'horario_semanal.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


})


