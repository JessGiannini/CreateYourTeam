function generateHTML(answers) {
  var header = `<header class="hero is-info">
        <div class="hero-body">
            <p class="title has-text-centered">
                My Creative Team
            </p>
        </div>
    </header>`;
  var managerCard = ``;

  var engineerCard = ``;

  var internCard = ``;

  var completeHTML = (managerCard += engineerCard += internCard);

  return completeHTML;
}

module.exports = generateHTML;
