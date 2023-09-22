import { FC } from 'react'

export type ChildrenType = string | undefined | null | JSX.Element | JSX.Element[]
export type FCWithChildren<Rest extends Record<string, unknown> = {}> = FC<
	{
		children: ChildrenType
	} & Rest
>
