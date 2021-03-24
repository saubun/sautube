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
				<div className="nav-channels">
					<a href="/" className="channel1">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel2">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel3">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel4">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel5">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel6">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel7">
						<div id="pfp"></div>
						<span>channel</span>
					</a>
					<a href="/" className="channel8">
						<span>Show 46 More</span>
					</a>
				</div>
				<div className="fake-hr" />
				<h4 className="nav-more-from-youtube">MORE FROM YOUTUBE</h4>
			</nav>
		</div>
	);
}
