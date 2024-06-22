<script setup lang="ts">
import { Header } from '@/components/widgets/header'
</script>

<template>
  <div>
    <Header />

    <slot />
  </div>
</template>

<style>
html {
  font-family: Switzer, sans-serif;
}
</style>
