async function searchRecipe() {
  const query = document.getElementById('search').value;
  const resultsList = document.getElementById('results');
  
  // Clear previous results
  resultsList.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

    resultsList.innerHTML = ""; // Clear loading text

    if (data.meals) {
      data.meals.forEach(meal => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:100px;">
          <p><a href="${meal.strSource}" target="_blank">View Recipe</a></p>
        `;
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = "<li>No recipes found. Try another search!</li>";
    }
  } catch (error) {
    resultsList.innerHTML = "<li>Error fetching recipes. Please try again later.</li>";
    console.error(error);
  }
}
