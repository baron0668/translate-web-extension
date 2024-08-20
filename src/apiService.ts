

export async function fetchTranslation(text: string): Promise<string> {
  return fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      target: "zh-TW",
      source: "en",
    }),
  }
  ).then((response) => response.json()).then((jsonData) => jsonData.data.translations[0].translatedText);
}