import React from 'react';

export default function Navbar() {
	return (
		<div className="sidebar">
			<nav className="sidebar-nav">
				<a className="nav-home" href="/">
					<span>Home</span>
				</a>
				<a className="nav-explore" href="/">
					<span>Explore</span>
				</a>
				<a className="nav-ubscriptions" href="/">
					<span>Subscriptions</span>
				</a>
				<div className="fake-hr" />
				<a className="nav-library" href="/">
					<span>Library</span>
				</a>
				<a className="nav-history" href="/">
					<span>History</span>
				</a>
				<a className="nav-your-videos" href="/">
					<span>Your Videos</span>
				</a>
				<a className="nav-liked-videos" href="/">
					<span>Liked Videos</span>
				</a>
				<a className="nav-show-more" href="/">
					<span>Show More</span>
				</a>
				<div className="fake-hr" />
				<h4 className="subscriptions-title">SUBSCRIPTIONS</h4>
			</nav>
		</div>
	);
}
