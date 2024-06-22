<script setup lang="ts">
import { Button } from '@/components/shared/ui/button'
import links from '~/lib/links';
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
          <a :href="links.AURORA">
            <Button variant="link">
              Inspire
            </Button>
          </a>
          <a :href="links.MAYDONE">
            <Button variant="link">
              Lead
            </Button>
          </a>
          <a :href="links.ACT">
            <Button variant="link">
              Earn
            </Button>
          </a>
          <a :href="links.INVEST">
            <Button variant="link">
              Invest
            </Button>
          </a>
          <a :href="links.FORUM">
            <Button variant="link">
              Find your tribe
            </Button>
          </a>
        </nav>
        <div class="hidden lg:flex gap-[32px]">
          <a :href="links.INVEST_IN_ARA">
            <Button>
              Invest in ARA
            </Button>
          </a>
          <a :href="links.FORUM">
            <Button variant="outline">
              Join ARA
            </Button>
          </a>
        </div>
        <div class="lg:hidden">
          <FeaturesBurgerMenu />
        </div>

      </div>

    </div>

  </header>
</template>
