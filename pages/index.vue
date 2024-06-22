<script setup lang="ts">
import Page from '~/components/widgets/page/Page.vue';

definePageMeta({
  name: 'ARA'
})
</script>

<template>
  <div class="flex flex-col">
    <Page>
      <section class="h-[550px]" id="hero">
        <div class="h-full p-8 flex flex-col md:flex-row items-center gap-8">
          <div class="flex flex-col items-start justify-between max-h-[300px] h-full">
            <div>
              <h4 class="font-bold text-[48px] text-[#A747BF]">Collaboration on<br>
                your dreams</h4>
              <h5 class="text-[24px] text-[#E47BF5]">All tools to go from idea to profit, start at any stage!</h5>
            </div>

            <Button class="bg-[#46BFF4] hover:bg-[#46BFF4] hover:opacity-90">
              Post your idea
            </Button>
          </div>
          <div class="max-w-[640px] max-h-[350px] h-full w-full">
            <iframe allowfullscreen allowtransparency class="w-full h-full"
              src="https://www.youtube.com/embed/suOaUQmMSGo" />
          </div>
        </div>
      </section>
    </Page>

    <section id="real-stories">
      <div class="relative bg-[#EEFFE0]">
        <Page class="overflow-hidden p-8">
          <WidgetsIdeaCarousel />
        </Page>
      </div>
    </section>
    <Page>
      <section class="mt-24 p-8 " id="ara">
        <h4 class="font-bold tracking-wide">How Ara works?</h4>
        <p class="mt-4">Ara consists of four tools that formulate <a class="text-sky-400" href="">Lungta</a> development
          model.</p>
        <div class="flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-48 mt-6">
          <div>
            <h5 class="font-bold text-sky-500">1 Idea Space</h5>
            <img class="xl:hidden" src="/aurora.png" alt="Aurora">
            <div class="mt-4 grid gap-6">
              <p class="text-[#828282]">All projects start with the ideas. Share your ideas in the Idea Space. In the
                Idea Space we discuss,
                find
                solution and gather like minded people as well.</p>
              <p class="text-[#828282]">
                Right now it goes in the Ara Forum. Sign Up and post your ideas in Ara Forum with “1 Aurora” tag.
              </p>
            </div>
            <Button class="mt-6 bg-sky-400 hover:bg-sky-400/90">
              Inspire
            </Button>
          </div>
          <img class="hidden xl:block" src="/aurora.png" alt="Aurora">
        </div>
        <div class="flex flex-col-reverse xl:flex-row items-center justify-between gap-8 md:gap-48 mt-8">
          <img class="hidden xl:block" src="/maydone.png" alt="Maydone">
          <div>
            <h5 class="font-bold text-[#3CF41E]">2 Launch pad</h5>
            <img class="xl:hidden" src="/maydone.png" alt="Maydone">
            <div class="mt-4 grid gap-6">
              <p class="text-[#828282]">Launchpad is where idea is turned into a project. An expert formulate the
                project details, anyone who sees a potential invests.</p>
              <p class="text-[#828282]">Right now, it goes in the Ara Forum.</p>
              <p class="text-[#828282]">
                If you look to invest in the next unicorns head to “2 Maydone” tag. If you want to lead a project head
                to “1 Aurora”, and formulate it’s details.
              </p>
            </div>
            <div class="flex gap-6">
              <Button class="mt-6 bg-[#D749EE] hover:bg-[#D749EE]/90">
                Invest
              </Button>
              <Button class="mt-6 bg-[#3CF41E] hover:bg-[#3CF41E] hover:opacity-90">
                Lead
              </Button>
            </div>
          </div>
        </div>
        <div class="flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-48 mt-8">
          <div>
            <h5 class="font-bold text-[#DBDE3C]">3 Development</h5>
            <img class="xl:hidden" src="/act.png" alt="Act">
            <div class="mt-4 grid gap-6">
              <p class="text-[#828282]">Once project is initiated, the next step is Development. In Ara, all investors
                can see the progress of project. You can also test the project.</p>
              <p class="text-[#828282]">
                Anyone can join the development of the project. Sign up in the forum. Head to the “3 ACT” tag. From
                interested project find it’s tasks list. Solve them and you can get the rewards.
              </p>
            </div>
            <div class="flex gap-6">
              <Button class="mt-6 bg-[#FBBC05] hover:bg-[#FBBC05]/90">
                Earn
              </Button>
            </div>
          </div>
          <img class="hidden xl:block" src="/act.png" alt="Act">
        </div>
        <div class="flex flex-col-reverse xl:flex-row items-center justify-between gap-8 md:gap-48 mt-8">
          <img class="hidden xl:block" src="/sangha.png" alt="Act">
          <div>
            <h5 class="font-bold text-[#EB4335]">4 Ownership</h5>
            <img class="xl:hidden" src="/sangha.png" alt="Act">
            <div class="mt-4 grid gap-6">
              <p class="text-[#828282]">Sangha is the project’s ownership. It’s where you govern the project, and if
                your project is a commercial journey, then Sangha defines how the divdend is distributed across
                investors, developers and idea owners.</p>
              <p class="text-[#828282]">Right now, it goes in the Ara Forum.</p>
              <p class="text-[#828282]">
                If you look to get dividends, go to “4 Sangha” tag. Find the project and buy it’s tokens. If you want to
                be part of people who change the world, join the team by obtaining there token.
              </p>
            </div>
            <div class="flex gap-6">
              <Button class="mt-6 bg-[#D749EE] hover:bg-[#D749EE]/90">
                Invest
              </Button>
              <Button class="mt-6 bg-[#EB4335] hover:bg-[#EB4335]/90">
                Govern
              </Button>
            </div>
          </div>

        </div>
      </section>
      <section class="mt-32 py-12 p-8" id="advantages">
        <h4 class="font-bold">Advtantage of Ara</h4>
        <div class="grid md:grid-cols-2 gap-x-64 gap-y-12 items-start mt-12 text-[#828282]">
          <div class="grid gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16 5.63636C10.2763 5.63636 5.63636 10.2763 5.63636 16C5.63636 21.7236 10.2763 26.3636 16 26.3636C21.7237 26.3636 26.3638 21.7236 26.3638 16C26.3638 10.2763 21.7237 5.63636 16 5.63636ZM4 16C4 9.37258 9.37259 4 16 4C22.6274 4 28.0001 9.37258 28.0001 16C28.0001 22.6274 22.6274 28 16 28C9.37259 28 4 22.6274 4 16Z"
                fill="#454545" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.909 16.727H5.09082V15.2725H26.909V16.727Z"
                fill="#454545" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.2726 26.9093V5.09104H16.7272V26.9093H15.2726ZM21.2274 16.0001C21.2274 12.0497 19.8067 8.14155 17.0216 5.55751L17.8872 4.62451C20.9812 7.49501 22.5001 11.7687 22.5001 16.0001C22.5001 20.2315 20.9812 24.5053 17.8872 27.3758L17.0216 26.4427C19.8067 23.8587 21.2274 19.9506 21.2274 16.0001ZM9.63586 16.0002C9.63586 11.7749 11.1053 7.50337 14.1049 4.63138L14.9851 5.5507C12.2877 8.13328 10.9086 12.0436 10.9086 16.0002C10.9086 19.9567 12.2877 23.8671 14.9851 26.4496L14.105 27.3689C11.1053 24.4969 9.63588 20.2254 9.63586 16.0002Z"
                fill="#454545" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.9999 9.56006C19.9441 9.56006 23.9551 10.2894 26.6738 11.8082C26.9807 11.9796 27.0905 12.3673 26.9191 12.6741C26.7478 12.9809 26.36 13.0907 26.0533 12.9193C23.5989 11.5483 19.8327 10.8328 15.9999 10.8328C12.1671 10.8328 8.40091 11.5483 5.94658 12.9193C5.63974 13.0907 5.25207 12.9809 5.08067 12.6741C4.90928 12.3673 5.01906 11.9796 5.3259 11.8082C8.0448 10.2894 12.0557 9.56006 15.9999 9.56006ZM15.9999 22.091C19.9441 22.091 23.9551 21.3615 26.6738 19.8428C26.9807 19.6714 27.0905 19.2837 26.9191 18.9769C26.7478 18.6701 26.36 18.5603 26.0533 18.7317C23.5989 20.1027 19.8327 20.8182 15.9999 20.8182C12.1671 20.8182 8.40091 20.1027 5.94658 18.7317C5.63974 18.5603 5.25207 18.6701 5.08067 18.9769C4.90928 19.2837 5.01906 19.6714 5.3259 19.8428C8.0448 21.3615 12.0557 22.091 15.9999 22.091Z"
                fill="#454545" />
            </svg>
            <h5 class="text-[24px] text-black">Collaboration with Payment</h5>
            <p>
              If you look to get dividends, go to “4 Sangha” tag. Find the project and buy it’s tokens. If you want to
              be part of people who change the world, join the team by obtaining there token.
            </p>
          </div>
          <div class="grid gap-2">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.18555 16.0001C4.18555 9.37261 9.55814 4 16.1856 4C22.813 4 28.1855 9.37261 28.1855 16.0001C28.1855 22.6275 22.813 28.0001 16.1856 28.0001C9.55814 28.0001 4.18555 22.6275 4.18555 16.0001ZM16.1856 5.78885C10.5461 5.78885 5.9744 10.3606 5.9744 16.0001C5.9744 18.609 6.95282 20.9895 8.56279 22.7943C10.2612 20.4209 13.0423 18.8718 16.1862 18.8718C19.3298 18.8718 22.1106 20.4205 23.8091 22.7936C25.4187 20.9887 26.3967 18.6086 26.3967 16.0001C26.3967 10.3606 21.825 5.78885 16.1856 5.78885ZM22.4912 24.0322C21.1309 21.9978 18.8142 20.6607 16.1862 20.6607C13.558 20.6607 11.2411 21.9982 9.88081 24.033C11.6169 25.3974 13.8062 26.2112 16.1856 26.2112C18.5654 26.2112 20.755 25.3972 22.4912 24.0322ZM11.7607 14.1265C11.7607 11.6826 13.7419 9.70142 16.1858 9.70142C18.6297 9.70142 20.6108 11.6826 20.6108 14.1265C20.6108 16.5704 18.6297 18.5515 16.1858 18.5515C13.7419 18.5515 11.7607 16.5704 11.7607 14.1265ZM16.1858 11.4903C14.7299 11.4903 13.5496 12.6705 13.5496 14.1265C13.5496 15.5824 14.7299 16.7627 16.1858 16.7627C17.6417 16.7627 18.822 15.5824 18.822 14.1265C18.822 12.6705 17.6417 11.4903 16.1858 11.4903Z"
                fill="#454545" />
            </svg>

            <h5 class="text-[24px] text-black">All in One</h5>
            <p>
              Every other platform is a separated place, unlike Ara, where everything is one place. Ara is: Mind Mapping
              + Jira + Kickstrater + DAO combined together.
            </p>
          </div>
          <div class="grid gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.5455 9.98046C10.5455 8.06984 11.0739 6.64094 11.9489 5.69877C12.8131 4.76818 14.1363 4.18181 16.0031 4.18181C17.8708 4.18181 19.1921 4.76702 20.0543 5.69552C20.9274 6.63568 21.4545 8.06279 21.4545 9.97444V12.9564H10.5455V9.98046ZM8.36364 12.9564V9.98046C8.36364 7.67966 9.00376 5.66379 10.3502 4.21404C11.7073 2.7527 13.6584 2 16.0031 2C18.3473 2 20.2971 2.75061 21.6531 4.21088C22.9984 5.6595 23.6364 7.67417 23.6364 9.97444V12.9564H25.8182C27.0232 12.9564 28 13.9333 28 15.1382V28.2292C28 29.4342 27.0232 30.411 25.8182 30.411H6.18182C4.97684 30.411 4 29.4342 4 28.2292V15.1382C4 13.9333 4.97684 12.9564 6.18182 12.9564H8.36364ZM6.18182 15.1382H25.8182V28.2292H6.18182V15.1382Z"
                fill="#454545" />
            </svg>


            <h5 class="text-[24px] text-black">Hiring with testing</h5>
            <p>
              When you hire developers, you don’t know the code quality. Ara is collaborative, other people will help
              you to detect the malicious code. In ara, special experts take responsibility for the hired developers
              code.
            </p>
          </div>
          <div class="grid gap-2">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.6471 3C11.1569 3 11.5702 3.41328 11.5702 3.92308V4.84615H20.8009V3.92308C20.8009 3.41328 21.2143 3 21.724 3C22.2337 3 22.6471 3.41328 22.6471 3.92308V4.84615H25.4163C26.9457 4.84615 28.1855 6.08597 28.1855 7.61538V24.2308C28.1855 25.7601 26.9457 27 25.4163 27H6.95478C5.42537 27 4.18555 25.7601 4.18555 24.2308V7.61538C4.18555 6.08597 5.42537 4.84615 6.95478 4.84615H9.72401V3.92308C9.72401 3.41328 10.1373 3 10.6471 3ZM20.8009 6.69231V7.61538C20.8009 8.12518 21.2143 8.53846 21.724 8.53846C22.2337 8.53846 22.6471 8.12518 22.6471 7.61538V6.69231H25.4163C25.926 6.69231 26.3394 7.10559 26.3394 7.61538V10.3846H6.0317V7.61538C6.0317 7.10559 6.44498 6.69231 6.95478 6.69231H9.72401V7.61538C9.72401 8.12518 10.1373 8.53846 10.6471 8.53846C11.1569 8.53846 11.5702 8.12518 11.5702 7.61538V6.69231H20.8009ZM6.0317 12.2308V24.2308C6.0317 24.7405 6.44498 25.1538 6.95478 25.1538H25.4163C25.926 25.1538 26.3394 24.7405 26.3394 24.2308V12.2308H6.0317ZM15.2625 15C15.2625 14.4902 15.6757 14.0769 16.1855 14.0769C16.6953 14.0769 17.1086 14.4902 17.1086 15C17.1086 15.5098 16.6953 15.9231 16.1855 15.9231C15.6757 15.9231 15.2625 15.5098 15.2625 15ZM19.8778 14.0769C19.368 14.0769 18.9548 14.4902 18.9548 15C18.9548 15.5098 19.368 15.9231 19.8778 15.9231C20.3876 15.9231 20.8009 15.5098 20.8009 15C20.8009 14.4902 20.3876 14.0769 19.8778 14.0769ZM22.6471 15C22.6471 14.4902 23.0604 14.0769 23.5702 14.0769C24.0799 14.0769 24.4932 14.4902 24.4932 15C24.4932 15.5098 24.0799 15.9231 23.5702 15.9231C23.0604 15.9231 22.6471 15.5098 22.6471 15ZM23.5702 17.7692C23.0604 17.7692 22.6471 18.1825 22.6471 18.6923C22.6471 19.2021 23.0604 19.6154 23.5702 19.6154C24.0799 19.6154 24.4932 19.2021 24.4932 18.6923C24.4932 18.1825 24.0799 17.7692 23.5702 17.7692ZM18.9548 18.6923C18.9548 18.1825 19.368 17.7692 19.8778 17.7692C20.3876 17.7692 20.8009 18.1825 20.8009 18.6923C20.8009 19.2021 20.3876 19.6154 19.8778 19.6154C19.368 19.6154 18.9548 19.2021 18.9548 18.6923ZM16.1855 17.7692C15.6757 17.7692 15.2625 18.1825 15.2625 18.6923C15.2625 19.2021 15.6757 19.6154 16.1855 19.6154C16.6953 19.6154 17.1086 19.2021 17.1086 18.6923C17.1086 18.1825 16.6953 17.7692 16.1855 17.7692ZM11.5702 18.6923C11.5702 18.1825 11.9834 17.7692 12.4932 17.7692C13.003 17.7692 13.4163 18.1825 13.4163 18.6923C13.4163 19.2021 13.003 19.6154 12.4932 19.6154C11.9834 19.6154 11.5702 19.2021 11.5702 18.6923ZM8.80093 17.7692C8.29113 17.7692 7.87785 18.1825 7.87785 18.6923C7.87785 19.2021 8.29113 19.6154 8.80093 19.6154C9.31073 19.6154 9.72401 19.2021 9.72401 18.6923C9.72401 18.1825 9.31073 17.7692 8.80093 17.7692ZM7.87785 22.3846C7.87785 21.8749 8.29113 21.4615 8.80093 21.4615C9.31073 21.4615 9.72401 21.8749 9.72401 22.3846C9.72401 22.8943 9.31073 23.3077 8.80093 23.3077C8.29113 23.3077 7.87785 22.8943 7.87785 22.3846ZM12.4932 21.4615C11.9834 21.4615 11.5702 21.8749 11.5702 22.3846C11.5702 22.8943 11.9834 23.3077 12.4932 23.3077C13.003 23.3077 13.4163 22.8943 13.4163 22.3846C13.4163 21.8749 13.003 21.4615 12.4932 21.4615ZM15.2625 22.3846C15.2625 21.8749 15.6757 21.4615 16.1855 21.4615C16.6953 21.4615 17.1086 21.8749 17.1086 22.3846C17.1086 22.8943 16.6953 23.3077 16.1855 23.3077C15.6757 23.3077 15.2625 22.8943 15.2625 22.3846ZM19.8778 21.4615C19.368 21.4615 18.9548 21.8749 18.9548 22.3846C18.9548 22.8943 19.368 23.3077 19.8778 23.3077C20.3876 23.3077 20.8009 22.8943 20.8009 22.3846C20.8009 21.8749 20.3876 21.4615 19.8778 21.4615Z"
                fill="#454545" />
            </svg>



            <h5 class="text-[24px] text-black">No Rug pulls and scams</h5>
            <p>
              Investing in the launchpad, but they rug pulls? In Ara, you won’t encounter them.
            </p>
          </div>
        </div>
      </section>
    </Page>
    <section class="px-8 py-12 bg-[#F7F7F7]" id="join-us">
      <Page class="h-full">
        <div class="h-full flex flex-col items-center justify-center">
          <h4 class="font-bold text-[32px] md:text-[46px]">Join Us</h4>
          <div class="text-center mt-6">
            <p class="text-[#828282]">Ara is in development, be part of Ara.</p>
            <ol>
              <li>
                <p class="text-[#828282]">1. Read the Ara Contributors Rules.</p>
              </li>
              <li>
                <p class="text-[#828282]">2. Sign up in the forum.</p>
              </li>
              <li>
                <p class="text-[#828282]">3. Check the tasks on Project page.</p>
              </li>
              <li>
                <p class="text-[#828282]">4. Push and get your CHECK tokens and use them to earn</p>
              </li>
            </ol>
          </div>
          <div class="flex gap-6 mt-6">
            <Button class="bg-[#D749EE] hover:bg-[#D749EE]/90">
              Read Rules
            </Button>
            <Button class="bg-[#EB4335] hover:bg-[#EB4335]/90">
              See the Tasks
            </Button>
          </div>
        </div>
      </Page>
    </section>
    <section class="px-8 py-12 bg-[#F4FFF4]" id="invest-in-ara">
      <Page class="h-full">
        <div class="h-full flex flex-col items-center justify-center gap-6">
          <h4 class="font-bold">Invest in Ara</h4>
          <p class="text-[#828282]">Ara is in the development. Invest in Ara. By investing tokens, you can get part of
            it’s profit and 10x
            returns.</p>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-[#828282] grid gap-4">
              <div class="grid">
                <p>Token plan:</p>
                <ol class="list-disc ml-6">
                  <li>Total Supply: 75 Million ARA </li>
                  <li>Initial Valuation: Only 14 million $ <span class="text-foreground">with 10x-100x potential.</span>
                  </li>
                  <li>Purchase ARA at discount: 0.1$ per ARA - 0.22$ per ARA (with vesting)</li>
                  <li>Purchase ARA: 0.24$ per ARA.</li>
                </ol>
              </div>
            </div>
            <div class="grid gap-4">
              <p class="text-[#828282]">Ara’s Core team:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex flex-col items-center gap-2">
                  <div class="rounded-full overflow-hidden">
                    <img class="w-24 h-24" src="/ma.jpg" alt="Medet Ahmetson">
                  </div>
                  <div class="flex gap-1 items-center">
                    <p class="text-[18px] font-bold">Medet Ahmetson</p>
                    <a href="forum"><img src="/forum_icon.png" alt="Forum"></a>
                    <a href="linkedin"><img src="/linkedin_icon.png" alt="linkedin"></a>
                    <a href="github"><img src="/github_icon.png" alt="github"></a>
                  </div>
                  <div class="text-center text-[#828282]">
                    <p class="font-bold">Founder/Leader</p>
                    <p>Entrepreneur since 2014.</p>
                    <p>Previous jobs include Seascape, Blocklords</p>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="rounded-full overflow-hidden">
                    <img class="w-24 h-24" src="/sp.jpg" alt="Sergey Pak">
                  </div>
                  <div class="flex gap-1 items-center">
                    <p class="text-[18px] font-bold">Sergey Pak</p>
                    <a href="forum"><img src="/forum_icon.png" alt="Forum"></a>
                    <a href="linkedin"><img src="/linkedin_icon.png" alt="linkedin"></a>
                    <a href="github"><img src="/github_icon.png" alt="github"></a>
                  </div>
                  <div class="text-center text-[#828282]">
                    <p class="font-bold">Founder/Tech Leader</p>
                    <p>Entrepreneur since 2003.</p>
                    <p>Leading technical programmers since 2003.</p>
                    <p>Previous clients include National Banks of Russia.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <small class="!mt-6 text-center max-w-[600px] text-[#828282]">
            All Purchases funds the Ara Treasury that we use to pay for salaries and contributors.
            We give updates about the progress on Roadmap every two weeks in our forum page.
            By funding our treasury, you become part of Ara Sangha, which means you own Ara.
          </small>
          <div class="flex gap-6 mt-6">
            <Button class="bg-[#D749EE] hover:bg-[#D749EE]/90">
              Fund Treasury
            </Button>
            <Button class="bg-[#EB4335] hover:bg-[#EB4335]/90">
              Contact Us
            </Button>
          </div>
        </div>
      </Page>
    </section>
    <footer>
      <Page>
        <div class="py-16 px-8">
          <hr>
          <div class="mt-12 grid md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-evenly gap-4">
              <p class="font-bold text-[32px] leading-[24px]">Ara</p>
              <div class="flex gap-6 items-center">
                <a href="/">
                  <img src="/forum_icon.png" alt="Forum">
                </a>
                <a href="/">
                  <img src="/github_icon.png" alt="Github">
                </a>
                <a href="/">
                  <img src="/telegram_icon.png" alt="Telegram">
                </a>
                <a href="/">
                  <img src="/discord_icon.png" alt="Discord">
                </a>
                <a href="/">
                  <img src="/youtube_icon.png" alt="Youtube">
                </a>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div>
                <p class="font-bold">
                  Use ara
                </p>
                <div class="grid gap-4 mt-6 text-[#828282]">
                  <p>Aurora</p>
                  <p>Maydone</p>
                  <p>ACT</p>
                  <p>Sangha</p>
                </div>
              </div>
              <div>
                <p class="font-bold">
                  Ara
                </p>
                <div class="grid gap-4 mt-6 text-[#828282]">
                  <p>ARA token</p>
                  <p>Whitepaper</p>
                  <p>Roadmap</p>
                  <p>Lungta Model</p>
                </div>

              </div>
              <div>
                <p class="font-bold">
                  People
                </p>
                <div class="grid gap-4 mt-6 text-[#828282]">
                  <p>Owners</p>
                  <p>Maintainers</p>
                  <p>Contributors</p>
                  <p>Email Us</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Page>
    </footer>
  </div>

</template>
