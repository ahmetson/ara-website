<script setup lang="ts">
definePageMeta({
  name: 'ARA'
})
</script>

<template>
  <div class="flex flex-col gap-48">
    <section class="h-[calc(100vh-215px)]" id="hero">
      <div class="h-full flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div class="text-pretty text-center">
          <h1 class="font-semibold">
            ARA -
          </h1>
          <h3 class="font-semibold">
            connecting people, idea, money
          </h3>
        </div>
        <!-- <div>
          <img class="" src="/ara-logo.png" />
        </div> -->
      </div>
    </section>
    <section id="idea-carousel">
      <div class="relative">
        <WidgetsIdeaCarousel />
      </div>
    </section>
    <section id="ara">
      <div class="text-pretty grid gap-4">
        <div id="goto-ara" class="block relative top-[-30vw] invisible" />
        <h4 class="font-bold">ARA Development model</h4>
        <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-16 mt-16">
          <div class="bg-gradient-to-br from-cyan-400 to-cyan-100 p-px rounded-xl">
            <div class="grid gap-4 bg-background px-8 py-8 rounded-[11px]">
              <h5 class="font-semibold">Aurora</h5>
              <h6>
                On-line platform that allows you to collaboratively create, discuss and organize ideas around a project.
                Result of the stage is a description of projects based on one or more ideas with implementation
                requirements.
              </h6>
            </div>
          </div>

          <div class="bg-gradient-to-br from-lime-400 to-lime-100 p-px rounded-xl">
            <div class="h-full grid gap-4 bg-background px-8 py-8 rounded-[11px]">
              <h5 class="font-semibold">MayDone</h5>
              <h6>
                Online platform that allow you to describe project with it key parameters and hold investment in
                cryptocurrency for project.
              </h6>
            </div>
          </div>
          <div class="bg-gradient-to-br from-yellow-400 to-yellow-100 p-px rounded-xl">
            <div class="h-full grid gap-4 bg-background px-8 py-8 rounded-xl">
              <h5 class="font-semibold">ACT</h5>
              <h6>
                Online collaborating services with extension that allow make payment from project treasure for atomic
                task
                in
                project in cryptocurrencies.
              </h6>
            </div>
          </div>
          <div class="bg-gradient-to-br from-red-400 to-red-100 p-px rounded-xl">
            <div class="h-full grid gap-4 bg-background px-8 py-8 rounded-xl">
              <h5 class="font-semibold">Sangha</h5>
              <h6>
                Online platform that allow you to describe project with it key parameters and hold investment in
                cryptocurrency for project.
              </h6>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="mt-48" id="invest">
      <div class="p-8 flex flex-col gap-4 items-center justify-center">
        <h3>Invest in ideas</h3>
        <Button size="lg" variant="default">
          <p>Invest</p>
        </Button>
      </div>
    </section>
    <section class="mt-48" id="team">
      <WidgetsTeam />
    </section>
  </div>

</template>
