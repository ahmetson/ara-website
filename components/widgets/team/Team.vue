<script setup lang="ts">
const team = {
  "Medet": {
    name: "Medet Ahmetson",
    description: "CEO Founder",
    image: "/ma.jpg"
  },
  "Sergey": {
    name: "Sergey Pak",
    description: "Co-Founder",
    image: "/sp.jpg"
  },
  "Daniil": {
    name: "Daniil Bezuglov",
    description: "Developer",
    image: "/db.jpg"
  },
}

</script>

<template>
  <div class="p-8 flex flex-col gap-16 items-center justify-center">
    <h4 class="font-bold">Our team</h4>
    <div class="flex flex-col md:flex-row gap-16 items-center">
      <div class="grid gap-4" v-for="[key, member] in Object.entries(team)" :key="key">
        <div class="h-48 w-48 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
          <img :src="member.image" :alt="member.name">
        </div>
        <div class="grid items-center justify-center text-center">
          <h6 class="font-semibold">{{ member.name }}</h6>
          <p class="text-muted-foreground">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
