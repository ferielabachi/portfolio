import React, { Component } from 'react';
import {  Glyphicon } from 'react-bootstrap';

var FontAwesome = require('react-fontawesome');

/*import 'font-awesome/css/font-awesome.css';
import '../../node_module/font-awesome/css/font-awesome.css';*/


class Footer extends Component {

	render() {
		return(

			<footer className="row">
				<section className="col-md-offset-5 col-sm-offset-5">
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