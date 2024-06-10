<script setup lang="ts">
import { Header } from '@/components/widgets/header'
import { Page } from '@/components/widgets/page'
</script>

<template>
  <div>
    <Header />
    <Page>
      <slot />
    </Page>
  </div>
</template>

<style>
html {
  font-family: Switzer, sans-serif;
}
</style>
