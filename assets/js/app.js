const App = {
    data() {
        return {
            plans: [
                {
                    planType: 'basic',
                    price: {
                        annually: '199.99',
                        monthly: '19.99'
                    },
                    storage: '500 GB Storage',
                    usersAllowed: '2 Users Allowed',
                    sendCapacity: 'Send up to 3 GB'
                },
                {
                    planType: 'professional',
                    price: {
                        annually: '249.99',
                        monthly: '24.99'
                    },
                    storage: '1 TB Storage',
                    usersAllowed: '5 Users Allowed',
                    sendCapacity: 'Send up to 10 GB'
                },
                {
                    planType: 'master',
                    price: {
                        annually: '399.99',
                        monthly: '39.99'
                    },
                    storage: '2 TB Storage',
                    usersAllowed: '10 Users Allowed',
                    sendCapacity: 'Send up to 20 GB'
                }
            ],
            toggle: false
        }
    }
}

Vue.createApp(App).mount('#app')