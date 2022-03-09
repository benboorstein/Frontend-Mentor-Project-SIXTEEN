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
    },
    computed: {
        priceForBasicPlan() { return this.toggle ? this.plans[0].price.monthly : this.plans[0].price.annually },
        priceForProfPlan() { return this.toggle ? this.plans[1].price.monthly : this.plans[1].price.annually },
        priceForMasterPlan() { return this.toggle ? this.plans[2].price.monthly : this.plans[2].price.annually }
    }
}

Vue.createApp(App).mount('#app')



/* Robert:

- Imagine you're working with an array of plans
- Each one has information related to each plan's uniqueness: price, storage, users, send capacity
- Your template renders the same elements and text, but using this array instead

How might you adjust your Vue code - JS and HTML - to account for this setup, including the new array of plans?

*/