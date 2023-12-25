<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import hyRequest from '../request';

const msg = ref('');
const getCityAll = () => {
  return hyRequest.get({
    url: '/blog/list',
  });
};

onMounted(() => {
  getCityAll().then((res) => {
    msg.value = res;
  });
});
</script>

<style lang="scss" scoped></style>
