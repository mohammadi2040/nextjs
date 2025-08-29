import fetch from "node-fetch";

export async function sendMessageToDeepseek(message) {
  try {
    const response = await fetch("https://api.deepseek.com/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEA_API_KEY}`, // متغیر ورسل
      },
      body: JSON.stringify({ prompt: message }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Something went wrong", details: error.message };
  }
}
