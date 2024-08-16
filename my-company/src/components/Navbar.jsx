import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<ul
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					listStyle: 'none',
				}}>
				<li>
					<Link to='/' style={{ color: '#fff' }}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' style={{ color: '#fff' }}>
						About
					</Link>
				</li>
				<li>
					<Link to='/services' style={{ color: '#fff' }}>
						Services
					</Link>
				</li>
				<li>
					<Link to='/contact' style={{ color: '#fff' }}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
