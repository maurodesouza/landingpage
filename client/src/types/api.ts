export type ButtonProps = {
  label: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string

  button: ButtonProps
  image: LogoProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: LogoProps
}

type TechIconsProps = {
  title: string
  icon: LogoProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

type ConceptsProps = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptsProps[]
}

type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: string
  numberInstallments: string
  priceInstallment: string
  benefits: string
  button: ButtonProps
}

type SocialLinkProps = {
  title: string
  url: string
}

export type AuthorProps = {
  photo: LogoProps
  name: string
  role: string
  description: string
  socialLinks: SocialLinkProps[]
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorProps[]
}

type ReviewProps = {
  name: string
  text: string
  photo: LogoProps
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewProps[]
}

type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: QuestionProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
