// models.js
export class Category {
    constructor(id, name, imageUrl, objectName, subCategories, restaurantId) {
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.objectName = objectName;
      this.subCategories = subCategories;
      this.restaurantId = restaurantId;
    }
  }
  
  export class SubCategory {
    constructor(id, name, imageUrl, objectName, categoryId, price) {
      this.id = id;
      this.name = name;
      this.imageUrl = imageUrl;
      this.objectName = objectName;
      this.categoryId = categoryId;
      this.price = price;
    }
  }
  