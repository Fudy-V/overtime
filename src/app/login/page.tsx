import LoginForm from "@/components/feature/login/login_form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-sm rounded-lg">
        <h2 className="text-2xl font-medium text-gray-700 mb-6">ログイン</h2>
        <LoginForm />
      </div>
    </div>
  );
}
