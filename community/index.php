<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Community Calcio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Statistiche Giocatori</h1>

    <!-- Bottoni -->
    <div class="bottoni">
      <button onclick="caricaCSV('seriea.csv')" class="btn">Serie A</button>
      <button onclick="caricaCSV('premier.csv')" class="btn">Premier League</button>
      <button onclick="caricaCSV('laliga.csv')" class="btn">La Liga</button>
    </div>

    <!-- Loader -->
    <div id="loader" class="loader" style="display:none;"></div>

    <!-- Tabella -->
    <table>
      <thead>
        <tr id="intestazione"></tr>
      </thead>
      <tbody id="contenuto"></tbody>
    </table>
  </div>

  <script src="code.js"></script>
</body>
</html>
