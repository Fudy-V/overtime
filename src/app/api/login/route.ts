import { prisma } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

const POST = async (req: Request, res: NextResponse) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      name: username,
    },
  });

  if (!user) {
    return res.json();
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "パスワードが違います" });
  }

  return res.status(200).json({ message: "ログイン成功" });
};
