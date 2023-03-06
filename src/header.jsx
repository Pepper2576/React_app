const Header = ({ selctTeam, teamMemberCount }) => {
	return (
		<header>
			<h1> Team member allocation</h1>
			<h3>
				{selctTeam} has {teamMemberCount}
			</h3>
		</header>
	);
};

export default Header;
