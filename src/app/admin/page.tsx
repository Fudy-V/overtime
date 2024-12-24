import OvertimeList from "@/components/feature/overtime/overtime_list";
import { User } from "@prisma/client";
import React from "react";

const mockUsers: User[] = [
  {
    id: "1",
    authId: "authId",
    maxOvertimeHours: Number(process.env.MAX_OVERTIME),
    role: "member",
    createdAt: new Date(),
    name: "alice",
    overtime: 10,
  },
  {
    id: "2",
    authId: "authId",
    maxOvertimeHours: Number(process.env.MAX_OVERTIME),
    role: "member",
    createdAt: new Date(),
    name: "bob",
    overtime: 20,
  },
  {
    id: "3",
    authId: "authId",
    maxOvertimeHours: Number(process.env.MAX_OVERTIME),
    role: "member",
    createdAt: new Date(),
    name: "carol",
    overtime: 30,
  },
];

const AdminPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <OvertimeList users={mockUsers} />
    </div>
  );
};

export default AdminPage;
