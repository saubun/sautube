import React from 'react';

export default function Navbar() {
	return (
		<div id="navbar">
			<div id="nav-left">
				<div id="nav-hamburger">≡</div>
				<div id="nav-youtube-logo"></div>
			</div>
			<div id="nav-middle">
				<div id="nav-search"></div>
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
