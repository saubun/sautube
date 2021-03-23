import React, { useState } from 'react';

export default function Navbar() {
	const [toSearch, setToSearch] = useState('');

	const handleSearchChange = () => {};

	return (
		<div id="navbar">
			<div id="nav-left">
				<div id="nav-hamburger">
					<span>≡</span>
					<div id="spacer-sm"></div>
				</div>
				<div id="nav-youtube-logo"></div>
			</div>
			<div id="nav-middle">
				<input
					type="text"
					id="nav-searchbar"
					placeholder={toSearch !== '' ? toSearch : 'Search'}
					onChange={handleSearchChange}
				/>
				<button id="nav-search-btn">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
						</g>
					</svg>
				</button>
				<div id="nav-microphone"></div>
			</div>
			<div id="nav-right">
				<div id="nav-upload">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
						</g>
					</svg>
				</div>
				<div id="nav-waffle"></div>
				<div id="nav-bell"></div>
				<div id="nav-profile"></div>
			</div>
		</div>
	);
}
