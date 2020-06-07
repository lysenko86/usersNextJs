import Head from '../components/Head'
import NavBar from '../components/NavBar'
import Users from '../components/Users'

const UsersPage = () => (<>
	<Head title="Users page" />
	<NavBar />
	<main className="container mt-5">
		<Users />
	</main>
</>)

export default UsersPage
