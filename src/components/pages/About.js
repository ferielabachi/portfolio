import react from 'react';
import React, { Component } from 'react';
import ProgressBar from "bootstrap-progress-bar";


class About extends Component
{
	constructor(props)
	{
		super(props);	
	}

	render() {
		return (
			<div className="container-fluid about" id="about" >
				<div className="background">
					<h1>About</h1>
				</div>
				<div className="row">
					<section className="col-md-offset-2 col-md-5 skills">
						<h2>skills</h2>
						<h4>HTML5</h4><ProgressBar width="50%"/>
						<h4>CSS3</h4><ProgressBar width="50%"/>
						<h4>C</h4><ProgressBar width="30%"/>
						<h4>PHP</h4><ProgressBar width="30%"/>
						<h4>JAVASCRIPT</h4><ProgressBar width="30%"/>
					</section>
					<section className="col-md-offset-1 col-md-3 tools">
						<h2>Tools</h2>
						<h3>Boostrap</h3>
						<h3>Symfony2</h3>
						<h3>React</h3>
						<h3>Git</h3>
						<h3>Responsive design</h3>
						<h3>Mac Enviromenet</h3>
						<h3>commande line bash</h3>
					</section>
				</div>
				

				<div className="row">
					<section className="about-me">
						<h1>A little About me</h1>
						<p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise 
						en page avant impression. 
						</p>
					</section>
				</div>

				<div className="office-photo"></div>

			</div>
		);
	}
}

export default About;
