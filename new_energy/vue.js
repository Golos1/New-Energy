Vue.component('idea', {
    name: 'idea',
    props: {
        subject: String,
        href: String,
    },
    data: function(){
        return{
            info: 'false'
        }
    },
    template: `<div style = "height: 10vh;">
    <button v-if = "this.info === 'false'" @click = "expand" type="button" class="btn btn-dark">Click here to learn more about {{subject}}</button>
    <button v-if = "this.info === 'true'" @click = "hide" type="button" class="btn btn-dark">Click here to hide info.</button>
    <a class = "nav-link" style = "background-color:white; width: max-content"v-if = "this.info=='true'" :href = href >Click here to learn more</a>
    </div>
    `,
    methods: {
        expand: function(){
            $(".dialog").dialog({
                modal: true
            })
            this.info = "true";
            this.$emit('expand')
        },
        hide: function(){
            this.info = "false";
        }
    }
})
new Vue({
    el: "#more",
    data: {
        email: "",
        date: "",
        phone: "",
    },
    methods:{
        upDate(value){
            this.date = value;
        } ,
        send(){
            if(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(this.email)&&/^\d{3}-\d{3}-\d{4}$/.test(this.phone)&&/^[01]?\d\/[0-3]\d\/\d{4}$/.test(this.date)){
                $("input").val('');
                alert("Thank you! We'll be in touch shortly.");
                window.location = "index.html";
            }
        }
    },
    mounted() {
        $("#datepicker").datepicker({
            minDate: new Date(),
            maxDate: +30,
            showButtonPanel: true,
            onSelect: this.upDate
        })
    },
    computed: {
        emailColor(){
            return /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(this.email) ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger"
        },
        phoneColor(){
            return /^\d{3}-\d{3}-\d{4}$/.test(this.phone) ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger"
        },
        dateColor(){
           return /^[01]?\d\/[0-3]\d\/\d{4}$/.test(this.date) ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger"
        },
        validEmail(){
            return /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(this.email) ? "Thank You" : "Please enter a valid email"
        },
        validPhone(){
            return /^\d{3}-\d{3}-\d{4}$/.test(this.phone) ? "Thank You" : "Please enter as 999-999-9999"
        },
        validDate(){
            return /^[01]?\d\/[0-3]\d\/\d{4}$/.test(this.date) ? "Thank You" : "Please enter in mm/dd/yyyy "
        }

    }
})