const samplehtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Team Profile</title>
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
        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5>Speeds up development</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">group</i></h2>
            <h5>User Experience Focused</h5>
            <p class="light">${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

        <div class="col s12 m4 box">
          <div class="icon-block">
            <h2 class="light-blue-text"><i class="material-icons">settings</i></h2>
            <h5>Easy to work with</h5>
            <p class="light">Name: ${teamName}</p>
          </div>
        </div>

      </div>
    </div>
    <br><br>
  </div>

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
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

module.exports = {samplehtml}