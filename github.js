class Github {
    constructor() {
        this.client_id = 'Ov23liDIQeQSI6TWeMhn';
        this.client_secret = 'a9075ef9da9704ea000e3bf7aeb69171ea9c2472';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse =
            await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse =
            await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos,
        }
    }

}