import fetch from 'node-fetch';

async function getExchangeRate() {
    try {
      const response = await fetch("https://api.exchangerate.host/latest");
      if (!response.ok) {
        throw new Error("User data not found");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      return null;
    }
  }
  
  async function displayUserData(currencyCode) {
    const data = await getExchangeRate();
    if (data) {
      console.log("Exchange Rate :", data.rates[currencyCode]?.toFixed(4)||null);
    }
  }
  
  displayUserData('USD');
  displayUserData('ABC');