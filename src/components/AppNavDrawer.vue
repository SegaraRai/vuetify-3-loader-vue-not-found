<script lang="ts" setup>
import { useShowSidebar } from '~/composables';

const [showSidebar, alwaysOpen] = useShowSidebar();
</script>

<template>
  <VNavigationDrawer
    :model-value="showSidebar"
    :permanent="alwaysOpen"
    :touchless="alwaysOpen"
    location="left"
    class="select-none"
    @update:model-value="showSidebar = $event"
  >
    <VList>
      <VListItem to="/">
        <VListItemHeader>
          <VListItemTitle>Home</VListItemTitle>
        </VListItemHeader>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
