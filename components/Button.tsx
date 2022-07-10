interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	color,
	...rest
}) => {
	const colors = {
		default:
			'border-transparent text-white bg-indigo-600 hover:bg-indigo-700',

		white: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
	}[color || 'default']

	return (
		<>
			<button
				{...rest}
				type="button"
				className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${colors} ${className}`}
			>
				{children}
			</button>
		</>
	)
}
