/* =====================================================
   CRAVEMATCH - JAVASCRIPT
   Frontend recommendation prototype
===================================================== */


/* =====================================================
   FOOD DATASET
===================================================== */

const foods = [

    {
        id: 1,
        name: "Paneer Tikka",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
        description: "Smoky and spicy grilled paneer with Indian spices.",
        category: "Indian",
        meal: "dinner",
        taste: ["spicy", "savory"],
        texture: ["crispy", "soft"],
        diet: "vegetarian",
        price: 140,
        calories: 220,
        protein: 16,
        carbs: 10,
        fat: 14,
        fiber: 3,
        sugar: 3,
        spiceLevel: 4,
        healthy: true,
        ingredients: ["paneer", "capsicum", "onion", "yogurt", "spices"],
        ingredientsToAvoid: ["onion"],
        preparationTime: 15,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Mix paneer with yogurt and spices.",
            "Add vegetables and coat everything with the marinade.",
            "Marinate for 15 minutes.",
            "Grill or pan-cook until lightly charred.",
            "Serve hot."
        ],
        restaurants: [
            {
                name: "Spice Street",
                item: "Paneer Tikka",
                price: 140,
                rating: 4.4,
                distance: "1.2 km"
            },
            {
                name: "Urban Tadka",
                item: "Paneer Tikka",
                price: 160,
                rating: 4.3,
                distance: "2.1 km"
            }
        ]
    },


    {
        id: 2,
        name: "Masala Dosa",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80",
        description: "Crispy South Indian dosa filled with spiced potato masala.",
        category: "South Indian",
        meal: "breakfast",
        taste: ["spicy", "savory"],
        texture: ["crispy", "soft"],
        diet: "vegetarian",
        price: 80,
        calories: 290,
        protein: 7,
        carbs: 45,
        fat: 9,
        fiber: 4,
        sugar: 3,
        spiceLevel: 3,
        healthy: true,
        ingredients: ["rice", "urad dal", "potato", "onion", "spices"],
        ingredientsToAvoid: ["onion"],
        preparationTime: 20,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Prepare dosa batter using fermented rice and urad dal.",
            "Prepare potato masala with spices.",
            "Spread the batter thinly on a hot pan.",
            "Cook until crispy.",
            "Add potato masala and fold the dosa."
        ],
        restaurants: [
            {
                name: "South Bowl",
                item: "Masala Dosa",
                price: 80,
                rating: 4.5,
                distance: "0.8 km"
            }
        ]
    },


    {
        id: 3,
        name: "Greek Yogurt Fruit Bowl",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        description: "Fresh fruit, creamy yogurt and crunchy toppings.",
        category: "Healthy",
        meal: "breakfast",
        taste: ["sweet"],
        texture: ["creamy", "crunchy"],
        diet: "vegetarian",
        price: 120,
        calories: 180,
        protein: 15,
        carbs: 24,
        fat: 4,
        fiber: 5,
        sugar: 14,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["greek yogurt", "berries", "banana", "nuts"],
        ingredientsToAvoid: ["nuts"],
        preparationTime: 5,
        cookingTime: 0,
        servings: 1,
        recipe: [
            "Add Greek yogurt to a bowl.",
            "Top with sliced banana and berries.",
            "Add crunchy nuts.",
            "Serve chilled."
        ],
        restaurants: [
            {
                name: "Green Spoon",
                item: "Fruit Bowl",
                price: 120,
                rating: 4.6,
                distance: "1.5 km"
            }
        ]
    },


    {
        id: 4,
        name: "Chicken Tikka",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
        description: "Juicy grilled chicken pieces marinated with aromatic spices.",
        category: "Indian",
        meal: "dinner",
        taste: ["spicy", "savory"],
        texture: ["juicy", "soft"],
        diet: "non-vegetarian",
        price: 180,
        calories: 260,
        protein: 31,
        carbs: 7,
        fat: 12,
        fiber: 2,
        sugar: 2,
        spiceLevel: 4,
        healthy: true,
        ingredients: ["chicken", "yogurt", "ginger", "garlic", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 20,
        cookingTime: 20,
        servings: 2,
        recipe: [
            "Cut chicken into bite-sized pieces.",
            "Mix yogurt and spices for the marinade.",
            "Coat chicken and marinate.",
            "Grill until fully cooked.",
            "Serve with lemon and vegetables."
        ],
        restaurants: [
            {
                name: "Tandoor House",
                item: "Chicken Tikka",
                price: 180,
                rating: 4.5,
                distance: "1.8 km"
            }
        ]
    },


    {
        id: 5,
        name: "Chilli Paneer",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        description: "Spicy Indo-Chinese paneer tossed with peppers and sauce.",
        category: "Indo-Chinese",
        meal: "dinner",
        taste: ["spicy", "savory"],
        texture: ["crispy", "soft"],
        diet: "vegetarian",
        price: 150,
        calories: 280,
        protein: 14,
        carbs: 20,
        fat: 17,
        fiber: 3,
        sugar: 6,
        spiceLevel: 5,
        healthy: false,
        ingredients: ["paneer", "capsicum", "soy sauce", "corn flour"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Cut paneer into cubes.",
            "Coat paneer lightly with corn flour.",
            "Pan-fry until golden.",
            "Stir-fry vegetables with sauces.",
            "Add paneer and toss together."
        ],
        restaurants: [
            {
                name: "Wok Express",
                item: "Chilli Paneer",
                price: 150,
                rating: 4.2,
                distance: "2.3 km"
            }
        ]
    },


    {
        id: 6,
        name: "Veg Sandwich",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
        description: "Fresh vegetable sandwich with cheese and herbs.",
        category: "Fast Food",
        meal: "lunch",
        taste: ["savory"],
        texture: ["soft", "crunchy"],
        diet: "vegetarian",
        price: 90,
        calories: 210,
        protein: 9,
        carbs: 28,
        fat: 7,
        fiber: 4,
        sugar: 4,
        spiceLevel: 1,
        healthy: true,
        ingredients: ["bread", "tomato", "cucumber", "lettuce", "cheese"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 5,
        servings: 1,
        recipe: [
            "Toast the bread lightly.",
            "Add vegetables and cheese.",
            "Season with herbs and pepper.",
            "Close the sandwich and serve."
        ],
        restaurants: [
            {
                name: "Cafe Corner",
                item: "Veg Sandwich",
                price: 90,
                rating: 4.1,
                distance: "0.9 km"
            }
        ]
    },


    {
        id: 7,
        name: "Chicken Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: "Crispy chicken patty with lettuce, cheese and burger sauce.",
        category: "Fast Food",
        meal: "lunch",
        taste: ["savory", "spicy"],
        texture: ["crispy", "soft"],
        diet: "non-vegetarian",
        price: 180,
        calories: 480,
        protein: 25,
        carbs: 45,
        fat: 23,
        fiber: 3,
        sugar: 7,
        spiceLevel: 3,
        healthy: false,
        ingredients: ["chicken", "bun", "lettuce", "cheese", "sauce"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 15,
        servings: 1,
        recipe: [
            "Prepare the chicken patty.",
            "Coat it with breadcrumbs.",
            "Cook until golden and fully done.",
            "Toast the burger bun.",
            "Add lettuce, cheese, patty and sauce."
        ],
        restaurants: [
            {
                name: "Burger Lab",
                item: "Chicken Burger",
                price: 180,
                rating: 4.3,
                distance: "1.4 km"
            }
        ]
    },


    {
        id: 8,
        name: "Baked Samosa",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
        description: "Crispy baked samosa filled with spiced vegetables.",
        category: "Snack",
        meal: "snack",
        taste: ["spicy", "savory"],
        texture: ["crispy"],
        diet: "vegetarian",
        price: 60,
        calories: 150,
        protein: 4,
        carbs: 22,
        fat: 5,
        fiber: 3,
        sugar: 2,
        spiceLevel: 4,
        healthy: true,
        ingredients: ["flour", "potato", "peas", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 20,
        cookingTime: 25,
        servings: 2,
        recipe: [
            "Prepare dough using flour and water.",
            "Prepare spicy potato and pea filling.",
            "Shape the dough into samosa cones.",
            "Fill with the vegetable mixture.",
            "Bake until golden and crispy."
        ],
        restaurants: [
            {
                name: "Desi Bites",
                item: "Baked Samosa",
                price: 60,
                rating: 4.4,
                distance: "1.1 km"
            }
        ]
    },


    {
        id: 9,
        name: "Fruit Popsicle",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=800&q=80",
        description: "Refreshing frozen fruit treat with natural sweetness.",
        category: "Dessert",
        meal: "snack",
        taste: ["sweet"],
        texture: ["cold", "smooth"],
        diet: "vegetarian",
        price: 70,
        calories: 80,
        protein: 1,
        carbs: 18,
        fat: 0,
        fiber: 2,
        sugar: 14,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["strawberry", "mango", "orange juice"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 0,
        servings: 2,
        recipe: [
            "Blend fresh fruits.",
            "Pour the mixture into popsicle molds.",
            "Freeze for several hours.",
            "Remove from molds and serve."
        ],
        restaurants: [
            {
                name: "Fresh Freeze",
                item: "Fruit Popsicle",
                price: 70,
                rating: 4.3,
                distance: "1.7 km"
            }
        ]
    },


    {
        id: 10,
        name: "Chocolate Brownie",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        description: "Rich chocolate brownie with a soft and fudgy centre.",
        category: "Dessert",
        meal: "snack",
        taste: ["sweet", "chocolate"],
        texture: ["soft", "fudgy"],
        diet: "vegetarian",
        price: 110,
        calories: 320,
        protein: 5,
        carbs: 42,
        fat: 15,
        fiber: 2,
        sugar: 28,
        spiceLevel: 0,
        healthy: false,
        ingredients: ["flour", "cocoa", "sugar", "butter", "chocolate"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 25,
        servings: 4,
        recipe: [
            "Mix flour and cocoa powder.",
            "Add melted butter and sugar.",
            "Add chocolate and combine.",
            "Pour into a baking tray.",
            "Bake until the centre is slightly fudgy."
        ],
        restaurants: [
            {
                name: "Bake Story",
                item: "Chocolate Brownie",
                price: 110,
                rating: 4.6,
                distance: "1.0 km"
            }
        ]
    },


    {
        id: 11,
        name: "Roasted Corn",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
        description: "Roasted corn with lemon, chilli and herbs.",
        category: "Snack",
        meal: "snack",
        taste: ["spicy", "savory"],
        texture: ["crunchy"],
        diet: "vegetarian",
        price: 50,
        calories: 110,
        protein: 4,
        carbs: 22,
        fat: 2,
        fiber: 3,
        sugar: 5,
        spiceLevel: 4,
        healthy: true,
        ingredients: ["corn", "lemon", "chilli", "salt"],
        ingredientsToAvoid: [],
        preparationTime: 5,
        cookingTime: 10,
        servings: 1,
        recipe: [
            "Roast the corn on a pan or grill.",
            "Brush with lemon juice.",
            "Add chilli and salt.",
            "Serve hot."
        ],
        restaurants: [
            {
                name: "Street Corn Co.",
                item: "Roasted Corn",
                price: 50,
                rating: 4.2,
                distance: "0.7 km"
            }
        ]
    },


    {
        id: 12,
        name: "Oats Upma",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        description: "Light and filling oats cooked with vegetables and spices.",
        category: "Healthy",
        meal: "breakfast",
        taste: ["savory", "spicy"],
        texture: ["soft"],
        diet: "vegetarian",
        price: 90,
        calories: 190,
        protein: 8,
        carbs: 29,
        fat: 5,
        fiber: 6,
        sugar: 4,
        spiceLevel: 2,
        healthy: true,
        ingredients: ["oats", "carrot", "peas", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Roast oats lightly.",
            "Cook vegetables with spices.",
            "Add water and oats.",
            "Cook until soft.",
            "Serve warm."
        ],
        restaurants: [
            {
                name: "Healthy Bowl",
                item: "Oats Upma",
                price: 90,
                rating: 4.3,
                distance: "1.6 km"
            }
        ]
    },


    {
        id: 13,
        name: "Paneer Wrap",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
        description: "Spiced paneer wrapped with fresh vegetables in a soft flatbread.",
        category: "Fast Food",
        meal: "lunch",
        taste: ["spicy", "savory"],
        texture: ["soft", "crunchy"],
        diet: "vegetarian",
        price: 130,
        calories: 300,
        protein: 16,
        carbs: 35,
        fat: 10,
        fiber: 5,
        sugar: 4,
        spiceLevel: 3,
        healthy: true,
        ingredients: ["paneer", "roti", "lettuce", "capsicum", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 10,
        servings: 1,
        recipe: [
            "Cook paneer with spices.",
            "Warm the flatbread.",
            "Add paneer and vegetables.",
            "Roll tightly and serve."
        ],
        restaurants: [
            {
                name: "Wrap House",
                item: "Paneer Wrap",
                price: 130,
                rating: 4.4,
                distance: "1.3 km"
            }
        ]
    },


    {
        id: 14,
        name: "Idli Sambar",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        description: "Soft steamed idlis served with flavorful vegetable sambar.",
        category: "South Indian",
        meal: "breakfast",
        taste: ["savory"],
        texture: ["soft"],
        diet: "vegetarian",
        price: 70,
        calories: 170,
        protein: 7,
        carbs: 30,
        fat: 3,
        fiber: 5,
        sugar: 4,
        spiceLevel: 2,
        healthy: true,
        ingredients: ["rice", "urad dal", "lentils", "vegetables", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 20,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Prepare fermented idli batter.",
            "Steam the batter in idli molds.",
            "Prepare vegetable sambar.",
            "Serve hot idlis with sambar."
        ],
        restaurants: [
            {
                name: "South Bowl",
                item: "Idli Sambar",
                price: 70,
                rating: 4.5,
                distance: "0.8 km"
            }
        ]
    },


    {
        id: 15,
        name: "Grilled Chicken Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        description: "Grilled chicken with fresh vegetables and a light dressing.",
        category: "Healthy",
        meal: "lunch",
        taste: ["savory"],
        texture: ["crunchy", "juicy"],
        diet: "non-vegetarian",
        price: 190,
        calories: 240,
        protein: 32,
        carbs: 12,
        fat: 8,
        fiber: 5,
        sugar: 4,
        spiceLevel: 1,
        healthy: true,
        ingredients: ["chicken", "lettuce", "tomato", "cucumber", "dressing"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 15,
        servings: 1,
        recipe: [
            "Season the chicken.",
            "Grill until fully cooked.",
            "Chop fresh vegetables.",
            "Slice the chicken.",
            "Combine everything with dressing."
        ],
        restaurants: [
            {
                name: "Green Spoon",
                item: "Grilled Chicken Salad",
                price: 190,
                rating: 4.5,
                distance: "1.5 km"
            }
        ]
    },


    {
        id: 16,
        name: "Veg Hakka Noodles",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
        description: "Stir-fried noodles with colourful vegetables and sauces.",
        category: "Indo-Chinese",
        meal: "dinner",
        taste: ["savory", "spicy"],
        texture: ["soft", "crunchy"],
        diet: "vegetarian",
        price: 140,
        calories: 330,
        protein: 9,
        carbs: 48,
        fat: 11,
        fiber: 4,
        sugar: 6,
        spiceLevel: 3,
        healthy: false,
        ingredients: ["noodles", "cabbage", "carrot", "capsicum", "soy sauce"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 10,
        servings: 2,
        recipe: [
            "Boil noodles until just cooked.",
            "Heat oil in a wok.",
            "Stir-fry vegetables.",
            "Add noodles and sauces.",
            "Toss on high heat and serve."
        ],
        restaurants: [
            {
                name: "Wok Express",
                item: "Veg Hakka Noodles",
                price: 140,
                rating: 4.2,
                distance: "2.3 km"
            }
        ]
    },


    {
        id: 17,
        name: "Peanut Chaat",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
        description: "Protein-rich peanut snack mixed with vegetables and spices.",
        category: "Snack",
        meal: "snack",
        taste: ["spicy", "savory"],
        texture: ["crunchy"],
        diet: "vegetarian",
        price: 70,
        calories: 190,
        protein: 9,
        carbs: 18,
        fat: 10,
        fiber: 4,
        sugar: 4,
        spiceLevel: 3,
        healthy: true,
        ingredients: ["peanuts", "tomato", "onion", "lemon", "spices"],
        ingredientsToAvoid: ["peanuts", "onion"],
        preparationTime: 10,
        cookingTime: 5,
        servings: 1,
        recipe: [
            "Roast the peanuts.",
            "Chop vegetables.",
            "Mix peanuts and vegetables.",
            "Add lemon and spices.",
            "Serve immediately."
        ],
        restaurants: [
            {
                name: "Desi Bites",
                item: "Peanut Chaat",
                price: 70,
                rating: 4.1,
                distance: "1.1 km"
            }
        ]
    },


    {
        id: 18,
        name: "Fruit Custard",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        description: "Creamy chilled custard loaded with fresh seasonal fruits.",
        category: "Dessert",
        meal: "snack",
        taste: ["sweet"],
        texture: ["creamy", "soft"],
        diet: "vegetarian",
        price: 100,
        calories: 210,
        protein: 5,
        carbs: 30,
        fat: 7,
        fiber: 3,
        sugar: 20,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["milk", "custard powder", "apple", "banana", "grapes"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 15,
        servings: 3,
        recipe: [
            "Mix custard powder with a little cold milk.",
            "Heat remaining milk.",
            "Add custard mixture and stir until thick.",
            "Cool the custard.",
            "Add chopped fruits and refrigerate."
        ],
        restaurants: [
            {
                name: "Sweet Corner",
                item: "Fruit Custard",
                price: 100,
                rating: 4.2,
                distance: "1.9 km"
            }
        ]
    },


    {
        id: 19,
        name: "Egg Bhurji",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        description: "Spiced scrambled eggs cooked with vegetables.",
        category: "Indian",
        meal: "breakfast",
        taste: ["spicy", "savory"],
        texture: ["soft"],
        diet: "non-vegetarian",
        price: 100,
        calories: 210,
        protein: 14,
        carbs: 6,
        fat: 14,
        fiber: 2,
        sugar: 3,
        spiceLevel: 4,
        healthy: true,
        ingredients: ["eggs", "tomato", "onion", "chilli", "spices"],
        ingredientsToAvoid: ["onion"],
        preparationTime: 10,
        cookingTime: 10,
        servings: 1,
        recipe: [
            "Beat the eggs.",
            "Cook vegetables and spices.",
            "Add beaten eggs.",
            "Scramble until cooked.",
            "Serve hot."
        ],
        restaurants: [
            {
                name: "Breakfast Club",
                item: "Egg Bhurji",
                price: 100,
                rating: 4.3,
                distance: "1.4 km"
            }
        ]
    },


    {
        id: 20,
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        description: "Fresh cucumber, tomato, olives and cheese with herbs.",
        category: "Healthy",
        meal: "lunch",
        taste: ["savory"],
        texture: ["crunchy", "soft"],
        diet: "vegetarian",
        price: 160,
        calories: 190,
        protein: 8,
        carbs: 14,
        fat: 11,
        fiber: 4,
        sugar: 5,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["cucumber", "tomato", "olives", "feta cheese"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 0,
        servings: 1,
        recipe: [
            "Chop cucumber and tomatoes.",
            "Add olives and cheese.",
            "Add herbs and dressing.",
            "Mix gently and serve."
        ],
        restaurants: [
            {
                name: "Green Spoon",
                item: "Greek Salad",
                price: 160,
                rating: 4.5,
                distance: "1.5 km"
            }
        ]
    },


    {
        id: 21,
        name: "Aloo Tikki",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
        description: "Crispy spiced potato patties served as a popular Indian snack.",
        category: "Snack",
        meal: "snack",
        taste: ["spicy", "savory"],
        texture: ["crispy", "soft"],
        diet: "vegetarian",
        price: 60,
        calories: 170,
        protein: 4,
        carbs: 25,
        fat: 6,
        fiber: 3,
        sugar: 2,
        spiceLevel: 4,
        healthy: false,
        ingredients: ["potato", "peas", "spices", "breadcrumbs"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Boil and mash potatoes.",
            "Mix with peas and spices.",
            "Shape into small patties.",
            "Pan-fry until crispy.",
            "Serve with chutney."
        ],
        restaurants: [
            {
                name: "Desi Bites",
                item: "Aloo Tikki",
                price: 60,
                rating: 4.3,
                distance: "1.1 km"
            }
        ]
    },


    {
        id: 22,
        name: "Protein Oats Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
        description: "Protein-rich pancakes made with oats and banana.",
        category: "Healthy",
        meal: "breakfast",
        taste: ["sweet"],
        texture: ["soft"],
        diet: "vegetarian",
        price: 130,
        calories: 230,
        protein: 18,
        carbs: 30,
        fat: 5,
        fiber: 5,
        sugar: 8,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["oats", "banana", "milk", "protein powder"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 10,
        servings: 2,
        recipe: [
            "Blend oats, banana, milk and protein powder.",
            "Heat a non-stick pan.",
            "Pour batter into small pancakes.",
            "Cook both sides.",
            "Serve with fruit."
        ],
        restaurants: [
            {
                name: "Fit Kitchen",
                item: "Protein Oats Pancakes",
                price: 130,
                rating: 4.5,
                distance: "2.0 km"
            }
        ]
    },


    {
        id: 23,
        name: "Dark Chocolate Energy Bites",
        image: "https://images.unsplash.com/photo-1575377222312-dd1a0e2c5f2f?auto=format&fit=crop&w=800&q=80",
        description: "Small sweet energy bites with oats, dates and dark chocolate.",
        category: "Healthy Dessert",
        meal: "snack",
        taste: ["sweet", "chocolate"],
        texture: ["soft", "chewy"],
        diet: "vegetarian",
        price: 120,
        calories: 140,
        protein: 5,
        carbs: 20,
        fat: 5,
        fiber: 3,
        sugar: 11,
        spiceLevel: 0,
        healthy: true,
        ingredients: ["dates", "oats", "dark chocolate"],
        ingredientsToAvoid: [],
        preparationTime: 15,
        cookingTime: 0,
        servings: 4,
        recipe: [
            "Blend dates and oats.",
            "Add small pieces of dark chocolate.",
            "Mix everything together.",
            "Shape into small balls.",
            "Chill before serving."
        ],
        restaurants: [
            {
                name: "Fit Kitchen",
                item: "Energy Bites",
                price: 120,
                rating: 4.4,
                distance: "2.0 km"
            }
        ]
    },


    {
        id: 24,
        name: "Crispy Corn",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
        description: "Crunchy corn snack seasoned with chilli and herbs.",
        category: "Snack",
        meal: "snack",
        taste: ["spicy", "savory"],
        texture: ["crispy", "crunchy"],
        diet: "vegetarian",
        price: 110,
        calories: 200,
        protein: 5,
        carbs: 30,
        fat: 7,
        fiber: 4,
        sugar: 3,
        spiceLevel: 4,
        healthy: false,
        ingredients: ["corn", "corn flour", "chilli", "herbs"],
        ingredientsToAvoid: [],
        preparationTime: 10,
        cookingTime: 15,
        servings: 2,
        recipe: [
            "Coat corn with corn flour.",
            "Cook until crisp.",
            "Add chilli and herbs.",
            "Mix well and serve immediately."
        ],
        restaurants: [
            {
                name: "Crunch Hub",
                item: "Crispy Corn",
                price: 110,
                rating: 4.3,
                distance: "1.7 km"
            }
        ]
    },


    {
        id: 25,
        name: "Veg Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=800&q=80",
        description: "Aromatic basmati rice cooked with vegetables and fragrant spices.",
        category: "Indian",
        meal: "lunch",
        taste: ["spicy", "savory"],
        texture: ["soft"],
        diet: "vegetarian",
        price: 150,
        calories: 350,
        protein: 9,
        carbs: 52,
        fat: 10,
        fiber: 5,
        sugar: 5,
        spiceLevel: 4,
        healthy: false,
        ingredients: ["rice", "vegetables", "yogurt", "spices"],
        ingredientsToAvoid: [],
        preparationTime: 20,
        cookingTime: 30,
        servings: 2,
        recipe: [
            "Cook vegetables with spices.",
            "Prepare partially cooked basmati rice.",
            "Layer rice and vegetables.",
            "Cook together on low heat.",
            "Serve hot."
        ],
        restaurants: [
            {
                name: "Biryani House",
                item: "Veg Biryani",
                price: 150,
                rating: 4.5,
                distance: "1.9 km"
            }
        ]
    }

];


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const cravingInput = document.getElementById("cravingInput");
const findFoodBtn = document.getElementById("findFoodBtn");

const loadingSection = document.getElementById("loadingSection");
const loadingText = document.getElementById("loadingText");

const resultsSection = document.getElementById("resultsSection");
const foodGrid = document.getElementById("foodGrid");

const recipeModal = document.getElementById("recipeModal");
const restaurantModal = document.getElementById("restaurantModal");

const recipeContent = document.getElementById("recipeContent");
const restaurantContent = document.getElementById("restaurantContent");


/* =====================================================
   EXAMPLE BUTTONS
===================================================== */

const exampleButtons = document.querySelectorAll(".example-btn");

exampleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /*
         * Put the button text into the search box.
         */

        let text = button.textContent;

        /*
         * Remove the emoji from the beginning.
         */

        text = text.replace(/^[^\w₹]+/u, "");

        cravingInput.value = text;

        /*
         * Move the user to the search box.
         */

        cravingInput.focus();

    });

});


/* =====================================================
   SIMPLE FRONTEND UNDERSTANDING
   This is ONLY a temporary prototype.
   Later the real AI backend will replace this.
===================================================== */

function understandCraving(text) {

    const lowerText = text.toLowerCase();

    const preferences = {

        taste: [],
        texture: [],
        diet: null,
        category: null,
        meal: null,
        maxCalories: null,
        minProtein: null,
        maxPrice: null,
        healthy: null,
        ingredientsToAvoid: []

    };


    /* ---------- TASTE ---------- */

    if (
        lowerText.includes("spicy") ||
        lowerText.includes("fiery") ||
        lowerText.includes("hot") ||
        lowerText.includes("chilli")
    ) {
        preferences.taste.push("spicy");
    }

    if (
        lowerText.includes("sweet") ||
        lowerText.includes("dessert") ||
        lowerText.includes("chocolate")
    ) {
        preferences.taste.push("sweet");
    }

    if (
        lowerText.includes("savory") ||
        lowerText.includes("savoury") ||
        lowerText.includes("salty")
    ) {
        preferences.taste.push("savory");
    }


    /* ---------- TEXTURE ---------- */

    if (
        lowerText.includes("crispy") ||
        lowerText.includes("crunchy") ||
        lowerText.includes("crunch")
    ) {
        preferences.texture.push("crispy");
        preferences.texture.push("crunchy");
    }

    if (lowerText.includes("soft")) {
        preferences.texture.push("soft");
    }

    if (
        lowerText.includes("creamy") ||
        lowerText.includes("cream")
    ) {
        preferences.texture.push("creamy");
    }

    if (
        lowerText.includes("cold") ||
        lowerText.includes("chilled") ||
        lowerText.includes("frozen")
    ) {
        preferences.texture.push("cold");
    }


    /* ---------- DIET ---------- */

    if (
        lowerText.includes("vegetarian") ||
        lowerText.includes("veg")
    ) {
        preferences.diet = "vegetarian";
    }

    if (
        lowerText.includes("non vegetarian") ||
        lowerText.includes("non-vegetarian") ||
        lowerText.includes("chicken") ||
        lowerText.includes("egg")
    ) {
        preferences.diet = "non-vegetarian";
    }


    /* ---------- CATEGORY ---------- */

    if (lowerText.includes("indian")) {
        preferences.category = "Indian";
    }

    if (
        lowerText.includes("dessert") ||
        lowerText.includes("sweet")
    ) {
        preferences.category = "Dessert";
    }

    if (
        lowerText.includes("snack") ||
        lowerText.includes("evening")
    ) {
        preferences.category = "Snack";
    }

    if (
        lowerText.includes("healthy") ||
        lowerText.includes("light")
    ) {
        preferences.healthy = true;
    }


    /* ---------- MEAL ---------- */

    if (lowerText.includes("breakfast")) {
        preferences.meal = "breakfast";
    }

    if (lowerText.includes("lunch")) {
        preferences.meal = "lunch";
    }

    if (lowerText.includes("dinner")) {
        preferences.meal = "dinner";
    }


    /* ---------- CALORIES ---------- */

    const calorieMatch = lowerText.match(
        /(\d+)\s*(?:calories|calorie|cal)/
    );

    if (calorieMatch) {
        preferences.maxCalories = Number(calorieMatch[1]);
    }


    /* ---------- PROTEIN ---------- */

    const proteinMatch = lowerText.match(
        /(\d+)\s*(?:g|grams)?\s*protein/
    );

    if (proteinMatch) {
        preferences.minProtein = Number(proteinMatch[1]);
    }

    if (
        lowerText.includes("high protein") ||
        lowerText.includes("protein rich") ||
        lowerText.includes("protein-rich")
    ) {
        preferences.minProtein = 15;
    }


    /* ---------- PRICE ---------- */

    const priceMatch = lowerText.match(
        /(?:under|below|less than|within)\s*₹?\s*(\d+)/
    );

    if (priceMatch) {
        preferences.maxPrice = Number(priceMatch[1]);
    }


    /* ---------- INGREDIENTS TO AVOID ---------- */

    const commonIngredients = [
        "onion",
        "garlic",
        "peanuts",
        "nuts",
        "milk",
        "egg"
    ];

    commonIngredients.forEach(function(ingredient) {

        if (
            lowerText.includes("no " + ingredient) ||
            lowerText.includes("without " + ingredient) ||
            lowerText.includes("don't eat " + ingredient) ||
            lowerText.includes("dont eat " + ingredient)
        ) {
            preferences.ingredientsToAvoid.push(ingredient);
        }

    });


    return preferences;

}


/* =====================================================
   CALCULATE MATCH SCORE
===================================================== */

function calculateMatch(food, preferences) {

    let score = 0;
    let possibleScore = 0;


    /* ---------- TASTE ---------- */

    if (preferences.taste.length > 0) {

        possibleScore += 20;

        const matchedTaste = preferences.taste.filter(
            taste => food.taste.includes(taste)
        ).length;

        score += (matchedTaste / preferences.taste.length) * 20;

    }


    /* ---------- TEXTURE ---------- */

    if (preferences.texture.length > 0) {

        possibleScore += 15;

        const matchedTexture = preferences.texture.filter(
            texture => food.texture.includes(texture)
        ).length;

        score += (matchedTexture / preferences.texture.length) * 15;

    }


    /* ---------- DIET ---------- */

    if (preferences.diet) {

        possibleScore += 25;

        if (food.diet === preferences.diet) {
            score += 25;
        }

    }


    /* ---------- CATEGORY ---------- */

    if (preferences.category) {

        possibleScore += 10;

        if (
            food.category.toLowerCase()
            .includes(preferences.category.toLowerCase())
        ) {
            score += 10;
        }

    }


    /* ---------- MEAL ---------- */

    if (preferences.meal) {

        possibleScore += 10;

        if (food.meal === preferences.meal) {
            score += 10;
        }

    }


    /* ---------- PRICE ---------- */

    if (preferences.maxPrice !== null) {

        possibleScore += 20;

        if (food.price <= preferences.maxPrice) {
            score += 20;
        } else if (food.price <= preferences.maxPrice + 50) {
            score += 8;
        }

    }


    /* ---------- CALORIES ---------- */

    if (preferences.maxCalories !== null) {

        possibleScore += 20;

        if (food.calories <= preferences.maxCalories) {
            score += 20;
        } else if (food.calories <= preferences.maxCalories + 100) {
            score += 7;
        }

    }


    /* ---------- PROTEIN ---------- */

    if (preferences.minProtein !== null) {

        possibleScore += 20;

        if (food.protein >= preferences.minProtein) {
            score += 20;
        } else if (food.protein >= preferences.minProtein - 5) {
            score += 8;
        }

    }


    /* ---------- HEALTHY ---------- */

    if (preferences.healthy !== null) {

        possibleScore += 15;

        if (food.healthy === preferences.healthy) {
            score += 15;
        }

    }


    /* ---------- AVOID INGREDIENTS ---------- */

    if (preferences.ingredientsToAvoid.length > 0) {

        possibleScore += 25;

        const containsAvoided = preferences.ingredientsToAvoid.some(
            ingredient =>
                food.ingredientsToAvoid.includes(ingredient) ||
                food.ingredients.includes(ingredient)
        );

        if (!containsAvoided) {
            score += 25;
        }

    }


    /*
     * If the user didn't specify many things,
     * give every food a reasonable base score.
     */

    if (possibleScore === 0) {
        return 50;
    }


    return Math.round((score / possibleScore) * 100);

}


/* =====================================================
   FIND MATCHES
===================================================== */

function findMatches(preferences) {

    const scoredFoods = foods.map(function(food) {

        const score = calculateMatch(food, preferences);

        return {
            ...food,
            matchScore: score
        };

    });


    /*
     * Highest match first.
     */

    scoredFoods.sort(function(a, b) {

        return b.matchScore - a.matchScore;

    });


    return scoredFoods.slice(0, 6);

}


/* =====================================================
   DISPLAY FOOD RESULTS
===================================================== */

function displayResults(results) {

    foodGrid.innerHTML = "";


    if (results.length === 0) {

        foodGrid.innerHTML = `
            <div class="empty-result">

                <h3>
                    😕 No exact matches found
                </h3>

                <p>
                    Try describing your craving differently.
                </p>

            </div>
        `;

        return;

    }


    results.forEach(function(food) {

        const card = document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <img
                class="food-image"
                src="${food.image}"
                alt="${food.name}"
            >

            <div class="food-info">

                <div class="food-top">

                    <h3 class="food-name">
                        ${food.name}
                    </h3>

                    <span class="match-score">
                        ${food.matchScore}% Match
                    </span>

                </div>


                <p class="food-description">
                    ${food.description}
                </p>


                <div class="food-tags">

                    <span class="tag">
                        ${food.diet}
                    </span>

                    <span class="tag">
                        🌶️ ${food.spiceLevel}/5
                    </span>

                    <span class="tag">
                        ${food.category}
                    </span>

                </div>


                <div class="price">
                    ₹${food.price}
                </div>


                <div class="nutrition">

                    <div class="nutrition-title">
                        APPROXIMATE NUTRITION
                    </div>

                    <div class="nutrition-grid">

                        <div class="nutrition-item">
                            <strong>${food.calories}</strong>
                            <span>Calories</span>
                        </div>

                        <div class="nutrition-item">
                            <strong>${food.protein}g</strong>
                            <span>Protein</span>
                        </div>

                        <div class="nutrition-item">
                            <strong>${food.carbs}g</strong>
                            <span>Carbs</span>
                        </div>

                        <div class="nutrition-item">
                            <strong>${food.fat}g</strong>
                            <span>Fat</span>
                        </div>

                        <div class="nutrition-item">
                            <strong>${food.fiber}g</strong>
                            <span>Fiber</span>
                        </div>

                        <div class="nutrition-item">
                            <strong>${food.sugar}g</strong>
                            <span>Sugar</span>
                        </div>

                    </div>

                </div>


                <div class="card-buttons">

                    <button
                        class="recipe-btn"
                        onclick="showRecipe(${food.id})"
                    >
                        View Recipe
                    </button>

                    <button
                        class="nearby-btn"
                        onclick="showRestaurants(${food.id})"
                    >
                        Find Nearby
                    </button>

                </div>

            </div>
        `;


        foodGrid.appendChild(card);

    });

}


/* =====================================================
   SEARCH BUTTON
===================================================== */

findFoodBtn.addEventListener("click", function() {

    const craving = cravingInput.value.trim();


    /* Empty input */

    if (craving === "") {

        alert("Tell us what you're craving first! 🍽️");

        cravingInput.focus();

        return;

    }


    /* Show loading */

    resultsSection.classList.remove("active");

    loadingSection.classList.add("active");

    loadingText.textContent = "Understanding your craving...";


    /*
     * This delay is only for the prototype
     * so the loading animation can be seen.
     */

    setTimeout(function() {

        loadingText.textContent =
            "Finding your best matches...";


        setTimeout(function() {

            /*
             * TEMPORARY FRONTEND AI-LIKE LOGIC
             *
             * Later this exact part will call:
             *
             * backend → real AI API
             */

            const preferences =
                understandCraving(craving);


            const results =
                findMatches(preferences);


            loadingSection.classList.remove("active");

            resultsSection.classList.add("active");


            displayResults(results);


            resultsSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 700);

    }, 800);

});


/* =====================================================
   RECIPE MODAL
===================================================== */

function showRecipe(foodId) {

    const food = foods.find(function(item) {

        return item.id === foodId;

    });


    if (!food) {
        return;
    }


    recipeContent.innerHTML = `

        <h2>${food.name}</h2>

        <div class="recipe-meta">

            <span>
                ⏱️ Prep: ${food.preparationTime} min
            </span>

            <span>
                🔥 Cook: ${food.cookingTime} min
            </span>

            <span>
                🍽️ Serves: ${food.servings}
            </span>

        </div>


        <h3>Ingredients</h3>

        <ul>

            ${food.ingredients.map(function(item) {

                return `<li>${item}</li>`;

            }).join("")}

        </ul>


        <h3>Preparation</h3>

        <ol>

            ${food.recipe.map(function(step) {

                return `<li>${step}</li>`;

            }).join("")}

        </ol>

    `;


    recipeModal.classList.add("active");

}


/* =====================================================
   RESTAURANT MODAL
===================================================== */

function showRestaurants(foodId) {

    const food = foods.find(function(item) {

        return item.id === foodId;

    });


    if (!food) {
        return;
    }


    restaurantContent.innerHTML = `

        <h2>
            📍 ${food.name}
        </h2>

        <p>
            Demo nearby restaurant results
        </p>

        <p style="color:#999; font-size:12px; margin-top:8px;">
            These are prototype/demo listings and are not live restaurant data.
        </p>

    `;


    food.restaurants.forEach(function(restaurant) {

        const card = document.createElement("div");

        card.className = "restaurant-card";


        card.innerHTML = `

            <h3>
                ${restaurant.name}
            </h3>

            <div class="restaurant-info">

                ${restaurant.item}
                • ₹${restaurant.price}
                • ⭐ ${restaurant.rating}
                • 📍 ${restaurant.distance}

            </div>


            <div class="restaurant-buttons">

                <a
                    href="https://www.swiggy.com/"
                    target="_blank"
                    class="swiggy"
                >
                    Order on Swiggy
                </a>

                <a
                    href="https://www.zomato.com/"
                    target="_blank"
                    class="zomato"
                >
                    Order on Zomato
                </a>

            </div>

        `;


        restaurantContent.appendChild(card);

    });


    restaurantModal.classList.add("active");

}


/* =====================================================
   CLOSE RECIPE MODAL
===================================================== */

document
    .getElementById("closeRecipe")
    .addEventListener("click", function() {

        recipeModal.classList.remove("active");

    });


/* =====================================================
   CLOSE RESTAURANT MODAL
===================================================== */

document
    .getElementById("closeRestaurant")
    .addEventListener("click", function() {

        restaurantModal.classList.remove("active");

    });


/* =====================================================
   CLOSE MODALS BY CLICKING OUTSIDE
===================================================== */

recipeModal.addEventListener("click", function(event) {

    if (event.target === recipeModal) {

        recipeModal.classList.remove("active");

    }

});


restaurantModal.addEventListener("click", function(event) {

    if (event.target === restaurantModal) {

        restaurantModal.classList.remove("active");

    }

});