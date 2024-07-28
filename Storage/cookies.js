// document.cookie="myname=vasanth;expires=Thu, 7 Sep 2023 15:01:00 UTC"

// document.cookie="TEST=1; expires=Fri, 8 Sep 2023 20:23:32 UTC; path=/";

// Set a cookie
document.cookie = "username=John Doe";

// Get all cookies
console.log(document.cookie);

// Delete a cookie
document.cookie = "username=John Doe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
