import React, {Component} from 'react';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//import ProgressBar from 'bootstrap-progress-bar';


class Home extends Component
{
	render(){
		return (
			<div className="container-fluid" id="home">	
				<section className="wrapper-home row">
					<article className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-xs-9 introduction">
						<h1>Bienvenue</h1>
						<br/>
						<h2>Je m'appelle Feriel abachi</h2>
						<h1>Je suis <span> Développeur Web </span></h1>
					</article>
					<img src={require('../../assets/images/po.jpg')} alt="logo" />
				</section>
				<section className="container-fluid works" id="works">
					<h1>projets réalisé</h1>
					<section className="hotel row">
						<article className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/rooms.png')} alt="rooms"/>
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/home.png')} alt="home"/>
							</div>
						</article>
						<div className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/reception.png')} alt="reception"/>
							</div>
							<article className="desc-hotel col-md-12">
								<h2>Hotel Le jardin</h2>
								<h3>Développeur Front-end, Hôtel Le Jardin</h3>
								<p>• Design du site @hotel-le-jardin</p>
								<p>• Integration html css, En ayant twig comme template</p> 
								<p>Technologies utilisées : HTML, CSS, Twig, Symfony2, Git</p>
							</article>
						</div>
					</section>

					<section className="parisienne row">
						<div className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris.png')} alt="paris"/>
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/add-article.png')} alt="add-article"/>
							</div>
						</div>
						<div className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris-2.png')} alt="paris-2" />
							</div>
						</div>
						<section className="desc-parisienne col-md-offset-1 col-md-10">
							<h2>Huitieme parisienne</h2>
							<h3>Développeur Web Back / Front-end, Restaurant Le Jardin</h3>
							      <p>• Mise en place d’un back-office pour add un artcile, en sélectionnant sa catégorie, une photo, contenue et titre</p>
								  <p>• Mise en place d'une base de donnée relationnelle, ainsi la gestion de la base de données</p>
								  <p>• Design du site, Intégration HTML et CSS à partir d’une maquette</p>
								  <p>Technologies utilisées : HTML, CSS, PHP, mySQL, Symfony2, Git</p> 
						</section>
					</section>

					<section className="portfolio row">
						<div className="col-md-offset-1 col-md-6">
							<img src={require('../../assets/images/works/portfolio.png')} alt="portfolio" />
						</div>
						<article className="desc-portfolio col-md-4">
							<h2> portfolio</h2>
							<h3>Développeur Web  portfolio </h3>
							  <p>• Mise en place d'un environnement de travail React, utilsation de Gulp comme automatiseur de tâches</p>
							  <p>• Design du site, Intégration en HTML et CSS, utilisation du préprocesseur Sass</p>
							  <p>Technologies utilisées : HTML, CSS, Javascript, React, Gulp, Git, Sass</p>
						</article>
					</section>
				</section>
			</div>

		);
	}
}

export default Home;