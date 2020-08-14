<!DOCTYPE html>
<html lang="">
<head>
  <meta charset="">
  <meta name="viewport" content="width=, initial-scale=">
  <title></title>
  <style>
    body {
      background: white;
      margin: 0;
    }
    :root {
      --nexa: 'NexaRegular', sans-serif;
      --serif: Georgia, serif;
      --white: lightgrey;
      --green: #74bf50;
    }
    nav ul {
      background: grey;
      padding: 5px;
      width: 100vh;
    }
    nav ul.navigation-bar li {
      color: var(--white);
      list-style-type: none;
      display: inline;
      padding: 10px;
      font-family: var(--nexa);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      transition: all linear .15s;
    }
    nav ul.navigation-bar li:hover {
      color: var(--green)
    }
  </style>
</head>
<body>
  <nav>
    <ul class="navigation-bar">
      <span>Errorforest</span> <!-- Where is the image source of Errorforest logo -->
      <li>Home</li>
      <li>Editor</li>
    </ul>
  </nav>
</body>
</html>
