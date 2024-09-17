import React from 'react'
import { Filters } from './use-filter'
import { useRouter } from 'next/navigation'
import qs from 'qs'

export const useQueryFilters = (filters: Filters ) => {
	const router = useRouter()

	React.useEffect(() => {
		const params = {
			...filters.prices,
			pizzaTypes: Array.from(filters.pizzaTypes),
			sizes: Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients),
		}

		const query = qs.stringify(params, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}, [filters, router])
}