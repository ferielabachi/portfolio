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
		document.location.reload(true);

	}

	initColorHome ()
	{
	
		document.location.reload(true);			
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
							<li><Link to="/portfolio" onClick={ this.initColorPage }>home</Link></li>
	        				<li><Link to="/portfolio/contact" onClick={ this.initColorPage } >contact</Link></li>
	        				<li><Link to="/portfolio/about" onClick={ this.initColorPage }>about</Link></li>
	        				<li><a href="/portfolio/#works" onClick={ this.initColorPage }>works</a></li>
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