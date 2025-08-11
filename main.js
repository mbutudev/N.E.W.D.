document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");

    const projetosFake = [
        { titulo: "Site de Receitas", descricao: "Um site com receitas e filtros.", link: "#" },
        { titulo: "App de Tarefas", descricao: "Gerenciador simples de tarefas.", link: "#" }
    ];

    projetosFake.forEach(proj => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <h2>${proj.titulo}</h2>
            <p>${proj.descricao}</p>
            <a href="${proj.link}">Ver projeto</a>
        `;
        projectsList.appendChild(card);
    });
});