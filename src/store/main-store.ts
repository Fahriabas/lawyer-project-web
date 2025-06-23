import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    articles: [
      {
        id: 1,
        title: "Artikel 1",
        content: "Konten artikel 1",
      },
      {
        id: 2,
        title: "Artikel 2",
        content: "Konten artikel 2",
      },
    ],
  }),
  getters: {
    getArticleById: (state) => (id: number) => {
      return state.articles.find((article) => article.id === id);
    },
  },
  actions: {
    addArticle(article: { id: number; title: string; content: string }) {
      this.articles.push(article);
    },
  },
});
