"use client";

import { User } from "@prisma/client";
import React from "react";

const OvertimeList = ({ users }: { users: User[] }) => {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium text-gray-700 mb-6">残業時間一覧</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-gray-700">{user.name}</h3>
                <p className="text-sm text-gray-500">{`${month}月${date}日時点`}</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500">今月の残業時間</p>
                  <p className="text-2xl font-medium text-gray-700">
                    {user.overtime}
                    <span className="text-sm ml-1">時間</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">残り可能時間</p>
                  <p
                    className={`text-2xl font-medium ${
                      user.maxOvertimeHours - user.overtime < 10 ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {user.maxOvertimeHours - user.overtime}
                    <span className="text-sm ml-1">時間</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OvertimeList;
