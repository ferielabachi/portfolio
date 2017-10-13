import react from 'react';
import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

var FontAwesome = require('react-fontawesome');



class Contact extends Component
{
	constructor(props)
	{
		super(props);
    	this.state = {value: ''};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	 handleChange(event) 
	 {
    	this.setState({value: event.target.value});
  	 }

	 handleSubmit(event) 
	 {
    	alert('A name was submitted: ' + this.state.value);
    	event.preventDefault();
  	 }

	render() 
	{
		return (
			<div className="contact">
				<div className="container-fluid" id="contact">
				<div className="background"><h1>contact</h1> </div>

				<form className="col-md-offset-1 col-md-6 col-xs-offset-1 col-xs-10">

					<FormGroup controlId=" formControlsText">
			          <ControlLabel>Name</ControlLabel>
			          <FormControl type="text" placeholder="Enter text" />
			        </FormGroup>

			        <FormGroup controlId="formControlsText">
			          <ControlLabel>Email</ControlLabel>
			          <FormControl type="text" placeholder="Enter text" />
			        </FormGroup>
			        <FormGroup controlId="formControlsText">
			          <ControlLabel>Subject</ControlLabel>
			          <FormControl type="text" placeholder="Enter text" />
			        </FormGroup>

			         <FormGroup controlId="formControlsTextarea">
	      				<ControlLabel>Message</ControlLabel>
	      				<FormControl componentClass="textarea" placeholder="textarea" />
	   				 </FormGroup>

			        <Button type="submit">
			          Submit
			        </Button>
		     	 </form>

		     	 <div className="col-md-offset-1 col-md-3 col-xs-offset-1 col-xs-10 contact-details">
		     	 	<h2>Coordonnées</h2>
					I’m always looking for new challenges, and ways to explore new horizons.
					 So i’d love to hear from you and answer any questions you have.
					 Feel free to contact me for work, or just to get in touch by sending me an email.
					 <h4><span className="fa fa-envelope-o"></span> feriel.abachi@gmail.com</h4>
					 <h4><span className="fa fa-phone"></span> 00.00.00.00</h4>
		     	 </div>
	      		</div>
      		</div>
		);
	}
}

export default Contact;