function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

async function fetchUserData() {
  const user = await fakeApiCall();
  console.log(user.name);
}

fetchUserData();

const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

async function fetchGreenPokemons() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API 요청 실패");
    }

    const result = await response.json();

    const greenPokemons = result.data.filter(
      (pokemon) => pokemon.color === "green"
    );

    console.log(greenPokemons);
  } catch (error) {
    console.error("에러 발생:", error.message);
  }
}

// 함수 실행
fetchGreenPokemons();
