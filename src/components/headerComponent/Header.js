import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';

class Header extends Component 
{
	constructor(props)
	{
		super(props);
		this.displayMenu = this.displayMenu.bind(this);
		this.initColorPage = this.initColorPage.bind(this);
		this.initColorHome = this.initColorHome.bind(this);
	}

	initColorPage ()
	{
		var glyph = document.getElementById("glyph");
		var logo = document.querySelector('#img_logo');
		var intro = document.querySelector(".introduction");

		glyph.style.color = "white";
			
		/*logo.style.src = "../../assets/images/logo/logo.png";
		var img = logo.setAttribute("src", '../../assets/images/logo/logo_white.png');
		console.log(logo.style.src);*/
	}

	initColorHome ()
	{
		var glyph = document.getElementById("glyph");
		var logo = document.querySelector('#img_logo');
		var intro = document.querySelector(".introduction");

		glyph.style.color = "black";			
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

	render(){
		return(
			<section className="container-fluid" id="home" /*onLoad={this.initPage}*/ >	
				<header className="row">
					<Glyphicon id="glyph" glyph="align-justify" onClick={this.displayMenu}/>
					<nav id="menu">
						<ul className="col-offset-md-10">
							
							<li><Link to="/" onClick={this.initColorHome}>home</Link></li>
	        				<li><Link to="/contact" onClick={this.initColorPage} >contact</Link></li>
	        				<li><Link to="/about" onClick={this.initColorPage}>about</Link></li>
	        				<li><a>works</a></li>
						</ul>
			 		</nav>

					<div className="logo">
						<img src= {require('../../assets/images/logo/logo.png')} alt="logo" className="col-offset-md-10" id="img_logo"/>
					</div>


			 		<div className="clear"></div>
	 			</header>
	 		</section>	
		);
	}
}

export default Header;