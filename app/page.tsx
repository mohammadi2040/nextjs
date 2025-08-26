"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // فعلا پاسخ رو شبیه‌سازی می‌کنیم
    setAnswer("🤖 هوش مصنوعی: پاسخ به سؤال شما در حال آماده‌سازی است...");

    // اینجا بعداً می‌تونیم اتصال به API هوش مصنوعی رو بذاریم
    setTimeout(() => {
      setAnswer(`جواب شبیه‌سازی شده برای: «${question}»`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 font-sans">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-4 px-6 shadow-md text-center text-xl font-bold">
        🎓 معلم خصوصی هوش مصنوعی
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-10 w-full max-w-2xl px-4">
        {/* Question Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <label className="text-lg font-medium">سوال خود را وارد کنید:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="مثلاً: مشتق x² چیست؟"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            ارسال
          </button>
        </form>

        {/* Answer Section */}
        {answer && (
          <div className="mt-6 w-full bg-green-100 p-6 rounded-2xl shadow-inner text-gray-800">
            {answer}
          </div>
        )}
      </main>
    </div>
  );
}
