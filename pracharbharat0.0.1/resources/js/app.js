
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('pbheader', require('./components/pbheader.vue'));
Vue.component('pbimage', require('./components/imagecomp/imagesection.vue'));
Vue.component('pbabout', require('./components/about/pbabout.vue'));
Vue.component('pbproduct', require('./components/prodcuctscomp/productcsection.vue'));
Vue.component('pbfirst',require('./components/prodcuctscomp/subproductsection/pbfirst.vue'));
Vue.component('pbsecond',require('./components/prodcuctscomp/subproductsection/pbsecond.vue'));
Vue.component('pbthird',require('./components/prodcuctscomp/subproductsection/pbthird.vue'));
const about=new Vue({
    el:'#about'
});

const app = new Vue({
    el: '#app'
});
const product=new Vue({
    el:'#pbproduct'
});
import service from './components/services/pbservices.vue'
const services=new Vue({
    el:'#pbservices',
    components:{'pbservice':service}

}
);
import currentproject from './components/currentproject/currproject.vue';
const curproject=new Vue({
    el:'#pbcurproject',
    components:{
        'pbongoingproject':currentproject
    }
});
import pbclientobj from './components/pbclient/pbclients.vue'

const pbclient=new Vue({
    el:'#pbclients',
    components:{
        'pbclient':pbclientobj
    }
});
import pb_footerobj from './components/Footercomp/footer.vue'

const pbfooterobject=new Vue({
    el:'#pb_footer',
    components:{
        'pbfooter':pb_footerobj
    }
})
