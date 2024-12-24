import { prisma } from "@/lib/prisma/prismaClient";
import { redirect } from "next/navigation";

export default async function Home() {
  // 匿名認証のID(環境変数に設定)で絞り込んで、PCが違うとログインに飛ばす処理
  // →ログイン成功した場合のみ匿名認証をパス
  // →id生成。

  const user = await prisma.user.findFirst({
    where: {
      name: "alice",
    },
  });
  if (!user) {
    return redirect("/login");
  }

  return <div className=""></div>;
}
