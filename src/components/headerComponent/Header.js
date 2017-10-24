import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import LogoImgWhite from '../../assets/images/logo/logo_white.png';

class Header extends Component 
{
	constructor(props)
	{
		super(props);
		this.displayMenu = this.displayMenu.bind(this);
		this.initPage = this.initPage.bind(this);

		this.state = {
			isMenuOpen: 'none',
			isDisplayIntro: 'none',
		}
	}

	initPage()
	{
		document.location.reload(true);
	}

	displayMenu ()
	{
		/*this.setState ({
			isMenuOpen: this.state.isMenuOpen == 'block' ? 'none' : 'block',
			isDisplayIntro: this.state.isDisplayIntro == 'block' ? 'none' : 'block',
		})*/

		//équivalent

		 var menu = document.getElementById("menu");
		 var intro = document.querySelector(".introduction");
		 var background = document.querySelector(".background");
		
		 if (menu.style.display === "block")
		 {
		 	menu.style.display = "none";
		 	if (intro)
		 		intro.style.display = "block";
		 	else if (background)
		 	{
		 		background.style.display = "block";
		 	}
		 }
		 else
		 {
		 	menu.style.display = "block";
		 	if (intro)
		 		intro.style.display = "none";
		 	else if (background)
		 	{
		 	    background.style.display = "block";
		 	}
		 }
	}

	render() 
	{
		return (
			<section className="container-fluid" id="home" /*onLoad={this.initPage}*/ >	
				<header className="row">
					<Glyphicon id="glyph" glyph="align-justify" onClick= {this.displayMenu} />
					<nav id="menu" style={{ display: this.state.isMenuOpen }}>
						<ul className="col-offset-md-10">
							<li><Link to="/portfolio"></Link></li>
							<li><Link to="/portfolio" onClick={ this.initPage }>home</Link></li>
	        				<li><Link to="/portfolio/contact" onClick={ this.initPage } >contact</Link></li>
	        				<li><Link to="/portfolio/about" onClick={ this.initPage }>about</Link></li>
	        				<li><a href="/portfolio/#works" onClick={ this.initPage }>works</a></li>
						</ul>
			 		</nav>
					<div className="logo">
						<img src= { LogoImgWhite } alt="logo" className="img-responsive col-offset-md-10" id="img_logo"/>
					</div>
			 		<div className="clear"></div>
	 			</header>
	 		</section>	
		);
	}
}

export default Header;