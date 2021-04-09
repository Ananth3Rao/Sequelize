async function getDiningHalls() {
  const response = await fetch('/api/dining');
  const data = await response.json();
  diningHalls = data.data;
  const halls = document.querySelector('.halls');
  const html = diningHalls
    .map(
      (hall) =>
        `<tr>
        <td> ${hall.hall_name} </th>
        <td> ${hall.hall_address}</td>
    </tr>`
    )
    .join('');
  halls.innerHTML = html;
}

function getRandom(number, max) {
  const nums = [];
  for (i = 0; i < number; i++) {
    do {
      randNum = Math.floor(Math.random() * max + 1);
    } while (nums.includes(randNum));
    nums.push(randNum);
  }
  return nums;
}

async function randomMeals() {
  const responseMeals = await fetch('/api/meals');
  const meals = await responseMeals.json();
  const responseMacros = await fetch('/api/macros');
  const macros = await responseMacros.json();
  const randNumbers = getRandom(10, meals.length);
  const filteredMeals = meals.filter((meal) => randNumbers.includes(meal.meal_id));
  const filteredMacros = macros.filter((macro) => randNumbers.includes(macro.meal_id));

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Macros for 10 Meals'
    },
    data: [
      {
        type: 'stackedBar',
        name: 'Calories',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].calories },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].calories },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].calories },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].calories },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].calories },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].calories },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].calories },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].calories },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].calories },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].calories }
        ]
      },
      {
        type: 'stackedBar',
        name: 'Cholesterol',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].cholesterol },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].cholesterol },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].cholesterol },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].cholesterol },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].cholesterol },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].cholesterol },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].cholesterol },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].cholesterol },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].cholesterol },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].cholesterol }
        ]
      },
      {
        type: 'stackedBar',
        name: 'Sodium',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].sodium },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].sodium },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].sodium },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].sodium },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].sodium },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].sodium },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].sodium },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].sodium },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].sodium },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].sodium }
        ]
      },
      {
        type: 'stackedBar',
        name: 'Carbs',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].carbs },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].carbs },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].carbs },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].carbs },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].carbs },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].carbs },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].carbs },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].carbs },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].carbs },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].carbs }
        ]
      },
      {
        type: 'stackedBar',
        name: 'Protein',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].protein },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].protein },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].protein },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].protein },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].protein },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].protein },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].protein },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].protein },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].protein },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].protein }
        ]
      },
      {
        type: 'stackedBar',
        name: 'Fat',
        showInLegend: 'true',
        dataPoints: [
          { label: filteredMeals[0].meal_name, y: filteredMacros[0].fat },
          { label: filteredMeals[1].meal_name, y: filteredMacros[1].fat },
          { label: filteredMeals[2].meal_name, y: filteredMacros[2].fat },
          { label: filteredMeals[3].meal_name, y: filteredMacros[3].fat },
          { label: filteredMeals[4].meal_name, y: filteredMacros[4].fat },
          { label: filteredMeals[5].meal_name, y: filteredMacros[5].fat },
          { label: filteredMeals[6].meal_name, y: filteredMacros[6].fat },
          { label: filteredMeals[7].meal_name, y: filteredMacros[7].fat },
          { label: filteredMeals[8].meal_name, y: filteredMacros[8].fat },
          { label: filteredMeals[9].meal_name, y: filteredMacros[9].fat }
        ]
      }
    ]
  });
  chart.render();
}

async function windowActions() {
  randomMeals();
  getDiningHalls();
}

window.onload = windowActions;
