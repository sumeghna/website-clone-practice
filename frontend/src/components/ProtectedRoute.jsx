fetch("http://localhost:5000/profile", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
