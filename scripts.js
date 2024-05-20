document.addEventListener("DOMContentLoaded", function() {
    const mangaList = document.getElementById("manga-list");

    // Exemple de données de mangas
    const mangas = [
        {
            title: "Manga test",
            cover: "mangas/manga1/chapitre1/page1.jpg",
            chapters: [
                { number: 1, link: "manga.html" }
            ]
        }
    ];

    mangas.forEach(manga => {
        const mangaItem = document.createElement("div");
        mangaItem.classList.add("manga-item");
        mangaItem.innerHTML = `
            <img src="${manga.cover}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            <div>
                ${manga.chapters.map(chapter => `<a href="${chapter.link}">Chapitre ${chapter.number}</a>`).join('')}
            </div>
        `;
        mangaList.appendChild(mangaItem);
    });
});