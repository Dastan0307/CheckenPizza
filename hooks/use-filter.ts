import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import { useSet } from 'react-use'

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients?: string
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrice: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (value: string) => void
	setSizes: (value: string) => void
	setIngredients: (value: string) => void
	setSelectedIngredient: (value: string) => void
}

export const useFilters = () => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>
	/*Фильтр ингредиентов*/
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(','))
	)

	/*Фильтр размеров*/
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)

	/*Фильтр пиццы*/
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)

	/*Фильтр стоимости*/
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({
			...prev,
			[name]: value,
		}))
	}

	return {
		sizes,
		pizzaTypes,
		prices,
		selectedIngredients,
		setPrices: updatePrice,
		setPizzaTypes: togglePizzaTypes,
		setSizes: toggleSizes,
		setSelectedIngredients: toggleIngredients,
	}
}
