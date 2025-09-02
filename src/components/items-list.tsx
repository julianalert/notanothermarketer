import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'

export interface ListItem {
  id: string
  title: string
  description: string
  href: string
  date?: string
  author?: {
    name: string
    image?: string
  }
  badge?: string
}

interface ItemsListProps {
  items: ListItem[]
  emptyMessage?: string
}

export function ItemsList({ items, emptyMessage = "No items found." }: ItemsListProps) {
  if (items.length === 0) {
    return <p className="mt-6 text-gray-500">{emptyMessage}</p>
  }

  return (
    <div className="mt-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            {item.date && (
              <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                {item.date}
              </div>
            )}
            {item.author && (
              <div className="mt-2.5 flex items-center gap-3">
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
            {item.badge && (
              <div className="mt-2.5">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {item.badge}
                </span>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{item.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{item.description}</p>
            <div className="mt-4">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
}

export function Pagination({ currentPage, totalPages, baseUrl, className }: PaginationProps) {
  function url(page: number) {
    if (page === 1) return baseUrl
    return `${baseUrl}?page=${page}`
  }

  let hasPreviousPage = currentPage > 1
  let previousPageUrl = hasPreviousPage ? url(currentPage - 1) : undefined
  let hasNextPage = currentPage < totalPages
  let nextPageUrl = hasNextPage ? url(currentPage + 1) : undefined

  if (totalPages < 2) {
    return null
  }

  return (
    <div className={clsx("mt-6 flex items-center justify-between gap-2", className)}>
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === currentPage ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:data-hover:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}
