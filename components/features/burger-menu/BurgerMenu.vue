<script setup lang="ts">
import { TextAlignJustifyIcon } from '@radix-icons/vue';
import links from '~/lib/links';

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="link" size="icon">
        <TextAlignJustifyIcon class="w-8 h-8" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>Ara</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <a :href="links.AURORA">
          <DropdownMenuItem>
            <span>
              Inspire
            </span>
          </DropdownMenuItem>
        </a>
        <a :href="links.MAYDONE">
          <DropdownMenuItem>
            <span>
              Lead
            </span>
          </DropdownMenuItem>
        </a>
        <a :href="links.ACT">
          <DropdownMenuItem>
            <span>
              Earn
            </span>
          </DropdownMenuItem>
        </a>
        <a :href="links.INVEST">
          <DropdownMenuItem>
            <span>
              Invest
            </span>
          </DropdownMenuItem>
        </a>
        <a :href="links.FORUM">
          <DropdownMenuItem>
            <span>
              Find your tribe
            </span>
          </DropdownMenuItem>
        </a>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <a :href="links.INVEST_IN_ARA">
        <DropdownMenuItem>
          <span>Invest in ARA</span>
        </DropdownMenuItem>
      </a>
      <a :href="links.FORUM">
        <DropdownMenuItem>
          <span>Join ARA</span>
        </DropdownMenuItem>
      </a>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
