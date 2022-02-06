export const indexString = `<!DOCTYPE html><html lang="en">  <head>    <meta charset="UTF-8" />    <meta http-equiv="X-UA-Compatible" content="IE=edge" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <link
  href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
  rel="stylesheet"
/> <title>New Tab</title>    <link rel="preconnect" href="https://fonts.googleapis.com" />    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />    <link      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"      rel="stylesheet"    />    <style>:root { --primary: PRIMARYCOLOR; --text-light: TEXTLIGHT; --background: BACKGROUND; --background-light: BACKGROUNDLIGHT } *, *::before, *::after { margin: 0; padding: 0; box-sizing: inherit; } body { color: var(--text-light); font-family: "Inter", sans-serif; padding: 2rem 4rem; background-color: var(--background); box-sizing: border-box; } h1 { font-size: 4rem; font-weight: bold; } h1 > span { color: var(--primary); } main { margin-top: 4rem; display: flex; flex-wrap: wrap; justify-content: center; } .header { font-weight: 400; display: flex; justify-content: space-between; align-items: center; } #currentDate { color: var(--primary); font-size: 2rem; } #currentTime { font-size: 4rem; font-weight: 600; color: var(--primary) } @media screen and (max-width: 1250px) { h1 { display: none; } .header { flex-direction: column-reverse; } #currentTime { font-size: 3rem; margin-bottom: 1rem; } #fullDate { text-align: center; } } .card:link, .card:visited { color: white; text-decoration: none; margin: 1.2rem; padding: 4rem 8rem; background-color: var(--background-light); border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.05); display: flex; justify-content: center; align-items: center; overflow: hidden; cursor: pointer; position: relative; outline: none; transition: 0.1s; } .card:hover, .card:focus { border-color: var(--primary); color: var(--primary); transform: scale(1.02); } .card:focus > .card__name { bottom: 0; } .card:hover > .card__name { bottom: 0; } .card__icon { font-size: 3rem; padding: 1rem; /* aspect-ratio: 1 / 1; */ width: 88px; background-color: rgba(255, 255, 255, 0.05); border-radius: 50%; display: grid; place-items: center; } .card__name { font-weight: 400; transform: translate(-50%, -50%); position: absolute; bottom: -25%; left: 50%; transition: 0.1s; } #cardContainer { margin-top: 17vh; } .date { display: flex; flex-direction: column; align-items: end; }</style>  </head>  <body>    <header class="header">      <div>        <h1>Hello there, <span id="userName">USERNAME</span>.</h1>      </div>      <div class="date">
          <p id="currentTime">00:00 PM</p>
          <p id="currentDate">Date</p>
        </div>    </header>    <main id="cardContainer"></main>    <script src="./app.js"></script>  </body></html>`;
