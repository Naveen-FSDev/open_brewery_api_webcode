var API = "https://api.openbrewerydb.org/breweries?by_name=cooper&per_page=3";
var container = document.getElementById("container");
fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((event) => {
      if (event.website_url == null) {
        container.innerHTML += `
            <div class="box">
                <h3>${event.name}<span class="badge alert alert-primary">Name</span></h3>
                <h3>${event.country}<span class="badge alert alert-success">Country</span></h3>
                <h3>${event.state}<span class="badge alert alert-info">State</span></h3>
                <h3>${event.city}<span class="badge alert alert-danger">City</span></h3>
                <h2><a href="https://tualatinvalley.org/" target="_blank">https://tualatinvalley.org/<span class="badge alert alert-warning">url</span></a></h2>
            </div>`;
      } else {
        container.innerHTML += `
           <div class="box">
                <h3>${event.name}<span class="badge alert alert-primary">Name</span></h3>
                <h3>${event.country}<span class="badge alert alert-success">Country</span></h3>
                <h3>${event.state}<span class="badge alert alert-info">State</span></h3>
                <h3>${event.city}<span class="badge alert alert-danger">City</span></h3>
                <h2><a href="${event.website_url}" target="_blank">${event.website_url}<span class="badge alert alert-warning">url</span></a></h2>
            </div>`;
      }
    });
  });
console.log(container);