function generateCard(employee){
  console.log("SWITCH CASE TOP:",employee)
  switch(employee.getRole()) {
    case "Manager":
      console.log("SWITCH CASE : Manager:",employee)
      return generateManagerCard(employee);
      break;
    case "Engineer":
      console.log("SWITCH CASE :Engineer:",employee)
      return generateEngineerCard(employee);
      break;
    case "Intern":
      console.log("SWITCH CASE :Intern:",employee)  
      return generateInternCard(employee);
      break;
      case "Team Info":
      console.log("SWITCH CASE :Team Info:",employee)  
      break;
  }
}

function generateManagerCard(manager){
  console.log("GENERATE MANAGER",manager)
  return `<div class="col s12 m4 box">
          <div class="icon-block">
          <h2 class="light-blue-text"><i class="material-icons">sports_martial_arts</i></h2>
    <h5>${manager.name}</h5>
    <p class="light">Role: ${manager.getRole()}</p>
    <p class="light">Office: ${manager.officeNumber}</p>
    <p class="light">ID: ${manager.id}</p>
  </div>
</div>`
}

function generateEngineerCard(engineer){
  console.log("GENERATE ENGINEER",engineer)
  return `<div class="col s12 m4 box">
  <div class="icon-block">
    <h2 class="light-blue-text"><i class="material-icons">engineering</i></h2>
    <h5>${engineer.name}</h5>
    <p class="light"> Role: ${engineer.getRole()}</p>
    <p class="light">Github: ${engineer.github}</p>
    <p class="light">ID: ${engineer.id}</p>        
  </div>
</div>`
}

function generateInternCard(intern){
  console.log("GENERATE INTERN",intern)
  return `    <div class="col s12 m4 box">
  <div class="icon-block">
    <h2 class="light-blue-text"><i class="material-icons">school</i></h2>
    <h5>${intern.name}</h5>
    <p class="light"> Role: ${intern.getRole()}</p>
    <p class="light">School: ${intern.school}</p>
    <p class="light">ID: ${intern.id}</p>       
  </div>
</div>`
}


function generatehtml(team) {
const cards = team.map((employee) => generateCard(employee));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>${team[0].teamName}</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>

  <nav class="light-blue lighten-1 center-align">
  <a id="logo-container" href="#">My Team</a>
</nav>

<div class="container">
<div class="section">
  <div class="row box-row">

    ${cards.join("")}

  </div>
</div>
<br><br>
</div>

<footer class="page-footer orange">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Company Bio</h5>
      <p class="grey-text text-lighten-4">${team[0].missionStatement}</p>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © Team Builder Technologies
  </div>
</div>
</footer>


<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="materialize-js/materialize.js"></script>
<script src="materialize-js/init.js"></script>
  </body>
</html>
`
}

module.exports = generatehtml


