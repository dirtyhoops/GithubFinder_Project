class Github {
  constructor() {
    this.client_id = 'f983d154e0aa3ffee386';
    this.client_secret = 'f11b74f10f2df75901873c8e83e2a8aa7a52425c';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
