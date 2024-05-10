import { Output, array, boolean, number, object, string } from 'valibot'

export const DrafProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProductSchema)

// Types
export type Product = Output<typeof ProductSchema>