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

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Biography {
  'full-name': string;
 ' alter-egos': string;
  aliases: string[];
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  'eye-color': string;
  'hair-color': string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  'group-affiliation': string;
  relatives: string;
}

export interface Image {
  url: string;
}

export interface Result {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export interface ISuperHeroGetByName {
  response: string;
  'results-for': string;
  results: Result[];
}

export interface IHeroDetailProps {
  hero: Result
}

export type heroPowerstats = 'combat' | 'durability' | 'intelligence' | 'power' | 'speed' | 'strength'