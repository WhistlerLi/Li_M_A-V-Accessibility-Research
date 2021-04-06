import Movie from '../components/Movie.js';
let router = new VueRouter({
        routes: [
            {path: '/', redirect: {name: "movie"}},
            {path: '/movie', name: "movie", component: Movie},
        ]
    })
;

const vm = new Vue({

    data: {


    },

    router: router
}).$mount("#app");
