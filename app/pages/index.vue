<script setup lang="ts">
const { data: documentation } = await useAsyncData('documentation', () =>
  queryCollection('documentation').first()
)
</script>

<template>
  <div class="documentation-page">
    <ContentRenderer
      v-if="documentation"
      :value="documentation"
      class="content"
    />
    <div
      v-else
      class="loading"
    >
      Loading documentation...
    </div>
  </div>
</template>

<style scoped>
.documentation-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.content :deep(h1) {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 0.5rem;
}

.content :deep(h2) {
  font-size: 1.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2a2a2a;
}

.content :deep(h3) {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3a3a3a;
}

.content :deep(p) {
  margin-bottom: 1rem;
}

.content :deep(hr) {
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 2rem 0;
}

.content :deep(code) {
  background-color: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

.content :deep(pre) {
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

.content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

.content :deep(ul),
.content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.content :deep(li) {
  margin-bottom: 0.5rem;
}

.content :deep(a) {
  color: #0066cc;
  text-decoration: none;
}

.content :deep(a:hover) {
  text-decoration: underline;
}

.content :deep(strong) {
  font-weight: 600;
}

@media (max-width: 768px) {
  .documentation-page {
    padding: 1rem;
  }

  .content :deep(h1) {
    font-size: 1.75rem;
  }

  .content :deep(h2) {
    font-size: 1.5rem;
  }

  .content :deep(h3) {
    font-size: 1.1rem;
  }
}
</style>
