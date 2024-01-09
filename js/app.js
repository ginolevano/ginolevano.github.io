"use strict"

console.log("Jquery 2024")
$(()=>{


    $(".header__ul").on("click",()=>{
        $(".header__li").toggleClass("active")
        $(".menu").toggleClass("active")
    })

    
    // var horarioSemanal = {};
    // // var recomendacionDormir = {};
    // $('#download__schedule').hide();
    
    // function validarPreguntas() {
    //     var todasRespondidas = true;
    
    //     $('.input__question').each(function () {
    //         if ($(this).val() === '') {
    //             todasRespondidas = false;
    //             return false;
    //         }
    //     });
    
    //     return todasRespondidas;
    // }
    
    // function generateOrUpdateSchedule() {
    //     if (!validarPreguntas()) {
    //         alert('Por favor, responde todas las preguntas antes de generar o actualizar el horario.');
    //         return;
    //     }
    
    //     var day = $('#day').val().toLowerCase();
    //     var diasEnEspanol = {
    //         monday: 'LUNES',
    //         tuesday: 'MARTES',
    //         wednesday: 'MIÉRCOLES',
    //         thursday: 'JUEVES',
    //         friday: 'VIERNES',
    //     };
    //     var dayEspanol = diasEnEspanol[day];
    //     var wakeupTime = $('#wakeupTime').val();
    //     var classHours = $('#classHours').val();
    //     var classTime = $('#classTime').val();
    //     var studyHours = $('#studyHours').val();
    //     var studyTime = $('#studyTime').val();
    //     var homeworkTime = $('#homeworkTime').val();
    //     var sleepHours = $('#sleepHours').val();
    //     var homeworkHours = $('#homeworkHours').val();
    
    //     var classStartTime = parseTime(classTime);
    //     var classDuration = parseFloat(classHours);
    //     var classEndTime = addHours(classStartTime, classDuration);
    
    //     var studyStartTime = parseTime(studyTime);
    //     var studyDuration = parseFloat(studyHours);
    //     var studyEndTime = addHours(studyStartTime, studyDuration);
    
    //     var homeworkStartTime = parseTime(homeworkTime);
    //     var homeworkDuration = parseFloat(homeworkHours);
    //     var homeworkEndTime = addHours(homeworkStartTime, homeworkDuration);
    
    //     var scheduleOutput = `
    //         <div class="semana__cont" data-day="${day}">
    //             <div class="day__week">
    //                 <p class="day__p">
    //                     ${dayEspanol}
    //                 </p>
    //             </div>
    //             <p class="detalle__horarios"><strong>Despertarse a las:</strong> ${wakeupTime}</p>
    //             <p class="detalle__horarios"><strong>Clases de:</strong> ${formatTime(classStartTime)} - ${formatTime(classEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Estudiar de:</strong> ${formatTime(studyStartTime)} - ${formatTime(studyEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Tarea de:</strong> ${formatTime(homeworkStartTime)} - ${formatTime(homeworkEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Cantidad de horas de sueño:</strong> ${sleepHours}</p>
    //             <p id="bedtimeRecommendation_${day}"></p>
    //             </br>
    //             <button class="delete__day" data-day="${day}">Eliminar Día</button>
                
    //         </div>
    //     `;
    
    //     var existingSchedule = $('#outputSchedule').find(`[data-day="${day}"]`);
    //     if (existingSchedule.length > 0) {
    //         existingSchedule.replaceWith(scheduleOutput);
    //     } else {
    //         $('#outputSchedule').append(scheduleOutput);
    //     }
    
    //     horarioSemanal[day] = {
    //         scheduleOutput: scheduleOutput,
    //         bedtimeRecommendation: null
    //     };
    //     $('#download__schedule').show();
    //     recommendBedtime(day, wakeupTime, sleepHours);
    
    //     $('.input__question').val('');
    // }
    
    // function parseTime(timeString) {
    //     var timeParts = timeString.split(':');
    //     var hours = parseInt(timeParts[0]);
    //     var minutes = parseInt(timeParts[1]);
    //     return { hours: hours, minutes: minutes };
    // }
    
    // function addHours(time, hours) {
    //     var newTime = {
    //         hours: time.hours + Math.floor(hours),
    //         minutes: time.minutes + (hours % 1) * 60
    //     };
    
    //     if (newTime.minutes >= 60) {
    //         newTime.hours += 1;
    //         newTime.minutes -= 60;
    //     }
    
    //     return newTime;
    // }
    
    // function subtractHours(time, hours) {
    //     var newTime = {
    //         hours: time.hours - Math.floor(hours),
    //         minutes: time.minutes - (hours % 1) * 60
    //     };
    
    //     while (newTime.hours < 0) {
    //         newTime.hours += 24;
    //     }
    
    //     if (newTime.minutes < 0) {
    //         newTime.hours -= 1;
    //         newTime.minutes += 60;
    //     }
    
    //     return newTime;
    // }
    
    // function formatTime(time) {
    //     var formattedHours = (time.hours < 10) ? '0' + time.hours : time.hours;
    //     var formattedMinutes = (time.minutes < 10) ? '0' + time.minutes : time.minutes;
    //     return formattedHours + ':' + formattedMinutes;
    // }
    
    // function recommendBedtime(day, wakeupTime, sleepHours) {
    //     var wakeupTimeObj = parseTime(wakeupTime);
    //     var sleepHoursNum = parseFloat(sleepHours);
    //     var bedtimeObj = subtractHours(wakeupTimeObj, sleepHoursNum);
    //     var bedtimeFormatted = formatTime(bedtimeObj);
    
    //     horarioSemanal[day].bedtimeRecommendation = bedtimeFormatted;
    
    //     $('#bedtimeRecommendation_' + day).text('Dormir a las: ' + bedtimeFormatted);
    // }
    
    // $('#generate__schedule').on('click', function () {
    //     generateOrUpdateSchedule();
    // });
    
    // $('#outputSchedule').on('click', '.delete__day', function () {
    //     var dayToDelete = $(this).data('day');
    //     delete horarioSemanal[dayToDelete];
    //     $(this).parent().remove();
    
    //     if ($.isEmptyObject(horarioSemanal)) {
    //         $('#download__schedule').hide();
    //     }
    // });
    
    // $('#download__schedule').on('click', function () {
    //     var scheduleText = '';
    
    //     for (var day in horarioSemanal) {
    //         if (horarioSemanal.hasOwnProperty(day)) {
    //             var scheduleData = horarioSemanal[day];
    //             var bedtimeRecommendation = scheduleData.bedtimeRecommendation;
    //             var scheduleHTML = scheduleData.scheduleOutput;
    //             var plainText = scheduleHTML.replace(/<\/?[^>]+(>|$)/g, "");
    //             scheduleText += plainText + '\nRecomendación de dormir: ' + bedtimeRecommendation + '\n\n';
    //         }
    //     }
    
    //     var blob = new Blob([scheduleText], { type: 'text/plain' });
    
    //     var link = document.createElement('a');
    //     link.href = window.URL.createObjectURL(blob);
    //     link.download = 'horario_semanal.txt';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // });

    // var horarioSemanal = {};
    // // var recomendacionDormir = {};
    // $('#download__schedule').hide();
    
    // function validarPreguntas() {
    //     var todasRespondidas = true;
    
    //     $('.input__question').each(function () {
    //         if ($(this).val() === '') {
    //             todasRespondidas = false;
    //             return false;
    //         }
    //     });
    
    //     return todasRespondidas;
    // }
    
    // function generateOrUpdateSchedule() {
    //     if (!validarPreguntas()) {
    //         alert('Por favor, responde todas las preguntas antes de generar o actualizar el horario.');
    //         return;
    //     }
    
    //     var day = $('#day').val().toLowerCase();
    //     var diasEnEspanol = {
    //         monday: 'LUNES',
    //         tuesday: 'MARTES',
    //         wednesday: 'MIÉRCOLES',
    //         thursday: 'JUEVES',
    //         friday: 'VIERNES',
    //     };
    //     var dayEspanol = diasEnEspanol[day];
    //     var wakeupTime = $('#wakeupTime').val();
    //     var classHours = $('#classHours').val();
    //     var classTime = $('#classTime').val();
    //     var studyHours = $('#studyHours').val();
    //     var studyTime = $('#studyTime').val();
    //     var homeworkTime = $('#homeworkTime').val();
    //     var sleepHours = $('#sleepHours').val();
    //     var homeworkHours = $('#homeworkHours').val();
        
    //     //validar numero nefativos!!
    //     if ((classHours) <= 0 || (studyHours) <= 0 || (homeworkHours) <= 0 || (sleepHours) <= 0) {
    //         alert('Por favor, ingresa valores positivos para las horas. No se permiten números negativos ni cero.');
    //         return;
    //     }
    
    //     var classStartTime = parseTime(classTime);
    //     var classDuration = parseFloat(classHours);
    //     var classEndTime = addHours(classStartTime, classDuration);
    
    //     var studyStartTime = parseTime(studyTime);
    //     var studyDuration = parseFloat(studyHours);
    //     var studyEndTime = addHours(studyStartTime, studyDuration);
    
    //     var homeworkStartTime = parseTime(homeworkTime);
    //     var homeworkDuration = parseFloat(homeworkHours);
    //     var homeworkEndTime = addHours(homeworkStartTime, homeworkDuration);
    
    //     var scheduleOutput = `
    //         <div class="semana__cont" data-day="${day}">
    //             <div class="day__week">
    //                 <p class="day__p">
    //                     ${dayEspanol}
    //                 </p>
    //             </div>
    //             <p class="detalle__horarios"><strong>Despertarse a las:</strong> ${wakeupTime}</p>
    //             <p class="detalle__horarios"><strong>Clases de:</strong> ${formatTime(classStartTime)} - ${formatTime(classEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Estudiar de:</strong> ${formatTime(studyStartTime)} - ${formatTime(studyEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Tarea de:</strong> ${formatTime(homeworkStartTime)} - ${formatTime(homeworkEndTime)}</p>
    //             <p class="detalle__horarios"><strong>Cantidad de horas de sueño:</strong> ${sleepHours}</p>
    //             <p id="bedtimeRecommendation_${day}"></p>
    //             </br>
    //             <button class="delete__day" data-day="${day}">Eliminar Día</button>
                
    //         </div>
    //     `;
    
    //     var existingSchedule = $('#outputSchedule').find(`[data-day="${day}"]`);
    //     if (existingSchedule.length > 0) {
    //         existingSchedule.replaceWith(scheduleOutput);
    //     } else {
    //         $('#outputSchedule').append(scheduleOutput);
    //     }
    
    //     horarioSemanal[day] = {
    //         scheduleOutput: scheduleOutput,
    //         bedtimeRecommendation: null
    //     };
    //     $('#download__schedule').show();
    //     recommendBedtime(day, wakeupTime, sleepHours);
    
    //     $('.input__question').val('');
    // }
    
    // function parseTime(timeString) {
    //     var timeParts = timeString.split(':');
    //     var hours = parseInt(timeParts[0]);
    //     var minutes = parseInt(timeParts[1]);
    //     return { hours: hours, minutes: minutes };
    // }
    
    // function addHours(time, hours) {
    //     var newTime = {
    //         hours: time.hours + Math.floor(hours),
    //         minutes: time.minutes + (hours % 1) * 60
    //     };
    
    //     if (newTime.minutes >= 60) {
    //         newTime.hours += 1;
    //         newTime.minutes -= 60;
    //     }
    
    //     return newTime;
    // }
    
    // function subtractHours(time, hours) {
    //     var newTime = {
    //         hours: time.hours - Math.floor(hours),
    //         minutes: time.minutes - (hours % 1) * 60
    //     };
    
    //     while (newTime.hours < 0) {
    //         newTime.hours += 24;
    //     }
    
    //     if (newTime.minutes < 0) {
    //         newTime.hours -= 1;
    //         newTime.minutes += 60;
    //     }
    
    //     return newTime;
    // }
    
    // function formatTime(time) {
    //     var formattedHours = (time.hours < 10) ? '0' + time.hours : time.hours;
    //     var formattedMinutes = (time.minutes < 10) ? '0' + time.minutes : time.minutes;
    //     return formattedHours + ':' + formattedMinutes;
    // }
    
    // function recommendBedtime(day, wakeupTime, sleepHours) {
    //     var wakeupTimeObj = parseTime(wakeupTime);
    //     var sleepHoursNum = parseFloat(sleepHours);
    //     var bedtimeObj = subtractHours(wakeupTimeObj, sleepHoursNum);
    //     var bedtimeFormatted = formatTime(bedtimeObj);
    
    //     horarioSemanal[day].bedtimeRecommendation = bedtimeFormatted;
    
    //     $('#bedtimeRecommendation_' + day).text('Dormir a las: ' + bedtimeFormatted);
    // }
    
    // $('#generate__schedule').on('click', function () {
    //     generateOrUpdateSchedule();
    // });
    
    // $('#outputSchedule').on('click', '.delete__day', function () {
    //     var dayToDelete = $(this).data('day');
    //     delete horarioSemanal[dayToDelete];
    //     $(this).parent().remove();
    
    //     if ($.isEmptyObject(horarioSemanal)) {
    //         $('#download__schedule').hide();
    //     }
    // });
    
    // $('#download__schedule').on('click', function () {
    //     var scheduleText = '';
    
    //     for (var day in horarioSemanal) {
    //         if (horarioSemanal.hasOwnProperty(day)) {
    //             var scheduleData = horarioSemanal[day];
    //             var bedtimeRecommendation = scheduleData.bedtimeRecommendation;
    //             var scheduleHTML = scheduleData.scheduleOutput;
    //             var plainText = scheduleHTML.replace(/<\/?[^>]+(>|$)/g, "");
    //             scheduleText += plainText + '\nRecomendación de dormir: ' + bedtimeRecommendation + '\n\n';
    //         }
    //     }
    
    //     var blob = new Blob([scheduleText], { type: 'text/plain' });
    
    //     var link = document.createElement('a');
    //     link.href = window.URL.createObjectURL(blob);
    //     link.download = 'horario_semanal.txt';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // });

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

    // Validate negative numbers and zero
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


