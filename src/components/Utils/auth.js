export const isAuthenticated = () => {
  // check if the user's authentication token is present
  const authToken = localStorage.getItem("accessToken");
  console.log("auth token from auth", authToken);
  //current this is coming through as null....
  //coming through as true now!!! issue w route....
  return authToken != null;
  // Return true if user is authenticated, if not- false
};
