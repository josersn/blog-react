function dateToday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const week = date.getDay();
    const month = date.getMonth();
    

    const week_PT= ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo" ]
    const month_PT = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
    const result = `${week_PT[week]}, ${month_PT[month]} ${date.getDay()}, ${date.getFullYear()} `
    return result;

}

export const date = dateToday();