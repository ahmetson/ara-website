<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/shared/ui/carousel'
import { AspectRatio } from '~/components/shared/ui/aspect-ratio';
import Autoplay from 'embla-carousel-autoplay'

</script>

<template>
  <Carousel :opts="{
    loop: true
  }" :plugins="[
    Autoplay({
      delay: 4000,
    })
  ]">
    <CarouselContent class="-ml-[20vw] xl:px-48 md:px-8 px-2">
      <CarouselItem class="pl-[20vw]">
        <div class="p-1 shadow-2xl shadow-cyan-400/40 rounded-xl">
          <AspectRatio :ratio="16 / 9">
            <img src="/aurora.jpg" alt="Aurora" class="object-cover w-full h-full" />
          </AspectRatio>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="p-1 shadow-2xl shadow-lime-400/40 rounded-xl">
          <AspectRatio :ratio="16 / 9">
            <img src="/maydone.jpg" alt="MayDone" class="object-cover w-full h-full" />
          </AspectRatio>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="p-1 shadow-2xl shadow-yellow-400/40 rounded-xl">
          <AspectRatio :ratio="16 / 9">
            <img src="/act.jpg" alt="ACT" class="object-cover w-full h-full" />
          </AspectRatio>
        </div>
      </CarouselItem>
      <CarouselItem class="pl-[20vw]">
        <div class="p-1 shadow-2xl shadow-red-400/40 rounded-xl">
          <AspectRatio :ratio="16 / 9">
            <img src="/sangha.jpg" alt="Sangha" class="object-cover w-full h-full" />
          </AspectRatio>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
