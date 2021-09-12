module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <!-- Header -->
      <header>
        <nav class="justify-content-center navbar navbar-dark bg-primary text-white">
            <h1>My Team Profile</h1>
        </nav>
      </header>
    
      <!-- main quiz container -->
      <div class="container">
            <div class="row">
                ${createManagerProfile(team)}
            </div>
            <div class="row">
                ${createEngineerProfiles(team)}
            </div>
            <div class="row">
                ${createInternProfiles(team)}
            </div>
            
        </div>
        <footer class="footer text-center bg-primary pt-5 pb-5 text-white">
            <h3>&copy; Mehak Zehra 2021 ♥ </h3>
        </footer>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="assets/js/script.js"></script>
      <!-- scripts below are for bootstrap modal -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
    </body>
    
    </html>`

};

const createManagerProfile = (myTeam) => {
    const createManager = (manager) => {
        return `
            <div class="card border-primary m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center text-primary">${manager.getName()}</h5>
                    <h6 class="card-title text-center">☕ ${manager.getRole()}</h6>
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: <a href ="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                    </ul>
                </div>
            </div>`
    };

    const htmlArr = [];

    htmlArr.push(
        myTeam.filter((employee) => employee.getRole() === "Manager")
            .map((manager) => createManager(manager))
    );
    return htmlArr.join("");

}

const createEngineerProfiles = (myTeam) => {
    const createEngineerDiv = (engineer) => {
        // loop through the array for all the engineers, if its an enginer, create div and append to final results
        return `
            <div class="card border-primary m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center text-primary">${engineer.getName()}</h5>
                    <h6 class="card-title text-center">💻 ${engineer.getRole()}</h6>
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href ="https://github.com/${engineer.getGithub()}" target ="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>`
    }
    const htmlArr = [];

    htmlArr.push(
        myTeam.filter((employee) => employee.getRole() === "Engineer")
            .map((engineerArr) => createEngineerDiv(engineerArr))
            .join("")
    );
    return htmlArr.join("");
};

const createInternProfiles = (myTeam) => {
    const createInternDiv = (intern) => {
        // loop through the array for all the engineers, if its an enginer, create div and append to final results
        return `
                <div class="card border-primary m-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center text-primary">${intern.getName()}</h5>
                        <h6 class="card-title text-center">🧑‍🎓 ${intern.getRole()}</h6>
                        <ul class="list-group text-dark">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: <a href ="http/school:${intern.getSchool()}">${intern.getSchool()}</a></li>
                        </ul>
                    </div>
                </div>`
    }
    const htmlArr = [];

    htmlArr.push(
        myTeam.filter((employee) => employee.getRole() === "Intern")
            .map((intern) => createInternDiv(intern))
            .join("")
    );

    return htmlArr.join("");
}