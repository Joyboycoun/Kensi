async function generateFood() {
  const query = document.getElementById("food-input").value;
  const resultsDiv = document.getElementById("results");

  if (!query) {
    resultsDiv.innerHTML = "<p>Please type a food name!</p>";
    return;
  }

  // Clear previous results
  resultsDiv.innerHTML = "<p>Loading...</p>";

  try {
    // Unsplash API with your key
    const apiKey = "Ad2HPncfZ9zHLvgjO-KVsxeFVBpHOpxzqb6fFmVOfCc";
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();

    if (data.results.length === 0) {
      resultsDiv.innerHTML = `<p>No results found for "${query}"</p>`;
    } else {
      const image = data.results[0].urls.regular;
      resultsDiv.innerHTML = `<img src="${image}" alt="${query}">`;
    }
  } catch (error) {
    resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

