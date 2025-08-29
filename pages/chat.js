import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2)); // جواب رو نشون میده
    } catch (err) {
      setResponse("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chat</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="پیام خود را وارد کنید..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
