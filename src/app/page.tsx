"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ThemeToggle } from "@/components/theme-toggle"

const fruits = [
  {
    name: "프리미엄 딸기",
    price: "12,000원",
    originalPrice: "15,000원",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop&crop=center",
    badge: "베스트",
    rating: 4.9,
    reviews: 234
  },
  {
    name: "달콤한 수박",
    price: "8,000원",
    originalPrice: "10,000원", 
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop&crop=center",
    badge: "신상품",
    rating: 4.8,
    reviews: 156
  },
  {
    name: "유기농 사과",
    price: "6,000원",
    originalPrice: "7,500원",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&crop=center",
    badge: "유기농",
    rating: 4.7,
    reviews: 189
  },
  {
    name: "싱싱한 오렌지",
    price: "9,000원",
    originalPrice: "11,000원",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center",
    badge: "특가",
    rating: 4.6,
    reviews: 98
  }
]

const testimonials = [
  {
    name: "김민지",
    comment: "정말 신선하고 달콤해요! 배송도 빨라서 만족합니다 🍓",
    rating: 5,
    product: "프리미엄 딸기"
  },
  {
    name: "이준호",
    comment: "가족들이 모두 좋아해요. 품질이 정말 좋네요!",
    rating: 5,
    product: "유기농 사과"
  },
  {
    name: "박서연",
    comment: "아이들이 너무 맛있다고 해요. 재주문 할게요!",
    rating: 5,
    product: "달콤한 수박"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              럿지네 과일 장수
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">신선한 과일 전문점</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              장바구니
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=600&fit=crop&crop=center")'}}>
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>
        <div className="relative container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm bg-green-100 text-green-800 rounded-full">
            신선한 과일 직배송
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            매일 신선한 과일을
            <br />
            문앞까지 배달해드립니다
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            엄선된 농장에서 직접 가져온 신선한 과일을 합리적인 가격에 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              상품 보러가기
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              전화 주문
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">신선함 보장</h3>
              <p className="text-gray-600 dark:text-gray-400">매일 아침 농장에서 직접 가져온 신선한 과일</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">당일 배송</h3>
              <p className="text-gray-600 dark:text-gray-400">오전 주문시 당일 배송으로 빠르게 전달</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">품질 보장</h3>
              <p className="text-gray-600 dark:text-gray-400">만족하지 않으시면 100% 교환 및 환불</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">오늘의 신선한 과일</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              매일 엄선한 신선한 과일들을 만나보세요
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {fruits.map((fruit, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                    <div className="relative">
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      {fruit.badge === "베스트" && (
                        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                          베스트
                        </span>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg mb-2 text-gray-900 dark:text-white">{fruit.name}</CardTitle>
                      <div className="flex items-center mb-3">
                        <span className="text-sm text-gray-500">⭐ {fruit.rating}</span>
                        <span className="text-sm text-gray-400 ml-2">({fruit.reviews}개 리뷰)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xl font-bold text-gray-900 dark:text-white">{fruit.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {fruit.originalPrice}
                          </span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        장바구니 담기
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">고객 후기</h2>
            <p className="text-gray-600 dark:text-gray-400">실제 고객들의 후기를 확인해보세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.product} 구매</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">매장 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">매장 위치</h3>
              <p className="text-gray-600 dark:text-gray-400">서울시 강남구 과일로 123</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">전화 주문</h3>
              <p className="text-gray-600 dark:text-gray-400">02-1234-5678</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">영업 시간</h3>
              <p className="text-gray-600 dark:text-gray-400">매일 08:00 - 22:00</p>
            </div>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
            지금 주문하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">럿지네 과일 장수</h3>
            <p className="text-gray-400 mb-8">
              신선하고 건강한 과일을 합리적인 가격에 제공하는 과일 전문점입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-gray-400">전화: 02-1234-5678</p>
              </div>
              <div>
                <p className="text-gray-400">주소: 서울시 강남구 과일로 123</p>
              </div>
              <div>
                <p className="text-gray-400">영업시간: 매일 08:00 - 22:00</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">&copy; 2024 럿지네 과일 장수. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
