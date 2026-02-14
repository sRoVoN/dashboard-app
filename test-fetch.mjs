async function test() {
  try {
    const res = await fetch(
      "https://api.rawg.io/api/games?key=d7fb1065e93a4e13b6ce36910e5954a4&page=1&page_size=1"
    );

    console.log("Status:", res.status);

    const data = await res.json();
    console.log("Success ✅");
    console.log("Game name:", data.results?.[0]?.name);
  } catch (err) {
    console.error("Error ❌");
    console.error(err);
  }
}

test();
