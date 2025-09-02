import { Container } from '@/components/container'
import { Link } from '@/components/link'

export interface FeaturedItem {
  id: string
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  href: string
  date?: string
  author?: {
    name: string
    image?: string
  }
  badge?: string
}

interface FeaturedItemsProps {
  items: FeaturedItem[]
  title?: string
  className?: string
}

export function FeaturedItems({ 
  items, 
  title = "Featured", 
  className = "mt-16 bg-linear-to-t from-gray-100 pb-14" 
}: FeaturedItemsProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {item.image && (
                <img
                  alt={item.image.alt}
                  src={item.image.src}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                {item.date && (
                  <div className="text-sm/5 text-gray-700">
                    {item.date}
                  </div>
                )}
                {item.badge && (
                  <div className="mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {item.badge}
                    </span>
                  </div>
                )}
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={item.href}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {item.description}
                </div>
                {item.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {item.author.image && (
                      <img
                        alt=""
                        src={item.author.image}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {item.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
