import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Detail from "../pages/Detail.vue";
import About from "../pages/About.vue";
import Esai from "../pages/Esai.vue";
import Article from "../pages/Article.vue";
import News from "../pages/News.vue";
import Crew from "../pages/Crew.vue";
import SendArticle from "../pages/SendArticle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/esai",
    name: "Esai",
    component: Esai,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/crew",
    name: "News",
    component: Crew,
  },
  {
    path: "/send-article",
    name: "Article Send",
    component: SendArticle,
  },
  // Tambah route lain di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
