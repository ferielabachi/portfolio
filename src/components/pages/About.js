import React, { Component } from 'react';
import ProgressBar from "bootstrap-progress-bar";

class About extends Component
{
	render() {
		return (
			<div className="container-fluid about" id="about" >
				<div className="background">
					<h1>à porpos</h1>
				</div>
				<div className="row">
					<section className="col-md-offset-2 col-md-5 col-xs-offset-1 col-xs-10  skills">
						<h2>Compétences</h2>
						<h4>HTML5</h4><ProgressBar width="70%"/>
						<h4>C</h4><ProgressBar width="60%"/>
						<h4>CSS3</h4><ProgressBar width="50%"/>
						<h4>BOOTSRAP</h4><ProgressBar width="50%"/>
						<h4>PHP</h4><ProgressBar width="30%"/>
						<h4>JAVASCRIPT</h4><ProgressBar width="30%"/>
					</section>
					<section className="col-md-offset-1 col-md-3 col-xs-offset-1 col-xs-10  tools">
						<h2>Outils</h2>
						<h3>Twig</h3>
						<h3>Symfony2</h3>
						<h3>React</h3>
						<h3>Git</h3>
						<h3>PhotoShop</h3>
						<h3>Responsive design</h3>
						<h3>Environnement mac</h3>
						<h3>Ligne de commande</h3>
					</section>
				</div>
				<div className="row">
					<section className="about-me">
						<h1>A propos de moi</h1>
						<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise 
						en page avant impression. la composition et la mise en page avant impression. 
						</p>
						<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise 
						en page avant impression. 
						</p>
						<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise 
						en page avant impression. 
						</p>
					</section>
				</div>

				<div className="office-photo"></div>


				<div className="row">
					<section className="education col-md-offset-1">
						<h1>MON PARCOURS</h1>
						<div className="esgi col-md-4">
							<h3>∞ 2016/2017 ∞</h3>
							<h4> Bac+3 esgi (2017)</h4>
							<p>• Évolution et maintenance des sites easylamps.eu et lampevideoprojecteur.fr</p>
							<p>• Intégration HTML et CSS à partir d’une maquette PhotoShop</p>
							<p>• Déboggage de code et Refonte des images du site sur PhotoShop</p>
							<p>Technologies utilisées : HTML, CSS, mySQL, PhotoShop, Git, Zen Cart</p>
						</div>
						<div className="tsr col-md-4">
							<h3>∞ 2016 ∞</h3>
							<h4> Stage Développeur Web, TSR Informatique</h4>
							<p>• Évolution et maintenance des sites easylamps.eu et lampevideoprojecteur.fr</p>
							<p>• Intégration HTML et CSS à partir d’une maquette PhotoShop</p>
							<p>• Déboggage de code et Refonte des images du site sur PhotoShop</p>
							<p>Technologies utilisées : HTML, CSS, mySQL, PhotoShop, Git, Zen Cart</p>
						</div>
						<div className="epitech col-md-4">
							<h3>∞ 2014-2016 ∞</h3>
							<h4>Bac+2 Epitech</h4>
							<p>Projet réalisé (programmation en c)</p>
							<p>re-coder printf</p>
							<p>• Faire un Mini-Shell</p>
							<p>re-coder ls</p>
							<p>créer des jeux exemple: space invaders</p>
							<p>Technologies utilisées : c</p>
							</div>
					</section>
				</div>

				<div className="office-photo-second"></div>
				
			</div>
		);
	}
}

export default About;
