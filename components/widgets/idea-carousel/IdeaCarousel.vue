<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/shared/ui/carousel'
import { AspectRatio } from '~/components/shared/ui/aspect-ratio';
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue';
import links from '~/lib/links';

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
            <a :href="links.FROG_WARS_ACT">
              <p>&lt;<span class="text-yellow-600">Act</span>&gt;</p>
            </a>
            <a :href="links.FROG_WARS_MAYDONE">
              <p>&lt;<span class="text-primary">Sangha</span>&gt;</p>
            </a>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center md:items-end gap-4">
                <a :href="links.FROG_WARS_AUTHOR">
                  <h4 class="text-sky-700 font-bold text-[32px] md:text-[46px]">Frog wars</h4>
                </a>

                <p class="md:mb-2 ">by <a class="text-sky-700 hover:underline"
                    :href="links.FROG_WARS_AUTHOR">dao.frogwifcat.com</a></p>
              </div>
              <div class="pl-8 mt-8 ">
                <ul class="list-disc flex flex-col gap-1 md:text-[24px] text-[#828282]">
                  <li>Made by solo guy without programming skills.</li>
                  <li>Once he was hacked by one of the hired developers.</li>
                  <li>He is scared to hire people on freelance platforms.</li>
                  <li>With Ara, he can now finish the game by collective supervising.
                  </li>
                </ul>
              </div>

            </div>
            <img class="hidden md:block" src="/fighter.svg" alt="Fighter">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <a :href="links.FROG_WARS_BUTTON">
              <Button>
                Check out Project Page
              </Button>
            </a>

          </div>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="bg-white rounded-3xl p-8">
          <div class="flex gap-1">
            <a :href="links.ARBITRAGE_BOT_ACT">
              <p>&lt;<span class="text-yellow-600">Act</span>&gt;</p>
            </a>
            <a :href="links.ARBITRAGE_BOT_SANGHA">
              <p>&lt;<span class="text-red-600">Sangha</span>&gt;</p>
            </a>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center md:items-end gap-4">
                <a :href="links.ARBITRAGE_BOT_TITLE">
                  <h4 class="text-sky-700 font-bold text-[32px] md:text-[46px]">Arbitrage</h4>
                </a>
                <a :href="links.ARBITRAGE_BOT_AUTHOR">
                  <p class="md:mb-2 ">by anonymous group</p>
                </a>
              </div>
              <div class="pl-8 mt-8">
                <ul class="list-disc flex flex-col gap-1 md:text-[24px] text-[#828282]">
                  <li>An arbitrage bot made by friends who live in<br>the different
                    cities.</li>
                  <li>How to split the profit that comes from arbitrage?</li>
                  <li>With Ara, they can automatically split the revenue
                    among<br>them by agreed contract.</li>
                </ul>
              </div>

            </div>
            <img class="hidden md:block" src="/trading_bot.png" alt="Trading bot">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <a :href="links.ARBITRAGE_BOT_BUTTON">
              <Button>
                Check out Sangha
              </Button>
            </a>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="bg-white rounded-3xl p-8">
          <div class="flex gap-1">
            <a :href="links.ARA_AURORA">
              <p>&lt;<span class="text-sky-600">Aurora</span>&gt;</p>
            </a>
            <a :href="links.ARA_MAYDONE">
              <p>&lt;<span class="text-sky-600">Maydone</span>&gt;</p>
            </a>
            <a :href="links.ARA_ACT">
              <p>&lt;<span class="text-sky-600">Act</span>&gt;</p>
            </a>
            <a :href="links.ARA_SANGHA">
              <p>&lt;<span class="text-red-600">Sangha</span>&gt;</p>
            </a>
          </div>

          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center md:items-end gap-4">
                <a :href="links.ARA_TITLE">
                  <h4 class="text-sky-700 font-bold text-[32px] md:text-[46px]">Ara</h4>
                </a>
                <a :href="links.ARA_AUTHOR">
                  <p class="md:mb-2 ">by worldwide community</p>
                </a>

              </div>
              <div class="pl-8 mt-8">
                <ul class="list-disc flex flex-col gap-1 md:text-[24px] text-[#828282]">
                  <li>Ara provides all tools to achieve the dreams through collective
                    effort</li>
                  <li>We build the Ara itself using it’s own development model we
                    call<br>Lungta</li>
                  <li>Everything is transparent, with the huge potential. Join Us
                    either<br>by investing or contributing to the development.</li>
                </ul>
              </div>

            </div>
            <img class="hidden md:block" src="/ara_pp.png" alt="Ara">
          </div>

          <div class="w-full flex items-center justify-center mt-12">
            <a :href="links.ARA_BUTTON">
              <Button>
                Sign Up in Forum
              </Button>
            </a>

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
