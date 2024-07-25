import { cn } from '@/lib/utils'
import React from 'react'
import { SortPopup, Categories } from '.'
import { Container } from './container'

interface Props {
	className: string
}

const TopBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 x-10',
				className
			)}
		>
			<Container className='flex items-center justify-between'>
				<Categories />
				<SortPopup />
			</Container>
		</div>
	)
}

export default TopBar