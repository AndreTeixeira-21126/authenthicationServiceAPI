class UserArrayRepository {
    constructor() {
        this.items = [];
    }

    async add(item) {
        this.items.push(item);
    }

    async getAll() {
        return this.items;
    }
    async findById(id) {
        return this.items.find(item => item.id === id)
    
    }
    async findByEmail(email) {
        return this.items.find(item => item.email === email)
    }
}

module.exports = UserArrayRepository;