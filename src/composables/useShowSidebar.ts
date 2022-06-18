import type { Ref, WritableComputedRef } from 'vue';
import { useDisplay } from 'vuetify';

export function useShowSidebar(
  canOpen?: Readonly<Ref<boolean>>
): [WritableComputedRef<boolean>, Readonly<Ref<boolean>>] {
  const alwaysOpen = useDisplay().mdAndUp;

  const state = ref(false);

  // this is required to prevent re-opening the sidebar
  if (canOpen) {
    watch(canOpen, (newCanOpen) => {
      if (newCanOpen) {
        return;
      }

      state.value = false;
    });
  }

  watch(alwaysOpen, (value) => {
    if (!value) {
      return;
    }

    state.value = false;
  });

  return [
    computed({
      get: () => !!canOpen?.value && (alwaysOpen.value || state.value),
      set: (value) => {
        if (canOpen?.value === false || alwaysOpen.value) {
          return;
        }

        state.value = value;
      },
    }),
    alwaysOpen,
  ];
}
