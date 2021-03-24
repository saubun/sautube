import React, { useState } from 'react';

export default function Navbar() {
	const [toSearch, setToSearch] = useState('');

	// Get string to search
	const handleSearchChange = (e: any) => {
		setToSearch(e.target.value);
	};

	return (
		<div id="navbar">
			<div id="nav-left">
				<div id="nav-hamburger">
					<span>≡</span>
					<div id="spacer-sm"></div>
				</div>
				<div id="nav-youtube-logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
						<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
					</svg>
					<span>SauTube</span>
				</div>
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
				<div id="nav-microphone">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
						</g>
					</svg>
				</div>
			</div>
			<div id="nav-right">
				<div id="nav-upload">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
						</g>
					</svg>
				</div>
				<div id="nav-waffle">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
						</g>
					</svg>
				</div>
				<div id="nav-bell">
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
						<g>
							<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
						</g>
					</svg>
				</div>
				<div id="nav-profile">
					<div id="pfp"></div>
				</div>
			</div>
		</div>
	);
}
