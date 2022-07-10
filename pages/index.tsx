import type { NextPage } from 'next'
import { Button } from '../components/Button'
import { useLiff } from '../hooks/useLiff'
import { _ } from '../utils/_.utils'

const Home: NextPage = () => {
	const { profile, logout, login, isLoading } = useLiff()

	const Login = () => {
		const handleLogin = () => {
			login()
		}

		return (
			<>
				{_.isEmpty(profile) && (
					<Button onClick={handleLogin}>Login with LINE</Button>
				)}
			</>
		)
	}

	const Detail = () => {
		const handleLogout = () => {
			logout()
		}
		return (
			<>
				{_.isNotEmpty(profile) && (
					<div className="flex flex-col gap-4">
						<div>
							<p>{profile.userId}</p>
							<p>{profile.displayName}</p>
						</div>
						<Button color="white" onClick={handleLogout}>
							Logout
						</Button>
					</div>
				)}
			</>
		)
	}

	return (
		<>
			<div className="flex justify-center py-4 max-w-xl mx-auto">
				{isLoading ? (
					<div>loading...</div>
				) : (
					<>
						<Login />
						<Detail />
					</>
				)}
			</div>
		</>
	)
}

export default Home
