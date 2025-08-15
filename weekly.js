document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('weekly-log');
  const allData = JSON.parse(localStorage.getItem('workoutLog')) || [];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const grouped = {};
  daysOfWeek.forEach(day => grouped[day] = []);

  allData.forEach(entry => {
    const dayName = new Date(entry.date).toLocaleDateString('en-US', { weekday: 'long' });
    if (grouped[dayName]) {
      grouped[dayName].push(entry);
    }
  });

  daysOfWeek.forEach(day => {
    const dayColumn = document.createElement('div');
    dayColumn.className = 'day-column';
    dayColumn.innerHTML = `<h2>${day}</h2>`;

    if (grouped[day].length === 0) {
      dayColumn.innerHTML += `<p>No data logged.</p>`;
    } else {
      grouped[day].forEach(entry => {
        dayColumn.innerHTML += `
          <p><strong>Date:</strong> ${entry.date}</p>
          <p><strong>Workout:</strong> ${entry.workoutType}</p>
          <p><strong>Weight:</strong> ${entry.weightsUsed}</p>
          <p><strong>Reps:</strong> ${entry.reps}</p>
          <p><strong>Sets:</strong> ${entry.sets}</p>
          <p><strong>Food:</strong> ${entry.nutrition.foodItem}</p>
          <p><strong>Calories:</strong> ${entry.nutrition.calories}</p>
          <p><strong>Protein:</strong> ${entry.nutrition.protein}g</p>
          <p><strong>Carbs:</strong> ${entry.nutrition.carbs}g</p>
          <p><strong>Fats:</strong> ${entry.nutrition.fats}g</p>
          <hr />
        `;
      });
    }

    container.appendChild(dayColumn);
  });

  // ✅ Attach event listener AFTER DOM is fully built
  const clearButton = document.getElementById('clear-data-btn');
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear this week\'s data?')) {
        localStorage.removeItem('workoutLog');
        location.reload();
      }
    });
  }
});
