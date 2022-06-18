<script lang="ts" setup></script>

<template>
  <VAppBar class="s-offline-mod-mt border-b px-2" density="compact" :border="1">
    <div class="w-full flex justify-between items-center">
      <div class="ml-0 pl-2 sm:pr-12 hidden-xs-only select-none flex-none">
        <RouterLink to="/" class="flex items-center gap-x-1">
          Vuetify 3 Example
        </RouterLink>
      </div>
      <div class="flex-1"></div>
      <div class="flex items-center gap-x-2">
        <!-- Place some buttons here -->
      </div>
    </div>
  </VAppBar>
</template>
