<script setup lang="ts">
import { Button } from '@/components/shared/ui/button'

</script>

<template>
  <header
    class="sticky top-0 bg-white/70 backdrop-blur max-w-[100vw] flex flex-row justify-between items-center p-6 z-10">
    <div>
      <img class="max-w-[90px] md:max-w-[128px]" src="/ara-logo-no-sh.png" alt="Logo">
    </div>
    <nav class="hidden md:block">
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
    <Button>
      Connect wallet
    </Button>
  </header>
</template>
