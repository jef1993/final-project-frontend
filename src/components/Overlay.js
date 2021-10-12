import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { toggleClass, toggleClassAll } from '../functions';
import { logIn } from '../utils';

export const Overlay = ({ setCurUser }) => {
	//   const history = useHistory();
	//   const homeBtn = (path) => history.push(`${path}`);
	const [usernameChange, setUsernameChange] = useState('');
	const [passwordChange, setPasswordChange] = useState('');
	const [emailChange, setEmailChange] = useState('');

<<<<<<< HEAD
	const loginHandler = (e) => {
		e.preventDefault();
		logIn(emailChange, passwordChange, setCurUser);
	};
=======
  return (
    <div className="overlay hidden">
      <div
        className="overlay__bg"
        onClick={() => {
          toggleClass("overlay", "hidden");
        }}
      ></div>
      <div className="overlay__container">
        <div className="overlay__title">
          <h2 className="logo overlay__icon">
            MOVILIST<span>Account</span>
          </h2>
        </div>
        <div className="overlay__content overlay__signin">
          <form className="overlay__form" onSubmit={props.onSignIn}>
            <div className="overlay__inputs">
              <input
                className="overlay__input"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  props.emailChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  props.passwordChange(e.target.value);
                }}
              ></input>
            </div>
>>>>>>> dd741d1a3473c1ee0635700a638dcec9b8307a1a

	const registerHandler = (e) => {
    e.preventDefault();

<<<<<<< HEAD
  };
=======
          <p className="overlay__link">
            New user?{" "}
            <span
              onClick={() => {
                toggleClassAll("overlay__content", "swapToRight");
              }}
            >
              Create an account
            </span>
          </p>
        </div>
        <div className="overlay__content overlay__signup">
          <form className="overlay__form" onSubmit={props.onRegister}>
            <div className="overlay__inputs">
              <input
                className="overlay__input"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  props.newUsernameChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="email"
                placeholder="email"
                onChange={(e) => {
                  props.newEmailChange(e.target.value);
                }}
              ></input>
              <input
                className="overlay__input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  props.newPasswordChange(e.target.value);
                }}
              ></input>
            </div>
>>>>>>> dd741d1a3473c1ee0635700a638dcec9b8307a1a

	return (
		<div className='overlay hidden'>
			<div
				className='overlay__bg'
				onClick={() => {
					toggleClass('overlay', 'hidden');
				}}
			></div>
			<div className='overlay__container'>
				<div className='overlay__title'>
					<h2 className='logo overlay__icon'>
						MOVILIST<span>Account</span>
					</h2>
				</div>
				<div className='overlay__content overlay__signin'>
					<form className='overlay__form' onSubmit={loginHandler}>
						<div className='overlay__inputs'>
							<input
								className='overlay__input'
								type='text'
								placeholder='Email'
								onChange={(e) => {
									setEmailChange(e.target.value);
								}}
							></input>
							<input
								className='overlay__input'
								type='password'
								placeholder='Password'
								onChange={(e) => {
									setPasswordChange(e.target.value);
								}}
							></input>
						</div>

						<button className='overlay__btn'>Sign In</button>
					</form>

					<p className='overlay__link'>
						New user?{' '}
						<span
							onClick={() => {
								toggleClassAll('overlay__content', 'swapToRight');
							}}
						>
							Create an account
						</span>
					</p>
				</div>
				<div className='overlay__content overlay__signup'>
					<form className='overlay__form' onSubmit={registerHandler}>
						<div className='overlay__inputs'>
							<input
								className='overlay__input'
								type='text'
								placeholder='Username'
								onChange={(e) => {
									setUsernameChange(e.target.value);
								}}
							></input>
							<input
								className='overlay__input'
								type='email'
								placeholder='email'
								onChange={(e) => {
									setEmailChange(e.target.value);
								}}
							></input>
							<input
								className='overlay__input'
								type='password'
								placeholder='Password'
								onChange={(e) => {
									setPasswordChange(e.target.value);
								}}
							></input>
						</div>

						<button className='overlay__btn'>Register</button>
					</form>

					<p className='overlay__link'>
						Have a account?{' '}
						<span
							onClick={() => {
								toggleClassAll('overlay__content', 'swapToRight');
							}}
						>
							Sign In
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
