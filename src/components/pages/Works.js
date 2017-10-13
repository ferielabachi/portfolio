import react from 'react';
import React, { Component } from 'react';
import ProgressBar from "bootstrap-progress-bar";


class Works extends Component
{
	render() {
		return (
			<div className="container-fluid works">
					<div className="background">
						<h1>Works</h1>
					</div>
					<section className="hotel row">
						<article className="col-md-offset-1 col-md-5">
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris.png')} />
							</div>
							<div className="col-md-12">
								<img src={require('../../assets/images/works/paris-2.png')} />
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
		);
	}
}

export default Works;
