import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { FeaturedItems } from '@/components/featured-items'
import { GradientBackground } from '@/components/gradient'
import { ItemsList, Pagination } from '@/components/items-list'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { allServices, featuredServices, paginateItems } from '@/data/sample-content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Not Another Marketer',
  description:
    'Discover our comprehensive marketing services designed to help your business grow and succeed in the digital landscape.',
}

const servicesPerPage = 5

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 1
        ? parseInt(params.page)
        : notFound()
      : 1

  // Get paginated services (excluding featured ones for the main list)
  const nonFeaturedServices = allServices.filter(
    service => !featuredServices.some(featured => featured.id === service.id)
  )
  
  const { items: paginatedServices, totalPages } = paginateItems(
    page === 1 ? nonFeaturedServices : allServices,
    page === 1 ? page : page - 1, // Adjust for featured section on first page
    servicesPerPage
  )

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">For Head of Growth, Busy Founders and CMOs</Subheading>
        <Heading as="h1" className="mt-2">
        Stop Paying for Overpriced SaaS.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
            Pre-made, ready-to-use and fully customizable vibe marketing templates for your business.
        </Lead>
      </Container>
      
      {/* Show featured services only on first page */}
      {page === 1 && (
        <div id="templates">
          <FeaturedItems 
            items={featuredServices} 
            title="Featured Services" 
          />
        </div>
      )}
      
      <Container className="mt-16 pb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">
            {page === 1 ? 'All Services' : `Services - Page ${page}`}
          </h2>
        </div>
        
        <ItemsList 
          items={paginatedServices}
          emptyMessage="No services found."
        />
        
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          baseUrl="/"
        />
      </Container>
      
      <Footer />
    </main>
  )
}
