import React, {Component} from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import ProgressBar from 'bootstrap-progress-bar';


class Home extends Component
{
	render(){
		return(
			<div className="container-fluid" id="home">	
				<section className="wrapper-home row">
					<article className="col-md-offset-4 introduction">
						<h2>welcom to my portfolio</h2>
						<br/><br/>
						<h1>i'am web developer</h1>
						<h2>Based in paris</h2>
					</article>
					<img src={require('../../assets/images/laptop.jpg')} />
				</section>
				<div className="container-fluid works">
					<section className="hotel row">
						<article className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/rooms.png')} />
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/home.png')} />
							</div>
						</article>
						<article className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/reception.png')} />
							</div>
							<article className="desc-hotel col-md-12">
								<h1> portfolio</h1>
								<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p> 
							</article>
						</article>
					</section>

					<section className="parisienne row">
						<div className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
							<img src={require('../../assets/images/works/add-article.png')} />
							</div>
							<div className="col-md-12">
							<img src={require('../../assets/images/works/blog.png')} />
							</div>
						</div>
						<div className="col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/pro.png')} />
							</div>
							<div className="desc-parisienne col-offset-md-1 col-md-10">
								<h1>Huitieme parisienne</h1>
								<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser.</p> 
							</div>
						</div>
					</section>

					<section className="portfolio row">
						<div className="col-md-offset-1 col-md-6">
							<img src={require('../../assets/images/works/portfolio.png')} />
						</div>
						<article className="desc-portfolio col-md-4">
							<h1> portfolio</h1>
							Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
						</article>
					</section>

				</div>
			</div>

		);
	}
}

export default Home;