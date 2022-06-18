<script lang="ts" setup></script>

<template>
  <VApp class="h-full">
    <AppHeader />
    <AppNavDrawer />
    <VMain class="w-full h-full flex flex-col">
      <RouterView class="px-4" />
    </VMain>
  </VApp>
</template>
