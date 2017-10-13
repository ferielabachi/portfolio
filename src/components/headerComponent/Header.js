import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import LogoImg from '../../assets/images/logo/logo.png';
import LogoImgWhite from '../../assets/images/logo/logo_white.png';


class Header extends Component 
{
	constructor(props)
	{
		super(props);
		this.displayMenu = this.displayMenu.bind(this);
		this.initColorPage = this.initColorPage.bind(this);
		this.initColorHome = this.initColorHome.bind(this);
	}

	initColorPage()
	{
		var glyph = document.getElementById("glyph");
		var logo = document.querySelector('#img_logo');
		var intro = document.querySelector(".introduction");

		glyph.style.color = "white";
		logo.setAttribute("src", LogoImgWhite);
		intro.style.color ="gainsboro";
	}

	initColorHome ()
	{
		var glyph = document.getElementById("glyph");
		var logo = document.querySelector('#img_logo');
		var intro = document.querySelector(".introduction");

		glyph.style.color = "black";
		logo.setAttribute("src", LogoImg);			
	}

	displayMenu ()
	{
		var menu = document.getElementById("menu");
		var intro = document.querySelector(".introduction");
		var background = document.querySelector(".background");
		
		if (menu.style.display == "block")
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

	render() {
		return(
			<section className="container-fluid" id="home" /*onLoad={this.initPage}*/ >	
				<header className="row">
					<Glyphicon id="glyph" glyph="align-justify" onClick={this.displayMenu}/>
					<nav id="menu">
						<ul className="col-offset-md-10">
							<li><Link to="/portfolio"></Link></li>
							<li><Link to="/home" onClick={this.initColorPage}>home</Link></li>
	        				<li><Link to="/contact" onClick={this.initColorPage} >contact</Link></li>
	        				<li><Link to="/about" onClick={this.initColorPage}>about</Link></li>
	        				<li><a href="/home/#works" onClick={this.initColorHome}>works</a></li>
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