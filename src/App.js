/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		console.log("Je suis prêt");
		//document.getElementById("app").innerHTML = "La page est chargée";
		var img, app;
		app = document.getElementById("app");
		img = document.createElement("img");
		app.appendChild(img);
		img.src = "http://clipart-library.com/images/dc9K6yyei.jpg";
		
		
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
