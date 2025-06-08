<template>
  <div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <div class="mt-3 mb-5 flex gap-1">
        <slot name="socialButtons" />
      </div>
      <h1 class="text-3xl font-bold">
        <slot name="title" />
      </h1>
      <p class="mt-6 text-xl leading-9">
        <slot name="description" />
      </p>
    </div>
    <div class="shrink-0">
      <slot name="avatar" />
    </div>
  </div>
</template>
