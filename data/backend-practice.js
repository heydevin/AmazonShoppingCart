const xhr = new XMLHttpRequest();

//Status Code, 4 or 5 (400,404,500) = failed, 2 (200,201,204) = succeeded
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

//URL = Uniform Resource Locator (like a adress, but for internet)
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

//Putting URL in web broswer is the same thing as GET from above