"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResponse(data.reply || "خطا در دریافت پاسخ");
    } catch (err: any) {
      setResponse("خطا: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 معلم خصوصی هوش مصنوعی</h1>
      <textarea
        rows={4}
        cols={50}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="پیام خود را وارد کنید..."
      />
      <br />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "در حال ارسال..." : "ارسال"}
      </button>
      <h2>پاسخ:</h2>
      <pre>{response}</pre>
    </div>
  );
}
