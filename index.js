class Cart {
    constructor() {
        this.items = []
    }

    findItem(itemName) {
        const candidate = this.items.find(i => i.name.toLowerCase() === itemName.toLowerCase())
        if (candidate) {
            return this.items.indexOf(candidate)
        }
        return -1
    }

    getAllItems() {
        let output = ""
        for (let item of this.items) {
            output += `${item.name}: ${item.count}\n`
        }
        return output
    }

    addItem(itemName) {
        const itemIndex = this.findItem(itemName)
        if (itemIndex >= 0) {
            this.items[itemIndex].count += 1
            return this.items[itemIndex]
        } else {
            const newItem = {
                name: itemName,
                count: 1
            }
            this.items.push(newItem)
            return newItem
        }
    }

    removeItem(itemName, count = 1) {
        const itemIndex = this.findItem(itemName)
        if (itemIndex >= 0) {
            const item = this.items[itemIndex]
            if (item.count > count) {
                this.items[itemIndex].count -= count
                return this.items[itemIndex]
            } else {
                this.items.splice(itemIndex, 1)
                return true
            }
        } else {
            return false
        }
    }
}

module.exports = Cart