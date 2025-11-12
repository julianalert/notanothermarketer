import type { FeaturedItem } from '@/components/featured-items'
import type { ListItem } from '@/components/items-list'

// Sample data - replace with your actual content
export const featuredServices: FeaturedItem[] = [
  {
    id: '1',
    title: 'Lead Gen Automation',
    description: 'Comprehensive marketing strategy development tailored to your business goals and target audience.',
    image: {
      src: '/screenshots/engagement.png',
      alt: 'Marketing Strategy Consulting'
    },
    href: '/services/marketing-strategy',
    badge: 'Popular',
    author: {
      name: 'Marketing Team',
      image: '/team/emily-selman.jpg'
    }
  },
  {
    id: '2',
    title: 'SEO & Content Growth',
    description: 'End-to-end content creation, from blog posts to social media campaigns that engage your audience.',
    image: {
      src: '/screenshots/profile.png',
      alt: 'Content Creation'
    },
    href: '/services/content-creation',
    author: {
      name: 'Content Team',
      image: '/team/whitney-francis.jpg'
    }
  },
  {
    id: '3',
    title: 'Conversion Optimization Toolkit',
    description: 'Data-driven insights and reporting to measure and optimize your marketing performance.',
    image: {
      src: '/screenshots/competitors.png',
      alt: 'Performance Analytics'
    },
    href: '/services/analytics',
    badge: 'New',
    author: {
      name: 'Analytics Team',
      image: '/team/michael-foster.jpg'
    }
  }
]

export const allServices: ListItem[] = [
  ...featuredServices.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    href: item.href,
    badge: item.badge,
    author: item.author,
    date: 'Available Now'
  })),
  {
    id: '4',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings with our comprehensive SEO strategies and technical optimizations.',
    href: '/services/seo',
    date: 'Available Now',
    author: {
      name: 'SEO Team',
      image: '/team/leonard-krasner.jpg'
    }
  },
  {
    id: '5',
    title: 'Social Media Management',
    description: 'Complete social media management including content planning, posting, and community engagement.',
    href: '/services/social-media',
    date: 'Available Now',
    badge: 'Growing',
    author: {
      name: 'Social Team',
      image: '/team/courtney-henry.jpg'
    }
  },
  {
    id: '6',
    title: 'Email Marketing Campaigns',
    description: 'Design and execute email marketing campaigns that convert leads into loyal customers.',
    href: '/services/email-marketing',
    date: 'Available Now',
    author: {
      name: 'Email Team',
      image: '/team/dries-vincent.jpg'
    }
  },
  {
    id: '7',
    title: 'Brand Identity Design',
    description: 'Create a compelling brand identity that resonates with your target audience and stands out.',
    href: '/services/branding',
    date: 'Available Now',
    author: {
      name: 'Design Team',
      image: '/team/nolan-sheffield.jpg'
    }
  },
  {
    id: '8',
    title: 'Conversion Rate Optimization',
    description: 'Optimize your website and landing pages to increase conversions and maximize ROI.',
    href: '/services/cro',
    date: 'Available Now',
    badge: 'Results-Driven',
    author: {
      name: 'CRO Team',
      image: '/team/marcus-eldridge.jpg'
    }
  }
]

// Helper function to paginate items
export function paginateItems<T>(items: T[], page: number, itemsPerPage: number = 5) {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedItems = items.slice(startIndex, endIndex)
  const totalPages = Math.ceil(items.length / itemsPerPage)
  
  return {
    items: paginatedItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1
  }
}
