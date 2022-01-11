import React from 'react'

export interface IContentProps {
  noBgColor: boolean
  children: React.ReactNode
}

export interface IHeroProps {
  id: string
  picture: string
  name: string
  fullName: string
  handleSelectHero: (id: string) => void
  handleCompareHero: (id: string) => void
}

export interface IBreadcrumbsProps {
  crumbs: string[]
}