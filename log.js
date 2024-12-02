const login = (username, password) => {
  const storedUsername = "admin";
  const storedPassword = "password123";

  if (username === storedUsername && password === storedPassword) {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password.");
  }
};


login("admin", "password123");
