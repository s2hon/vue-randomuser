const app = Vue.createApp({
    data() {
        return {
            dayofweek: 'Monday',
            first: 'Michael',
            last: 'Scott',
            gender: 'male',
            email: 'worldsbestboss@dunder.mifflin',
            picture: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png'

        }
    },

    methods: {
        async getUser() {
            const res = await fetch ('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results);

            this.first = results[0].name.first,
            this.last = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')