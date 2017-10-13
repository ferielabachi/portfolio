import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import ProgressBar from 'bootstrap-progress-bar';


class Home extends Component
{
	render(){
		return (
			<div className="container-fluid" id="home">	
				<section className="wrapper-home row">
					<article className="col-md-offset-3 col-sm-offset-3 col-xs-offset-3 col-xs-6 introduction">
						<h1>Bienvenue</h1>
						<br/>
						<h2>Je m'appelle Feriel abachi</h2>
						<h1>Je suis <span> Développeur Web </span></h1>
					</article>
					<img src={require('../../assets/images/po.jpg')} />
				</section>
				<article className="container-fluid works" id="works">
					<h1>projets réalisé</h1>
					<section className="hotel row">
						<article className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/rooms.png')} />
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/home.png')} />
							</div>
						</article>
						<div className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/reception.png')} />
							</div>
							<article className="desc-hotel col-md-12">
								<h2>Hotel</h2>
								<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p> 
							</article>
						</div>
					</section>

					<section className="parisienne row">
						<div className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris.png')} />
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/add-article.png')} />
							</div>
						</div>
						<div className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris-2.png')} />
							</div>
						</div>
						<section className="desc-parisienne col-md-offset-1 col-md-10">
							<h2>Huitieme parisienne</h2>
							<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser.</p> 
						</section>
					</section>

					<section className="portfolio row">
						<div className="col-md-offset-1 col-md-6">
							<img src={require('../../assets/images/works/por.png')} />
						</div>
						<article className="desc-portfolio col-md-4">
							<h2> portfolio</h2>
							 texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
						</article>
					</section>
				</article>
			</div>

		);
	}
}

export default Home;