// 1. Enum for item types
enum ItemType {
  Weapon = "WEAPON",
  Potion = "POTION",
  Armor = "ARMOR"
}

// 2. Tuple for item details
// [name, quantity, type]
type ItemTuple = [string, number, ItemType];

// Example items
const sword: ItemTuple = ["Sword", 1, ItemType.Weapon];
const healthPotion: ItemTuple = ["Health Potion", 5, ItemType.Potion];

// 3. Generic Inventory Class
class Inventory<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// 4. Using generics with our tuple type
const playerInventory = new Inventory<ItemTuple>();

playerInventory.addItem(sword);
playerInventory.addItem(healthPotion);

console.log(playerInventory.getItems());
