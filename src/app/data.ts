export  const recipeList = [
    {
      id: 1,
      title: "Jalapeno Burger",
      rating: 3,
      reviews: 30,
      imageURL:
        "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      createdBy: "Mariam Khan",
      category:'main course'
    },
    {
      id: 2,
      title: "Special Cookies",
      rating: 2,
      reviews: 10,
      imageURL:
        "https://plus.unsplash.com/premium_photo-1670895802097-c9749ab2dc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdBy: "Mariam Khan",
      category:'dessert'
    },
    {
      id: 3,
      title: "Pumpkin Soup",
      rating: 1,
      reviews: 30,
      imageURL:
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdBy: "Naila Ishrat",
      category:'soup'
    },
    {
      id: 4,
      title: "Creamy Spinach Salmon",
      rating: 3,
      reviews: 30,
      imageURL:
        "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdBy: "Mariam Khan",
      category:'main course'
    },
    {
      id: 5,
      title: "Pancakes",
      rating: 3,
      reviews: 30,
      imageURL:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      createdBy: "Mariam Khan",
      category:'breakfast'
    },
    {
      id: 6,
      title: "Raspberry Cake",
      rating: 3,
      reviews: 30,
      imageURL:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      createdBy: "Mariam Khan",
      category:'dessert'
    },
  ];
  const produceList = [
    { id: 1, title: "Eggs", selected: false },
    { id: 2, title: "Apples", selected: false },
    { id: 3, title: "Bananas", selected: false },
    { id: 4, title: "Carrots", selected: false },
  ];
  const vegetableList = [
    { id: 1, title: "Carrots", selected: false },
    { id: 2, title: "Broccoli", selected: false },
    { id: 3, title: "Spinach", selected: false },
    { id: 4, title: "Tomatoes", selected: false },
    { id: 5, title: "Bell Peppers", selected: false },
    // Add more vegetables as needed
  ];
  const grainList = [
    { id: 1, title: "Rice", selected: false },
    { id: 2, title: "Quinoa", selected: false },
    { id: 3, title: "Oats", selected: false },
    { id: 4, title: "Pasta", selected: false },
  ];
  const dairyList = [
    { id: 1, title: "Milk", selected: false },
    { id: 2, title: "Cheese", selected: false },
    { id: 3, title: "Yogurt", selected: false },
    { id: 4, title: "Butter", selected: false },
  ];
  const proteinList = [
    { id: 1, title: "Chicken", selected: false },
    { id: 2, title: "Beef", selected: false },
    { id: 3, title: "Fish", selected: false },
    { id: 4, title: "Tofu", selected: false },
  ];
  const condimentList = [
    { id: 1, title: "Ketchup", selected: false },
    { id: 2, title: "Mustard", selected: false },
    { id: 3, title: "Mayonnaise", selected: false },
    { id: 4, title: "Soy Sauce", selected: false },
  ];
  const spiceList = [
    { id: 1, title: "Salt", selected: false },
    { id: 2, title: "Pepper", selected: false },
    { id: 3, title: "Garlic Powder", selected: false },
    { id: 4, title: "Paprika", selected: false },
  ];
  interface Ingredient {
    id: number;
    title: string;
    selected: boolean;
  }
  export const ingredientsList:{[key:string]:Ingredient[]} = {
    "Produce": produceList ,
   "Protein": proteinList ,
     "Spices": spiceList ,
     "Condiments": condimentList ,
     "Dairy": dairyList ,
     "Grains": grainList ,
    "Vegetables": vegetableList ,
  };