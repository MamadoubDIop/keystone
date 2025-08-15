document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('workout-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const workoutData = {
      date: document.getElementById('date').value,
      workoutType: document.getElementById('workout-type').value,
      weightsUsed: document.getElementById('weights-used').value,
      reps: document.getElementById('reps').value,
      sets: document.getElementById('sets').value,
      nutrition: {
        foodItem: document.getElementById('food-item').value,
        calories: document.getElementById('calories').value,
        protein: document.getElementById('protein').value,
        carbs: document.getElementById('carbs').value,
        fats: document.getElementById('fats').value
      }
    };

    let existingData = JSON.parse(localStorage.getItem('workoutLog')) || [];
    existingData = workoutData
    localStorage.setItem('workoutLog', JSON.stringify(existingData));

    window.location.href = 'page1.html';
  });
});
