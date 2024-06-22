<script setup lang="ts">
import { Button } from '@/components/shared/ui/button'

</script>

<template>
  <header
    class="sticky top-0 bg-gradient-to-b from-red-400/10 from-30% to-80% backdrop-blur max-w-[100vw] flex flex-row justify-between items-center p-6 z-10">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between">
      <div class="flex items-center gap-[15px]">
        <img class="max-w-[36px] md:max-w-[71px]" src="/ara_logo.svg" alt="Logo">
        <h5 class="text-red-500 text-[24px] md:text-[32px]">ARA</h5>
      </div>
      <div class="flex item gap-[48px]">
        <nav class="hidden lg:flex  gap-[32px]">
          <a href="/#goto-ara">
            <Button variant="link">
              Development
            </Button>
          </a>
          <a href="/#goto-maydone">
            <Button variant="link">
              Invest
            </Button>
          </a>
          <a href="/#goto-act">
            <Button variant="link">
              About
            </Button>
          </a>
          <a href="/#goto-sangha">
            <Button variant="link">
              Forum
            </Button>
          </a>
        </nav>
        <div class="hidden lg:flex gap-[32px]">
          <Button>
            Invest in ARA
          </Button>
          <Button variant="outline">
            Join ARA
          </Button>
        </div>
        <div class="lg:hidden">
          <FeaturesBurgerMenu />
        </div>

      </div>

    </div>

  </header>
</template>
