"use client";

import { useState } from "react";

// ここでログイン→匿名認証(basic認証をパスしないと匿名認証ができない)
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form className="space-y-4">
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          ユーザー名
        </label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          パスワード
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
      >
        ログイン
      </button>
    </form>
  );
}
