function generateHTML(employeesChosen) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- added bulma into this project -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
    <!-- or bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Festive&display=swap" rel="stylesheet">
    <!-- lots of amazing font options -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css"
        type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
    <script src="https://kit.fontawesome.com/9de12bd4dc.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../assets/style.css" />
    <title>My Creative Team</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid d-flex align-items-center">
        <div class="container">
            <h1 class="display-4" id="title">My Creative Team</h1>
        </div>
    </div>
    <!-- class="card-content title is-4 is-flex is-justify-content-center" -->
    <div class = "row d-flex flex-row">
        <div class="box card-content content-center d-flex" id="displaybox">
            <div class="Manager">
                <div class="header">
                    <h1>${employeesChosen[0].name}</h1>
                    <h2 class="icon fas fa-coffee">Manager</h2>
                </div>
                <div class="text">
                    <ul>
                        <li>ID: ${employeesChosen[0].id}</li>
                        <li>Email: ${employeesChosen[0].email}</li>
                        <li>Office Number: ${employeesChosen[0].managerOffice}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- class="card-content title is-4 is-flex is-justify-content-center" -->
        <div class="box card-content content-center d-flex" id="displaybox">
            <div class="Engineer">
                <div class="header">
                    <h1>${employeesChosen[1].name}</h1>
                    <h2 class="icon fas fa-glasses">Engineer</h2>
                </div>
                <div class="text"></div>
                <ul>
                    <li>ID: ${employeesChosen[1].id}</li>
                    <li>Email: ${employeesChosen[1].email}</li>
                    <li>GitHub: ${employeesChosen[1].engineerGitHub}</li>
                </ul>
            </div>
        </div>
        </div>
        <!-- class="card-content title is-4 is-flex is-justify-content-center" -->
        <div class="box card-content content-center d-flex" id="displaybox">
            <div class="Intern">
                <div class="header">
                    <h1>${employeesChosen[2].name}</h1>
                    <h2 class="icon fas fa-graduation-cap">Intern</h2>
                </div>
                <div class="text"></div>
                <ul>
                    <li>ID: ${employeesChosen[2].id}</li>
                    <li>Email: ${employeesChosen[2].email}</li>
                    <li>School: ${employeesChosen[2].internSchool}</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</body>
</html>`;
}

module.exports = generateHTML;
