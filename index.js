let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folderName) {
    let tableHTML = `<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Icon</th>
            </tr>
        </thead>
        <tbody>`;

    this.map(function(hero) {
        const imageName = hero.name.toLowerCase().replace(' ', '');
        const imagePath = `styles/images/${folderName}/${imageName}.svg`;
        tableHTML += `
        <tr>
            <td>${hero.name}</td>
            <td>
            <img src="${imagePath}">
            </td>
        </tr>`;
    });

    tableHTML += `
    </tbody>
    </table><br>`;

    document.write(tableHTML);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");