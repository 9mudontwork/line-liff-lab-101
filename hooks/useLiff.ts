import { Liff } from '@line/liff/dist/lib'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { _ } from '../utils/_.utils'
import { useOnMount } from './useOnMount'
interface IProfile {
	userId?: string
	displayName?: string
	pictureUrl?: string
}

const LIFF_ID = process.env.NEXT_PUBLIC_LIFF_ID || ''

export const useLiff = () => {
	const [liff, setLiff] = useState<Liff>({} as Liff)
	const [profile, setProfile] = useState<IProfile>({})
	const [isLoading, setLoading] = useState(true)

	useOnMount(() => {
		;(async () => {
			setLoading(true)
			const liff = (await import('@line/liff')).default

			try {
				await liff.init({ liffId: LIFF_ID })

				setLiff(liff)

				if (liff.isLoggedIn()) {
					const profile = await liff.getProfile()
					setProfile(profile)
				}
				setLoading(false)
			} catch (error: any) {
				setLoading(false)
				console.log('e', error.message)
			}
		})()
	})

	const login = () => {
		if (!liff.isLoggedIn()) {
			liff.login()
		}
	}

	const clearProfile = () => {
		setProfile({})
	}

	const logout = async () => {
		liff.logout()
		clearProfile()
	}

	return {
		liff,
		profile,
		isLoading,
		login,
		logout,
		setProfile,
	}
}
