const createdHTML = (questions) => {

    const header = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css" />
        <title>green-team-generator</title>
    </head>
    <header>Green Team</header>
    <body>
        <main>`
    let sections = questions.map(employee=>{
        if(employee.getRole() == 'Manager'){
            return `<section>
            <div class="nameTitle">${employee.getName()}<span>Manager</span></div>
            <div>
                <ul>
                    <li>ID: ${employee.getId()}</li>
                    <li>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                    <li>Office number: ${employee.getOfficeNumber()}</li>
                </ul>
            </div>
        </section>`
        };
        if(employee.getRole() == 'Engineer'){
            return `<section>
            <div class="nameTitle">${employee.getName()}<span>Engineer</span></div>
            <div>
                <ul>
                    <li>ID: ${employee.getId()}</li>
                    <li>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                    <li>GitHub: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                </ul>
            </div>
        </section>`
        };
        if(employee.getRole() == 'Intern'){
            return `<section>
            <div class="nameTitle">${employee.getName()}<span>Intern</span></div>
            <div>
                <ul>
                    <li>ID: ${employee.getId()}</li>
                    <li>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                    <li>School: ${employee.getSchool()}</li>
                </ul>
            </div>
        </section>`
        };

    });

    const footer = `</main>
    </body>
</html>`


    return header + sections.join('') + footer;

}

module.exports = createdHTML