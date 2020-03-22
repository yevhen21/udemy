let monthBudget = +prompt("Ваш бюджет на месяц?", "");
let date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: monthBudget,
    timeData: date,
    expenses: {

    },
    optionalExpenses: {

    },
    income: []
}

for (let i = 0; i < 2; i++) {
    let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let q2 = prompt("Во сколько обойдется?", "");

    if ((typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
        appData.expenses[q1] = q2;
    }
    else {
        console.log('Введите корректные данные');
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let q2 = prompt("Во сколько обойдется?", "");

//     if ((typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
//         appData.expenses[q1] = q2;
//     }
//     else {
//         console.log('Введите корректные данные');
//         i--;
//     }
//     i++;    
// }

// let i = 0;
// do {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let q2 = prompt("Во сколько обойдется?", "");

//     if ((typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
//         appData.expenses[q1] = q2;
//     }
//     else {
//         console.log('Введите корректные данные');
//         i--;
//     }
//     i++;    
// }
// while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// console.log(appData.expenses.q1);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний ровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
