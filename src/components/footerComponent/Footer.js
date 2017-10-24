import React, { Component } from 'react';


class Footer extends Component {
	render() {
		return(
			<footer className="row">
				<section className="col-md-offset-5 col-sm-offset-4 col-xs-offset-3">
					<span className="fa fa-facebook"></span>
					<span className="fa fa-twitter"></span>
					<span className="fa fa-linkedin"></span>
					<span className="fa fa-instagram"></span>
				</section>
 				<small>@ Made By Feriel Abachi</small>
 			</footer>
		);
	}

}

export default Footer;