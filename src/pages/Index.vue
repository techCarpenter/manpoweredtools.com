<template>
  <Layout>
    <Header />

    <!-- List recent posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}, limit: 5) {
    edges {
      node {
        id
        title
        date (format: "MMM DD, YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from '~/components/Author.vue'
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
