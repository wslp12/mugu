import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-8 z-50 text-white mix-blend-difference">
        <Link href="/" className="text-2xl font-bold tracking-widest uppercase">MUGU</Link>
        <div className="hidden md:flex gap-8 text-sm tracking-wider uppercase font-medium">
          <a href="#brand" className="hover:opacity-70 transition-opacity">Brand</a>
          <a href="#product" className="hover:opacity-70 transition-opacity">Product</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white text-center overflow-hidden">
        {/* Using a process image as hero background since hero wasn't specifically provided */}
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/mobile/process01.png" 
            alt="Water drop background" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6 mt-20">
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-widest">MUGU</h1>
          <p className="text-2xl md:text-3xl font-serif font-medium tracking-tight mt-4">가장 맑은 지점으로 향합니다</p>
          <p className="text-sm md:text-base font-light tracking-wide text-gray-300">The most clear point where alcohol can reach.</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="brand" className="w-full bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col items-start gap-8 w-full">
            <span className="text-sm tracking-widest text-gray-500 uppercase">Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">가장 맑은 지점의 술, 무구</h2>
            <div className="text-gray-700 leading-relaxed space-y-6 mt-4 text-sm md:text-base">
              <p>쌀을 씻는 순간부터 발효와 숙성까지,<br/>그날의 감각이 아닌 같은 판단으로 과정을 반복합니다.</p>
              <p>직접 띄운 누룩으로 술의 방향을 설계하고,<br/>여과 없이도 맑게 완성될 때까지 기다립니다.</p>
              <p>그래서 무구의 술은 손으로 빚지만<br/>맛은 흔들리지 않습니다.</p>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[500px] md:h-[700px]">
            <Image 
              src="/pc/philosophy_bg.png" 
              alt="Philosophy Bottle" 
              fill 
              className="object-cover md:object-contain" 
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="w-full bg-[#111] text-white py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-16 flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-sm tracking-widest text-gray-400 uppercase">Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium">무구에 이르는 과정</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 h-auto md:h-[700px]">
            {[
              { id: '01', title: '시작', sub: 'Diffusion', img: '/mobile/process01.png' },
              { id: '02', title: '퍼짐', sub: 'Formation', img: '/mobile/process02.png' },
              { id: '03', title: '가라앉음', sub: 'Clarification', img: '/mobile/process03.png' },
              { id: '04', title: '여과 · 도달', sub: 'Filtered', img: '/mobile/process04.png' },
              { id: '05', title: '가장 무구한 지점', sub: '無垢', img: '/mobile/process05.png' }
            ].map((step, idx) => (
              <div key={idx} className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-gray-800 last:border-0 flex flex-col justify-end p-8 h-[250px] md:h-full bg-black">
                <Image src={step.img} alt={step.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-center z-10 relative">
                  <span className="text-sm text-gray-300 block mb-2">{step.id}</span>
                  <h3 className="text-lg md:text-xl font-serif font-medium">{step.title}</h3>
                  <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1 block">{step.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="w-full relative overflow-hidden bg-[#F2F2F2]">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pc/product_bg.png" 
            alt="Texture" 
            fill 
            className="object-cover opacity-50" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Text Left */}
          <div className="flex-1 flex flex-col items-start gap-6 md:gap-8 order-2 md:order-1 mt-8 md:mt-0">
            <span className="text-sm tracking-widest text-gray-500 uppercase">Product</span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-widest">MUGU</h2>
            <span className="text-lg md:text-xl font-serif font-medium">13% / 750ml</span>
            <div className="text-gray-700 leading-relaxed space-y-2 mt-4 text-sm md:text-base">
              <p>쌀의 은은한 향과<br/>미묘한 꽃 향의 단 맛이 어우러진 맑은 약주.</p>
              <p>입안에서는 부드럽게 퍼지고,<br/>끝 맛은 차분하고 깨끗하게 정리됩니다.</p>
            </div>
          </div>

          {/* Bottle Center */}
          <div className="flex-[1.5] relative w-full h-[500px] md:h-[800px] order-1 md:order-2">
            <Image 
              src="/pc/product_bottle.png" 
              alt="MUGU Product Bottle" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Vertical Text Right */}
          <div className="absolute right-6 md:right-16 top-24 md:top-1/2 md:-translate-y-1/2 flex gap-4 writing-vertical-rl text-lg md:text-2xl font-serif text-gray-400 tracking-[0.3em] h-full justify-center order-3 pointer-events-none">
            <span>가장 무구한 지점</span>
            <span className="text-3xl md:text-5xl text-black tracking-normal mt-4">無垢</span>
          </div>
        </div>
      </section>

      {/* Flavor Section */}
      <section className="w-full bg-[#FAFAFA] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-16 flex flex-col gap-16 items-center">
          <span className="text-sm tracking-widest text-gray-500 uppercase self-start w-full">Flavor</span>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12 md:gap-0 mt-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800">
                <path d="M2 12h4l3-9 5 18 3-9h5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="text-xs text-gray-500 block mb-1">첫 인상</span>
                <span className="text-base font-serif font-medium">맑음</span>
              </div>
            </div>
            
            <div className="w-px h-12 md:h-24 bg-gray-300 hidden md:block"></div>
            <div className="h-px w-24 bg-gray-300 md:hidden"></div>

            <div className="flex flex-col items-center gap-6 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="text-xs text-gray-500 block mb-1">중간</span>
                <span className="text-base font-serif font-medium">은은한 곡물 향과 꽃 향</span>
              </div>
            </div>

            <div className="w-px h-12 md:h-24 bg-gray-300 hidden md:block"></div>
            <div className="h-px w-24 bg-gray-300 md:hidden"></div>

            <div className="flex flex-col items-center gap-6 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="text-xs text-gray-500 block mb-1">마무리</span>
                <span className="text-base font-serif font-medium">깨끗한 여운</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid Section */}
      <section className="w-full bg-[#111] pt-16 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-0 grid grid-cols-2 gap-2 md:gap-4 h-auto md:h-[800px]">
          <div className="relative w-full aspect-square md:aspect-auto bg-black">
            <Image src="/pc/detail_01.png" alt="Detail 1" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative w-full aspect-square md:aspect-auto bg-black">
            <Image src="/pc/detail_02.png" alt="Detail 2" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative w-full aspect-square md:aspect-auto bg-black">
            <Image src="/pc/detail_03.png" alt="Detail 3" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative w-full aspect-square md:aspect-auto bg-black">
            <Image src="/pc/detail_04.png" alt="Detail 4" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <div className="flex justify-center mt-24 md:mt-32">
          <button className="border border-white/30 text-white px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            구매 및 문의하기
          </button>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-serif font-bold tracking-widest uppercase">MUGU</h2>
            <span className="text-sm font-serif font-medium">무구</span>
          </div>
          
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold mb-1">Contact Us</h3>
              <a href="mailto:contact@mugu.kr" className="text-sm text-gray-600 hover:text-black transition-colors">contact@mugu.kr</a>
              <span className="text-sm text-gray-600">000-000-0000</span>
              <a href="#" className="mt-3 text-gray-800 hover:text-black transition-colors">
                {/* Instagram Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            
            <div className="flex flex-col gap-2 mt-6">
              <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">개인정보처리방침</a>
              <span className="text-[10px] text-gray-400">Copyright © MUGU. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
