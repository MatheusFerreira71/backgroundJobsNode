export default {
    key: 'UserReport',
    async handle({ data }) {
        const { user } = data;
        console.log(user);
    },
    options: {
        delay: 5000
    }
};