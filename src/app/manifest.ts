import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '럿지네 과일 장수 - 신선한 과일 직배송',
    short_name: '럿지네 과일',
    description: '농장에서 직접 가져온 신선한 과일을 당일 배송으로 제공하는 프리미엄 과일 전문점',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['food', 'shopping', 'business'],
    lang: 'ko',
    scope: '/',
  }
}
