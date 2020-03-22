let monthBudget = prompt("Ваш бюджет на месяц?", "");

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

let question1 = prompt("Введите обязательную статью расходов в этом месяце", "");

let question2 = prompt("Во сколько обойдется?", "");

appData.expenses.question1 = question2;

alert(appData.expenses.question1);

console.log(appData.expenses.question1);
