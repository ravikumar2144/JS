// Example of a function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched!");
      }, 2000); // Simulates a 2 second network request
  });
}

// Using async and await to handle the promise
async function getData() {
  console.log("Fetching data...");
  
  try {
      const data = await fetchData(); // Waits for fetchData to resolve
      console.log(data); // Logs "Data fetched!" after 2 seconds
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Call the async function
getData();
