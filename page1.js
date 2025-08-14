document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('workoutData'));

  if (data) {
    document.getElementById('summary-date').textContent = `Date: ${data.date}`;
    document.getElementById('summary-workout').textContent = data.workoutType;
    document.getElementById('summary-weight').textContent = data.weightsUsed;
    document.getElementById('summary-reps').textContent = data.reps;
    document.getElementById('summary-sets').textContent = data.sets;

    document.getElementById('summary-food').textContent = data.nutrition.foodItem;
    document.getElementById('summary-calories').textContent = data.nutrition.calories;
    document.getElementById('summary-protein').textContent = data.nutrition.protein;
    document.getElementById('summary-carbs').textContent = data.nutrition.carbs;
    document.getElementById('summary-fats').textContent = data.nutrition.fats;
  } else {
    document.querySelector('.summary-box').innerHTML = '<p>No workout data found.</p>';
  }
});
