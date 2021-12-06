const generateCards = teamArr => {
    teamCards = [];

    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].officeNumber) {
            teamCards.push(
               `<div class="card column is-4">
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-4">${teamArr[i].name}</p>
                            <p class="subtitle is-4">Manager</p>
                        </div>
                    </div>
                    <div class="content">
                        <p>ID: ${teamArr[i].id}</p>
                        <p>Email: ${teamArr[i].email}</p>
                        <p>Office Number: ${teamArr[i].officeNumber}</p>
                    </div>
                </div>`
            )
        } else if (teamArr[i].github) {
            teamCards.push(
                `<div class="card column is-4">
                     <div class="card-content">
                         <div class="media-content">
                             <p class="title is-4">${teamArr[i].name}</p>
                             <p class="subtitle is-4">Engineer</p>
                         </div>
                     </div>
                     <div class="content">
                         <p>ID: ${teamArr[i].id}</p>
                         <p>Email: ${teamArr[i].email}</p>
                         <a href="https://github.com/${teamArr[i].github}/">github: ${teamArr[i].github}</a>
                     </div>
                </div>`
            )
        } else {
            teamCards.push(
                `<div class="card column is-4">
                     <div class="card-content">
                         <div class="media-content">
                             <p class="title is-4">${teamArr[i].name}</p>
                             <p class="subtitle is-4">Intern</p>
                         </div>
                     </div>
                     <div class="content">
                         <p>ID: ${teamArr[i].id}</p>
                         <p>Email: ${teamArr[i].email}</p>
                         <p>School: ${teamArr[i].school}</p>
                     </div>
                 </div>`
             )
        }
    }

    return teamCards;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>My Team</title>
    </head>
    <body>
        <header class= "header">
            <h1>
                My Team
            </h1>
        </header>
        <main>
            ${generateCards(templateData)}
        </main>
    </body>
    </html>
    
    `;
};