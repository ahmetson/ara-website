<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/shared/ui/carousel'
import { AspectRatio } from '~/components/shared/ui/aspect-ratio';
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue';

</script>

<template>
  <h3 class="text-[40px] text-[#4A4444] font-bold mb-4">Real stories</h3>
  <Carousel class="" :opts="{
    loop: true
  }" :plugins="[
    Autoplay({
      delay: 15000,
    })
  ]">
    <CarouselContent class="-ml-[20vw] px-2">
      <CarouselItem class="pl-[20vw]">
        <div class="bg-white rounded-3xl p-8">
          <div class="flex gap-1">
            <p>&lt;<span class="text-yellow-600">Act</span>&gt;</p>
            <p>&lt;<span class="text-primary">Sangha</span>&gt;</p>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-end gap-4">
                <h4 class="text-sky-700 font-bold">Frog wars</h4>
                <p class="mb-2 ">by <a class="text-sky-700 hover:underline"
                    href="https://dao.frogwifcat.com/">dao.frogwifcat.com</a></p>
              </div>
              <div class="pl-8 mt-8">
                <ul class="list-disc flex flex-col gap-1">
                  <li class="text-[24px] text-[#828282]">Made by solo guy without programming skills.</li>
                  <li class="text-[24px] text-[#828282]">Once he was hacked by one of the hired developers.</li>
                  <li class="text-[24px] text-[#828282]">He is scared to hire people on freelance platforms.</li>
                  <li class="text-[24px] text-[#828282]">With Ara, he can now finish the game by collective supervising.
                  </li>
                </ul>
              </div>

            </div>
            <img src="/fighter.svg" alt="Fighter">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <Button>
              Check out Project Page
            </Button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="bg-white rounded-3xl p-8">
          <div class="flex gap-1">
            <p>&lt;<span class="text-yellow-600">Act</span>&gt;</p>
            <p>&lt;<span class="text-red-600">Sangha</span>&gt;</p>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-end gap-4">
                <h4 class="text-sky-700 font-bold">Arbitrage</h4>
                <p class="mb-2 ">by anonymous group</p>
              </div>
              <div class="pl-8 mt-8">
                <ul class="list-disc flex flex-col gap-1">
                  <li class="text-[24px] text-[#828282]">An arbitrage bot made by friends who live in<br>the different
                    cities.</li>
                  <li class="text-[24px] text-[#828282]">How to split the profit that comes from arbitrage?</li>
                  <li class="text-[24px] text-[#828282]">With Ara, they can automatically split the revenue
                    among<br>them by agreed contract.</li>
                </ul>
              </div>

            </div>
            <img src="/trading_bot.png" alt="Trading bot">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <Button>
              Check out Sangha
            </Button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="bg-white rounded-3xl p-8">
          <div class="flex gap-1">
            <p>&lt;<span class="text-sky-600">Aurora</span>&gt;</p>
            <p>&lt;<span class="text-red-600">Sangha</span>&gt;</p>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-end gap-4">
                <h4 class="text-sky-700 font-bold">Ara</h4>
                <p class="mb-2 ">by worldwide community</p>
              </div>
              <div class="pl-8 mt-8">
                <ul class="list-disc flex flex-col gap-1">
                  <li class="text-[24px] text-[#828282]">Ara provides all tools to achieve the dreams through collective
                    effort</li>
                  <li class="text-[24px] text-[#828282]">We build the Ara itself using it’s own development model we
                    call<br>Lungta</li>
                  <li class="text-[24px] text-[#828282]">Everything is transparent, with the huge potential. Join Us
                    either<br>by investing or contributing to the development.</li>
                </ul>
              </div>

            </div>
            <img src="/ara_pp.png" alt="Ara">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <Button>
              Sign Up in Forum
            </Button>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious>
      <ChevronLeftIcon class="h-12 w-12" />
    </CarouselPrevious>
    <CarouselNext>
      <ChevronRightIcon class="h-12 w-12" />
    </CarouselNext>
  </Carousel>
</template>
