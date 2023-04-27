<template>
  <div>
    <PanelView title="Selected Pokemon" description="Let's see what you've got">
      <Transition name="slide" mode="out-in" appear>
        <!-- <KeepAlive>
          <Suspense>
            <template #default> -->
              <!-- <AsyncPokemonDetailsController
                :name="nickname"
                :userName="uname"
                :gender="gender"
                :species="species"
                :element1="element1"
                :element2="element2"
                :level="level"
                :isLegendary="isLegendary"
                :url="url"
              /> -->

                {{ nickname }}

            <!-- </template>
            <template #fallback>
              <div class="flex flex-col justify-center items-center mt-5 w-64 h-64">
                <LoadingSpinnerView class="-mb-2" />
                <p class="p-2 italic text-white/50">One sec...</p>
              </div>
            </template>
          </Suspense>
        </KeepAlive> -->
      </Transition>
    </PanelView>
  </div>
</template>

<script setup>
import AsyncPokemonDetailsController from '../components/AsyncPokemonDetailsController.vue'
import LoadingSpinnerView from '../components/LoadingSpinnerView.vue'
import PanelView from './PanelView.vue'
import { defineProps } from 'vue';

defineProps(['id', 'nickname', 'species', 'element1', 'element2', 'level', 'isLegendary', 'url', 'uname', 'gender'])

</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
