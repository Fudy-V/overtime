"use server";

const handleLoggedIn = async (formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
};

export { handleLoggedIn };
