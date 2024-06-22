<script setup lang="ts">
import { TextAlignJustifyIcon } from '@radix-icons/vue';


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
        <a href="">
          <DropdownMenuItem>
            <span>
              Development
            </span>
          </DropdownMenuItem>
        </a>
        <a href="">
          <DropdownMenuItem>
            <span>
              Invest
            </span>
          </DropdownMenuItem>
        </a>
        <a href="">
          <DropdownMenuItem>
            <span>
              About
            </span>
          </DropdownMenuItem>
        </a>
        <a href="">
          <DropdownMenuItem>
            <span>
              Forum
            </span>
          </DropdownMenuItem>
        </a>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <span>GitHub</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Support</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <span>API</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
