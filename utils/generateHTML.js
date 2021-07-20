function generateHTML(answers) {
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- added bulma into this project -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Festive&display=swap" rel="stylesheet">
    <!-- lots of amazing font options -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css"
        type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
    <script src="https://kit.fontawesome.com/9de12bd4dc.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>My Creative Team</title>
</head>
<body>
    <header class="hero is-info">
        <div class="hero-body">
            <p class="title has-text-centered">
                My Creative Team
            </p>
        </div>
    </header>
    <div class = "card-image is-flex is-justify-content-center" id = "displaybox">
      <h1>${manangerName}</h1>
      
        

    </div>
</body>
</html>`;
}

module.exports = generateHTML;
