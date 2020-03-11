<template>
  <div class="post-meta">
    Posted {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>
        <em>{{ post.timeToRead }} min read.</em>
      </strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>